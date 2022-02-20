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
}

`;