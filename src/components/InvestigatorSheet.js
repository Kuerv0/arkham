export function InvestigatorSheet(props){
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
