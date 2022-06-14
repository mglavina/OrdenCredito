import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styled from '@emotion/styled';
const SpinnerContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #F6F8FA;
    position: absolute;
    top: 0%;
    z-index: 100;
`;

const Spinner = () => {
    return (
        <SpinnerContainer >
            <CircularProgress
             size={100}
             />
        </SpinnerContainer>
        );
}

export default Spinner
