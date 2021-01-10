import styled from 'styled-components';

export const Container = styled.div`
    height: 15%;
    width: 100%;
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
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
`;

export const UserNameAndMessage = styled.div`
    display: flex;
    margin-left: 10px;
    flex-direction: column;
`;

export const UserName = styled.p`
    color: #000;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const UserMessage = styled.p`
    color: #909090;
    font-size: 12px;
`;

export const HourAndBadgeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;   
`;

export const Hour = styled.p`
    color: #909090;
    font-size: 14px;
    margin-bottom: 5px;
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