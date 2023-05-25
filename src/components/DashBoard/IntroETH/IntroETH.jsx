import { styled } from "styled-components";
import Rectangle from "components/assets/Rectangle.svg";
import { Button } from "components/Button";

const StyleIntro = styled.div`
    position: relative;
    > img {
        width: 716px;
        height: 354px;
    }
    /* div {
        position: absolute;
        top: 77px;
        left: 60px;
    } */
    span {
        top: 77px;
        left: 60px;
        position: absolute;
        width: 536px;
        height: 130px;
        font-weight: 700;
        font-size: 54px;
        line-height: 120%;
        color: white;
    }
    div {
        position: absolute;
        bottom: 77px;
        left: 60px;
        display: flex;
        gap: 15px;
    }
    Button.btn2 {
        color: white;
    }
`
export const IntroETH = () => {
    return (
        <StyleIntro>
            <img src={Rectangle} alt="" />
            <span>Discover, Create and Sell Your Own NFT.</span>
            <div>
                <Button btnText={"Discover"} isText={true} width={"128"} height={"46"} radius={40} bgColor={'#FFFFFF'}></Button>
                <Button className="btn2" btnText={"Create"} isText={true} width={"115"} height={"46"} radius={40} bgColor={'transparent'}></Button>
            </div>
        </StyleIntro>
    )
}

