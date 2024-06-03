import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { Checkbox, FormItem } from "../../styled-components/body/form.js"
import ButtonStyle from '../../styled-components/general/Button.js'
import Light from "../../styled-components/general/Light.js"

const Form = () => {
    const [formRawData, setFormRawData] = useState({
        name: '',
        email: '',
        cellphone: ''
    })
    const ClickerREF = useRef()

    useEffect(()=>{
        ClickerREF.current.focus()
    },[])

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormRawData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleRegister = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3002/send', formRawData)
            .then(response => {
                alert(`Dados enviados com sucesso! Bem vindo ${response.data.name}!`)
            })
            .catch(error => {
                alert('Erro ao enviar dados:', error);
            });
    }

    return (
        <div>
            <h1>Conecte-se agora mesmo</h1>
            <span>É bem rapidinho</span>
            <form onSubmit={handleRegister}>
                <FormItem>
                    <label htmlFor="name"><img src="/img/user.png" width="25px" alt="User" /></label>
                    <input ref={ClickerREF} type="text" name="name" required value={formRawData.name} onChange={handleChange} placeholder="Digite seu nome" />
                </FormItem>
                <FormItem>
                    <label htmlFor="email"><img src="/img/email-register.png" width="25px" alt="Email register" /></label>
                    <input type="email" name="email" required value={formRawData.email} onChange={handleChange} placeholder="Digite seu melhor e-mail" />
                </FormItem>
                <FormItem>
                    <label htmlFor="tel"><img src="/img/cellphone.png" width="25px" alt="cellphone" /></label>
                    <input type="tel" name="cellphone" required value={formRawData.cellphone} onChange={handleChange} placeholder="Digite seu número de telefone" />
                </FormItem>
                <ButtonStyle>
                    <Light />
                    <input type="submit" value="Enviar" />
                </ButtonStyle>
                <Checkbox>
                    <label><input type="checkbox" name="checkbox" defaultChecked />
                        <span>Ao enviar as informações eu aceito os <a href="/">termos
                            de uso da The Luxury</a></span></label>
                </Checkbox>
            </form>
        </div>
    )
}

export default Form