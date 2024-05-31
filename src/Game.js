import { TurnOrder } from 'boardgame.io/core'
import baseGame from './data/base-game.json'
import { Player } from './Classes'

let customTurnOrder = {
    first: () => 0,
    next: ({ ctx }) => ((ctx.playOrderPos + 1) >= ctx.numPlayers) ? undefined : ctx.playOrderPos + 1,
    playOrder: ( { G, ctx} ) => ctx.playOrder
}

export const ArkhamHorror = {
  setup: ({ctx}) => ({
    investigatorSheets: baseGame.investigatorSheets,
    investigatorCards: baseGame.investigatorCards,
    ancientOneSheets: baseGame.ancientOneSheets,
    ancientOneCards: baseGame.ancientOneCards,

    players: Array(ctx.numPlayers).fill(
      {
        investigatorSheet: {},
        items: {}
      }
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
      //Perform Upkeep actions [Retainer]
      //Adjust Skills
      next: "movementPhase",
    },

    movementPhase: {
      turn: {
        order: customTurnOrder,
      },
      //Arkham Movement
      //OtherWorldMovement
      //DelayedInvestigator
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
