import styled from 'styled-components';

export const Lines = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

input{
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: transparent;
    color: white;
    border: none;
    font-size: 15px;
    font-weight: 700;

    @media(max-width: 800px){
        font-size: 14px;
    }
    @media(max-width: 600px){
        font-size: 13px;
    }
    @media(max-width: 400px){
        font-size: 11px;
    }
}
`;
export const ContainerLogin = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
border-bottom: 1px solid white;
`;
export const Login = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
    justify-content: flex-start;
    align-items: flex-start;

    img{
    width: 35px;
    height: 35px;
    border-radius: 100px;
    
    @media(max-width:800px){
        width: 30px;
        height: 30px;
    }
}

span{
    color: white;
    margin: 5px;
    @media(max-width:800px){
        font-size: 12px;
    }
}
`;
