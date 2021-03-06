import React, { useState } from "react";
import * as J from './Columns.styled'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [nome, setNome] = useState("")

    const armazenar = () => {
        localStorage.setItem("Nome", nome)
    };

    const remove = () => {
        localStorage.removeItem("Nome")
    };

    return (
        <J.Container>
            <J.CardsContainer>

                <J.Cards>
                    <J.ContainerForm>
                        <div className="TituloBlu">
                            <h4>NECESSIDADE</h4>
                        </div>

                        <div>
                            <p className="SubTituloBlu">PERCEBER NECESSIDADE</p>

                            <form className="FormArrowGraf" action="text" >

                                <div>
                                    <button className="salva" onClick={armazenar}></button>

                                    <button className="apagar" onClick={remove}>X</button>
                                </div>

                                <span>
                                    <img src="https://disruptex.co/wp-content/uploads/2019/03/Disruptex-Icons-02.png" alt="icon" />

                                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder={'Digite seu texto Aqui'} />
                                    {localStorage.getItem('Nome') && (
                                        <div>
                                            <p>{localStorage.getItem('Nome')}</p>
                                        </div>
                                    )}

                                </span>
                            </form>
                        </div>
                    </J.ContainerForm>

                </J.Cards>

                <J.Cards>
                    <J.ContainerForm>
                        <div className="TituloYellow">
                            <h4>DESCOBERTA</h4>
                        </div>

                        <div>
                            <p className="SubTituloYellow">AWARE</p>

                            <form className="FormArrowGraf" action="text" >

                                <div>
                                    <button className="salva" onClick={armazenar}>V</button>

                                    <button className="apagar" onClick={remove}>X</button>
                                </div>

                                <span>
                                    <img src="https://disruptex.co/wp-content/uploads/2019/03/Disruptex-Icons-02.png" alt="icon" />

                                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder={'Digite seu texto Aqui'} />
                                    {localStorage.getItem('Nome') && (
                                        <div>
                                            <p>{localStorage.getItem('Nome')}</p>
                                        </div>
                                    )}

                                </span>
                            </form>
                        </div>
                    </J.ContainerForm>
                </J.Cards>
                <J.Cards>
                    <J.ContainerForm>
                        <div className="TituloOrange">
                            <h4>AVALIA????O</h4>
                        </div>

                        <div>
                            <p className="SubTituloOrange">DESIRE</p>

                            <form className="FormTrueArrow" action="text" >

                                <div>
                                    <button className="salva" onClick={armazenar}>V</button>

                                    <button className="apagar" onClick={remove}>X</button>
                                </div>

                                <img src="https://prints.ultracoloringpages.com/57a0107568dccfd45d63317c6fd00f5d.png" alt="" />
                                <span>
                                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder={'Digite seu texto Aqui'} />
                                    {localStorage.getItem('Nome') && (
                                        <div>
                                            <p>{localStorage.getItem('Nome')}</p>
                                        </div>
                                    )}
                                </span>
                            </form>
                        </div>
                    </J.ContainerForm>
                </J.Cards>
                <J.Cards>
                    <J.ContainerForm>
                        <div className="TituloBlu">
                            <h4>COMPRA</h4>
                        </div>

                        <div>
                            <p className="SubTituloBlu">RESEARCH</p>

                            <form className="FormNextArrow" action="text" >

                                <div>
                                    <button className="salva" onClick={armazenar}>V</button>

                                    <button className="apagar" onClick={remove}>X</button>
                                </div>

                                <img src="https://smartlogistics.ng/wp-content/uploads/2020/12/pngwave-18.png" alt="" />
                                <span>
                                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder={'Digite seu texto Aqui'} />
                                    {localStorage.getItem('Nome') && (
                                        <div>
                                            <p>{localStorage.getItem('Nome')}</p>
                                        </div>
                                    )}
                                    
                                </span>
                            </form>
                        </div>
                    </J.ContainerForm>
                </J.Cards>
                <J.Cards>
                    <J.ContainerForm>
                        <div className="TituloYellow">
                            <h4>PRIMEIRO VALOR</h4>
                        </div>

                        <div>
                            <p className="SubTituloYellow">PRICING</p>

                            <form className="FormNextArrow" action="text">

                                <div>
                                    <button className="salva" onClick={armazenar}>V</button>

                                    <button className="apagar" onClick={remove}>X</button>
                                </div>

                                <img src="https://smartlogistics.ng/wp-content/uploads/2020/12/pngwave-18.png" alt="" />
                                <span>
                                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder={'Digite seu texto Aqui'} />
                                    {localStorage.getItem('Nome') && (
                                        <div>
                                            <p>{localStorage.getItem('Nome')}</p>
                                        </div>
                                    )}
                                    
                                </span>
                            </form>
                        </div>
                    </J.ContainerForm>
                </J.Cards>
                <J.Cards>
                    <J.ContainerForm>
                        <div className="TituloOrange">
                            <h4>VALOR RECORRENTE</h4>
                        </div>

                        <div>
                            <p className="SubTituloOrange">PURCHASE</p>

                            <form className="FormNextArrow" action="text" >

                                <div>
                                    <button className="salva" onClick={armazenar}>V</button>

                                    <button className="apagar" onClick={remove}>X</button>
                                </div>

                                <img src="https://smartlogistics.ng/wp-content/uploads/2020/12/pngwave-18.png" alt="" />
                                <span>
                                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder={'Digite seu texto Aqui'} />
                                    {localStorage.getItem('Nome') && (
                                        <div>
                                            <p>{localStorage.getItem('Nome')}</p>
                                        </div>
                                    )}
                                    
                                </span>
                            </form>
                        </div>
                    </J.ContainerForm>
                </J.Cards>
            </J.CardsContainer>
        </J.Container>
    )
}