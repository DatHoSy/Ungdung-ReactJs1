import { NavLink } from "react-router-dom"
import { styled } from "styled-components"
import { Logo } from "components/Logo";
import {ReactComponent as IconDashBoard} from "components/assets/iconDashboard.svg";
import {ReactComponent as IconMarket} from "components/assets/market.svg";
import addIcon from "components/assets/addIcon.svg";
import arrowIcon from "components/assets/arrowIcon.svg";
import ethSmallIcon from "components/assets/ethSmallIcon.svg";
import ethBigIcon from "components/assets/ethBigIcon.svg";
import { Button } from "components/Button";
import { Toggle } from "components/Toggle";

const StyleNavLink = styled.div`
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
`;

const StyleSideBar = styled.div`
    /* background-color: white; */
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
        position: relative;
        width: 228px;
        height: 220px;
        margin: 25% 10%;
        padding-top: 10px;
        background: linear-gradient(228.89deg, #5429FF 1.12%, #BBAAFF 100%);
        border-radius: 16px;
        text-align: center;
        div {
            margin-top: 24px;
        }

        div.subTitle {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        .btnTopUp {
            margin-top: 24px;
            position: relative;
            z-index: 99;
        }
        div.btnTopUp img:first-child {
            position: absolute;
            top: 13px;
            left: 30px;
        }
        div.btnTopUp img:last-child {
            position: absolute;
            top: 19px;
            right: 30px;
        }
        > img {
            position: absolute;
            top: 62px;
            left: 20px;
        }
    }
    > div:hover svg {
        fill: #6ec4f5;
        path{
            stroke: #5429FF;
        }
    }
    > div {
        margin-top: 27px;
        margin-left: 20%;
    }
    div:first-child, .lightMode div {
        margin-top: none;
        margin-left: none;
    }
    .lightMode {
        margin: 27px 10px 0 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;


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
            <NavItem className="navItemCss" path={'/'} text={'Dashboard'}><IconDashBoard/></NavItem>
            <NavItem className="navItemCss" path={'/home'} text={'Market'}><IconMarket/></NavItem>
            <NavItem className="navItemCss" path={'/'} text={'Active Bids'}><IconMarket/></NavItem>
            <div className="text-nav">Profile </div>
            <NavItem className="navItemCss" path={'/home'} text={'My Portfolio'}><IconMarket/></NavItem>
            <NavItem className="navItemCss" path={'/'} text={'Wallet'}><IconMarket/></NavItem>
            <NavItem className="navItemCss" path={'/home'} text={'Favourites'}><IconMarket/></NavItem>
            <NavItem className="navItemCss" path={'/'} text={'History'}><IconMarket/></NavItem>
            <NavItem className="navItemCss" path={'/home'} text={'Settings'}><IconMarket/></NavItem>
            <div className="text-nav">Other</div>
            <div className="lightMode">
                <NavItem className="navItemCss" path={'/home'} text={'Light Mode'}><IconMarket/></NavItem>
                <Toggle></Toggle>
            </div>
            <div className="balance">
                <div>Your Balance</div>
                <div>1,034.02</div>
                <div className="subTitle">
                    <img src={ethSmallIcon} alt="" />
                    <span>ETH</span>
                </div>
                    
                <div className="btnTopUp">
                    <img src={addIcon} alt="" />
                    <Button btnText={"Top Up Balance"} isText={true} width={"196"} height={"49"} radius={12} bgColor={'#FFFFFF'}></Button>
                    <img src={arrowIcon} alt="" />
                </div>
                <img src={ethBigIcon} alt="" />
            </div>
        </StyleSideBar>
    )
}

export default SideBar;