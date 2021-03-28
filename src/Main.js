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

const Nav = styled.div`
    display: flex;
`;

const NavItem = styled.div`
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

const DevInfo = styled.div`
    font-size: 1rem;
    padding: 0.25rem;
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
                <Nav>
                    <Header>
                        Haxornews
                        
                    </Header>
                    <NavItem>
                        Top
                    </NavItem>
                    <NavItem>
                        New
                    </NavItem>
                    <NavItem>
                        Best
                    </NavItem>
                    <NavItem>
                        Jobs
                    </NavItem>
                    <NavItem>
                        Info
                    </NavItem>

                </Nav>
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