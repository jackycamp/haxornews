import React from 'react';
import styled from 'styled-components';

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
    margin: 0 0 0 2rem;

`;

export default function Default() {
	return (
		<Wrapper>
			<Header>
				Another HackerNews reader? But why?
			</Header>
			<Info>
				I mean don&apos;t you wanna feel like a hackermans when you are browsing HackerNews?
				Well, that is what we are going for. Trying to bring you that hacker vibe.
			</Info>
			<Header>
				This is pretty cool but could be better..
			</Header>
			<Info>
				If you have any feedback or feature requests feel free to reach out! @insert email here
			</Info>
			<Header>
				Are you going to add anything else?
			</Header>
			<Info>
				Yes! Haxornews is currently under active development with new ideas and features rolling out on a pretty random basis.
			</Info>
			<Header>
				Why can&apos;t I sign in or comment on stories or anything?
			</Header>
			<Info>
				The api that the good folks at Hackernews made publicly available seems to only exist
				to show real-time data not really for manipulating data. So, unfortunately, this purely exists as
				as a reader.
			</Info>
		</Wrapper>
	);
}
