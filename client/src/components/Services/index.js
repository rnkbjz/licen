import React from 'react'
import { 
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
  } from './SevicesElements'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon4 from '../../images/svg-4.svg';

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Dlaczego my?</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                        <ServicesH2>W pełni responsywna strona internetowa</ServicesH2>
                            <ServicesP>Nasza strona jest w pełni funkcjonalna zarówno na komputerach stacjonarnych tak jak i mobilnych</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                        <ServicesH2>Natychmiastowa rezerwacja miejsc</ServicesH2>
                            <ServicesP>Nasi klienci mogą Zarezerwować swoje ulubione miejsce na dowolny seans bez uiszczania opłat</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4} />
                        <ServicesH2>W pełni bezpieczna strona internetowa</ServicesH2>
                            <ServicesP>
                               Nasza strona jest w pełni bezpieczna oraz funkcjonalna dla naszych klientów
                            </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services