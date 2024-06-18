import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Checkbox, FormItem } from "../../styled-components/body/form.js";
import ButtonStyle from '../../styled-components/general/Button.js';
import Light from "../../styled-components/general/Light.js";
const Form = () => {
    const [formRawData, setFormRawData] = useState({
        name: '',
        email: '',
        cellphone: ''
    });
    const ClickerREF = useRef();
    useEffect(() => {
        ClickerREF.current.focus();
    }, []);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormRawData((prevData) => (Object.assign(Object.assign({}, prevData), { [name]: value })));
    };
    const handleRegister = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3002/send', formRawData)
            .then(response => {
            alert(`Dados enviados com sucesso! Bem vindo ${response.data.name}!`);
            setFormRawData({ name: '', email: '', cellphone: '' });
        })
            .catch(error => {
            alert('Erro ao enviar dados:', error);
            setFormRawData({ name: '', email: '', cellphone: '' });
        });
    };
    return (_jsxs("div", { children: [_jsx("h1", { children: "Conecte-se agora mesmo" }), _jsx("span", { children: "\u00C9 bem rapidinho" }), _jsxs("form", { onSubmit: handleRegister, children: [_jsxs(FormItem, { children: [_jsx("label", { htmlFor: "name", children: _jsx("img", { src: "/img/user.png", width: "25px", alt: "User" }) }), _jsx("input", { ref: ClickerREF, type: "text", name: "name", required: true, value: formRawData.name, onChange: handleChange, placeholder: "Digite seu nome" })] }), _jsxs(FormItem, { children: [_jsx("label", { htmlFor: "email", children: _jsx("img", { src: "/img/email-register.png", width: "25px", alt: "Email register" }) }), _jsx("input", { type: "email", name: "email", required: true, value: formRawData.email, onChange: handleChange, placeholder: "Digite seu melhor e-mail" })] }), _jsxs(FormItem, { children: [_jsx("label", { htmlFor: "tel", children: _jsx("img", { src: "/img/cellphone.png", width: "25px", alt: "cellphone" }) }), _jsx("input", { type: "tel", name: "cellphone", required: true, value: formRawData.cellphone, onChange: handleChange, placeholder: "Digite seu n\u00FAmero de telefone" })] }), _jsxs(ButtonStyle, { children: [_jsx(Light, {}), _jsx("input", { type: "submit", value: "Enviar" })] }), _jsx(Checkbox, { children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", name: "checkbox", defaultChecked: true }), _jsxs("span", { children: ["Ao enviar as informa\u00E7\u00F5es eu aceito os ", _jsx("a", { href: "/", children: "termos de uso da The Luxury" })] })] }) })] })] }));
};
export default Form;
