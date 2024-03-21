import styled, { css, keyframes } from 'styled-components';

const estiloFlor = ({flor}) => {
    switch (flor){
        case 1:
            return css`
                animation: ${movingFlower1} 4s linear infinite;
            `;

        case 2:
            return css`
                left: 50%;
                transform: rotate(20deg);
                animation: ${movingFlower2} 4s linear infinite;
            `;

        case 3:
            return css`
                left: 50%;
                transform: rotate(-15deg);
                animation: ${movingFlower3} 4s linear infinite;
            `;
   }
}

const estiloFlorLinea = ({florLinea}) => {
    switch(florLinea) {
        case 1:
            return css`
                height: 70vmin;
                animation-delay: 0.3s;
            `;
        case 2:
            return css`
                height: 60vmin;
                animation-delay: 0.6s;
            `;
        case 3:
            return css`
                animation-delay: 0.9s;
            `;
    }
}

const estiloHojasFlor = ({hojasFlor}) => {
    switch(hojasFlor) {
        case 1:
            return css`
                animation-delay: 1.1s;
            `;
        
        case 2:
            return css`
                animation-delay: 1.1s;
            `;

        case 3:
            return css`
                animation-delay: 1.1s;
            `;
    }
}

const estiloHojaFlor = ({hojaFlor}) => {
    switch(hojaFlor) {
        case 1:
            return css`
                transform: translate(-10%, 1%) rotateY(40deg) rotateX(-50deg);
            `;        
        case 2:
            return css`
                transform: translate(-50%, -4%) rotateX(40deg);
            `;
        case 3:
            return css`
                transform: translate(-90%, 0%) rotateY(45deg) rotateX(50deg);
            `;
        case 4: 
            return css`
                width: 8vmin;
                height: 8vmin;
                transform-origin: bottom left;
                border-radius: 4vmin 10vmin 4vmin 4vmin;
                transform: translate(-0%, 18%) rotateX(70deg) rotate(-43deg);
                background-image: linear-gradient(to top, #fbd13d, #fbd13dc4);
                z-index: 1;
                opacity: 0.8;
            `;
    }
}

const estiloLuzFlor = ({luzFlor}) => {
    switch(luzFlor) {
        case 1:
            return css` 
                left: -2vmin;
                animation-delay: 1s;
            `;
        case 2:
            return css`
                left: 3vmin;
                animation-delay: 0.5s;            
            `;
        case 3: 
            return css`
                left: -6vmin;
                animation-delay: 0.3s;
            `;        
        case 4: 
            return css`
                left: 6vmin;
                animation-delay: 0.9s;            
            `;
        case 5:
            return css`
                left: -1vmin;
                animation-delay: 1.5s;            
            `;
        case 6:
            return css`
                left: -4vmin;
                animation-delay: 3s;            
            `;
        case 7:
            return css`
                left: 3vmin;
                animation-delay: 2s;            
            `;
        case 8:
            return css`
                left: -6vmin;
                animation-delay: 3.5s;            
            `;
    }
}

const estiloFlorLineaHoja = ({lineaHoja, florLinea}) => {
    switch(florLinea) {
        case 1:
            switch(lineaHoja) {
                case 1:
                    return css` 
                        animation: ${bloomingLeafRight} var(--fl-speed) 1.6s backwards;
                        transform: rotate(70deg) rotateY(30deg);
                    `;
                case 2:
                    return css`
                        top: 45%;
                        transform: rotate(70deg) rotateY(30deg);
                        animation: ${bloomingLeafRight} var(--fl-speed) 1.4s backwards;
                    `;
                case 3: 
                    return css`
                        border-top-right-radius: 0;
                        border-bottom-left-radius: 0;
                        border-top-left-radius: var(--h);
                        border-bottom-right-radius: var(--h);
                        left: -460%;
                        top: 12%;
                        transform: rotate(-70deg) rotateY(30deg);
                        animation: ${bloomingLeafLeft} var(--fl-speed) 1.2s backwards;
                    `;
                case 4: 
                    return css`
                        border-top-right-radius: 0;
                        border-bottom-left-radius: 0;
                        border-top-left-radius: var(--h);
                        border-bottom-right-radius: var(--h);
                        left: -460%;
                        top: 12%;
                        top: 40%;
                        transform: rotate(-70deg) rotateY(30deg);
                        animation: ${bloomingLeafLeft} var(--fl-speed) 1s backwards;
                    `;
                case 5:
                    return css`
                        top: 0;
                        transform-origin: left;
                        transform: rotate(70deg) rotateY(30deg) scale(0.6);
                        animation: ${bloomingLeafRight} var(--fl-speed) 1.8s backwards;
                    `;
                case 6:
                    return css`
                        border-top-right-radius: 0;
                        border-bottom-left-radius: 0;
                        border-top-left-radius: var(--h);
                        border-bottom-right-radius: var(--h);
                        left: -460%;
                        top: 12%;
                        top: -2%;
                        left: -450%;
                        transform-origin: right;
                        transform: rotate(-70deg) rotateY(30deg) scale(0.6);
                        transform: rotate(-70deg) rotateY(30deg);
                        animation: ${bloomingLeafLeft} var(--fl-speed) 2s backwards;
                    `;
            }

        case 2:
            switch(lineaHoja) {
                case 1:
                    return css` 
                        transform: rotate(70deg) rotateY(30deg);
                        animation: ${bloomingLeafRight} var(--fl-speed) 1.9s backwards;
                    `;
                case 2:
                    return css`
                        top: 45%;
                        transform: rotate(70deg) rotateY(30deg);
                        animation: ${bloomingLeafRight} var(--fl-speed) 1.7s backwards;
                    `;
                case 3: 
                    return css`
                        border-top-right-radius: 0;
                        border-bottom-left-radius: 0;
                        border-top-left-radius: var(--h);
                        border-bottom-right-radius: var(--h);
                        left: -460%;
                        top: 12%;
                        transform: rotate(-70deg) rotateY(30deg);
                        animation: ${bloomingLeafLeft} var(--fl-speed) 1.5s backwards;
                    `;
                case 4: 
                    return css`
                        border-top-right-radius: 0;
                        border-bottom-left-radius: 0;
                        border-top-left-radius: var(--h);
                        border-bottom-right-radius: var(--h);
                        left: -460%;
                        top: 12%;
                        top: 40%;
                        transform: rotate(-70deg) rotateY(30deg);
                        animation: ${bloomingLeafLeft} var(--fl-speed) 1.3s backwards;   
                    `;
            }
        
        case 3:
            switch(lineaHoja) {
                case 1:
                    return css` 
                        transform: rotate(70deg) rotateY(30deg);
                        animation: ${bloomingLeafRight} var(--fl-speed) 2.5s backwards;
                    `;
                case 2:
                    return css`
                        top: 45%;
                        transform: rotate(70deg) rotateY(30deg);
                        animation: ${bloomingLeafRight} var(--fl-speed) 2.3s backwards;
                    `;
                case 3: 
                    return css`
                        border-top-right-radius: 0;
                        border-bottom-left-radius: 0;
                        border-top-left-radius: var(--h);
                        border-bottom-right-radius: var(--h);
                        left: -460%;
                        top: 12%;
                        transform: rotate(-70deg) rotateY(30deg);
                        animation: ${bloomingLeafLeft} var(--fl-speed) 2.1s backwards;
                    `;
                case 4: 
                    return css`
                        border-top-right-radius: 0;
                        border-bottom-left-radius: 0;
                        border-top-left-radius: var(--h);
                        border-bottom-right-radius: var(--h);
                        left: -460%;
                        top: 12%;
                        top: 40%;
                        transform: rotate(-70deg) rotateY(30deg);
                        animation: ${bloomingLeafLeft} var(--fl-speed) 1.9s backwards;
                    `;
            }

    }
}

const estiloPastoFlor = ({pastoFlor}) => {
    switch(pastoFlor) {
        case 1:
            return css` 
                animation: ${movingGrass} 2s linear infinite;            
            `;
        case 2:
            return css`
                left: 2vmin;
                bottom: 10vmin;
                transform: scale(0.5) rotate(75deg) rotateX(10deg) rotateY(-200deg);
                opacity: 0.8;
                z-index: 0;
                animation: ${movingGrass2} 1.5s linear infinite;            
            `;
        case 3: 
            return css`
            
            `;   
        case 4: 
            return css`
            
            `;
        case 5:
            return css`
            
            `;
        case 6:
            return css`
            
            `;
    }
}

const estiloPastoFlorHoja = ({pastoFlorHoja}) => {
    switch(pastoFlorHoja) {
        case 1:
            return css` 
                top: -6%;
                left: 30%;
                --size: 6vmin;
                transform: rotate(-20deg);
                animation: growing-grass-ans--1 2s 2.6s backwards;
                @keyframes growing-grass-ans--1 {
                    0% {
                        transform-origin: bottom left;
                        transform: rotate(-20deg) scale(0);
                    }
                }            
            `;
        case 2:
            return css`
                top: -5%;
                left: -110%;
                --size: 6vmin;
                transform: rotate(10deg);
                animation: growing-grass-ans--2 2s 2.4s linear backwards;
                @keyframes growing-grass-ans--2 {
                    0% {
                        transform-origin: bottom right;
                        transform: rotate(10deg) scale(0);
                    }
                }            
            `;
        case 3: 
            return css`
                top: 5%;
                left: 60%;
                --size: 8vmin;
                transform: rotate(-18deg) rotateX(-20deg);
                animation: growing-grass-ans--3 2s 2.2s linear backwards;
                @keyframes growing-grass-ans--3 {
                    0% {
                        transform-origin: bottom left;
                        transform: rotate(-18deg) rotateX(-20deg) scale(0);
                    }
                }            
            `;    
        case 4: 
            return css`
                top: 6%;
                left: -135%;
                --size: 8vmin;
                transform: rotate(2deg);
                animation: growing-grass-ans--4 2s 2s linear backwards;
                @keyframes growing-grass-ans--4 {
                    0% {
                        transform-origin: bottom right;
                        transform: rotate(2deg) scale(0);
                    }
                }            
            `;
        case 5:
            return css`
                top: 20%;
                left: 60%;
                --size: 10vmin;
                transform: rotate(-24deg) rotateX(-20deg);
                animation: growing-grass-ans--5 2s 1.8s linear backwards;
                @keyframes growing-grass-ans--5 {
                    0% {
                    transform-origin: bottom left;
                    transform: rotate(-24deg) rotateX(-20deg) scale(0);
                    }
                }            
            `;
        case 6:
            return css`
                top: 22%;
                left: -180%;
                --size: 10vmin;
                transform: rotate(10deg);
                animation: growing-grass-ans--6 2s 1.6s linear backwards;
                @keyframes growing-grass-ans--6 {
                    0% {
                        transform-origin: bottom right;
                        transform: rotate(10deg) scale(0);
                    }
                }            
            `;
        case 7:
            return css`
                top: 39%;
                left: 70%;
                --size: 10vmin;
                transform: rotate(-10deg);
                animation: growing-grass-ans--7 2s 1.4s linear backwards;
                @keyframes growing-grass-ans--7 {
                    0% {
                        transform-origin: bottom left;
                        transform: rotate(-10deg) scale(0);
                    }
                }            
            `;
        case 8:
            return css`
                top: 40%;
                left: -215%;
                --size: 11vmin;
                transform: rotate(10deg);
                animation: growing-grass-ans--8 2s 1.2s linear backwards;
                @keyframes growing-grass-ans--8 {
                    0% {
                        transform-origin: bottom right;
                        transform: rotate(10deg) scale(0);
                    }
                }            
            `;
    }
}

const estiloFlorGRight = ({florGRight}) => {
    switch(florGRight) {
        case 1:
            return css`
                animation: flower-g-right-ans 2.5s linear infinite;
            `;
        case 2:
            return css`
                left: 5vmin;
                transform: rotateY(-180deg);
                animation: flower-g-right-ans--2 3s linear infinite;            
            `;        
    }
}

const estiloFlorGFrontHojaWrapper = ({florGFrontHojaWrapper}) => {
    switch(florGFrontHojaWrapper) {
        case 1:
            return css`
                top: -8vmin;
                transform: scale(0.7);
                animation: flower__g-front__leaf-ans 1s 5.5s ease-in backwards !important;            
            `;
        case 2:
            return css`
                top: -8vmin;
                transform: rotateY(-180deg) scale(0.7) !important;
                animation: flower__g-front__leaf-left-ans-2 1s 4.6s ease-in backwards !important;        
                animation-delay: 5.2s !important;    
            `;
        case 3:
            return css`
                top: -3vmin;
                animation: flower__g-front__leaf-ans 1s 4.6s ease-in backwards;     
                animation-delay: 4.9s !important;       
            `;
        case 4:
            return css`
                top: -3vmin;
                transform: rotateY(-180deg) scale(0.9) !important;
                animation: flower__g-front__leaf-left-ans-2 1s 4.6s ease-in backwards !important;            
            `;
        case 5:
            return css`
                top: 2vmin;            
                animation-delay: 4.3s !important;
            `;
        case 6:
            return css`
                top: 2vmin;
                animation-delay: 4.1s !important;
            `;
        case 7:
            return css`
                top: 6.5vmin;    
                animation-delay: 3.8s !important;
            `;
        case 8:
            return css`
                top: 6.5vmin;    
                animation-delay: 3.5s !important;
            `;
    }
}

const estiloFlorGFRHoja = ({florGFRHoja}) => {
    switch(florGFRHoja) {
        case 1:
            return css` 
                left: 20vmin;
                transform: rotate(45deg);

                animation: flower__g-fr-leaft-ans-1 0.5s 5.2s linear backwards;

                @keyframes flower__g-fr-leaft-ans-1 {
                0% {
                    transform-origin: left;
                    transform: rotate(45deg) scale(0);
                }
                }            
            `;
        case 2:
            return css`
                left: 12vmin;
                top: -7vmin;
                transform: rotate(25deg) rotateY(-180deg);
                animation: flower__g-fr-leaft-ans-6 0.5s 5s linear backwards;            
            `;
        case 3: 
            return css`
                left: 15vmin;
                top: 6vmin;
                transform: rotate(55deg);
                animation: flower__g-fr-leaft-ans-5 0.5s 4.8s linear backwards;            
            `;        
        case 4: 
            return css`
                left: 6vmin;
                top: -2vmin;
                transform: rotate(25deg) rotateY(-180deg);
                animation: flower__g-fr-leaft-ans-6 0.5s 4.6s linear backwards;            
            `;
        case 5:
            return css`
                left: 10vmin;
                top: 14vmin;
                transform: rotate(55deg);
                animation: flower__g-fr-leaft-ans-5 0.5s 4.4s linear backwards;

                @keyframes flower__g-fr-leaft-ans-5 {
                0% {
                    transform-origin: left;
                    transform: rotate(55deg) scale(0);
                }
                }            
            `;
        case 6:
            return css`
                left: 0vmin;
                top: 6vmin;
                transform: rotate(25deg) rotateY(-180deg);
                animation: flower__g-fr-leaft-ans-6 0.5s 4.2s linear backwards;

                @keyframes flower__g-fr-leaft-ans-6 {
                0% {
                    transform-origin: right;
                    transform: rotate(25deg) rotateY(-180deg) scale(0);
                }
                }            
            `;
        case 7:
            return css`
                left: 5vmin;
                top: 22vmin;
                transform: rotate(45deg);
                animation: flower__g-fr-leaft-ans-7 0.5s 4s linear backwards;

                @keyframes flower__g-fr-leaft-ans-7 {
                0% {
                    transform-origin: left;
                    transform: rotate(45deg) scale(0);
                }
                }            
            `;
        case 8:
            return css`
                left: -4vmin;
                top: 15vmin;
                transform: rotate(15deg) rotateY(-180deg);
                animation: flower__g-fr-leaft-ans-8 0.5s 3.8s linear backwards;

                @keyframes flower__g-fr-leaft-ans-8 {
                    0% {
                        transform-origin: right;
                        transform: rotate(15deg) rotateY(-180deg) scale(0);
                    }
                }            
            `;
    }
}

const estiloHoja = ({hoja, florGRight}) => {
    switch(hoja) {
        case 0:
            return css`
                left: 2vmin;
                animation: ${leafAns1} 4s linear infinite;            
            `;
        case 1:
            return css`
                --w: 5vmin;
                --h: 60vmin;
                animation: ${leafAns1} 4s linear infinite;            
            `;
        case 2:
            return css`
                --w: 10vmin;
                --h: 40vmin;
                left: -0.5vmin;
                bottom: 5vmin;
                transform-origin: bottom left;
                transform: rotateY(-180deg);
                animation: ${leafAns2} 3s linear infinite;            
            `;
        case 3:
            return css`
                --w: 5vmin;
                --h: 30vmin;
                left: -1vmin;
                bottom: 3.2vmin;
                transform-origin: bottom left;
                transform: rotate(-10deg) rotateY(-180deg);
                animation: ${leafAns3} 3s linear infinite;            
            `;
        default:
            switch(florGRight) {
                case 2:
                    return css`
                        height: 75vmin;
                        filter: blur(0.3vmin);
                        opacity: 0.8;                    
                    `;
            }
    }
}

const estiloLongG = ({longG}) => {
    switch(longG) {
        case 0:
            return css`
                
            `;
        case 1:
            return css`
                bottom: 0vmin;
                transform: scale(0.8) rotate(-5deg);
                
                .Hoja {
                    -webkit-mask-image: linear-gradient(
                        to top,
                        transparent 40%,
                        #079097 80%
                    ) !important;
                }            

                .Hoja--1 {
                    --w: 5vmin;
                    --h: 60vmin;
                    left: -2vmin;
                    transform: rotate(3deg) rotateY(-180deg);
                }
            `;
        case 2:
            return css`
                bottom: -3vmin;
                left: -35vmin;
                transform-origin: center;
                transform: scale(0.6) rotateX(60deg);

                .Hoja {
                -webkit-mask-image: linear-gradient(
                    to top,
                    transparent 50%,
                    #079097 80%
                ) !important;
                }            

                .Hoja--1 {
                    left: -1vmin;
                    transform: rotateY(-180deg);
                }
            `;
        case 3:
            return css`
                bottom: -3vmin;
                left: -35vmin;
                transform-origin: center;
                transform: scale(0.6) rotateX(60deg);

                .Hoja {
                -webkit-mask-image: linear-gradient(
                    to top,
                    transparent 50%,
                    #079097 80%
                ) !important;
                }
                
                .Hoja--1 {
                    left: -1vmin;
                    transform: rotateY(-180deg);
                }

                
                left: -17vmin;
                bottom: 0vmin;
                .Hoja {
                -webkit-mask-image: linear-gradient(
                    to top,
                    transparent 40%,
                    #079097 80%
                ) !important;
                }
            `;
        case 4:
            return css`
                left: 25vmin;
                bottom: -3vmin;
                transform-origin: center;
                transform: scale(0.6) rotateX(60deg);

                .Hoja {
                -webkit-mask-image: linear-gradient(
                    to top,
                    transparent 50%,
                    #079097 80%
                ) !important;
                }            
            `;
        case 5:
            return css`
                left: 42vmin;
                bottom: 0vmin;
                transform: scale(0.8) rotate(2deg);            
            `;
        case 6:
            return css`
                left: 0vmin;
                bottom: -20vmin;
                z-index: 100;
                filter: blur(0.3vmin);
                transform: scale(0.8) rotate(2deg);            
            `;
        case 7:
            return css`
                left: 35vmin;
                bottom: 20vmin;
                z-index: -1;
                filter: blur(0.3vmin);
                transform: scale(0.6) rotate(2deg);
                opacity: 0.7;            
            `;
    }
}

const leafAns1 = keyframes`
    0%,
    100% {
      transform: rotate(-5deg) scale(1);
    }
  
    50% {
      transform: rotate(5deg) scale(1.1);
    }
`;
  
const leafAns2 = keyframes`
    0%,
    100% {
      transform: rotateY(-180deg) rotate(5deg);
    }
  
    50% {
      transform: rotateY(-180deg) rotate(0deg) scale(1.1);
    }
`;
  
const leafAns3 = keyframes`
    0%,
    100% {
      transform: rotate(-10deg) rotateY(-180deg);
    }
  
    50% {
      transform: rotate(-20deg) rotateY(-180deg);
    }
`;

const growAns = keyframes`
    0% {
      transform: scale(0);
      opacity: 0;
    }
`;
  
const lightAns = keyframes`
    0% {
      opacity: 0;
      transform: translateY(0vmin);
    }
  
    25% {
      opacity: 1;
      transform: translateY(-5vmin) translateX(-2vmin);
    }
  
    50% {
      opacity: 1;
      transform: translateY(-15vmin) translateX(2vmin);
      filter: blur(0.2vmin);
    }
  
    75% {
      transform: translateY(-20vmin) translateX(-2vmin);
      filter: blur(0.2vmin);
    }
  
    100% {
      transform: translateY(-30vmin);
      opacity: 0;
      filter: blur(1vmin);
    }
`;
  
const movingFlower1 = keyframes`
    0%,
    100% {
      transform: rotate(2deg);
    }
  
    50% {
      transform: rotate(-2deg);
    }
`;
  
const movingFlower2 = keyframes`
    0%,
    100% {
      transform: rotate(18deg);
    }
  
    50% {
      transform: rotate(14deg);
    }
`;
  
const movingFlower3 = keyframes`
    0%,
    100% {
      transform: rotate(-18deg);
    }
  
    50% {
      transform: rotate(-20deg) rotateY(-10deg);
    }
`;
  
const bloomingLeafRight = keyframes`
    0% {
      transform-origin: left;
      transform: rotate(70deg) rotateY(30deg) scale(0);
    }
`;
  
const bloomingLeafLeft = keyframes`
    0% {
      transform-origin: right;
      transform: rotate(-70deg) rotateY(30deg) scale(0);
    }
`;
  
const growFlowerTree = keyframes`
    0% {
      height: 0;
      border-radius: 1vmin;
    }
`;
  
const bloomingFlower = keyframes`
    0% {
      transform: scale(0);
    }
`;
  
const movingGrass = keyframes`
    0%,
    100% {
      transform: rotate(-48deg) rotateY(40deg);
    }
  
    50% {
      transform: rotate(-50deg) rotateY(40deg);
    }
`;
  
const movingGrass2 = keyframes`
    0%,
    100% {
      transform: scale(0.5) rotate(75deg) rotateX(10deg) rotateY(-200deg);
    }
  
    50% {
      transform: scale(0.5) rotate(79deg) rotateX(10deg) rotateY(-200deg);
    }
`;
    
const growingGrassAns = keyframes`
    0% {
      transform: scale(0);
    }
`;

export const Noche = styled.div`
    position: fixed;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    filter: blur(0.1vmin);
`;

export const Flores =  styled.div`
    position: relative;
    transform: scale(0.9);
`;

export const Flor = styled.div`
    position: absolute;
    bottom: 10vmin;
    transform-origin: bottom center;
    z-index: 10;

    --f1-speed: 0.8s;
    ${estiloFlor};

    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(-50%,-100%);
        width: 8vmin;
        height: 8vmin;
        background-color: #6bf0ff;
        filter: blur(10vmin);
    }
`;

export const HojasFlor = styled.div`
    position: relative;
    animation: ${bloomingFlower} 2s backwards;
    ${estiloHojasFlor};
    
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(-50%, -100%);
      width: 8vmin;
      height: 8vmin;
      background-color: #6bf0ff;
      filter: blur(10vmin);
    }
`;

export const HojaFlor = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 8vmin;
    height: 11vmin;
    border-radius: 51% 49% 47% 53% / 44% 45% 55% 69%;
    background-color: #a7ffee;
    background-image: linear-gradient(to top, #fbd10d, #fbd13d);
    transform-origin: bottom center;
    opacity: 0.9;
    box-shadow: inset 0 0 2vmin rgba(255, 255, 255, 0.5);

    ${estiloHojaFlor};
`;

export const CirculoFlor = styled.div`
    position: absolute;
    left: -3.5vmin;
    top: -3vmin;
    width: 9vmin;
    height: 4vmin;
    border-radius: 50%;
    background-color: #fff;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 45%;
      transform: translate(-50%, -50%);
      width: 60%;
      height: 60%;
      border-radius: inherit;
      background-image: repeating-linear-gradient(
          300deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
        ),
        repeating-linear-gradient(
          45deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
        ),
        repeating-linear-gradient(
          67.5deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
        ),
        repeating-linear-gradient(
          135deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
        ),
        repeating-linear-gradient(
          45deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
        ),
        repeating-linear-gradient(
          112.5deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
        ),
        repeating-linear-gradient(
          112.5deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
        ),
        repeating-linear-gradient(
          45deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
        ),
        repeating-linear-gradient(
          22.5deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
        ),
        repeating-linear-gradient(
          45deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
        ),
        repeating-linear-gradient(
          22.5deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
        ),
        repeating-linear-gradient(
          135deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
        ),
        repeating-linear-gradient(
          157.5deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
        ),
        repeating-linear-gradient(
          67.5deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
        ),
        repeating-linear-gradient(
          67.5deg,
          rgba(0, 0, 0, 0.03) 0px,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px,
          transparent 12px
        ),
        linear-gradient(90deg, #BD7F00, #9C6900);
    }
`;

export const LuzFlor = styled.div`
    position: absolute;
    bottom: 0vmin;
    width: 1vmin;
    height: 1vmin;
    background-color: rgb(255, 251, 0);
    border-radius: 50%;
    filter: blur(0.2vmin);
    animation: ${lightAns} 4s linear infinite backwards;

    &:nth-child(odd) {
      background-color: #23f0ff;
    }

    ${estiloLuzFlor};
`;

export const FlorLinea =  styled.div`
    height: 55vmin;
    width: 1.5vmin;
    background-image: linear-gradient(
        to left,
        rgb(0, 0, 0, 0.2),
        transparent,
        rgba(255, 255, 255, 0.2)
      ),
      linear-gradient(to top, transparent 10%, #14757a, #39c6d6);
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
    animation: ${growFlowerTree} 4s backwards;

    ${estiloFlorLinea};
`;

export const FlorLineaHoja = styled.div`
    --w: 7vmin;
    --h: calc(var(--w) + 2vmin);
    position: absolute;
    top: 20%;
    left: 90%;
    width: var(--w);
    height: var(--h);
    border-top-right-radius: var(--h);
    border-bottom-left-radius: var(--h);
    background-image: linear-gradient(
    to top,
    rgba(20, 117, 122, 0.4),
    #39c6d6
    );

    ${estiloFlorLineaHoja};
`;

export const GrowAns = styled.div`
  animation: ${growAns} 2s var(--d) backwards;
`;

export const FlorGLong = styled.div`
    --w: 2vmin;
    --h: 6vmin;
    --c: #159faa;
    position: absolute;
    bottom: 10vmin;
    left: -3vmin;
    transform-origin: bottom center;
    transform: rotate(-30deg) rotateY(-20deg);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    animation: flower-g-long-ans 3s linear infinite;

    @keyframes flower-g-long-ans {
      0%,
      100% {
        transform: rotate(-30deg) rotateY(-20deg);
      }

      50% {
        transform: rotate(-32deg) rotateY(-20deg);
      }
    }
`;

export const FlorGLongTop = styled.div`
    top: calc(var(--h) * -1);
    width: calc(var(--w) + 1vmin);
    height: var(--h);
    border-top-right-radius: 100%;
    border-right: 0.7vmin solid var(--c);
    transform: translate(-0.7vmin, 1vmin);
`;

export const FlorGLongBottom = styled.div`
    width: var(--w);
    height: 50vmin;
    transform-origin: bottom center;
    background-image: linear-gradient(to top, transparent 30%, var(--c));
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
    clip-path: polygon(35% 0, 65% 1%, 100% 100%, 0% 100%);
`;

export const PastoCreciente = styled.div`
    animation: ${growingGrassAns} 1s 2s backwards;
`;

export const PastoFlor = styled.div`
    --c: #159faa;
    --line-w: 1.5vmin;

    position: absolute;
    bottom: 12vmin;
    left: -7vmin;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 20;
    transform-origin: bottom center;
    transform: rotate(-48deg) rotateY(40deg);

    ${estiloPastoFlor};
`;

export const PastoFlorTop = styled.div`
    width: 7vmin;
    height: 10vmin;
    border-top-right-radius: 100%;
    border-right: var(--line-w) solid var(--c);
    transform-origin: bottom center;
    transform: rotate(-2deg);
`;

export const PastoFlorBottom = styled.div` 
    margin-top: -2px;
    width: var(--line-w);
    height: 25vmin;
    background-image: linear-gradient(to top, transparent, var(--c));
`;

export const PastoFlorHoja = styled.div`
    --size: 10vmin;
    position: absolute;
    width: calc(var(--size) * 2.1);
    height: var(--size);
    border-top-left-radius: var(--size);
    border-top-right-radius: var(--size);
    background-image: linear-gradient(
    to top,
    transparent,
    transparent 30%,
    var(--c)
    );
    z-index: 100;

    ${estiloPastoFlorHoja};
`;

export const PastoFlorOverlay = styled.div`
    position: absolute;
    top: -10%;
    right: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    filter: blur(1.5vmin);
    z-index: 100;
`;

export const FlorGRight = styled.div`
    position: absolute;
    bottom: 6vmin;
    left: -2vmin;
    transform-origin: bottom left;
    transform: rotate(20deg);

    ${estiloFlorGRight};

    @keyframes flower-g-right-ans {
      0%,
      100% {
        transform: rotate(20deg);
      }

      50% {
        transform: rotate(24deg) rotateX(-20deg);
      }
    }

    @keyframes flower-g-right-ans--2 {
      0%,
      100% {
        transform: rotateY(-180deg) rotate(0deg) rotateX(-20deg);
      }

      50% {
        transform: rotateY(-180deg) rotate(6deg) rotateX(-20deg);
      }
    }

    .Hoja {
        width: 30vmin;
        height: 50vmin;
        border-top-left-radius: 100%;
        border-left: 2vmin solid #079097;
        background-image: linear-gradient(
            to bottom,
            transparent,
            var(--dark-color) 60%
        );
        -webkit-mask-image: linear-gradient(to top, transparent 30%, #079097 60%);
    }
`;

export const Hoja = styled.div`
    ${estiloHoja};

    --w: 15vmin;
    --h: 40vmin;
    --c: #1aaa15;

    position: absolute;
    bottom: 0;
    width: var(--w);
    height: var(--h);
    border-top-left-radius: 100%;
    border-left: 2vmin solid var(--c);
    -webkit-mask-image: linear-gradient(
      to top,
      transparent 20%,
      var(--dark-color)
    );

    transform-origin: bottom center;
`;

export const FlorGFront = styled.div`
    position: absolute;
    bottom: 6vmin;
    left: 2.5vmin;
    z-index: 100;
    transform-origin: bottom center;
    transform: rotate(-28deg) rotateY(30deg) scale(1.04);
    animation: flower__g-front-ans 2s linear infinite;

    @keyframes flower__g-front-ans {
      0%,
      100% {
        transform: rotate(-28deg) rotateY(30deg) scale(1.04);
      }
      50% {
        transform: rotate(-35deg) rotateY(40deg) scale(1.04);
      }
    }
`;

export const FlorGFrontHojaWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: bottom left;
    transform: rotate(10deg);

    &:nth-child(even) {
        left: 0vmin;
        transform: rotateY(-180deg) rotate(5deg);
        animation: flower__g-front__leaf-left-ans 1s ease-in backwards;
    }

    &:nth-child(odd) {
        animation: flower__g-front__leaf-ans 1s ease-in backwards;
    }

    ${estiloFlorGFrontHojaWrapper};

    @keyframes flower__g-front__leaf-left-ans-2 {
        0% {
          transform: rotateY(-180deg) scale(0);
        }
    }

    @keyframes flower__g-front__leaf-ans {
        0% {
          transform: rotate(10deg) scale(0);
        }
    }

    @keyframes flower__g-front__leaf-left-ans {
        0% {
            transform: rotateY(-180deg) rotate(5deg) scale(0);
        }
    }
`;

export const FlorGFrontHoja = styled.div`
    width: 10vmin;
    height: 10vmin;
    border-radius: 100% 0% 0% 100% / 100% 100% 0% 0%;
    box-shadow: inset 0 2px 1vmin hsla(184, 97%, 58%, 0.2);
    background-image: linear-gradient(
        to bottom left,
        transparent,
        var(--dark-color)
    ),
    linear-gradient(
        to bottom right,
        #159faa 50%,
        transparent 50%,
        transparent
    );

    -webkit-mask-image: linear-gradient(
    to bottom right,
    #159faa 50%,
    transparent 50%,
    transparent
    );
    mask-image: linear-gradient(
    to bottom right,
    #159faa 50%,
    transparent 50%,
    transparent
    );
`;

export const FlorGFrontLinea = styled.div`
    width: 0.3vmin;
    height: 20vmin;
    background-image: linear-gradient(
        to top,
        transparent,
        #079097,
        transparent 100%
    );
    position: relative;
`;

export const FlorGFR = styled.div`
    position: absolute;
    bottom: -4vmin;
    left: vmin;
    transform-origin: bottom left;
    z-index: 10;

    animation: flower__g-fr-ans 2s linear infinite;

    @keyframes flower__g-fr-ans {
      0%,
      100% {
        transform: rotate(2deg);
      }
      50% {
        transform: rotate(4deg);
      }
    }

    .Hoja {
      width: 30vmin;
      height: 50vmin;
      border-top-left-radius: 100%;
      border-left: 2vmin solid #079097;
      -webkit-mask-image: linear-gradient(to top, transparent 25%, #079097 50%);
      position: relative;
      z-index: 1;
    }

    .Hoja--1 {
        left: 20vmin;
        transform: rotate(45deg);

        animation: flower__g-fr-leaft-ans-1 0.5s 5.2s linear backwards;

        @keyframes flower__g-fr-leaft-ans-1 {
          0% {
            transform-origin: left;
            transform: rotate(45deg) scale(0);
          }
        }    
    }

    .Hoja--2 {
        left: 12vmin;
        top: -7vmin;
        transform: rotate(25deg) rotateY(-180deg);
        animation: flower__g-fr-leaft-ans-6 0.5s 5s linear backwards;
    }

    .Hoja--3 {
        left: 15vmin;
        top: 6vmin;
        transform: rotate(55deg);
        animation: flower__g-fr-leaft-ans-5 0.5s 4.8s linear backwards;
    }

    .Hoja--4{
        left: 6vmin;
        top: -2vmin;
        transform: rotate(25deg) rotateY(-180deg);
        animation: flower__g-fr-leaft-ans-6 0.5s 4.6s linear backwards;
    }

    .Hoja--5 {
        left: 10vmin;
        top: 14vmin;
        transform: rotate(55deg);
        animation: flower__g-fr-leaft-ans-5 0.5s 4.4s linear backwards;

        @keyframes flower__g-fr-leaft-ans-5 {
          0% {
            transform-origin: left;
            transform: rotate(55deg) scale(0);
          }
        }
    }

    .Hoja--6 {
        left: 0vmin;
        top: 6vmin;
        transform: rotate(25deg) rotateY(-180deg);
        animation: flower__g-fr-leaft-ans-6 0.5s 4.2s linear backwards;

        @keyframes flower__g-fr-leaft-ans-6 {
          0% {
            transform-origin: right;
            transform: rotate(25deg) rotateY(-180deg) scale(0);
          }
        }
    }

    .Hoja--7 {
        left: 5vmin;
        top: 22vmin;
        transform: rotate(45deg);
        animation: flower__g-fr-leaft-ans-7 0.5s 4s linear backwards;

        @keyframes flower__g-fr-leaft-ans-7 {
          0% {
            transform-origin: left;
            transform: rotate(45deg) scale(0);
          }
        }
    }

    .Hoja--8 {
        left: -4vmin;
        top: 15vmin;
        transform: rotate(15deg) rotateY(-180deg);
        animation: flower__g-fr-leaft-ans-8 0.5s 3.8s linear backwards;

        @keyframes flower__g-fr-leaft-ans-8 {
          0% {
            transform-origin: right;
            transform: rotate(15deg) rotateY(-180deg) scale(0);
          }
        }
    }
`;

export const FlorGFRHoja = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 10vmin;
    height: 10vmin;
    border-radius: 100% 0% 0% 100% / 100% 100% 0% 0%;
    box-shadow: inset 0 2px 1vmin hsla(184, 97%, 58%, 0.2);
    background-image: linear-gradient(
        to bottom left,
        transparent,
        var(--dark-color) 98%
    ),
    linear-gradient(
        to bottom right,
        #23f0ff 45%,
        transparent 50%,
        transparent
    );

    -webkit-mask-image: linear-gradient(
    135deg,
    #159faa 40%,
    transparent 50%,
    transparent
    );

    ${estiloFlorGFRHoja};
`;

export const LongG = styled.div`
    position: absolute;
    bottom: 25vmin;
    left: -42vmin;
    transform-origin: bottom left;

    ${estiloLongG};
`;

const blink = keyframes `
    0% {
        opacity: 1;
    } 50% {
        opacity: 0;
    } 100% {
        opacity: 1;
    }
`;

export const Estrellas = styled.div`
    position: fixed;
    top: 0vh;
    left: 0;
    width: 100dvw;
    height: 50dvh;
    background-color: transparent;
    padding: 35px;
    overflow: hidden;
`;

export const Estrella = styled.div`
    position: absolute;
    bottom: 0vmin;
    width: 5px;
    height: 5px;
    background-color: #fff;
    border-radius: 50%;
    filter: blur(0.2vmin);
    animation: ${blink} ${props => props.duration}s linear infinite ${props => props.delay}s;
    z-index: 1;

    top: ${props => props.top};
    left: ${props => props.left};
`;

export const Luna = styled.div`
    width: 100px; /* Tamaño ajustable */
    height: 100px; /* Tamaño ajustable */
    border-radius: 50%;
    background-color: #f0f0f0; /* Color de la luna */
    position: absolute;
    top: 10%;
    left: 85%;
    box-shadow:
        0px 0px 20px 12px rgba(0, 0, 0, 0.5), /* Sombra principal */
        -10px 10px 40px rgba(255, 255, 255, 0.5), /* Reflejo */
        inset 0px 0px 20px 10px rgba(0, 0, 0, 0.5); /* Sombra interna */
`;

export const Mancha = styled.div`
    position: absolute;
    z-index: 100;
    width: 15px; /* Tamaño ajustable */
    height: 15px; /* Tamaño ajustable */
    border-radius: 50%;
    background-color: #d9d9d9; /* Color de la mancha */
`;

export const GranMancha = styled(Mancha)`
    width: 30px;
    height: 30px;
    background-color: #d9d9d9; /* Color de la mancha */
`;
