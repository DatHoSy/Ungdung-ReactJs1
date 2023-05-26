import { Button } from "components/Button";
import { Logo } from "components/Logo";
import { Link } from "react-router-dom";
import crewImg from 'components/assets/crewImg.svg';
import eyeIcon from 'components/assets/eyeIcon.svg';
import { styled } from "styled-components";

const StyleLogin = styled.div`
    body {
        padding: 30px;
        background: linear-gradient(90deg, rgba(0, 131, 176, 0.366) 0%, rgba(140, 86, 255, 0.378) 66.67%);
    }

    position: relative;
    margin: auto;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 70%;
    background: linear-gradient(90deg, #FFFFFF 0%, #8c56ff60 66.67%);
    padding: 0 5%;
    border-radius: 40px;

    div.flex-left {
        flex-basis: 50%;
    }

    div:first-child {
        margin-left: 0;
        /* margin-bottom: 10%; */
        margin-top: 60px;
        gap: 10px;
    }

    div.flex-left h2 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 56px;
        line-height: 84px;
        color: #000000;
    }

    div.flex-left label {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
    }

    div.flex-right {
        /* flex-basis: 50%; */
        display: flex;
        align-items: flex-end;
        /* z-index: 10; */

    }

    /* div.flex-right img {
        width: inherit;
    } */

    .background-right {
        position: absolute;
        top: 0;
        right: 0;
        width: 35%;
        height: -webkit-fill-available;
        background: #C0DBEA;
        border-radius: 40px;
    }

    div.login-form {
        display: flex;
        flex-direction: column;
    }

    div.login-form .forgot-passw {
        display: flex;
        justify-content: space-between;
    }

    div.input-passw {
        position: relative;
    }

    div.input-passw img {
        position: absolute;
        top: 27px;
        right: 9px;
    }

    div.login-form .forgot-passw label:last-child {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 21px;
        opacity: 0.5;
        text-align: right;
    }

    div.login-form input {
        padding: 0;
        border: none;
        border-radius: 4px;
        height: 46px;
        margin: 10px 0;
        background-color: #C0DBEA;
        text-indent: 15px;
        width: 100%;
    }

    div.nav-form {
        margin-top: 10px;
        text-align: center;
    }

    /* div.nav-form button {
        position: relative;
        width: 150px;
        height: 46px;
        background: #D885A3;
        border-radius: 23px;
        border: none;
        cursor: pointer;
    } */

    div.nav-form p {
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #6096B4;
    }

    div.nav-form div a img {
        box-sizing: border-box;
        width: 125px;
        height: 50px;
        background: #FFFFFF;
        border: 1px solid #6096B4;
        border-radius: 40px;
        cursor: pointer;
    }

    div.nav-form p a {
        text-decoration: none;
        color: #D885A3;
    }

    .btnLogin {
        color: white;
    }

    @media screen and (max-width : 2560px) {

        div.flex-left h2 {
            font-size: 55px;
            line-height: 50px;
        }

        div.login-form input {
            height: 47px;
            text-indent: 10px;
        }

        div.input-passw img { 
            top: 27px;
            right: 5px;
        }

        div.nav-form button::after {
            top: 10px;
        }

        div.nav-form div a img  {
            width: 70px;
            height: 30px;
        }

        div.nav-form button {
            width: 125px;
            height: 40px;
        }

        div.flex-left label {
            font-size: 30px;
            line-height: 35px;
        }
        
        div.login-form .forgot-passw label:last-child {
            font-size: 20px;
            line-height: 35px;
        }

        div.flex-right img {
            width: 640px;
        }
    }

    @media screen and (max-width : 1440px) {

        div.flex-left h2 {
            font-size: 30px;
            line-height: 50px;
        }

        div.login-form input {
            height: 30px;
            text-indent: 10px;
        }

        div.input-passw img { 
            top: 20px;
            right: 5px;
        }

        div.nav-form button::after {
            top: 2px;
        }

        div.nav-form div a img  {
            width: 50px;
            height: 20px;
        }

        div.nav-form button {
            width: 100px;
            height: 30px;
        }

        div.flex-left label {
            font-size: 15px;
            line-height: 10px;
        }
        
        div.login-form .forgot-passw label:last-child {
            font-size: 8px;
            line-height: 10px;
        }

        div.flex-right img {
            width: 400px;
        }
    }

    @media screen and (max-width : 1024px) {
        div.flex-right img {
            width: 370px;
        }
    }

    @media screen and (max-width : 768px) {

        div.flex-left h2 {
            font-size: 30px;
            line-height: 15px;
        }

        div.login-form input {
            height: 20px;
            text-indent: 5px;
        }

        div.input-passw img {
            top: 15px;
            right: 0px;
        }

        div.nav-form button::after {
            top: -1px;
        }

        div.nav-form div a img  {
            width: 35px;
            height: 15px;
        }

        div.nav-form button {
            width: 80px;
            height: 25px;
        }

        div.nav-form p {
            font-size: 7px;
        }

        div.flex-left label {
            font-size: 15px;
            line-height: 10px;
        }
        
        div.login-form .forgot-passw label:last-child {
            font-size: 8px;
            line-height: 10px;
        }

        div.flex-right img {
            width: 280px;
        }
    }

    @media screen and (max-width : 425px) {
        width: 100%;
        justify-content: center;
        div.flex-left h2 {
            font-size: 20px;
            line-height: 5px;
        }

        div.login-form input {
            height: 12px;
            text-indent: 5px;
        }

        div.input-passw img {
            top: 13px;
            right: 2px;
            height: 6px;
        }

        div.nav-form button::after {
            top: -1px;
        }

        div.nav-form div a img  {
            width: 20px;
            height: 12px;
        }

        div.nav-form button {
            width: 70px;
            height: 20px;
        }

        div.nav-form p {
            font-size: 7px;
        }

        div.flex-left label {
            font-size: 10px;
            line-height: 5px;
        }
        
        div.login-form .forgot-passw label:last-child {
            font-size: 5px;
            line-height: 5px;
        }

        div.flex-right img {
            display: none;
        }
    }
`;

const LoginPage = () => {
    return (
       <StyleLogin>
            <div className="flex-left">
                <Logo></Logo>
                <h2>Log In</h2>
                 <div className="login-form">
                    <label for="user-name">Username</label>
                    <input id="user" type="text" value="kminchelle"/>
                    <div className="forgot-passw">
                        <label for="password">Password</label>
                        <label for="password"> forgot password?</label>
                    </div>
                    <div className="input-passw">
                        <input id="passw" type="password" value="0lelplR"/>
                        <img id="eye-passw" src={eyeIcon} alt=""/>
                    </div>
                </div>
                <div className="nav-form">
                    <Link to={'/home'}>
                        <Button className="btnLogin" btnText={"Login"} isText={true} ftSize={'12px'} width={"77"} height={"32"} radius={40} bgColor={'#5429FF'}></Button>
                    </Link>
                    <p>or continue with</p>
                    <div>
                        <img src="img/Google.svg" alt=""/>
                        <img src="img/Github.svg" alt=""/>
                        <img src="img/Facebook.svg" alt=""/>
                    </div>
                    <p>Don’t have an account yet? &nbsp;<Link to={'home'}>Sign up for free</Link></p>
                </div>
            </div>
        <div className="flex-right">
            <img src={crewImg} alt=""/>
        </div>
       </StyleLogin>
    )
}
export default LoginPage;