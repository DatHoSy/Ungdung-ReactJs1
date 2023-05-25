import { styled } from "styled-components";
import userMichael from "components/assets/userMichael.svg";
import { Button } from "components/Button";

const StyleTopCreator = styled.div`
    width: 300px;
    height: 430px;
    padding: 24px;
    background: #FFFFFF;
    border-radius: 16px;
    div.title span:first-child {

    }
    div.title span:last-child {
        float: right;
    }
    .userTop {
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .userRight {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .userRight div {
        display: flex;
        gap: 8px;
    }
    .userRight div div {
        display: flex;
        flex-direction: column;
    }
    Button.btnFolowing {
        color: white;
    }
`

export const TopCreator = () => {
    return (
        <StyleTopCreator>
            <div className="title">
                <span>Top Creator</span>
                <span>See All</span>
            </div>
            <div className="userTop">
                <div className="userRight">
                    <span>1.</span>
                    <div>
                        <img src={userMichael} alt="" />
                        <div>
                            <span>Michael Jordan</span>
                            <span>_@jordan</span>
                        </div>
                    </div>
                </div>
                <div className="followUser">
                    <Button btnText={"Follow"} isText={true} ftSize={'12px'} width={"77"} height={"32"} radius={40} bgColor={'#5429ff19'}></Button>
                </div>
            </div>
            <div className="userTop">
                <div className="userRight">
                    <span>2.</span>
                    <div>
                        <img src={userMichael} alt="" />
                        <div>
                            <span>Michael Jordan</span>
                            <span>_@jordan</span>
                        </div>
                    </div>
                </div>
                <div className="followUser">
                    <Button className="btnFolowing" btnText={"Following"} isText={true} ftSize={'12px'} width={"77"} height={"32"} radius={40} bgColor={'#5429FF'}></Button>
                </div>
            </div>
            <div className="userTop">
                <div className="userRight">
                    <span>3.</span>
                    <div>
                        <img src={userMichael} alt="" />
                        <div>
                            <span>Michael Jordan</span>
                            <span>_@jordan</span>
                        </div>
                    </div>
                </div>
                <div className="followUser">
                    <Button btnText={"Follow"} isText={true} ftSize={'12px'} width={"77"} height={"32"} radius={40} bgColor={'#5429ff19'}></Button>
                </div>
            </div>
            <div className="userTop">
                <div className="userRight">
                    <span>4.</span>
                    <div>
                        <img src={userMichael} alt="" />
                        <div>
                            <span>Michael Jordan</span>
                            <span>_@jordan</span>
                        </div>
                    </div>
                </div>
                <div className="followUser">
                    <Button btnText={"Follow"} isText={true} ftSize={'12px'} width={"77"} height={"32"} radius={40} bgColor={'#5429ff19'}></Button>
                </div>
            </div>
            <div className="userTop">
                <div className="userRight">
                    <span>5.</span>
                    <div>
                        <img src={userMichael} alt="" />
                        <div>
                            <span>Michael Jordan</span>
                            <span>_@jordan</span>
                        </div>
                    </div>
                </div>
                <div className="followUser">
                    <Button btnText={"Follow"} isText={true} ftSize={'12px'} width={"77"} height={"32"} radius={40} bgColor={'#5429ff19'}></Button>
                </div>
            </div>
        </StyleTopCreator>
    )
}