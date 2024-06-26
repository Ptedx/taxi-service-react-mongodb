import styled from "styled-components";
const Container = styled.div `
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 768px) {
        &{
        max-width: 750px;
    }
    }
    @media (min-width: 992px) {
        &{
        max-width: 960px;
        }
    }
    @media (min-width: 1200px) {
        &{
        max-width: 1140px;
        }
    }
`;
export default Container;
