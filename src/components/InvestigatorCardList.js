export function InvestigatorCardList(props){
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
        <InvestigatorCardImage url={props.image}/>
      </div>
      <div className="content">
        <Bonuses data={props.bonus}/>
        <Descriptions data={props.description}/>
      </div>
      <ExtraInvestigatorCards
        hands={props.hands}
        price={props.price}
      />
    </div>
  )
}

function ExtraInvestigatorCards(props){
  if (props.hands === "" && props.price === "") {return}
  return(
    <div className="extra content">
      <Hands count={props.hands}/>
      <Price count={props.price}/>
    </div>
  )
}

function Descriptions(props){
  return(
    props.data.map((description) =>
      <Description
        phase={description.phase}
        text={description.text}
      />
    )
  )
}

function Description(props){
  return(
    <div>
      <Phase phase={props.phase}/>{props.text}
    </div>
  )
}

function Phase(props){
  if (props.phase === "") { return }
  return(
    <b>{props.phase}: </b>
  )
}

function InvestigatorCardImage(props){
  if (props.url === ""){ return }
  return(
    <img src={props.url}/>
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
  if (props.data === []) {return}
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
      <b>{props.check}: </b>{props.value}
    </div>
  )
}
