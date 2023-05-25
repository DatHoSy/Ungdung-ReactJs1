import styled from 'styled-components';
import topArrow from "components/assets/toparrow.svg";
import botArrow from "components/assets/botarrow.svg";

const StyleButton = styled.button`
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    border: 1px solid #E9E9E9;
    border-radius: ${props  => `${props.radius}px`};
    background: ${props => props.bgColor};
    font-weight: 500;
    font-size: ${props => props.ftSize};
    line-height: 21px;
    color: ${props => props.btnText < 0 ? "red" : "#747475"};
    img {
        margin-right: 8px;
  }
`;


export const Button = ({ width, height, btnText, isText, radius, bgColor, ftSize, children, ...rest}) => {
    return (
        <StyleButton
            width={width}
            height={height}
            radius = {radius}
            bgColor = {bgColor}
            font-size = {ftSize}
            {...rest}
        >
            {!isText && <img src={btnText < 0 ? botArrow : topArrow} alt="arrow" />}
            {isText ? btnText : Math.abs(btnText)}
            {children}
        </StyleButton>
    );
}

StyleButton.defaultProps = {
    width : 128,
    height: 46,
    bgColor: '#fff',
    // ftSize: '16px'
}