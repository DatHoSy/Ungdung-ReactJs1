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
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        color: black;
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
        path{
            stroke: #217ffa;
        }
    }
    svg {
        path {
            fill: none;
            stroke: #9c9c9c;
        }
    }
    .active {
        svg {
            path {
                stroke: #217ffa;
            }
        }
        color: #217ffa;
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


const NavItem = ({path, children}) => {
    return (
        <StyleNavLink>
            <NavLink to={path}>{children}</NavLink>
        </StyleNavLink>
   )
}


const SideBar = () => {
    return (
        <StyleSideBar>
            <Logo></Logo>
            <NavItem className="navItemCss" path={'/home'} text={'Dashboard'}>
                <IconDashBoard/>
                <span>Dashboard</span>
            </NavItem>
            <NavItem className="navItemCss" path={'/about'} text={'Market'}>
                <IconMarket/>
                <span>Market</span>
            </NavItem>
            <NavItem className="navItemCss" path={'*'} text={'Active Bids'}>
                <IconMarket/>
                <span>Active Bids</span>
            </NavItem>
            <div className="text-nav">Profile </div>
            <NavItem className="navItemCss" path={'*'} text={'My Portfolio'}>
                <IconMarket/>
                <span>My Portfolio</span>
            </NavItem>
            <NavItem className="navItemCss" path={'*'} text={'Wallet'}>
                <IconMarket/>
                <span>Wallet</span>
            </NavItem>
            <NavItem className="navItemCss" path={'*'} text={'Favourites'}>
                <IconMarket/>
                <span>Favourites</span>
            </NavItem>
            <NavItem className="navItemCss" path={'*'} text={'History'}>
                <IconMarket/>
                <span>History</span>
            </NavItem>
            <NavItem className="navItemCss" path={'*'} text={'Settings'}>
                <IconMarket/>
                <span>Settings</span>
            </NavItem>
            <div className="text-nav">Other</div>
            <div className="lightMode">
                <NavItem className="navItemCss" path={'*'} text={'Light Mode'}>
                    <IconMarket/>
                    <span>Light Mode</span>
                </NavItem>
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