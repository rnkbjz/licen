import React from 'react';
import {
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Subtitle, 
    Heading,
    Img,
    ImgWrap,
} from './infoElements'

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    img,
    alt,
}) => {
  return (
    <>
     <InfoContainer lightBg={lightBg} id={id}>
         <InfoWrapper>
             <InfoRow imgStart={imgStart}>
                 <Column1>
                 <TextWrapper>
                     <TopLine>{topLine}</TopLine>
                     <Heading lightText={lightText}>{headline}</Heading>
                     <Subtitle darkText={darkText}>{description}</Subtitle>
                 </TextWrapper>
                 </Column1>
                 <Column2>
                 <ImgWrap>
                 <Img src={img} alt ={alt}/>
                 </ImgWrap>
                 </Column2>
             </InfoRow>
         </InfoWrapper>
     </InfoContainer>
    </>
  )
}

export default InfoSection