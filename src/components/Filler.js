import React from 'react';
import Link from 'gatsby-link';

import * as Styled from '../../StyledComponents';

const Filler = () => (
  <Styled.GridContainerBasic numberofRows={1} numberofColumns={2}>
    <Styled.GridElement gridColumn={1} gridRow={1}>
			<Styled.fillerLeft img={"../img/bg_filler_1.jpg"}>
				<h1>Projects</h1>
			</Styled.fillerLeft>
		</Styled.GridElement>
    <Styled.GridElement gridColumn={2} gridRow={1}>
			<Styled.fillerRight img={"../img/bg_filler_2.jpg"}>
				<h1>CSCWT</h1>
			</Styled.fillerRight>
		</Styled.GridElement>
  </Styled.GridContainerBasic>
);

export default Filler;
