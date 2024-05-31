export function Board( {ctx, G, moves} ){
  return(
    <div>
    </div>
  )
}

export function InvestigatorSheet( {ctx, G, moves} ){
  return(
    <div className="ui card">
      <div className="content">
        <div className="ui header">
          <img src="https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" className="ui circular image"/>
          Carolyn Fern
        </div>
        <div className="meta">
          <span className="right floated date">the Pshychologist</span>
        </div>
      </div>
      <div className="extra content">
        <div className="header">
          Psychology
        </div>
        <div className="meta">
          Upkeep: Dr. Fern may restore 1 Sanity to herself or another character on her location. She came...
        </div>
      </div>


      <div className="content">
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
      </div>

      <div class="ui ordered steps">
        <div class="completed step">
          <div class="content">
            <div class="title">Upkeep</div>
            <div class="description">Gei el que lo lea</div>
          </div>
        </div>
        <div class="completed step">
          <div class="content">
            <div class="title">Movement</div>
            <div class="description">Gei el que lo lea</div>
          </div>
        </div>
        <div class="completed step">
          <div class="content">
            <div class="title">Encounter</div>
            <div class="description">Gei el que lo lea</div>
          </div>
        </div>
        <div class="completed step">
          <div class="content">
            <div class="title">Other Worlds</div>
            <div class="description">Gei el que lo lea</div>
          </div>
        </div>
        <div class="active step">
          <div class="content">
            <div class="title">Mythos</div>
            <div class="description">Cristian si es loca ome</div>
          </div>
        </div>
      </div>

    </div>
  )
}

function Counter(){
  return(
    <div className="ui three column grid">
      <div class="column">
        <button className="left floated negative ui button">-1</button>
      </div>
      <div class="column">
        <div className="ui icon button" data-content="What the hell">
          <i className="heartbeat icon"></i>
          Stamina: 5
        </div>
      </div>
      <div class="column">
        <button className="right floated positive ui button">+1</button>
      </div>
    </div>
  )
}
