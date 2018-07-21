import Styled, { keyframes } from 'styled-components';
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

export const GridContainerBasic = Styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.numberOfColumns},1fr);
    grid-template-rows: repeat(${props => props.numberOfRows},1fr);

    grid-gap: 0em;
    grid-auto-rows: auto;
    @media screen and (max-width: 900px) {
        grid-template-columns: 100%;
        grid-template-rows: auto;
        grid-gap: 0em;
    }
`;

export const GridElement = Styled.div`
    grid-column: ${props => props.gridColumn};
    grid-row: ${props => props.gridRow};
`;

export const GridElementWithSpan = Styled.div`
    grid-column: ${props => props.columnFrom} / ${props => props.columnTo};
    grid-row: ${props => props.rowFrom} / ${props => props.rowTo};
`;

export const GridElementCentered = Styled.div`
    grid-column: ${props => props.gridColumn};
    grid-row: ${props => props.gridRow};
    align-self: center;
    text-align: center;
`;

export const NavLogo = Styled.div`
    grid-column: ${props => props.gridColumn};
    grid-row: ${props => props.gridRow};
    padding-top: 1.5em;
    background-image: url(${logo});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 10vh;
  `;
export const NavLink = Styled.a`
    transition: 0.3s;
    :hover {
        color: white;
        animation-name: ${keyframeHeaderBackground};
        animation-duration: 7s;
        border-left: 1px solid ${tansaYellow};
        border-right: 1px solid ${tansaYellow};
        padding: 1em 1em;
    }
  `;
export const Header = Styled.div`
    position: sticky; 
    top: 0; 
    width: 100%;
    background-color: ${tansaBlue};
    animation-name: ${keyframeHeaderBackground};
    animation-duration: 50s;
`;

const divFlexItemsCenter = Styled.div`
    display:flex;
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
export const TextWithHorizontalLine = Styled.div`
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
        margin-top: -.15rem;
        margin-left: 3rem;
        height: .1rem;
        width: 100000px;
        background-color: #24335a;
    }
 `;
