/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import * as J from './Lines.styles';
import Columns from "../Columns";

export default () => {

    const [logoActive, setLogoActive] = useState(false);

    return (

        <J.Container>
            <J.ContainerLines>
                <J.Lines>

                    <J.Storytelling id="Ctn-Colunas" onClick={(e) => setLogoActive(!logoActive)}>
                        <input type="button" value="Storytelling" />

                        {logoActive && (
                            <J.Login>
                                <img src="./img/logo.png" alt="logoMain" />
                                <span>Jemerson Sousa</span>
                            </J.Login>
                        )}

                    </J.Storytelling>

                </J.Lines>

            </J.ContainerLines>

            {logoActive && (
                <J.ColumnsContainer>
                    <Columns />
                </J.ColumnsContainer>
            )}



        </J.Container>
    )
}