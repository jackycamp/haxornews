import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import API from './api';
import TopStories from './TopStories';
import Loading from './Loading';

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

// const DevInfo = styled.div`
//     font-size: 1rem;
//     padding: 0.25rem;
//     color: green;
// `;

export default function Default() {
	const [stories, setStories] = useState([]);
	const [totalStories, setTotalStories] = useState();
	const [loading, setLoading] = useState(true);
	const [view, setView] = useState('top');

	const getStories = async () => {
		const stories = await API.topStories();
		setTotalStories(stories.length);
		const temp = [];

		let i = 0;
		/* eslint-disable */
		for (const storyIndex in stories) {
			const storyId = stories[storyIndex];
			const story = await API.item(storyId);
			temp.push(story);

			i++;

			if (i >= 40) {
				break;
			}
		}
        /* eslint-enable */
		setStories(temp);
		setLoading(false);
	};

	console.log(totalStories);

	useEffect(() => {
		getStories();
	}, []);

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
				{/* <DevInfo>
                        Total Stories: {totalStories}
                        {' '}
                        Stories displaying: {stories.length}
                    </DevInfo> */}
				{loading && (
					<Loading />
				)}
				{!loading && (
					<TopStories stories={stories} />
				)}
			</Wrapper>
		</>
	);
}
