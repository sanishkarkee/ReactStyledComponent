import styled, { keyframes } from 'styled-components';

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props) =>
    props.variant === 'outline' ? 'FFF' : '#4caf50'};
  color: ${(props) => (props.variant === 'outline' ? '#4caf50' : 'fff')};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;

  /* Video6:  Pseudo elements on styled components */
  &:hover {
    background-color: purple;
    color: yellow;
  }
`;

// mathi ko styledbutton ko sabai properties use garne tare kei properties change garera use garne situation
export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
  color: purple; // mathi ko properties lai overwrite gareko
`;

//Video7:  Adding attributes (tag ma direct type=button ma garera garnu bhanda styledcomponent bata type=submit declare garne method)
export const SubmitButton = styled(StyledButton).attrs({
  type: 'submit',
})`
  box-shadow: 0 9px #999;
  &:active {
    background-color: pink;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

// Video8: Animations (import keyframes from styled-components)

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
`;

export const AnimatedLogo = styled.img`
  height: 14vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`;

export const Darkbutton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;
