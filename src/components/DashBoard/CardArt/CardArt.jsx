import { styled } from "styled-components";
import monkeyImg from "components/assets/Rectangle 8.svg";
import userMichael from "components/assets/userMichael.svg";
import etherImg from "components/assets/Ethereum-blue.svg";

const StyleCardArt = styled.div`
    display: flex;
    flex-direction: column;
    width: 332px;
    height: 346px;
    background-color: #FFFFFF;
    border-radius: 16px;
    padding: 8px;
    .nameArt {
        margin: 16px;
    }
    .nameArt span:last-child {
        float: right;
    }

    .userCreator {
        display: flex;
        align-items: center;
        margin-left: 16px;
        margin-bottom: 10px;
        gap: 5px;
    }

    .currentBid {
        display: flex;
        margin: 0 16px;
        justify-content: space-between;
        align-items: center;
    }
    .currentBid div {
        display: flex;
        gap: 5px;
    }
 
`
export const CardArt = () => {
    return (
        <StyleCardArt>
            <img src={monkeyImg} alt="" />
            <div className="nameArt">
                <span>Ape In Love</span>
                <span>21,5K Likes</span>
            </div>
            <div className="userCreator">
                <img src={userMichael} alt="" />
                <span>@johnti60</span>
            </div>
            <div className="currentBid">
                <span>Current Bid</span>
                <div>
                    <img src={etherImg} alt="" />
                    <span>9.10 ETH</span>
                </div>
            </div>
        </StyleCardArt>
    )
}