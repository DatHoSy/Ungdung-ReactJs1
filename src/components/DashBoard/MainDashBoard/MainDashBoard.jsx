import { styled } from "styled-components";
import { IntroETH } from "../IntroETH/IntroETH";
import { Card } from "../Card";
import { Content } from "../Content/Content";
import { TopCreator } from "../TopCreator";
import { Button } from "components/Button";
import { CardArt } from "../CardArt";


const StyleDasboard = styled.div`
    .card {
    display: flex;
    justify-items: center;
    gap: 20px;
    }

    .introEth {
        display: flex;
        margin-top: 40px;
        gap: 20px;
    }

    div .card:last-child {
        margin-top: 20px;
    }
    .content {
        display: flex;
        margin-top: 32px;
        gap: 20px;
    }
`

export const MainDashBoard = () => {
    return (
        <StyleDasboard>
            <div className="introEth">
                <IntroETH></IntroETH>
                <div>
                    <div className="card">
                        <Card isSrcImg={true} title={"Revenue"} amount={"5.00"} unit={"ETH"}>
                            <Button btnText={"12.3"} width={"115"} height={"46"} radius={'12'} bgColor={'#FFFFFF'}>%</Button>
                        </Card>
                        <Card isSrcImg={true} title={"Spending"} amount={"2.00"} unit={"ETH"}>
                            <Button btnText={"8.1"} width={"115"} height={"46"} radius={'12'} bgColor={'#FFFFFF'}>%</Button>
                        </Card>
                    </div>
                    <div className="card">
                        <Card isSrcImg={false} title={"ROI"} amount={"+14.02"} unit={"ETH"}>
                            <Button btnText={(-5.1)} width={"115"} height={"46"} radius={'12'} bgColor={'#FFFFFF'}>%</Button>
                        </Card>
                        <Card isSrcImg={true} title={"Estimated"} amount={"7.00"} unit={"ETH"}>
                            <Button btnText={"3.2"} width={"115"} height={"46"} radius={'12'} bgColor={'#FFFFFF'}>%</Button>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="content">
                <Content>
                    <div className="card">
                        <CardArt></CardArt>
                        <CardArt></CardArt>
                    </div>
                    <div className="card">
                        <CardArt></CardArt>
                        <CardArt></CardArt>
                    </div>
                    
                </Content>
                <TopCreator></TopCreator>
            </div>
        </StyleDasboard>
    )
}
