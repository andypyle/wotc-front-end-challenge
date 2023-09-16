import styled from '@emotion/styled'

type ConnectorProps = {
  selected: boolean
}

export const Connector = styled.div<ConnectorProps>`
  display: block;
  width: 100%;
  height: 16px;
  position: absolute;
  z-index: -10;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);

  ${({ selected }) =>
    `background-color: ${selected ? 'var(--lighter-gray)' : 'var(--gray)'}`}
`
