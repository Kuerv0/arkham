export function Board( {ctx, G, moves, playerID} ){
  if (Object.keys(G.players[playerID].investigatorSheet).length === 0){
    return(
      <div className="ui stackable cards">
        <InvestigatorCardList
          data={G.investigatorCards.common}
        />
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
            <div className="ui stackable cards">
              <InvestigatorCardList
                data={G.investigatorCards.common}
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

function InvestigatorSheet(props){
  return(
    <div className="ui segment">

      <div className="ui two column very relaxed stackable grid">

        <div className="column">
          <Investigator
            playerName={props.playerName}
            image={props.image}
            name={props.name}
            occupation={props.occupation}
            home={props.home}
            focus={props.focus}
            abilityName={props.abilityName}
            abilityPhase={props.abilityPhase}
            abilityDescription={props.abilityDescription}

            speed={props.speed}
            sneak={props.sneak}
            fight={props.fight}
            will={props.will}
            lore={props.lore}
            luck={props.luck}
          />
        </div>

        <div className="column">
          <StatusTokenList
            stamina={props.stamina}
            sanity={props.sanity}
            money={props.money}
            clueToken={props.clueToken}
          />
        </div>

        <div className="ui vertical divider">
        </div>

      </div>

    </div>
  )
}

function Investigator(props) {
  return(
    <div>
      <img className="ui small centered circular image" src={props.image}/>
      <div className="ui centered card">

        <div className="content">
          <div className="right floated meta">{props.occupation}</div>
          <div className="header">{props.name}</div>
          <div className="meta">{props.playerName}</div>
        </div>

        <div className="extra content">
          <div className="right floated meta">{props.home}</div>
          <div className="header">{props.abilityName}</div>
          <div className="description"><b>{props.abilityPhase}: </b>{props.abilityDescription}</div>
        </div>

        <div className="extra content">
          <i className="ui right floated small dot circle icon"></i>
          <div className="meta"><b>Focus: {props.focus}</b></div>
        </div>

        <div className="extra content">
          <button className="ui left floated compact button">
            <i className="caret left icon"></i>
          </button>
          <div className="left floated meta">Speed: {props.speed}</div>

          <button className="ui right floated compact button">
            <i className="caret right icon"></i>
          </button>
          <div className="right floated meta">Sneak: {props.sneak}</div>
        </div>

        <div className="extra content">
          <button className="ui left floated compact button">
            <i className="caret left icon"></i>
          </button>
          <div className="left floated meta">Fight: {props.fight}</div>

          <button className="ui right floated compact button">
            <i className="caret right icon"></i>
          </button>
          <div className="right floated meta">Will: {props.will}</div>
        </div>

        <div className="extra content">
          <button className="ui left floated compact button">
            <i className="caret left icon"></i>
          </button>
          <div className="left floated meta">Lore: {props.lore}</div>

          <button className="ui right floated compact button">
            <i className="caret right icon"></i>
          </button>
          <div className="right floated meta">Luck: {props.luck}</div>
        </div>

      </div>
    </div>
  )
}

function StatusTokenList(props) {
  return(
    <div >
      <StatusToken
        icon="ui right floated large red heartbeat icon"
        value={props.stamina}
        name="Stamina"
      />
      <StatusToken
        icon="ui right floated large blue pills icon"
        value={props.sanity}
        name="Sanity"
      />
      <StatusToken
        icon="ui right floated large yellow dollar sign icon"
        value={props.money}
        name="Money"
      />
      <StatusToken
        icon="ui right floated huge olive search icon"
        value={props.clueToken}
        name="Clue Tokens"
      />
    </div>
  )
}

function StatusToken(props) {
  return(
    <div className="ui link cards">
      <div className="ui centered card">
        <div className="content">
          <i className={props.icon}>{props.value}</i>
          <div className="header">
            {props.name}
          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic red button">-1</div>
            <div className="ui basic green button">+1</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function InvestigatorCardList(props){
  return(
    props.data.map((card) => 
      <InvestigatorCard
        key={card.id}
        image={card.image}
        name={card.name}
        type={card.type}
        bonus={card.bonus}
        description={card.description}
        hands={card.hands}
        price={card.price}
        deck={card.deck}
        exhausted={card.exhausted}
      />
    )
  )
}

function InvestigatorCard(props){
  return(
    <div className="ui card">
      <div className="content">
        <div className="right floated meta">{props.type}</div>
        <div className="header">{props.name}</div>
      </div>
      <div className="image">
        <img src={props.image}/>
      </div>
      <div className="content">
        <Bonuses data={props.bonus}/>
        <div className="description"><b>{props.description.phase}</b></div>
        <div className="description">{props.description.text}</div>
      </div>
      <div className="extra content">
        <Hands count={props.hands}/>
        <Price count={props.price}/>
      </div>
    </div>
  )
}

function Price(props){
  if (props.count === "") {return}
  return(
    <div>
      <i className="ui right floated dollar sign icon"></i>
      <div className="ui right floated meta">{props.count}</div>
    </div>
  )
}

function Hands(props){
  if (props.count === "") {return}
  return(
    Array.from(Array(props.count).keys()).map((_) =>
      <Hand
        key={_}
      />
    )
  )
}

function Hand(props){
  return(
    <i className="ui left floated hand paper icon"></i>
  )
}

function Bonuses(props){
  return(
    props.data.map((bonus) =>
      <Bonus
        value={bonus.value}
        check={bonus.check}
      />
    )
  )
}

function Bonus(props){
  return(
    <div className="description">
      +{props.value} to {props.check}
    </div>
  )
}
