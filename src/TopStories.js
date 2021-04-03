import React from 'react';
import styled from 'styled-components';
import Story from './Story';

const StoryContainer = styled.div`
    margin-top: 0.5rem;
`;

export default function Default(props) {
	const { stories } = props;

	return (
		<StoryContainer>
			{stories.map((story) => (
				<StoryContainer key={story.id}>
					<Story {...story} />
				</StoryContainer>
			))}
		</StoryContainer>
	);
}
