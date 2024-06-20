import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ListStatistics, Row, RowItem, StatisticContainer, StatisticsStyle } from "../../styled-components/body/Statistics";
import ButtonStyle from "../../styled-components/general/Button";
import Light from "../../styled-components/general/Light";
const Statistics = () => {
    return (_jsxs(StatisticsStyle, { children: [_jsx(StatisticContainer, { children: _jsx(ListStatistics, { children: _jsxs(Row, { children: [_jsxs(RowItem, { children: [_jsx("h1", { children: "12 600+" }), _jsx("p", { children: "Motoristas" })] }), _jsxs(RowItem, { children: [_jsx("h1", { children: "24" }), _jsx("p", { children: "Escritorios ao redor do Brasil" })] }), _jsxs(RowItem, { children: [_jsx("h1", { children: "540+" }), _jsx("p", { children: "Funcion\u00E1rios" })] }), _jsxs(RowItem, { children: [_jsx("h1", { children: "88 000+" }), _jsx("p", { children: "Pedidos por dia" })] })] }) }) }), _jsx(StatisticContainer, { children: _jsxs(ButtonStyle, { children: [_jsx(Light, {}), _jsx("a", { href: "/", children: "Solicitar Servi\u00E7o" })] }) })] }));
};
export default Statistics;
