import React from 'react';
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,Link } from './HeroElements';

const HeroSection = () => {
    return (
    <HeroContainer>
        <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
            <HeroH1>Rezerwacja miejsc na planowany seans nigdy nie była łatwiejsza</HeroH1>
            <HeroP>
                Zarejestruj miejsce już teraz.
            </HeroP>
            <HeroBtnWrapper>
                <Link to='/reservation'>
                    Rezerwacja
                </Link>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection