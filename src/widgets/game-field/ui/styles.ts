import { styled } from '~/shared/styles'

export const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
})

export const ElementsWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
})

export const Text = styled('p', {
  margin: '0 15px',
})

export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '$inter',
  fontWeight: '$bold',
  width: '100%',
  maxWidth: '200px',
  marginTop: '25px',
  transition: 'all 0.3s',
  outline: 'none',
  border: 'none',

  '&:hover': {
    cursor: 'pointer',
    transform: 'translateY(-5px)',
    backgroundColor: '#04bfa0',
  },
})
