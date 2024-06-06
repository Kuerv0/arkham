import { InvestigatorCardList } from './InvestigatorCardList'
import { InvestigatorSheet } from './InvestigatorSheet'

export function Board( {ctx, G, moves, playerID} ){
  if (Object.keys(G.players[playerID].investigatorSheet).length === 0){
    return(
      <div className="ui stackable cards">
        hello
      </div>
    )

  } else {
  return(
    <div className="ui segment">
      <div className="ui two column very relaxed stackable grid">

        <div className="column">
          <InvestigatorSheet
            playerName={G.players[playerID].name}
            image={G.players[playerID].investigatorSheet.image}
            name={G.players[playerID].investigatorSheet.name}
            occupation={G.players[playerID].investigatorSheet.occupation}
            home={G.players[playerID].investigatorSheet.home}
            focus={G.players[playerID].investigatorSheet.focus}
            abilityName={G.players[playerID].investigatorSheet.ability.name}
            abilityPhase={G.players[playerID].investigatorSheet.ability.phase}
            abilityDescription={G.players[playerID].investigatorSheet.ability.description}

            stamina={G.players[playerID].investigatorState.stamina}
            sanity={G.players[playerID].investigatorState.sanity}
            money={G.players[playerID].investigatorState.money}
            clueToken={G.players[playerID].investigatorState.clueToken}

            speed={G.players[playerID].investigatorSheet.slider.spSn[0] + G.players[playerID].investigatorState.spSn}
            sneak={G.players[playerID].investigatorSheet.slider.spSn[1] - G.players[playerID].investigatorState.spSn}
            fight={G.players[playerID].investigatorSheet.slider.fiWi[0] + G.players[playerID].investigatorState.fiWi}
            will={G.players[playerID].investigatorSheet.slider.fiWi[1] - G.players[playerID].investigatorState.fiWi}
            lore={G.players[playerID].investigatorSheet.slider.loLu[0] + G.players[playerID].investigatorState.loLu}
            luck={G.players[playerID].investigatorSheet.slider.loLu[1] - G.players[playerID].investigatorState.loLu}
          />
        </div>

        <div className="column">
          <div className="ui top attached tabular menu">
            <div className="active item">Inventory</div>
            <div className="item">Location</div>
            <div className="item">Gate</div>
            <div className="item">Mythos</div>
          </div>
          <div className="ui bottom attached active tab segment">
            <div className="ui link cards">
              <InvestigatorCardList
                data={G.players[playerID].investigatorCards.common}
              />
              <InvestigatorCardList
                data={G.players[playerID].investigatorCards.unique}
              />
              <InvestigatorCardList
                data={G.players[playerID].investigatorCards.spell}
              />
              <InvestigatorCardList
                data={G.players[playerID].investigatorCards.skill}
              />
              <InvestigatorCardList
                data={G.players[playerID].investigatorCards.ally}
              />
            </div>
          </div>
        </div>

        <div className="ui vertical divider">
        </div>

      </div>
    </div>
  )
  }
}
