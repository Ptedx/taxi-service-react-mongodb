import { FooterRow, FooterStyle, Footitem } from "../../styled-components/footer/Footer.js"

const Footer = ()=>{

    return(
        <FooterStyle>
            <FooterRow>
                <Footitem>
                    <p>Copyright © 2023 Vinicius Costa. All rights reserved.</p>
                </Footitem>
                <Footitem>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms of Use</a>
                    <a href="/">Sales and Refunds</a>
                    <a href="/">Legal</a>
                    <a href="/">Site Map</a>
                </Footitem>
                
            </FooterRow>
        </FooterStyle>
    )
}

export default Footer