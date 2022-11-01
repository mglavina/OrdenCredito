import React from 'react'
import styled from '@emotion/styled'
import HistoricoTable from '../../components/historicoTable/HistoricoTable';

const HistoricoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80vw;
    margin: 0 auto;
`;

const Home = () => {
  return (
        <HistoricoContainer>
            <HistoricoTable />
        </HistoricoContainer>
  )
}

export default Home