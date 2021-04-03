import React, { useState } from 'react';
import styled from 'styled-components';
import Top from './Top';
import New from './New';
import Best from './Best';
import Jobs from './Jobs';
import Info from './Info';

const Wrapper = styled.div`
    padding: 1rem;
`;

const Nav = styled.div`
    display: flex;
`;

const NavItem = styled.div`
    text-decoration: ${(props) => ((props.selected) ? 'underline' : 'none')};
    font-family: 'PressStartRegular';
    color: green;
    font-size: 0.75rem;
    padding: 1rem;
    :hover {
        color: white;
        cursor: pointer;
    }
`;

const Header = styled.div`
    font-family: 'PressStartRegular';
    color: green;
    padding: 0.25rem;
    font-size: 2rem;
`;

export default function Default() {
	const [view, setView] = useState('top');

	return (
		<>
			<Wrapper>
				<Nav>
					<Header>
						Haxornews
					</Header>
					<NavItem
						selected={view === 'top'}
						onClick={() => setView('top')}
					>
						Top
					</NavItem>
					<NavItem
						selected={view === 'new'}
						onClick={() => setView('new')}
					>
						New
					</NavItem>
					<NavItem
						selected={view === 'best'}
						onClick={() => setView('best')}
					>
						Best
					</NavItem>
					<NavItem
						selected={view === 'jobs'}
						onClick={() => setView('jobs')}
					>
						Jobs
					</NavItem>
					<NavItem
						selected={view === 'info'}
						onClick={() => setView('info')}
					>
						Info
					</NavItem>
				</Nav>
				{view === 'top' && (<Top />)}
				{view === 'new' && (<New />)}
				{view === 'best' && (<Best />)}
				{view === 'jobs' && (<Jobs />)}
				{view === 'info' && (<Info />)}
			</Wrapper>
		</>
	);
}
