import styled from 'styled-components';

const Buttonstyled = styled.button`
    background-color: ${(props) => props.background || 'gray'};
    color: white;
    border: none;
    padding: 8px 12px;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
`;
function Button({text,onClick,background,type}) {
    return <Buttonstyled type = {type} onClick={onClick} background={background}>{text}</Buttonstyled>;
}
export default Button;