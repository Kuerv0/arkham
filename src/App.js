import React from 'react'
import { Client } from 'boardgame.io/react'
import { Local } from 'boardgame.io/multiplayer'
import { ArkhamHorror } from './Game'
import { Board } from './components/Board'

const ArkhamHorrorClient = Client({
  game: ArkhamHorror,
  board: Board,
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
