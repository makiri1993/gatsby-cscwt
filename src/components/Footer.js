import React from 'react';
import Link from 'gatsby-link';

import * as Styled from '../../StyledComponents';

const Footer = () => (
	<div>
  <Styled.GridContainerBasic numberofRows={1} numberofColumns={2}>
    <Styled.GridElement gridColumn={1} gridRow={1}>
			<Styled.FooterLeft img={"../img/bg_filler_1.jpg"}>
				<h1>donate</h1>
			</Styled.FooterLeft>
		</Styled.GridElement>
    <Styled.GridElement gridColumn={2} gridRow={1}>
			<Styled.FooterRight>
				<h1>Social Media</h1>
			</Styled.FooterRight>
		</Styled.GridElement>
  </Styled.GridContainerBasic>
	<Styled.GridContainerBasic numberofRows={1} numberofColumns={2}>
		<Styled.GridElement gridColumn={1} gridRow={1}>
			<Styled.FooterBarLeft>
					<p>Privacy PolicyTerms of Use Sitemap</p>
			</Styled.FooterBarLeft>
		</Styled.GridElement>
		<Styled.GridElement gridColumn={2} gridRow={1}>
			<Styled.FooterBarLeft>
					<p>© CSCWT. All rights reserved</p>
			</Styled.FooterBarLeft>
		</Styled.GridElement>
	</Styled.GridContainerBasic>
	</div>
);

export default Footer;
