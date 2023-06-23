import { styled } from '~/shared/styles'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
})

export const Name = styled('span', {
  fontSize: '20px',
  fontWeight: '$medium',
  lineHeight: '1.1',
  marginBottom: '8px',
})

export const Status = styled('span', {
  fontSize: '16px',
  fontStyle: 'italic',
  lineHeight: '1.1',
  color: '#04bfa0',
})
