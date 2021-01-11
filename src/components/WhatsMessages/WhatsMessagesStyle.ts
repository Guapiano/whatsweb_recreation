import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    border-style: solid;
    border-color: #ebebeb;
    padding: 0px 0px 0px 0px;
    border-width: 0px 0px 1px 0px;
    justify-content: space-between;
`;

export const UserAndMessage = styled.div`
    display: flex;
    align-items: center;
`;

export const UserPhoto = styled.img`
    width: 35px;
    height: 35px;
    cursor: pointer;
    border-radius: 50%;
`;

export const UsernameAndMessage = styled.div`
    display: flex;
    margin-left: 10px;
    flex-direction: column;
`;

export const Username = styled.p`
    color: #000;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const UserMessage = styled.p`
    color: #626262;
    font-size: 14px;
`;

export const HourAndBadgeContainer = styled.div`
    display: flex;
    align-items: center; 
    flex-direction: column;
    @media(max-width: 1310px){
        height: 40px;
    }

    @media(max-width: 1220px){
        height: 40px;
    }

    @media(max-width: 960px){
        height: 40px;
    }

    @media(max-width: 420px){
        height: 30px;
    }

    @media(max-width: 380px){
        height: 40px;
    }

    @media(max-width: 325px){
        height: 55px;
    }
`;

export const Hour = styled.p`
    color: #909090;
    font-size: 12px;
    margin-bottom: 5px;
    @media(max-width: 1310px){
        display: none;
    }

    @media(max-width: 1220px){
        display: flex;
    }

    @media(max-width: 420px){
        display: flex;
    }

    @media(max-width: 380px){
        display: none;
    }

    @media(max-width: 325px){
        display: none;
    }
`;

export const Badge = styled.div`
    width: 15px;
    height: 15px;
    display: flex;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    background-color: #06D755;
`;

export const NumberOfMessages = styled.p`
    color: #fff;
    font-size: 12px;
`;