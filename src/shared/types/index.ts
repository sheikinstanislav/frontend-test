
// move all types to entity levers (player, game, etc)
export type ElementType = 'rock' | 'paper' | 'scissors'
export type ResultType = 'tie' | 'win' | 'loss'
export type StatusType = 'in game' | 'not in game' | 'made choice'
export type GameStatusType = 'waiting for opponent' | 'game started' | 'game finished'

export interface ResultResponse {
  results: { username: string; choice: ElementType }[]
}

export interface Player {
  name: string
  status: StatusType
  roundChoice: ElementType | null
}

export interface PlayerName {
  name: string
}
export interface PlayerStatus {
  status: StatusType
}
export interface RoundChoice {
  roundChoice: ElementType | null
}
