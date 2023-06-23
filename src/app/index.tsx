import { useStore } from 'effector-react'
import { FC } from 'react'

import { playerModel } from '~/entities/player'
import { EnterPlayerName } from '~/features/enter-player-name'
import { MainPage } from '~/pages/main-page'
// add global styles to app/providers/with-global-styles.tsx
import { Heading, Layout } from '~/shared/styles/globalStyles'

import './index.css'

const App: FC = () => {
  // remore props drilling and get currentUser from store on the MainPage level instead
  const currentUser = useStore(playerModel.$user)
  
  return (
    <Layout>
      <Heading>Rock, Paper, Scissors game</Heading>
      {currentUser ? <MainPage currentUser={currentUser} /> : <EnterPlayerName />}
    </Layout>
  )
}

export default App
