import React, {useState} from 'react';
import {FaAngleRight, FaAngleDown, FaShareAlt, FaComment} from 'react-icons/fa';
import styled from 'styled-components';

const StoryWrapper = styled.div`
    padding: 1rem;
    background-color: #0c0c0d; 
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* border: 2px solid white; */
    :hover{
        background-color: #161617;
    }
`;

const Header = styled.div`
    display: flex;
    padding: 1rem;
`;

const Title = styled.div`
    font-size: 1.3rem;
    flex-basis: 90%;
    color: green;
`;

const Score = styled.div`
    flex-basis: 10%;
    text-align: right;
    color: grey;
`;

const Details = styled.div`
    display: flex;
    margin-left: 5rem;
    /* padding: 1rem; */
    /* height: 2rem; */
`;

const Author = styled.div`
    flex-basis: 10%;
    color: green;
`;

const Time = styled.div`
    margin: 0 1rem 0 1rem;
    color: green;
`;

const Url = styled.div`
    color: green;
    /* :hover {
        color: grey;
    } */
`;

const ChevronRight = styled(FaAngleRight)`
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.75rem;
    margin-right: 0.25rem;
    color: green;
`;

const ChevronDown = styled(FaAngleDown)`
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.75rem;
    margin-right: 0.25rem;
    color: green;
`;

const OpenStory = styled(FaShareAlt)`
    margin: 0 1rem 0 1rem;
    color: green;
    &:hover {
        color: white;
    }
`;

const Comments = styled.div`
    margin: 0 1rem 0 1rem;
    color: green;
`;

const CommentIcon = styled(FaComment)`
    color: green;
    :hover{
        color: grey;
        cursor: pointer;
    }
`;

export default function Default(props){
    const {id, author, kids, score, time, title, url} = props;
    const [showDetails, setShowDetails] = useState(false);

    const openStory = (e) => {
        e.stopPropagation();
        window.open(url, '', 'width=700,height=800,resizable=yes,top=0,left=800');

    };
    
    const date = new Date(time * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();
    const formattedDate = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;

    return (
        <StoryWrapper onClick={() => setShowDetails(!showDetails)}>
        <Header>
            {showDetails && (<ChevronDown />)}
            {!showDetails && ( <ChevronRight />)}
            <Title>
                {title}
            </Title>
            <Url>
                    <OpenStory onClick={(e) => {openStory(e)}}/>
            </Url>
            <Score>
                {score}
            </Score>
        </Header>
        {showDetails && (
            <Details>
                {/* {author && (
                    <Author>
                        {author}
                    </Author>
                )} */}
                {time && (
                    <Time>
                        When: {formattedDate}
                    </Time>
                )}
                <Comments>
                    {(kids) ? kids.length : 0}
                    {' '}
                    <CommentIcon />
                </Comments>

                {/* <Url>
                    <OpenStory onClick={(e) => {openStory(e)}}/>
                </Url> */}
            </Details>
        )}
    </StoryWrapper>
    );

}