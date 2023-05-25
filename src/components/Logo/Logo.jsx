import { styled } from "styled-components";
import imgLogo from 'components/assets/Logo.svg'

const StyleLogo = styled.div`
    display: flex;
    margin-left: 20%;
    margin-bottom: 15%;
    margin-top: 24px;
    gap: 10px;
    div {
        display: flex;
        flex-direction: column;
    }
    div span:first-child {
        width: 94px;
        height: 36px;
        font-weight: 700;
        font-size: 28px;
        line-height: 36px;
    }
`

export const Logo = () => {
    return (
        <StyleLogo>
            <img src={imgLogo} alt="" />
            <div>
                <span>MyNFT</span>
                <span>NFT Marketplace</span>
            </div>
        </StyleLogo>
    )
}