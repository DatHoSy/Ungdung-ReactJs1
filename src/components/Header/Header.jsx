import { styled } from "styled-components";
import search from "../assets/search.svg";
import notify from "../assets/notify.svg";
import userImg from "../assets/user.svg";
import { Link } from "react-router-dom";
import { Logout } from "API";

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
    div.userLogin {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    div.userImg {
        position: relative;

        .list {
            position: absolute;
            display: none;
            background-color: white;
            border-radius: 10px;
            z-index: 1;
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        ul li {
            margin: 5px 10px;
        }

        ul li a {
            text-decoration: none;
        }

        ul li:hover {
            background-color: #c2f7f0;
            cursor: pointer;
        }
    }

    div.userImg:hover .list {
        display: block;
    }
`

const Header = () => {
    return (
        <StyleHeader>
            <div className="search">
                <img src={search} alt="" />
                <input type="text" placeholder="Search Item, Collection and Account.." />
            </div>
            <div className="userLogin">
                <div className="notify"><img src={notify} alt="" /></div>
                <div className="userImg">
                    <img className="toggle" src={userImg} alt="" />
                    <ul class="list">
                        <li>Setting</li>
                        <li onClick={() => Logout()}>Logout</li>
                    </ul>
                </div>
            </div>
        </StyleHeader>
    )
}

export default Header;