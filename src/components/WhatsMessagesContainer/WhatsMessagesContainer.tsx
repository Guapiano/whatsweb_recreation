import React from 'react';
import WhatsMessages from '../../components/WhatsMessages/WhatsMessages';
import {MessagesContainer, MessagesContents} from './WhatsMessagesContainerStyle';

export default function Sms(){
    return(
        <MessagesContainer>
            <MessagesContents>
                <WhatsMessages name="Lucas Reitz" message="Lorem Ipsum is simply dummy text of the..." hourMessage="15:00" badgeMessages={1}></WhatsMessages>
                <WhatsMessages name="Vinícius Zoz" message="Lorem Ipsum is simply dummy text of the...." hourMessage="14:30" badgeMessages={5}></WhatsMessages>
                <WhatsMessages name="Gabriel Krzizanowski" message="Lorem Ipsum is simply dummy text of the..." hourMessage="10:25" badgeMessages={3}></WhatsMessages>
                <WhatsMessages name="Gabriel Rodrigo Parasky" message="Lorem Ipsum is simply dummy text of the..." hourMessage="09:30" badgeMessages={8}></WhatsMessages>
                <WhatsMessages name="Gabriel Souza de Oliveira" message="Lorem Ipsum is simply dummy text of the..." hourMessage="08:00" badgeMessages={2}></WhatsMessages>
                <WhatsMessages name="Matheus Vinícius Leite Geiser" message="Lorem Ipsum is simply dummy text of the..." hourMessage="06:45" badgeMessages={9}></WhatsMessages>
            </MessagesContents>
        </MessagesContainer>
    )
}