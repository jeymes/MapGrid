import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
width: 100%;
height: 100vh;
background-color: #45474F;
`;
export const ColumnsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const ContainerLines = styled.div`
display: flex;
width: 15%;
height: 100vh;
background-color: #45474F;

@media(max-width: 800px){
    width: 20%;
    }
    @media(max-width: 500px){
    width: 22%;
    margin-top: 20px;
    }
`;
export const Lines = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: column;
justify-content: center;
align-items: flex-start;

div{
    margin-bottom: 1px;
}
`;
export const ContainerImg = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;

img{
    width: 300px;

    @media(max-width: 800px){
        width:250px
    }
    @media(max-width: 600px){
        width:200px
    }
    @media(max-width: 400px){
        width:150px
    }
}

`;
export const ErroContainer = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
`;