import styled from 'styled-components';

export const HeaderBackground = styled.div`
    width: 100%;
    height: 20%;
    background-color: transparent;
`;

export const HeaderOne = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    background-color: #ededed;
`;

export const HeaderOneContents = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 10px;
    justify-content: space-between;
`;

export const UserPhoto = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
`;

export const IconsContainer = styled.div`
`;

export const IconsLink = styled.a`
    padding: 10px;
`;

export const HeaderTwo = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    border-style: solid;
    border-color: #ebebeb;
    justify-content: center;
    background-color: #f6f6f6;
    border-width: 0px 0px 1px 0px;
`;

export const HeaderTwoContents = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const InputContainer = styled.div`   
    width: 100%;
    position: relative;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 40px;
    border-width: 1px;
    border-style: solid;
    border-radius: 50px;
    border-color: #ebebeb;
    padding: 0px 20px 0px 60px;
    ::placeholder{
        color: #9c9c9c;
    }
`;

export const IconLinkInput = styled.a`
    position: absolute;
    color: #9c9c9c;
    left : 20px;
    top: 10px;
`;