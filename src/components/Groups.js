import styled from 'styled-components'

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-bottom: 0;
`

export const GroupRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

export const GroupAnimation = styled(Group)`
  padding-top: 0.55rem;
  padding-left: 1rem;
  width: 100%;
`
export const GroupBackgroundColor = styled(Group)`
  width: 2rem;
`
