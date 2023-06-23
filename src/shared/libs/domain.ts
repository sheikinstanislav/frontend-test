import { Domain } from 'effector'

export const saveToStorage = (domain: Domain, storage: Storage) => {
  return domain.onCreateStore((store) => {
    const key = `playerName`
    store.watch((value) => {
      storage.setItem(key, `${value}`)
    })
  })
}

export const loadFromStorage = (domain: Domain, storage: Storage) => {
  return domain.onCreateStore((store) => {
    const key = `playerName`
    const raw = storage.getItem(key)
    if (!raw) return
    store.setState(raw)
  })
}
