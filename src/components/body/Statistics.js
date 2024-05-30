import { ListStatistics, Row, RowItem, StatisticContainer, StatisticsStyle } from "../../styled-components/body/Statistics.js"
import ButtonStyle from "../../styled-components/general/Button.js"
import Light from "../../styled-components/general/Light.js"

const Statistics = () => {

    return (
        <StatisticsStyle>
            <StatisticContainer>
                <ListStatistics>
                    <Row>
                        <RowItem>
                            <h1>12 600+</h1>
                            <p>Motoristas</p>
                        </RowItem>
                        <RowItem>
                            <h1>24</h1>
                            <p>Escritorios ao redor do Brasil</p>
                        </RowItem>
                        <RowItem>
                            <h1>540+</h1>
                            <p>Funcionários</p>
                        </RowItem>
                        <RowItem>
                            <h1>88 000+</h1>
                            <p>Pedidos por dia</p>
                        </RowItem>
                    </Row>

                </ListStatistics>
            </StatisticContainer>
            <StatisticContainer>
                <ButtonStyle>
                    <Light />
                    <a href="/">Solicitar Serviço</a>
                </ButtonStyle>
            </StatisticContainer>

        </StatisticsStyle>
    )
}

export default Statistics