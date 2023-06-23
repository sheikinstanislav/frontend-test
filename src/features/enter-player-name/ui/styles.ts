import { styled } from '~/shared/styles'

export const From = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Text = styled('p', {
  fontSize: '20px',
  textAlign: 'center',
  fontWeight: '$medium',
})

export const Input = styled('input', {
  height: '32px',
  padding: '0 10px',
  outline: 'none',
  border: 'none',
  borderRadius: '8px',
  width: '200px',
})

export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '$inter',
  fontWeight: '$bold',
  width: '100%',
  maxWidth: '150px',
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
