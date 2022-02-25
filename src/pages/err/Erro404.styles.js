import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;
export const ContainerImg = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-image: url("./img/erro404.png");
background-position: center;
background-size: 450px;
background-repeat: no-repeat;
font-family: sans-serif;

@media(max-width: 800px){
    background-size: 350px;
    }
    @media(max-width: 600px){
        background-size: 280px;
    }
    @media(max-width: 400px){
        background-size: 200px;
    }
`;