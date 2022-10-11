import React from 'react'
import { CSVLink } from "react-csv";
import styled from '@emotion/styled';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const ExportCsvStyled = styled(CSVLink)`
    background-color: #6c99cc;
    color: white;
    padding: 8px;
    border-radius: 5px;
    align-self:end;
    margin-bottom: 10px;
    svg{
        margin-bottom: -6px;
    }
`;
const ExportCsvButton = ({data}) => {
    const dateOfDownload = new Date(Date.now())
  return (
    <ExportCsvStyled data={data} separator={";"} filename={`OCREDS_${dateOfDownload.toLocaleDateString()}`}>
        <FileDownloadIcon />
    Descargar CSV
    </ExportCsvStyled>
  )
}

export default ExportCsvButton