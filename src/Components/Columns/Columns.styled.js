import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
z-index: 10;
flex-direction: column;
justify-content: flex-start;
align-items: flex-end;
background-color: #45474F;
font-family: sans-serif;
`;
export const CardsContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-evenly;
align-items: flex-start;
background-color: transparent;
/* border: 1px solid red; */
`;
export const Cards = styled.div`
    width: 170px;
    min-width: 100px;
    height: 50%;
    min-height: 300px;
    text-align: center;
    display: flex;
    margin-top:5px;
    /* border: 1px solid white; */
`;
export const ContainerForm = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


.TituloBlu{
        width: 100%;
        padding: 1px;
        background-color:#00BFFF;
        border-bottom-left-radius:30px;
        border-top-right-radius:30px;
    }
    .TituloYellow{
        width: 100%;
        padding: 1px;
        background-color: #FFD700;
        border-bottom-left-radius:30px;
        border-top-right-radius:30px;
    }
    .TituloOrange{
        width: 100%;
        padding: 1px;
        background-color: 	#FF8C00;
        border-bottom-left-radius:30px;
        border-top-right-radius:30px;
    }
    

    h4{
        color: #001;
        font-weight: bold;
        text-shadow: 1px 1px #A9A9A9;
        font-size: 15px;
        
    }

    div{
        .SubTituloBlu{
            background-color: #B0E0E6;
            text-shadow: 1px 1px #A9A9A9;
            font-weight: bold;
            color: #001;
            padding:5px;
        }
        .SubTituloYellow{
            background-color: #F0E68C;
            text-shadow: 1px 1px #A9A9A9;
            font-weight: bold;
            color: #001;
            padding:5px;
        }
        .SubTituloOrange{
            background-color: #FFE4B5;
            text-shadow: 1px 1px #A9A9A9;
            font-weight: bold;
            color: #001;
            padding:5px;
        }
        P{
        color: white;
        font-size: 12px;
        border: 1px solid white;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 204px;
        color: #001;
        border-left: 5px solid #00BFFF;
        border-radius: 5px;

        div{

            button{
                color: white;
                margin-left: 150px;
                border: none;
                border-radius: 5px;
                position: relative;
                top: 0px;
                left: 1px;
                z-index: 100;
            
            }
            .salva{
                background-color: green;
                display: none;
                
            }

            .apagar{
                background-color: red;
                
            }
        }

        input{
            width: 95%;
            height: 200px;
            padding: 2px;
            position: relative;
            bottom: 145px;
            z-index: 15;
            border: none;
            background-color: transparent;
            color: white;
            opacity: 50%;
            text-align: start;
            outline: none;

            ::-webkit-input-placeholder{
                color: white;
                font-weight: bold; }      
        }


        p{
            width: 96%;
            height: 197px;
            padding: 2px;
            position: relative;
            bottom: 358px;
            z-index: 5;
            border: none;
            background-color: #B0E0E6;
            border: 1px solid #B0E0E6 ;
            border-radius: 1px;
            opacity: 50%;
            color: black;
            text-align: start;
            font-weight: bold;

            
        }

    }
    .FormArrowGraf{
        img{
            width: 136px;
            
        }
    }
    }
    
    .FormTrueArrow, .FormNextArrow{
        img{
            width: 125px;
            
        }
    }
    
`;
