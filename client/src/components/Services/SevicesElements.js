import styled from "styled-components";

export const ServicesContainer = styled.div`
height: 1100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;

@media screen and (max-width: 768px) {
    height: 1100px;
}

@media screen and (max-width: 480px) {
    height: 1300px;
}
`;

export const ServicesWrapper = styled.div `
max-width: 1100px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
}
`;

export const ServicesCard = styled.div`
background: #fff;
color: #000;
display: flex !important;
flex-direction: column !important;
justify-content: flex !important;
align-items: center;
border-radius: 20px;
max-height: 340px;
padding: 20px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2 ease-in-out;
margin: 15px;

&:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    
}
`;

export const ServicesIcon = styled.img`
height: 200px;
width: 200px;
margin-bottom: 10px;
box-sizing: content-box !important;
`;

export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 100px;
text-align: center;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`;

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
text-align: center;
`;

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`;