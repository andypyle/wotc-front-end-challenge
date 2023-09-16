import { lato } from '@/pages'
import { useTalentStore } from '@/stores/talents'
import styled from '@emotion/styled'
import { useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'
import {
  ImportButton,
  ImportShareButtons,
  ImportShareErrorText,
  ImportShareTextarea,
  ImportShareTextareaWithError,
  ShareButton,
} from '.'

const ImportShareStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 999px) {
    flex-direction: row;
    width: 800px;
    margin: 0 auto;
  }
`

export const ImportShare = () => {
  const [importedLoadoutString, setImportedLoadoutString] = useState<string>('')
  const [importError, setImportError] = useState('')
  const [value, copy] = useCopyToClipboard()
  const { selectedTalents, importTalents, maxSelectedTalents } =
    useTalentStore()

  const onClickShareLoadout = () => {
    // Copy comma separated list of ids to clipboard.
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

      // Can't import it if it's more than the talent points available.
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
      <ImportShareStyled className={lato.className}>
        <ImportShareButtons>
          <ImportButton
            onClick={onClickImportLoadout}
            disabled={!importedLoadoutString.length}>
            Import
          </ImportButton>
          <ShareButton
            onClick={onClickShareLoadout}
            disabled={!selectedTalents.length}
            value={value as string}>
            {value ? 'Copied!' : 'Copy'}
          </ShareButton>
        </ImportShareButtons>
        <ImportShareTextareaWithError>
          <ImportShareTextarea
            onChange={onChangeImportLoadoutString}
            error={importError}
            placeholder="Paste up to 6 talent IDs, separated by commas."
            value={importedLoadoutString}
          />
          <ImportShareErrorText>{importError}</ImportShareErrorText>
        </ImportShareTextareaWithError>
      </ImportShareStyled>
    </>
  )
}
