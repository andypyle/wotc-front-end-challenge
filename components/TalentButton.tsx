import styled from '@emotion/styled'

type TalentButtonProps = {
  bgPos?: [number, number]
  selected?: boolean
}

export const TalentButton = styled.button<TalentButtonProps>`
  display: block;
  border: 0;
  margin: 0;
  position: relative;
  background-image: url('./talent-icons-sprite.png');
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;

  background-position-x: ${({ bgPos = [0, 0] }) => bgPos[0]}px;
  background-position-y: ${({ bgPos = [0, 0] }) => bgPos[1]}px;

  &:after {
    display: block;
    position: absolute;
    z-index: -5;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    content: '""';
    background-color: rgb(106, 157, 211);
    background: ${({ selected }) =>
      selected
        ? 'linear-gradient(0deg, var(--blue) 0%, rgba(44,43,44,1) 39%, var(--blue) 40%, var(--blue) 100%)'
        : 'linear-gradient(0deg, var(--gradient-disabled) 0%, rgba(44,43,44,1) 39%, var(--gradient-disabled) 40%, var(--gradient-disabled) 100%)'};
  }
`
