import React, { useState } from "react";
import * as J from './Lines.styles';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const [logoActive, setLogoActive] = useState(false);
    return (
        
            <J.Lines id="Ctn-Colunas" onClick={(e) => setLogoActive(!logoActive)}>
                <input type="button" value={props.lines} />

                {logoActive && (
                    <J.ContainerLogin>
                        <J.Login>
                            <img src="./img/logo.png" alt="logoMain" />
                            <span>Jemerson Sousa</span>
                        </J.Login>
                    </J.ContainerLogin>
                )}

            </J.Lines>
        
    )
}