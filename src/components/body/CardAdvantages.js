import { CardMainStyle } from "../../styled-components/body/CardAdvantages"


const CardAdvantages = () => {

    return (
        <CardMainStyle>
            <div>
                <img src="/img/cell-mobile.png" alt="mac & ios" />
                <p>Baixe o aplicativo Luxury+</p>
                <img src="/img/mac.svg" alt="mac & ios"/>
            </div>
            <div>
                <img src="/img/gps.png" alt="mac & ios" />
                <p>Cobertura no Brazil inteiro</p>
            </div>
            <div>
                <img src="/img/email.png" alt="mac & ios" />
                <p>Serviço disponível a qualquer momento</p>
            </div>
            <div>
                <img src="/img/credit-cards.png" alt="mac & ios" />
                <p>Pague tranquilamente utilizando seu cartão no App</p>
            </div>
        </CardMainStyle>
    )
}

export default CardAdvantages