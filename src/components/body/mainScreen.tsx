import { MainScreenStyled } from "../../styled-components/body/mainScreen"
import Form from "./form"
import Presentation from "./Presentation"

const MainScreen = ()=>{

    return (
        <MainScreenStyled>
            <Presentation />
            <Form />
        </MainScreenStyled>
    )
}

export default MainScreen