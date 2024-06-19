import { AdvantagesItem, AdvantagesStyle, Photo } from "../../styled-components/body/AdvantagesSection.tsx"
import ButtonStyle from "../../styled-components/general/Button.tsx"
import FadeAnimation from "../../styled-components/general/FadeAnimation.tsx"
import Light from "../../styled-components/general/Light.tsx"

const AdvantagesSection =()=>{

    return (
        <AdvantagesStyle id="beneficts">
            <AdvantagesItem>
                <FadeAnimation>
                    <Photo bg='/img/foto.png' />
                </FadeAnimation>
                <div>
                    <h1>Encomendas à sua escolha</h1>
                    <p>Estão disponíveis vários tipos de distribuição de ordens: atribuição automática de 
                        uma ordem com prioridade entre outros motoristas e bônus pessoais, atribuição de uma
                         ordem com possibilidade de recusa de sua execução, seleção de ordens em uma lista.</p>
                </div>
            </AdvantagesItem>
            <AdvantagesItem>
                <FadeAnimation>
                    <Photo bg='/img/foto2.png' />
                </FadeAnimation>
                <div>
                    <h1>Agregador favorável e comissões de parque</h1>
                    <p>Comissão Yandex Taxi para carros de marca de 15% e comissão de frota de 3%. Bônus e 
                        metas pessoais, renda garantida por determinado número de horas de plantão.</p>
                </div>
            </AdvantagesItem>
            <AdvantagesItem>
                <FadeAnimation>
                    <Photo bg='/img/foto3.png' />
                </FadeAnimation>
                <div>
                    <h1>Retirada instantânea a qualquer hora do dia</h1>
                    <p>Use a interface conveniente de retirada em nosso site para isso.</p>
                    <ButtonStyle>
                        <Light />
                        <a href="/">Contatos</a>
                    </ButtonStyle>
                </div>
            </AdvantagesItem>
            <AdvantagesItem>
                <FadeAnimation>
                    <Photo bg='/img/foto4.png' />
                </FadeAnimation>
                <div>
                    <h1>Suporte qualificado e rápido</h1>
                    <p>Ligue-nos durante o horário comercial ou escreva para o messenger - 
                        seu problema não ficará sem solução.</p>
                    <ButtonStyle>
                        <Light />
                        <a href="/">Solicitar Serviço</a>
                    </ButtonStyle>
                </div>
            </AdvantagesItem>
        </AdvantagesStyle>
    )
}

export default AdvantagesSection