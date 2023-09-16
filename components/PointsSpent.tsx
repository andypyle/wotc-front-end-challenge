import styled from '@emotion/styled'

export const PointsSpent = styled.div`
  display: flex;
  font-size: 1.25rem;
  line-height: 1.25;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  margin-top: 1rem;
  background-color: var(--dark-gray);

  @media only screen and (min-width: 999px) {
    margin: 0;
    align-self: center;
  }
`

export const PointsSpentText = styled.span`
  display: block;
  color: #374c62;
`
