export function Board( {ctx, G, moves} ){
  return(
    <div className="ui celled grid">
      <InvestigatorSheet/>
    </div>
  )
}

export function InvestigatorSheet( {ctx, G, moves} ){
  return(
    <div className="row">
      <div className="ui five wide column">
        <div className="ui segment">
          <div className="ui two column stackable grid">
            <div className="column">
              <img className="ui small centered circular image" src="./test.png"/>
                <div className="ui card">
                  <div className="content">
                    <div className="header">Cristian es gei</div>
                    <div className="left floated meta">Y bien gei</div>
                  </div>
                </div>
            </div>
            <div className="column">

              <div className="ui stackable cards">
                <div className="ui card">
                  <div className="content">
                    <i className="right floated large heartbeat icon"></i>
                    <div className="header">Stamina</div>
                  </div>
                  <div className="extra content">
                    <div className="ui two buttons">
                      <div className="ui basic green button">+1</div>
                      <div className="ui basic red button">-1</div>
                    </div>
                  </div>
                </div>

                <div className="ui card">
                  <div className="content">
                    <i className="right floated large heartbeat icon"></i>
                    <div className="header">Stamina</div>
                  </div>
                  <div className="extra content">
                    <div className="ui two buttons">
                      <div className="ui basic green button">+1</div>
                      <div className="ui basic red button">-1</div>
                    </div>
                  </div>
                </div>

                <div className="ui card">
                  <div className="content">
                    <i className="right floated large heartbeat icon"></i>
                    <div className="header">Stamina</div>
                  </div>
                  <div className="extra content">
                    <div className="ui two buttons">
                      <div className="ui basic green button">+1</div>
                      <div className="ui basic red button">-1</div>
                    </div>
                  </div>
                </div>

                <div className="ui card">
                  <div className="content">
                    <i className="right floated large heartbeat icon"></i>
                    <div className="header">Stamina</div>
                  </div>
                  <div className="extra content">
                    <div className="ui two buttons">
                      <div className="ui basic green button">+1</div>
                      <div className="ui basic red button">-1</div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
            <div className="ui vertical divider">
            </div>

          </div>
        </div>
      </div>
      <div className="eight wide column">
        <p>
          Puto.
        </p>
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
