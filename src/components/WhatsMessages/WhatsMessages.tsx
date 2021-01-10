import React from 'react';
import avatar from '../../assets/avatar-messages.png';
import {Container, UserAndMessage, UserPhoto, UsernameAndMessage, Username, UserMessage, HourAndBadgeContainer, Hour, Badge, NumberOfMessages} from './WhatsMessagesStyle';

export interface MessageProps{
    name: string;
    message: string,
    hourMessage: string,
    badgeMessages: number,
}


export default function WhatsMessages({name, message, hourMessage, badgeMessages} :MessageProps){
    return(
        <Container>
            <UserAndMessage>
                <UserPhoto src={avatar}></UserPhoto>
                <UsernameAndMessage>
                    <Username>{name}</Username>
                    <UserMessage>{message}</UserMessage>
                </UsernameAndMessage>
            </UserAndMessage>
            <HourAndBadgeContainer>
                <Hour>{hourMessage}</Hour>
                <Badge>
                    <NumberOfMessages>{badgeMessages}</NumberOfMessages>
                </Badge>
            </HourAndBadgeContainer>
        </Container>
    )
}