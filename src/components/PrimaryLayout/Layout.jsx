import { styled } from "styled-components";
import Header from "components/Header";
import Footer from "components/Footer";
import SideBar from "components/SideBar";

const StyleLayout = styled.div`
    margin: auto;
    width: 1440px;
    .right {
        background-color: #CAEAE6;
        float: right;
        width: 77%;
        padding: 21px;
        border-radius: 10px;
    }
    height: 160vh;
`
const StyleContainer = styled.div`
    background: linear-gradient(to right,
            #6f7280,
            #2a2c3c,
            #181827,
            #833ab4,
            #fd1d1d,
            #fcb045);
    background-size: 400% 400%;
    animation: body 10s infinite ease-in-out;
    
    @keyframes body {
        0% {
            background-position: 0 50%;
        }
    
        50% {
            background-position: 100% 50%;
        }
    
        100% {
            background-position: 0 50%;
        }
    }
`


const PrimaryLayout = ({ children }) => {
    return (
        <StyleContainer>
            <StyleLayout>
                <SideBar></SideBar>
                <div className="right">
                    <Header></Header>
                    {children}
                    <Footer></Footer>
                </div>
            </StyleLayout>
        </StyleContainer>
    )
}

export default PrimaryLayout;