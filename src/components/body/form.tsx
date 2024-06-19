import { useState, useEffect, useRef, ChangeEvent, FormEvent} from "react"
import axios from "axios"
import { Checkbox, FormItem } from "../../styled-components/body/form"
import ButtonStyle from '../../styled-components/general/Button'
import Light from "../../styled-components/general/Light"

interface formDataProps {
    name: string,
    email: string,
    cellphone: string
}

const Form = () => {
    const [formRawData, setFormRawData] = useState<formDataProps>({
        name: '',
        email: '',
        cellphone: ''
    })
    const ClickerREF = useRef<HTMLInputElement>(null)

    useEffect(() => {
        ClickerREF.current?.focus()
    }, [])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormRawData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    const handleRegister = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios.post('http://localhost:3002/send', formRawData)
            .then(response => {
                alert(`Dados enviados com sucesso! Bem vindo ${response.data.name}!`)
                setFormRawData({name: '', email: '', cellphone: ''})
            })
            .catch((error: unknown) => {
                if (error instanceof Error){
                    alert(`Error: ${error.message}`)
                }else{
                    alert("Error: unexpected error!")
                }
                setFormRawData({name: '', email: '', cellphone: ''})
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