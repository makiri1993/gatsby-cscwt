import styled, { keyframes } from 'styled-components';
import logo from './src/img/cscwt_logo.svg';

/* RGB */
const tansaGreen = 'rgba(85, 179, 74, 1)';
const tansaBlue = 'rgba(72, 163, 217, 1)';
const tansaYellow = 'rgba(246, 211, 74, 1)';
const lightBlack = 'rgba(39, 41, 50, 1)';
const wineRed = 'rgba(152, 38, 73, 1)';
const white = '#fefbde';

const keyframeHeaderBackground = keyframes`
    0%   {background-color: ${tansaGreen};}
    40%  {background-color: ${tansaGreen};}
    49%  {background-color: ${tansaYellow};}
    50%  {background-color: ${lightBlack};}
    51%  {background-color: ${tansaYellow};}
    60%  {background-color: ${tansaBlue};}
    100% {background-color: ${tansaBlue};}
`;
const keyframeNavLinkBackground = keyframes`
    100% {background-color: ${lightBlack};}
`;

export const GridContainerBasic = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.numberOfColumns}, 1fr);
  grid-template-rows: repeat(${props => props.numberOfRows}, 1fr);
  grid-gap: 0em;
  grid-auto-rows: auto;
  @media screen and (max-width: 900px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-gap: 0em;
  }
`;
export const GridContainerBasicWithCustomizedColumns = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 2fr 2fr 2fr 0.3fr;
  grid-gap: 2em;
  grid-auto-rows: auto;
  background-color: ${tansaGreen};
  color: ${white};
  @media screen and (max-width: 900px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-gap: 0em;
  }
`;

export const GridElement = styled.div`
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
`;

export const GridElementWithSpan = styled.div`
  grid-column: ${props => props.columnFrom} / ${props => props.columnTo};
  grid-row: ${props => props.rowFrom} / ${props => props.rowTo};
`;

export const GridElementCentered = GridElement.extend`
  align-self: center;
  text-align: center;
  position: relative;
`;

export const GridElementCenteredWithPadding = GridElement.extend`
  align-self: center;
  text-align: center;
  position: relative;
  padding-bottom: 3em;
`;

export const NavLogo = styled.div`
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
  padding-top: 1.2em;
  padding-bottom: 0em;
  height: 8vh;
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const NavLink = styled.a`
  padding-left: 1em;
  padding-right: 1em;
  transition: 0.3s;
  :hover {
    color: ${white};
    animation-name: ${keyframeNavLinkBackground};
    animation-duration: 3s;
    border-left: 1px solid ${tansaYellow};
    border-right: 1px solid ${tansaYellow};
    border-radius: 20%;
    padding: 1em 1em;
  }
`;
export const Header = styled.div`
  position: sticky;
  color: ${white}
  top: 0;
  width: 100%;
  z-index: 30;
  background-color: ${wineRed};
  ${'' /* background: linear-gradient(176deg, ${tansaGreen} 46%, ${tansaYellow} 49%, ${lightBlack} 50%, ${tansaYellow} 51%, ${tansaBlue} 54%); */}
  ${
    '' /* animation-name: ${keyframeHeaderBackground};
  animation-duration: 50s; */
  }
`;

const divFlexItemsCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${white};
  text-align: center;
  width: 100%;
  height: 80vh;
`;

export const fillerLeft = divFlexItemsCenter.extend`
    background-image: url(${props => props.img});
    background-size: cover;
    box-shadow: inset 0 0 0 80vh rgba(72, 163, 217, 0.5);
    transition: 0.8s;
    &:hover {
        box-shadow: inset 0 0 0 80vh rgba(72, 163, 217, 1);        
    }
`;

export const fillerRight = fillerLeft.extend`
    background-image: url(${props => props.img});
    box-shadow: inset 0 0 0 80vh rgba(85, 179, 74, 0.5);
    transition: 0.8s;
    &:hover {
        box-shadow: inset 0 0 0 80vh rgba(85, 179, 74, 1);
    }
`;

export const Tanzania = divFlexItemsCenter.extend`
    height: 80vh;
    background-image: url('img/tansania.svg');
    background-repeat: no-repeat;
    background-position: center; 
    background-color: ${tansaYellow};
`;

export const Hero = divFlexItemsCenter.extend`
    background-image: url(${props => props.img});
    background-size: cover;
    box-shadow: inset 0 0 0 80vh rgba(72, 163, 217, 0.1);
    width: 100%;
    height: 100vh;
`;
export const TextWithHorizontalLine = styled.div`
  display: inline-block;
  vertical-align: top;
  position: relative;
  font-size: 1.2em;
  margin-top: 1em;
  &:after {
    content: '';
    position: absolute;
    display: block;
    z-index: 10;
    top: 50%;
    left: 100%;
    margin-top: -0.15rem;
    margin-left: 3rem;
    height: 0.1rem;
    width: 83vw;
    background-color: ${white};
  }
`;

export const BlogTileImage = styled.div`
  height: 10rem;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  &:hover {
    box-shadow: inset 0 0 0 80vh rgba(72, 163, 217, 0.5);
  }
`;
export const BlogTileInfoBox = styled.div`
  position: absolute;
  margin: auto;
  top: 9rem;
  left: 30%;
  right: 30%;
  z-index: 2;

  background-color: ${tansaGreen};
  &:hover {
    box-shadow: inset 0 0 0 80vh rgba(72, 163, 217, 0.5);
  }
`;
export const BlogTileText = styled.div`
  height: auto;
  font-size: 1.5em;
  padding-top: 5%;
  background-color: ${tansaBlue};
  &:hover {
    box-shadow: inset 0 0 0 80vh rgba(72, 163, 217, 0.5);
  }
`;
export const FooterLeft = fillerLeft.extend`
    height: 50vh;
    background-color: ${tansaBlue};
    &:hover {
        box-shadow: inset 0 0 0 80vh rgba(72, 163, 217, 0.5);
    }
`;

export const FooterRight = fillerLeft.extend`
    height: 50vh;
    background-color: ${tansaGreen};
    box-shadow: inset 0 0 0 80vh rgba(85, 179, 74, 0.5);

    &:hover {
        box-shadow: inset 0 0 0 80vh rgba(85, 179, 74, 0.5);
    }
    
`;

const FooterBar = styled.div`
  height: 6vh;
  width: 100%;
  background-color: ${tansaBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${white};
  text-align: center;
`;

export const FooterBarLeft = FooterBar.extend``;

export const FooterBarRight = FooterBar.extend``;
