import FadeAnimation from "../../styled-components/general/FadeAnimation.js"

const Presentation = ()=>{
    //Aplicar a animação de fadein na imagem 
    return (
        <div>
            <h1>Ganhe até R$4000
                    como taxista
                    na The Luxury</h1>
            <FadeAnimation>
                <img src="/img/bg.png" alt="background car" width="100%"></img>
            </FadeAnimation>
        </div>
    )
}

export default Presentation