import React from 'react';
import avatar from '../../assets/avatar-messages.png';
import {Container, UserAndMessage, UserPhoto, UserNameAndMessage, UserName, UserMessage} from './WhatsMessagesStyle';

export interface UserNameProps{
    name: string;
    message: string,
}

export default function WhatsMessages({name, message} :UserNameProps){
    return(
        <Container>
            <UserAndMessage>
                <UserPhoto src={avatar}></UserPhoto>
                <UserNameAndMessage>
                    <UserName>{name}</UserName>
                    <UserMessage>{message}</UserMessage>
                </UserNameAndMessage>
            </UserAndMessage>
        </Container>
    )
}