import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

export const LeftSide = styled.div`
    width: 30%;
    height: 100%;
    border-style: solid;
    border-color: #ebebeb;
    background-color: #fff;
    border-width: 0px 1px 0px 0px;

    @media(max-width: 1240px){
        width: 100%;
    }

    @media(max-width: 380px){
        width: 100%;
    }
`;

export const RightSide = styled.div`
    width: 70%;
    height: 100%;
    background-color: #f8f9fa;

    @media(max-width: 1240px){
        display: none
    }

    @media(max-width: 380px){
        display: none;
    }
`;