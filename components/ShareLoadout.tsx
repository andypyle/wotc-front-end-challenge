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

const ShareLoadoutTextarea = styled.textarea`
  min-height: 100px;
  background-color: var(--lighter-gray);
  color: #eee;
  font-size: 1rem;
  border: 0;
  padding: 0.75rem;

  @media only screen and (min-width: 999px) {
    width: 100%;
  }
`

export const ShareLoadout = () => {
  const [importedLoadoutString, setImportedLoadoutString] = useState<string>('')
  const [value, copy] = useCopyToClipboard()
  const { selectedTalents, resetTalents, importTalents } = useTalentStore()

  const onClickShareLoadout = () => {
    copy(selectedTalents.map((t) => t.id).join(','))
  }

  const onChangeImportLoadoutString = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => setImportedLoadoutString(e.target.value)

  const onClickImportLoadout = () => {
    if (importedLoadoutString.length) {
      importTalents(importedLoadoutString.split(',').map(Number))
      setImportedLoadoutString('')
    }
  }

  return (
    <ShareLoadoutStyled>
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
      <ShareLoadoutTextarea
        onChange={onChangeImportLoadoutString}
        value={importedLoadoutString}
      />
    </ShareLoadoutStyled>
  )
}
