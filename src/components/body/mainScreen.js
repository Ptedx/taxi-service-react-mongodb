import { MainScreenStyled } from "../../styled-components/body/mainScreen.js"
import Form from "./form.js"
import Presentation from "./Presentation.js"

const MainScreen = ()=>{

    return (
        <MainScreenStyled>
            <Presentation />
            <Form />
        </MainScreenStyled>
    )
}

export default MainScreen