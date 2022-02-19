import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-end;
background-color: #45474F;
`;
export const CardsContainer = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: flex-start;
margin-inline: 35px;
background-color: transparent;
/* border: 1px solid red; */
`;
export const Cards = styled.div`
    width: 100%;
    height: 50%;
    margin-inline: 5px;
    text-align: center;
    border: 1px solid white;
    

    h4{
        color: white;
        font-size: 15px;
        
    }

    div{
        /* border: 1px solid white; */
        P{
        color: white;
        font-size: 12px;
        border: 1px solid white;
    }
    form{
        width: 100%;
        height: 300px;
        /* border: 1px solid white; */
        color: white;
    }
    }

    
    
    
`;