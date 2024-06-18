import styled from "styled-components";

export const StatisticsStyle = styled.div`
    background-color: #000;
    color: white;
    min-height: 200px;
    padding: 80px 0 60px 0;
    border-radius: 5px;
    text-align: center;
`
export const StatisticContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const ListStatistics = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`

export const RowItem = styled.div`
    text-align:center;
    width: 50%;

    @media (max-width: 767px){
        width: 25%; 
    }
`