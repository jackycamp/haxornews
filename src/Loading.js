import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Wrapper = styled.div`
    text-align: center;
    padding-top: 5rem;
`;
const Spin = keyframes`
    from{
        transform:rotate(0deg);
    }
    to{
        transform:rotate(360deg);
    }
`;

const LoadingIcon = styled(AiOutlineLoading3Quarters)`
    font-size: 5rem;
    color: green;
    animation: ${Spin} 1s infinite;
`;

export default function Default() {
	return (

		<Wrapper>
			<LoadingIcon />
		</Wrapper>
	);
}
