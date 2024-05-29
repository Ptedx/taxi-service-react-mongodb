import { Checkbox, FormItem } from "../../styled-components/body/form"
import ButtonStyle from '../../styled-components/general/Button'

const Form = () => {

    return (
        <div>
            <h1>Conecte-se agora mesmo</h1>
            <span>É bem rapidinho</span>
            <form>
                <FormItem>
                    <label htmlFor="name"><img src="/img/user.png" width="25px" alt="User" /></label>
                    <input type="text" name="name" required placeholder="Digite seu nome" />
                </FormItem>
                <FormItem>
                    <label htmlFor="email"><img src="/img/email-register.png" width="25px" alt="Email register" /></label>
                    <input type="email" name="email" required placeholder="Digite seu melhor e-mail" />
                </FormItem>
                <FormItem>
                    <label htmlFor="tel"><img src="/img/cellphone.png" width="25px" alt="cellphone" /></label>
                    <input type="tel" name="tel" required placeholder="Digite seu número de telefone" />
                </FormItem>
                <ButtonStyle>
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