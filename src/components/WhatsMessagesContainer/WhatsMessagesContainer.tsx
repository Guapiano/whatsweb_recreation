import React from 'react';
import WhatsMessages from '../../components/WhatsMessages/WhatsMessages';
import {MessagesContainer, MessagesContents} from './WhatsMessagesContainerStyle';

export default function Sms(){
    return(
        <MessagesContainer>
            <MessagesContents>
                <WhatsMessages name="Gabriel Krzizanowski" message="Estou recriando o WhatsApp Web."></WhatsMessages>
            </MessagesContents>
        </MessagesContainer>
    )
}