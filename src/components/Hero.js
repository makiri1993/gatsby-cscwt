import React from 'react';
import Link from 'gatsby-link';

import * as Styled from '../../StyledComponents';

const Hero = () => (
  <Styled.GridContainerBasic numberofRows={1} numberofColumns={1}>
    <Styled.GridElement gridColumn={1} gridRow={1}>
			<Styled.Hero img={"../img/bg_hero.jpg"}>
				<img src="img/play.svg" alt="play button" width="150" height="90" />
				<br></br>
				<h1>Watch</h1>
			</Styled.Hero>
		</Styled.GridElement>
  </Styled.GridContainerBasic>
);

export default Hero;
