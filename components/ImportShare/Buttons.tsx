import styled from '@emotion/styled'

export const ImportShareButton = styled.button`
  display: block;
  flex: 1;
  border: 0;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  min-width: 150px;
  color: white;

  border-radius: 4px;
  cursor: pointer;
`

export const ImportButton = styled(ImportShareButton)`
  background-color: var(--green);
  margin-right: 1rem;

  &:hover {
    background-color: var(--lighter-green);
  }

  @media only screen and (min-width: 999px) {
    margin: 0 0 1rem;
  }
`

type ShareButtonProps = {
  value?: string
}

export const ShareButton = styled(ImportShareButton)<ShareButtonProps>`
  background-color: var(--blue-ish);
  &:hover {
    ${({ value }) =>
      value
        ? 'background-color: var(--lighter-green);'
        : 'background-color: var(--lighter-blue-ish);'}
  }

  ${({ value }) =>
    value
      ? 'background-color: var(--green);'
      : 'background-color: var(--blue-ish);'}
`

export const ImportShareButtons = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media only screen and (min-width: 999px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`
