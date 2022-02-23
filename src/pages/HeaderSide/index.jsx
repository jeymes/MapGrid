/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import * as J from './HeaderSide.styles';
import Columns from "../../Components/Columns/index";
import Lines from "../../Components/Lines/index";
import Erro404 from "../err/index";

export default () => {

    const [LinesColumns, setLinesColumns] = useState(false);

    const [err, setErr] = useState(false);
    


    const [img, setimg] = useState(true);


    return (

        <J.Container>

            <J.ContainerLines>
                <J.Lines >


                    <div onClick={(e) => setLinesColumns(!LinesColumns)}>
                        <div onClick={(e) => setimg(!img)}>
                            <Lines lines={'Storytelling'} />
                        </div>
                    </div>

                    <div onClick={(e) => setErr(!err)}>
                        <div onClick={(e) => setimg(!img)}>
                            <Lines lines={'Objetivos'} />
                        </div>
                    </div>

                    <div onClick={(e) => setErr(!err)}>
                        <div onClick={(e) => setimg(!img)}>
                            <Lines lines={'Moodboard'} />
                        </div>
                    </div>

                    <div onClick={(e) => setErr(!err)}>
                        <div onClick={(e) => setimg(!img)}>
                            <Lines lines={'Touchpoints'} />
                        </div>
                    </div>

                    <div onClick={(e) => setErr(!err)}>
                        <div onClick={(e) => setimg(!img)}>
                            <Lines lines={'Canais'} />
                        </div>
                    </div>

                    <div onClick={(e) => setErr(!err)}>
                        <div onClick={(e) => setimg(!img)}>
                            <Lines lines={'Expectativas'} />
                        </div>
                    </div>

                    <div onClick={(e) => setErr(!err)}>
                        <div onClick={(e) => setimg(!img)}>
                            <Lines lines={'Emoções'} />
                        </div>
                    </div>

                    <div onClick={(e) => setErr(!err)}>
                        <div onClick={(e) => setimg(!img)}>
                            <Lines lines={'Dores'} />
                        </div>
                    </div>

                    <div onClick={(e) => setErr(!err)}>
                        <div onClick={(e) => setimg(!img)}>
                            <Lines lines={'Mensagens'} />
                        </div>
                    </div>

                    <div onClick={(e) => setErr(!err)}>
                        <div onClick={(e) => setimg(!img)}>
                            <Lines lines={'Fontes'} />
                        </div>
                    </div>

                    <div onClick={(e) => setErr(!err)}>
                        <div onClick={(e) => setimg(!img)}>
                            <Lines lines={'Palavras Chave'} />
                        </div>
                    </div>

                    <div onClick={(e) => setErr(!err)}>
                        <div onClick={(e) => setimg(!img)}>
                            <Lines lines={'Landing Pages'} />
                        </div>
                    </div>


                    <div onClick={(e) => setErr(!err)}>
                        <div onClick={(e) => setimg(!img)}>
                            <Lines lines={'Kpis'} />
                        </div>
                    </div>



                </J.Lines>

            </J.ContainerLines>
            {LinesColumns && (
                <J.ColumnsContainer>
                    <Columns />
                </J.ColumnsContainer>
            )}

            {img && (
                <J.ContainerImg>
                    <img src="./img/ideiaMap.png" alt="Map" />
                </J.ContainerImg>
            )}
            {err && (
                <J.ErroContainer>
                    <Erro404/>
                </J.ErroContainer>
            )}





        </J.Container>

    )
}