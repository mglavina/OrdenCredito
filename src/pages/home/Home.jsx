import React from 'react'
import styled from '@emotion/styled'
import OrdersTable from '../../components/OrdersTable/OrdersTable';

const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    margin: 0 auto;
`;

const Home = () => {
  return (
        <HomeContainer>
            <OrdersTable />
        </HomeContainer>
  )
}

export default Home