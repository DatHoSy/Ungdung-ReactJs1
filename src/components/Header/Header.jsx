import { styled } from "styled-components";
import search from "../assets/search.svg";
import notify from "../assets/notify.svg";
import userImg from "../assets/user.svg";

const StyleHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
        position: relative;
        width: 461px;
        height: 56px;
        background: #FFFFFF;
        border-radius: 35px;
        border: none;
        text-indent: 60px;
        font-size: 15px;
        outline: none;
    }
    div.notify {
        display: flex;
        width: 56px;
        height: 56px;
        border: 1px solid #E9E9E9;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: white;
    }
    div.search {
        position: relative;
    }
    div.search img {
        position: absolute;
        z-index: 99;
        top: 18px;
        left: 24px;
    }
    div:last-child {
        display: flex;
        align-items: center;
        gap: 20px;
    }
`

const Header = () => {
    return (
        <StyleHeader>
            <div className="search">
                <img src={search} alt="" />
                <input type="text" placeholder="Search Item, Collection and Account.."/>
            </div>
            <div>
                <div className="notify"><img src={notify} alt="" /></div>
                <div className="userImg"><img src={userImg} alt="" /></div>
            </div>
        </StyleHeader>
    )
}

export default Header;