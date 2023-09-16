import { lato } from '@/pages'
import { useTalentStore } from '@/stores/talents'
import styled from '@emotion/styled'
import { useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'

type ShareLoadoutButtonProps = {
  value?: string
}

export const ShareLoadoutButton = styled.button<ShareLoadoutButtonProps>`
  display: block;
  flex: 1;
  border: 0;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  min-width: 150px;
  color: white;
  background-color: var(--blue-ish);
  border-radius: 4px;
  cursor: pointer;

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

const ImportLoadoutButton = styled(ShareLoadoutButton)`
  background-color: var(--green);
  margin-right: 1rem;

  &:hover {
    background-color: var(--lighter-green);
  }

  @media only screen and (min-width: 999px) {
    margin: 0 0 1rem;
  }
`
const ShareLoadoutStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 999px) {
    flex-direction: row;
    width: 800px;
    margin: 0 auto;
  }
`

const ShareLoadoutButtons = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media only screen and (min-width: 999px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`

const ShareLoadoutTextareaWithError = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
type ShareLoadoutTextareaProps = {
  error?: string
}
const ShareLoadoutTextarea = styled.textarea<ShareLoadoutTextareaProps>`
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
type ErrorTextProps = {
  error?: string
}
const ErrorText = styled.div<ErrorTextProps>`
  font-size: 1rem;
  color: red;
  text-align: right;
  margin-top: 0.5rem;
  height: 16px;
`

export const ShareLoadout = () => {
  const [importedLoadoutString, setImportedLoadoutString] = useState<string>('')
  const [importError, setImportError] = useState('')
  const [value, copy] = useCopyToClipboard()
  const { selectedTalents, importTalents, maxSelectedTalents } =
    useTalentStore()

  const onClickShareLoadout = () => {
    copy(selectedTalents.map((t) => t.id).join(','))
  }

  const onChangeImportLoadoutString = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setImportedLoadoutString(e.target.value)
    if (importError.length) {
      setImportError('')
    }
  }

  const onClickImportLoadout = () => {
    if (importedLoadoutString.length) {
      const importedLoadoutArray = Array.from(
        new Set(importedLoadoutString.split(','))
      ).map(Number)

      // Can't import it if it's moe than the talent points available.
      if (importedLoadoutArray.length <= maxSelectedTalents) {
        importTalents(importedLoadoutArray)
        setImportError('')
        setImportedLoadoutString('')
      } else {
        setImportError(
          'Too many talents imported. You may only import up to 6.'
        )
      }
    }
  }

  return (
    <>
      <ShareLoadoutStyled className={lato.className}>
        <ShareLoadoutButtons>
          <ImportLoadoutButton onClick={onClickImportLoadout}>
            Import
          </ImportLoadoutButton>
          <ShareLoadoutButton
            onClick={onClickShareLoadout}
            disabled={!selectedTalents.length}
            value={value as string}>
            {value ? 'Copied!' : 'Copy'}
          </ShareLoadoutButton>
        </ShareLoadoutButtons>
        <ShareLoadoutTextareaWithError>
          <ShareLoadoutTextarea
            onChange={onChangeImportLoadoutString}
            error={importError}
            placeholder="Paste up to 6 talent IDs, separated by commas."
            value={importedLoadoutString}
          />
          <ErrorText>{importError}</ErrorText>
        </ShareLoadoutTextareaWithError>
      </ShareLoadoutStyled>
    </>
  )
}
