import styled from "@emotion/styled"
import { levelCalculator } from "../../utils/utils";

const TotalContainer = styled.div`
    width: 80vw;
    margin: 1.5rem 0rem;
`;
const HrTotal = styled.hr`
    border-top: .5rem solid #6c99cc;
    border-radius: 2px;
`;
const TotalData = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    span{
        font-size: 2rem;
    }
`;

const Total = ({total}) => {
  return (
    <TotalContainer>
        <HrTotal/>
        <TotalData>
            <span>Importe total :</span>
            <span>{(Number(total)* (-1)).toCurrency()}</span>
        </TotalData>    
        <TotalData>
            <span>Nivel :</span>
            <span>{levelCalculator(Number(total)* (-1))}</span>
        </TotalData>    
    </TotalContainer>
  )
}

export default Total