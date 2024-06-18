import { MainScreenStyled } from "../../styled-components/body/mainScreen.tsx"
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