import { TurnOrder } from 'boardgame.io/core'
import { customTurnOrder, player } from './Custom'

import baseGame from './data/base-game.json'

export const ArkhamHorror = {
  setup: ({ctx}) => ({
    investigatorSheets: baseGame.investigatorSheets,
    investigatorCards: baseGame.investigatorCards,
    ancientOneSheets: baseGame.ancientOneSheets,
    ancientOneCards: baseGame.ancientOneCards,

    players: Array(ctx.numPlayers).fill(
      player
    ),

    firstPlayer: 0,
  }),

  phases: {
    setup: {
      turn: {
        order: TurnOrder.ONCE,
        minMoves: 1,
        maxMoves: 1,
      },

      moves: {
        // Determine Investigators
        setupInvestigator: ( { G, playerID } ) => {
          G.players[playerID].investigatorSheet = G.investigatorSheets.pop()
          // Receive Fixed Possessions
          // Random Possessions
          // Finish Investigator
        }

      },
      next: "firstMythosPhase",
      start: true,
    },

    firstMythosPhase: {
      turn: {
        order: {
          first: ({ ctx }) => ((ctx.numPlayers > 1) ? 1 : 0),
          next: ({ ctx }) => undefined,
          playOrder: ( { G, ctx} ) => ((ctx.numPlayers > 1) ? ctx.playOrder.splice(ctx.numPlayers - 1).concat(ctx.playOrder) : ctx.playOrder), 
        }
      },

      moves: {
        drawFirstMythos: ( {G, events} ) => {
          G.ancientOneCards.mythos.pop()
          events.endPhase()
        }
      },

      next: "upkeepPhase",
    },

    upkeepPhase: {
      turn: {
        order: {
          first: () => 0,
          next: ({ ctx }) => ((ctx.playOrderPos + 1) >= ctx.numPlayers) ? undefined : ctx.playOrderPos + 1,
          playOrder: ( { G, ctx} ) => ((ctx.numPlayers > 1) ? ctx.playOrder.splice(1).concat(ctx.playOrder) : ctx.playOrder), 
        },
      },
      //Refresh Exhausted Cards
      //for items in Investigator => set item as exhausted
      //Perform Upkeep actions [Retainer]
      //This are special items, it's easy to ask for a roll.
      //Adjust Skills
      //The front will make sure that the next skill thing is valid.
      next: "movementPhase",
    },

    movementPhase: {
      turn: {
        order: customTurnOrder,
      },
      //Arkham Movement
      //Get points = speed
      //OtherWorldMovement no movement points
      //DelayedInvestigator => Stands up
      next: "arkhamEncountersPhase"
    },

    arkhamEncountersPhase: {
      turn: {
        order: customTurnOrder,
      },
      //NoGate
      //Gate
      next: "otherWorldEncounters"
    },

    otherWorldEncounters: {
      turn: {
        order: customTurnOrder,
        //DrawEncounter card
      },

      next: "mythosPhase"
    },

    mythosPhase: {
      turn: {
        order: {
          first: () => 0,
          next: () => undefined,
          playOrder: ( {G, ctx} ) => ctx.playOrder
        }
      },

      moves: {
        drawMythos: ({G, events}) => {
          G.ancientOneCards.mythos.pop()
          events.endPhase()
        }
      },

      next: "upkeepPhase",
    },
  }
}
