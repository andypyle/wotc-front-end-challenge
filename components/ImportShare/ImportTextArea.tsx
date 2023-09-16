import styled from '@emotion/styled'

export const ImportShareTextareaWithError = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
type ImportShareTextareaProps = {
  error?: string
}
export const ImportShareTextarea = styled.textarea<ImportShareTextareaProps>`
  min-height: 100px;
  background-color: var(--lighter-gray);
  color: #eee;
  font-size: 1rem;
  border: 0;
  padding: 0.75rem;

  ${({ error }) => error?.length && 'border: 1px solid red;'}

  @media only screen and (min-width: 999px) {
    width: 100%;
  }
`
type ImportShareErrorTextProps = {
  error?: string
}
export const ImportShareErrorText = styled.div<ImportShareErrorTextProps>`
  font-size: 1rem;
  color: red;
  text-align: right;
  margin-top: 0.5rem;
  height: 16px;
`
