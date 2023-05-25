import { NavLink } from "react-router-dom"
import { styled } from "styled-components"
import { Logo } from "components/Logo";
import {ReactComponent as IconDashBoard} from "components/assets/iconDashboard.svg";
import {ReactComponent as IconMarket} from "components/assets/market.svg";
import etherImg from "components/assets/Ethereum-blue.svg";
import { Button } from "components/Button";

const StyleSideBar = styled.div`
    background-color: white;
    width: 20%;
    float: left;
    height: 1368px;
    border-radius: 10px;
    div.text-nav {
        width: 58px;
        height: 16px;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        margin-left: 20%;
        margin-top: 45px;
    }

    div.balance {
        width: 228px;
        height: 220px;
        margin: 25% 10%;
        padding-top: 10px;
        background: linear-gradient(228.89deg, #5429FF 1.12%, #BBAAFF 100%);
        border-radius: 16px;
        text-align: center;
        div {
            margin-top: 27px;
            position: relative;
        }
        div img:first-child {
            position: absolute;
            top: 10px;
            left: 55px;
        }
        div img:last-child {
            position: absolute;
            top: 10px;
            right: 55px;
        }
    }
    > div:hover svg {
        fill: #6ec4f5;
        path{
            stroke: #5429FF;
        }
    }
`
const StyleNavLink = styled.div`
    margin-top: 27px;
    margin-left: 20%;
    display: flex;
    a {
        margin-left: 20px;
        width: 91px;
        height: 21px;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        text-decoration: none;
    }
`
const NavItem = ({path, text, children}) => {
    return (
        <StyleNavLink>
            {children}
            <NavLink to={path}>{text}</NavLink>
        </StyleNavLink>
   )
}


const SideBar = () => {
    return (
        <StyleSideBar>
            <Logo></Logo>
            <NavItem path={'/'} text={'Dashboard'}><IconDashBoard/></NavItem>
            <NavItem path={'/home'} text={'Market'}><IconMarket/></NavItem>
            <NavItem path={'/'} text={'Active Bids'}><IconMarket/></NavItem>
            <div className="text-nav">Profile </div>
            <NavItem path={'/home'} text={'My Portfolio'}><IconMarket/></NavItem>
            <NavItem path={'/'} text={'Wallet'}><IconMarket/></NavItem>
            <NavItem path={'/home'} text={'Favourites'}><IconMarket/></NavItem>
            <NavItem path={'/'} text={'History'}><IconMarket/></NavItem>
            <NavItem path={'/home'} text={'Settings'}><IconMarket/></NavItem>
            <div className="text-nav">Other</div>
            <NavItem path={'/home'} text={'Light Mode'}><IconMarket/></NavItem>
            <div className="balance">
                <div>Your Balance</div>
                <div>1,034.02</div>
                <div>ETH</div>
                <div>
                    <img src={etherImg} alt="" />
                    <Button btnText={"Discover"} isText={true} width={"128"} height={"46"} radius={40} bgColor={'#FFFFFF'}></Button>
                    <img src={etherImg} alt="" />
                </div>
            </div>
        </StyleSideBar>
    )
}

export default SideBar;