import styled from "styled-components"
import { Link } from "react-scroll"

export const Button = styled(Link)`
border-radius: 50px;
margin-left: 5px;
background: ${({primary}) => (primary ? '#910303' : '#010606')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size: ${({fontBig}) => (fontBig ? '20' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#fa0000')};
    background: #fa0000;
    text-shadow: 2px 2px 10px #fff;
    box-shadow: 1px 1px 10px #fa0000;
    color: #fff; 
}
`;