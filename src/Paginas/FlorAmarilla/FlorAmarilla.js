import React from "react";
import { CirculoFlor, Estrella, Estrellas, Flor, FlorGFR, FlorGFRHoja, FlorGFront, FlorGFrontHoja, FlorGFrontHojaWrapper, FlorGFrontLinea, FlorGLong, FlorGLongBottom, FlorGLongTop, FlorGRight, FlorLinea, FlorLineaHoja, Flores, GranMancha, GrowAns, Hoja, HojaFlor, Hojas, HojasFlor, LongG, Luna, LuzFlor, Mancha, Noche, PastoCreciente, PastoFlor, PastoFlorBottom, PastoFlorHoja, PastoFlorOverlay, PastoFlorTop } from "./styles/FlorAmarilla.styles";

const FlorAmarilla = () => {   
    const getPosicion = () => {
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        return { top, left };
    };
    const getRandomDuration = () => Math.random() * 3 + 3; // Duración entre 1 y 4 segundos
    const getRandomDelay = () => Math.random() * 5; // Retraso entre 0 y 5 segundos

    const estrellas = Array.from({length:70});

    return(
        <>
            <Noche/>
            <Luna>
                <Mancha style={{ top: '30%', left: '40%' }} />
                <Mancha style={{ top: '20%', left: '60%' }} />
                <Mancha style={{ top: '50%', left: '70%' }} />
                <GranMancha style={{ top: '60%', left: '30%' }} />            
            </Luna>
            <Estrellas>
                {estrellas.map((_,index) => {
                    const {top, left} = getPosicion();
                    const delay = getRandomDelay();
                    const duration = getRandomDuration();
                    return <Estrella key={index} top={top} left={left} delay={delay} duration={duration} className="Estrella"/>
                })}
            </Estrellas>
            <Flores>
                <Flor flor= {1}>
                    <HojasFlor hojasFlor= {1}>
                        <HojaFlor hojaFlor= {1}/>
                        <HojaFlor hojaFlor= {2}/>
                        <HojaFlor hojaFlor= {3}/>
                        <HojaFlor hojaFlor= {4}/>
                        <CirculoFlor/>

                        <LuzFlor luzFlor= {1}/>
                        <LuzFlor luzFlor= {2}/>
                        <LuzFlor luzFlor= {3}/>
                        <LuzFlor luzFlor= {4}/>
                        <LuzFlor luzFlor= {5}/>
                        <LuzFlor luzFlor= {6}/>
                        <LuzFlor luzFlor= {7}/>
                        <LuzFlor luzFlor= {8}/>
                    </HojasFlor>

                    <FlorLinea florLinea= {1}>
                        <FlorLineaHoja lineaHoja= {1} florLinea={1}/>
                        <FlorLineaHoja lineaHoja= {2} florLinea={1}/>
                        <FlorLineaHoja lineaHoja= {3} florLinea={1}/>
                        <FlorLineaHoja lineaHoja= {4} florLinea={1}/>
                        <FlorLineaHoja lineaHoja= {5} florLinea={1}/>
                        <FlorLineaHoja lineaHoja= {6} florLinea={1}/> 
                    </FlorLinea>
                </Flor>

                <Flor flor= {2}>
                    <HojasFlor hojasFlor= {2}>
                        <HojaFlor hojaFlor= {1}/>
                        <HojaFlor hojaFlor= {2}/>
                        <HojaFlor hojaFlor= {3}/>
                        <HojaFlor hojaFlor= {4}/>
                        <CirculoFlor/>

                        <LuzFlor luzFlor= {1}/>
                        <LuzFlor luzFlor= {2}/>
                        <LuzFlor luzFlor= {3}/>
                        <LuzFlor luzFlor= {4}/>
                        <LuzFlor luzFlor= {5}/>
                        <LuzFlor luzFlor= {6}/>
                        <LuzFlor luzFlor= {7}/>
                        <LuzFlor luzFlor= {8}/>
                    </HojasFlor>

                    <FlorLinea florLinea= {2}>
                        <FlorLineaHoja lineaHoja= {1} florLinea={2}/>
                        <FlorLineaHoja lineaHoja= {2} florLinea={2}/>
                        <FlorLineaHoja lineaHoja= {3} florLinea={2}/>
                        <FlorLineaHoja lineaHoja= {4} florLinea={2}/>
                    </FlorLinea>
                </Flor>
                
                <Flor flor= {3}>
                    <HojasFlor hojasFlor= {3}>
                        <HojaFlor hojaFlor= {1}/>
                        <HojaFlor hojaFlor= {2}/>
                        <HojaFlor hojaFlor= {3}/>
                        <HojaFlor hojaFlor= {4}/>
                        <CirculoFlor/>

                        <LuzFlor luzFlor= {1}/>
                        <LuzFlor luzFlor= {2}/>
                        <LuzFlor luzFlor= {3}/>
                        <LuzFlor luzFlor= {4}/>
                        <LuzFlor luzFlor= {5}/>
                        <LuzFlor luzFlor= {6}/>
                        <LuzFlor luzFlor= {7}/>
                        <LuzFlor luzFlor= {8}/>
                    </HojasFlor>

                    <FlorLinea florLinea= {3}>
                        <FlorLineaHoja lineaHoja= {1} florLinea= {3}/>
                        <FlorLineaHoja lineaHoja= {2} florLinea= {3}/>
                        <FlorLineaHoja lineaHoja= {3} florLinea= {3}/>
                        <FlorLineaHoja lineaHoja= {4} florLinea= {3}/>
                    </FlorLinea>
                </Flor>

                <GrowAns style={{"--d":"1.2s"}}>
                    <FlorGLong>
                        <FlorGLongTop/>
                        <FlorGLongBottom/>
                    </FlorGLong>
                </GrowAns>

                <PastoCreciente>
                    <PastoFlor pastoFlor= {1}>
                        <PastoFlorTop/>
                        <PastoFlorBottom/>
                        <PastoFlorHoja pastoFlorHoja= {1}/>
                        <PastoFlorHoja pastoFlorHoja= {2}/>
                        <PastoFlorHoja pastoFlorHoja= {3}/>
                        <PastoFlorHoja pastoFlorHoja= {4}/>
                        <PastoFlorHoja pastoFlorHoja= {5}/>
                        <PastoFlorHoja pastoFlorHoja= {6}/>
                        <PastoFlorHoja pastoFlorHoja= {7}/>
                        <PastoFlorHoja pastoFlorHoja= {8}/>
                        <PastoFlorOverlay/>
                    </PastoFlor>
                </PastoCreciente>

                <PastoCreciente>
                    <PastoFlor pastoFlor= {2}>
                        <PastoFlorTop/>
                        <PastoFlorBottom/>
                        <PastoFlorHoja pastoFlorHoja= {1}/>
                        <PastoFlorHoja pastoFlorHoja= {2}/>
                        <PastoFlorHoja pastoFlorHoja= {3}/>
                        <PastoFlorHoja pastoFlorHoja= {4}/>
                        <PastoFlorHoja pastoFlorHoja= {5}/>
                        <PastoFlorHoja pastoFlorHoja= {6}/>
                        <PastoFlorHoja pastoFlorHoja= {7}/>
                        <PastoFlorHoja pastoFlorHoja= {8}/>
                        <PastoFlorOverlay/>
                    </PastoFlor>
                </PastoCreciente>

                <GrowAns style={{"--d":"2.4s"}}>
                    <FlorGRight florGRight= {1}>
                        <Hoja/>
                    </FlorGRight>
                </GrowAns>

                <GrowAns style={{"--d":"2.8s"}}>
                    <FlorGRight florGRight= {2}>
                        <Hoja florGRight= {2} className="Hoja"/>
                    </FlorGRight>
                </GrowAns>

                <GrowAns style={{"--d":"2.8s"}}>
                    <FlorGFront>
                        <FlorGFrontHojaWrapper florGFrontHojaWrapper= {1}>
                            <FlorGFrontHoja/>
                        </FlorGFrontHojaWrapper>
                        <FlorGFrontHojaWrapper florGFrontHojaWrapper= {2}>
                            <FlorGFrontHoja/>
                        </FlorGFrontHojaWrapper>
                        <FlorGFrontHojaWrapper florGFrontHojaWrapper= {3}>
                            <FlorGFrontHoja/>
                        </FlorGFrontHojaWrapper>
                        <FlorGFrontHojaWrapper florGFrontHojaWrapper= {4}>
                            <FlorGFrontHoja/>
                        </FlorGFrontHojaWrapper>
                        <FlorGFrontHojaWrapper florGFrontHojaWrapper= {5}>
                            <FlorGFrontHoja/>
                        </FlorGFrontHojaWrapper>
                        <FlorGFrontHojaWrapper florGFrontHojaWrapper= {6}>
                            <FlorGFrontHoja/>
                        </FlorGFrontHojaWrapper>
                        <FlorGFrontHojaWrapper florGFrontHojaWrapper= {7}>
                            <FlorGFrontHoja/>
                        </FlorGFrontHojaWrapper>
                        <FlorGFrontHojaWrapper florGFrontHojaWrapper= {8}>
                            <FlorGFrontHoja/>
                        </FlorGFrontHojaWrapper>
                        <FlorGFrontLinea/>
                    </FlorGFront>
                </GrowAns>

                <GrowAns style={{"--d":"3.2s"}}>
                    <FlorGFR>
                        <Hoja className="Hoja"/>
                        <FlorGFRHoja florGFRHoja= {1}/>
                        <FlorGFRHoja florGFRHoja= {2}/>
                        <FlorGFRHoja florGFRHoja= {3}/>
                        <FlorGFRHoja florGFRHoja= {4}/>
                        <FlorGFRHoja florGFRHoja= {5}/>
                        <FlorGFRHoja florGFRHoja= {6}/>
                        <FlorGFRHoja florGFRHoja= {7}/>
                        <FlorGFRHoja florGFRHoja= {8}/>
                    </FlorGFR>
                </GrowAns>

                <LongG longG= {0}>
                    <GrowAns style={{"--d":"3s"}}>
                        <Hoja hoja= {0} className="Hoja Hoja--0"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"2.2s"}}>
                        <Hoja hoja= {1} className="Hoja Hoja--1"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"3.4s"}}>
                        <Hoja hoja= {2} className= "Hoja Hoja--2"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"3.6s"}}>
                        <Hoja hoja= {3} className="Hoja Hoja--3"/>
                    </GrowAns>
                </LongG>

                <LongG longG= {1}>
                    <GrowAns style={{"--d":"3.6s"}}>
                        <Hoja hoja= {0} className="Hoja--0"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"3.8s"}}>
                        <Hoja hoja= {1} className="Hoja--1"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"4s"}}>
                        <Hoja hoja= {2} className="Hoja--2"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"4.2s"}}>
                        <Hoja hoja= {3} className="Hoja--3"/>
                    </GrowAns>
                </LongG>

                <LongG longG= {2}>
                    <GrowAns style={{"--d":"4s"}}>
                        <Hoja hoja= {0} className="Hoja--0"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"4.2s"}}>
                        <Hoja hoja= {1} className="Hoja--1"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"4.4s"}}>
                        <Hoja hoja= {2} className="Hoja--2"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"4.6s"}}>
                        <Hoja hoja= {3} className="Hoja--3"/>
                    </GrowAns>
                </LongG>

                <LongG longG= {3}>
                    <GrowAns style={{"--d":"4s"}}>
                        <Hoja hoja= {0} className="Hoja--0"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"4.2s"}}>
                        <Hoja hoja= {1} className="Hoja--1"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"3s"}}>
                        <Hoja hoja= {2} className="Hoja--2"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"3.6s"}}>
                        <Hoja hoja= {3} className="Hoja--3"/>
                    </GrowAns>
                </LongG>

                <LongG longG= {4}>
                    <GrowAns style={{"--d":"4s"}}>
                        <Hoja hoja= {0} className="Hoja--0"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"4.2s"}}>
                        <Hoja hoja= {1} className="Hoja--1"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"3s"}}>
                        <Hoja hoja= {2} className="Hoja--2"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"3.6s"}}>
                        <Hoja hoja= {3} className="Hoja--3"/>
                    </GrowAns>
                </LongG>

                <LongG longG= {5}>
                    <GrowAns style={{"--d":"4s"}}>
                        <Hoja hoja= {0} className="Hoja--0"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"4.2s"}}>
                        <Hoja hoja= {1} className="Hoja--1"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"3s"}}>
                        <Hoja hoja= {2} className="Hoja--2"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"3.6s"}}>
                        <Hoja hoja= {3} className="Hoja--3"/>
                    </GrowAns>
                </LongG>

                <LongG longG= {6}>
                    <GrowAns style={{"--d":"4.2s"}}>
                        <Hoja hoja= {0} className="Hoja--0"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"4.4s"}}>
                        <Hoja hoja= {1} className="Hoja--1"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"4.6s"}}>
                        <Hoja hoja= {2} className="Hoja--2"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"4.8s"}}>
                        <Hoja hoja= {3} className="Hoja--2"/>
                    </GrowAns>
                </LongG>

                <LongG longG= {7}>
                    <GrowAns style={{"--d":"3s"}}>
                        <Hoja hoja= {0} className="Hoja--0"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"3.2s"}}>
                        <Hoja hoja= {1} className="Hoja--1"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"3.5s"}}>
                        <Hoja hoja= {2} className="Hoja--2"/>
                    </GrowAns>
                    <GrowAns style={{"--d":"3.6s"}}>
                        <Hoja hoja= {3} className="Hoja--3"/>
                    </GrowAns>
                </LongG>
            </Flores>
        </>
    )
}

export default FlorAmarilla;