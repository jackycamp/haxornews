import React from 'react';
import styled from 'styled-components';
import { getHeadings, getDetails } from './getInfo';

const Wrapper = styled.div`
    font-family: 'TitilliumWeb';
    color: green;
    margin: 2rem 5rem 0 5rem;
    padding: 1rem;
    background-color: #0c0c0d; 
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Header = styled.h1`
`;

const Info = styled.h3`
    color: green;
    margin: 0 0 0 2rem;

`;

export default function Default() {
	const headings = getHeadings();
	const details = getDetails();

	return (
		<Wrapper>
			{headings.map((heading, index) => (
				<>
					<Header>
						{heading}
					</Header>
					<Info>
						{details[index]}
					</Info>
				</>
			))}
		</Wrapper>
	);
}
