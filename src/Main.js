import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {API} from './api';
import Story from './Story';

const Wrapper = styled.div`
    padding: 1rem;
`;

const StoryContainer = styled.div`
    margin-top: 0.5rem;
`;

const DevInfo = styled.div`
    font-size: 1rem;
    color: green;
`;

export default function Default(){
    const [stories, setStories] = useState([]);
    const [totalStories, setTotalStories] = useState();

    const getStories = async () => {
        const stories = await API.topStories();
        setTotalStories(stories.length);
        const temp = [];

        let i = 0;
        for (let storyIndex in stories){
            const storyId = stories[storyIndex];
            const story = await API.item(storyId);
            temp.push(story);

            i++;

            if(i >= 40){
                break;
            }

        }
        setStories(temp);
    }

    useEffect(() => {
        getStories();
    }, [])
    
    return(
        <>
            <Wrapper>
                <DevInfo>
                    Total Stories: {totalStories}
                    {' '}
                    Stories displaying: {stories.length}
                </DevInfo>
                    {stories.map((story) => (
                        <StoryContainer key={story.id}>
                            <Story {...story} />
                        </StoryContainer>
                    ))}
            </Wrapper>
        </>
    );
}