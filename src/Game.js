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
      onBegin: ( {G} ) => {
        //Shuffle everything
      },

      turn: {
        order: TurnOrder.ONCE,
      },

      moves: {
        setupInvestigator: ( { G, playerID } ) => {
          // Determine Investigators
          G.players[playerID].investigatorSheet = G.investigatorSheets.pop()

          // Receive Fixed Possessions

          // Money
          G.players[playerID].investigatorState.money = G.players[playerID].investigatorSheet.possessions.fixed.money

          //Clue Tokens
          G.players[playerID].investigatorState.clueToken = G.players[playerID].investigatorSheet.possessions.fixed.clueToken

          //Investigator Cards, me falta implementar la shiet de busqueda
          G.players[playerID].investigatorSheet.possessions.fixed.investigatorCards.forEach((items) =>
            items.search.forEach((card) => 
              //Search for the card
              console.log(`Looking for ${card} in the ${items.deck} deck`)
            )
          )

          // Darle las carajadas de deputy, blessing y demás.
          // Mi codigo aqui

          // Random Possessions
          G.players[playerID].investigatorSheet.possessions.random.forEach((items) =>
            Array(items.count).fill()
            .forEach((_) => 
              G.players[playerID].investigatorCards[items.deck].push(G.investigatorCards[items.deck].pop())
            )
          )
          // Finish Investigator

          // Getting Sanity
          G.players[playerID].investigatorState.sanity = G.players[playerID].investigatorSheet.sanity

          // Getting Stamina
          G.players[playerID].investigatorState.stamina = G.players[playerID].investigatorSheet.stamina

          // Randomize starting things
          G.players[playerID].investigatorState.spSn = Math.round(Math.random() * 3)
          G.players[playerID].investigatorState.fiWi = Math.round(Math.random() * 3)
          G.players[playerID].investigatorState.loLu = Math.round(Math.random() * 3)
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
