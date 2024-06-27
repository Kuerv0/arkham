import { TurnOrder } from 'boardgame.io/core'
import { customTurnOrder, player } from './Custom'

import {shuffle, search} from './Utilities'

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
        //Shuffle investigator Sheets
        shuffle(G.investigatorSheets)

        //Shuffle investigator Cards
        Object.entries(G.investigatorCards).forEach(([key, value]) =>
          shuffle(G.investigatorCards[key])
        )

        // Shuffle Mythos Cards

        // Draw Ancient One
      },

      turn: {
        order: TurnOrder.ONCE,
      },

      moves: {
        setupInvestigator: ( { G, playerID } ) => {
          // If no investigator sheet in deck, return
          if (G.investigatorSheets <= 0){ return }
          
          // Determine Investigator
          G.players[playerID].investigatorSheet = G.investigatorSheets.pop()

          // Receive Fixed Possessions //
          // Money
          G.players[playerID].investigatorState.money = G.players[playerID].investigatorSheet.possessions.fixed.money

          //Clue Tokens
          G.players[playerID].investigatorState.clueToken = G.players[playerID].investigatorSheet.possessions.fixed.clueToken

          //Investigator Cards
          G.players[playerID].investigatorSheet.possessions.fixed.investigatorCards.forEach((items) =>
            items.search.forEach((card) => 
              //Search for the card
              
              search(card, G.investigatorCards[items.deck], G.players[playerID].investigatorCards[items.deck])
              //console.log(`Looking for ${card} in the ${items.deck} deck`)
            )
          )

          // Darle las carajadas de retainer, blessing y demás.
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

          // Randomize starting sliders
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
