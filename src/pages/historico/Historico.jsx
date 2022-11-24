import React from 'react'
import styled from '@emotion/styled'
import HistoricoTable from '../../components/historicoTable/HistoricoTable';

const HistoricoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90vw;
    margin: 0 auto;
    margin-top: 2rem;
`;

const Home = () => {
  return (
        <HistoricoContainer>
            <HistoricoTable />
        </HistoricoContainer>
  )
}

export default Home