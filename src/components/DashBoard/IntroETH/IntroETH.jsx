import { styled } from "styled-components";
import Rectangle from "components/assets/Rectangle.svg";
import { Button } from "components/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const StyleIntro = styled.div`

    .legend {
        background: none !important;
        text-align: left !important;
        opacity: 0.75;
    }

    .legend{
        button {
            margin-left: 15px;
        }
    }

    .legend1 {
        position: absolute;
        top: 38px;
        left: 50%;
        margin-left: -45%;
        width: 90%;
        border-radius: 10px;
        color: #fff;
        padding: 10px;
        font-size: 12px;
        text-align: left;
    }
    .legend1 span {
        font-size: 54px;
        line-height: 65px;
        line-height: 120%;
        color: white;
    }
`;
export const IntroETH = () => {
    return (
        <StyleIntro>
            <Carousel autoPlay
                interval={2500}
                showArrows={true}
                showThumbs={false}
            >
                <div>
                    <img src={Rectangle} />
                    <p className="legend1">
                        <span>Discover, Create and Sell Your Own NFT.</span>
                    </p>
                    <p className="legend">
                        <div>
                            <Button btnText={"Discover"} isText={true} width={"128"} height={"46"} radius={40} bgColor={'#FFFFFF'}></Button>
                            <Button className="btn2" btnText={"Create"} isText={true} width={"115"} height={"46"} radius={40} bgColor={'transparent'}></Button>
                        </div>
                    </p>
                </div>
                <div>
                    <img src={Rectangle} />
                    <p className="legend1">
                        <span>Discover, Create and Sell Your Own NFT.</span>
                    </p>
                    <p className="legend">
                        <div>
                            <Button btnText={"Discover"} isText={true} width={"128"} height={"46"} radius={40} bgColor={'#FFFFFF'}></Button>
                            <Button className="btn2" btnText={"Create"} isText={true} width={"115"} height={"46"} radius={40} bgColor={'transparent'}></Button>
                        </div>
                    </p>
                </div>
                <div>
                    <img src={Rectangle} />
                    <p className="legend1">
                        <span>Discover, Create and Sell Your Own NFT.</span>
                    </p>
                    <p className="legend">
                        <div>
                            <Button btnText={"Discover"} isText={true} width={"128"} height={"46"} radius={40} bgColor={'#FFFFFF'}></Button>
                            <Button className="btn2" btnText={"Create"} isText={true} width={"115"} height={"46"} radius={40} bgColor={'transparent'}></Button>
                        </div>
                    </p>
                </div>
            </Carousel>
        </StyleIntro>
    )
}

