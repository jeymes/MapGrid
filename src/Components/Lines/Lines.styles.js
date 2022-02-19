import styled from 'styled-components';

export const Container = styled.div`
display: flex;
width: 100%;
height: 100vh;
background-color: #1a1a1a;
`;
export const ColumnsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
`;


export const ContainerLines = styled.div`
display: flex;
width: 15%;
height: 100vh;
position: fixed;
background-color: #1a1a1a;
border: 1px solid white;
`;
export const Lines = styled.div`
display: flex;
width: 100%;

`;
export const Storytelling = styled.div`
width: 100%;
height: 40px;
/* border: 1px solid white; */

input{
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: white;
    border: none;
    font-size: 20px;
}
`;
export const Login = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 40px;
/* border-bottom: 1px solid white; */

img{
    width: 35px;
    height: 35px;
    border-radius: 100px;
}

span{
    color: white;
    margin: 10px;
}
`;
