import Styled from 'styled-components';

/* RGB */
const tansaGreen = 'rgba(85, 179, 74, 1)';
const tansaBlue = 'rgba(72, 163, 217, 1)';
const tansaYellow = 'rgba(246, 211, 74, 1)';
const lightBlack = 'rgba(39, 41, 50, 1)';
const wineRed = 'rgba(152, 38, 73, 1)';
const white = '#fefbde';

export const GridContainerBasic = Styled.div `
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

export const GridElement = Styled.div `
    grid-column: ${props => props.gridColumn};
    grid-row: ${props => props.gridRow};
`;

export const NavContainer = Styled.div `
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1em;
  align-items: center;
  text-align: center;
  border-bottom: 4px solid black;
  background-color: ${tansaGreen};

  @media screen and (max-width: 900px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-gap: 1em;
 }
`;
export const NavElement = Styled.div `
    grid-column: ${props => props.gridColumn};
    grid-row: 1;
    width:100%;
    height: 100%;
    background-color: ${tansaBlue};
`;
export const NavLogo = Styled.div `
    grid-column: ${props => props.gridColumn};
    grid-row: 1;
    background-image: url("https://blog.codepen.io/wp-content/uploads/2012/06/Black-Large.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 10vh;
  `;

export const Header = Styled.div `
    width: 100px;
    height: 100px;
    background-color: ${tansaBlue};
`;





export const fillerLeft = Styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    color: ${white};
    text-align: center;
    width: 100%;
    height: 80vh;
    background-image: url(${props => props.img});
    background-size: cover;
    box-shadow: inset 0 0 0 80vh rgba(72, 163, 217, 0.5);
    transition: 0.8s;
    &:hover {
        box-shadow: inset 0 0 0 80vh rgba(72, 163, 217, 1);        
    }
`;

export const fillerRight = Styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    color: ${white};
    text-align: center;
    width: 100%;
    height: 80vh;
    background-image: url(${props => props.img});
    background-size: cover;
    box-shadow: inset 0 0 0 80vh rgba(85, 179, 74, 0.5);
    transition: 0.8s;
    &:hover {
        box-shadow: inset 0 0 0 80vh rgba(85, 179, 74, 1);
    }
`;