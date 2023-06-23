import { FC, FormEvent, useState } from 'react'
import { playerModel } from '~/entities/player'
import { Button, From, Input, Text } from './styles'

export const EnterPlayerName: FC = () => {
  const [userName, setUserName] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    playerModel.nameChanged(userName)
  }

  return (
    <>
      <From onSubmit={handleSubmit}>
        <Text>Your nickname:</Text>
        <Input
          value={userName}
          type="text"
          placeholder="nickname..."
          onChange={(e) => setUserName(e.target.value)}
        />
        <Button type="submit">Enter</Button>
      </From>
    </>
  )
}
