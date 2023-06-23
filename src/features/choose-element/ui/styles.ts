import { styled } from '~/shared/styles'

export const Heading = styled('h4', {
  textAlign: 'center',
})

export const ElementWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
})

export const ElementButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    borderColor: '#04bfa0',
  },

  '&:focus': {
    backgroundColor: '#04bfa0',
  },
})
