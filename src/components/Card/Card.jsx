import { styled } from "styled-components";
import etherImg from "components/assets/Ethereum-blue.svg"


const StyleDiv = styled.div`
    width : 164px;
    height: 167px;
    padding: 20px;
    color: black;
    background: #FFFFFF;
    border-radius: 12px;
    text-align: left;
    div span:first-child {
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;
    }
    div span:last-child {
        font-weight: 300;
        font-size: 12px;
        line-height: 13px;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;


export const Card = ({ isSrcImg, title, amount, unit, children, ...rest }) => {
    return (
        <StyleDiv>
            <span>{title}</span>
            <div><span>{isSrcImg && <img src={etherImg} alt="" />} {amount}</span> <span>{unit}</span></div>
            {children}
        </StyleDiv>
    );
}