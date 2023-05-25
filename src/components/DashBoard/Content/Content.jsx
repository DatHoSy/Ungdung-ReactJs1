import { styled } from "styled-components";

const StyleContent = styled.div`
    width: 716px;
    .titleTap {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ul li {
        margin-left: 24px;
        display: inline-block;
    }
`
export const Content = ({children}) => {
    return (
        <StyleContent>
            <div className="titleTap">
                <span>Trending Auctions</span>
                <ul>
                    <li>Art</li>
                    <li>Music</li>
                    <li>Collectibles</li>
                    <li>Utility</li>
                </ul>
            </div>
            {children}
        </StyleContent>
    )
}