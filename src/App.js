import React from 'react'
import { Client } from 'boardgame.io/react'
import { Local } from 'boardgame.io/multiplayer'
import { ArkhamHorror } from './Game'

const ArkhamHorrorClient = Client({
  game: ArkhamHorror,
  multiplayer: Local(),
  numPlayers: 3,
})

const App = () => (
  <div>
    <ArkhamHorrorClient
      playerID="0"
    />
  </div>
)

export default App;
