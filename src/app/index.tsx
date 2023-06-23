import { useStore } from 'effector-react'
import { FC } from 'react'
import { playerModel } from '~/entities/player'
import { EnterPlayerName } from '~/features/enter-player-name'
import { MainPage } from '~/pages/main-page'
import { Heading, Layout } from '~/shared/styles/globalStyles'
import './index.css'

const App: FC = () => {
  const currentUser = useStore(playerModel.$user)
  return (
    <Layout>
      <Heading>Rock, Paper, Scissors game</Heading>
      {currentUser ? <MainPage currentUser={currentUser} /> : <EnterPlayerName />}
    </Layout>
  )
}

export default App
