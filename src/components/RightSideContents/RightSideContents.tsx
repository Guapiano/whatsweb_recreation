import React from 'react';
import whats_image from '../../assets/whats-illustration.png'
import {Container, Illustration, Title, Paragraph} from './RightSideContentsStyles';

export default function RightSideContents(){
    return(
        <Container>
            <Illustration src={whats_image}></Illustration>
            <Title>Mantenha-se conectado para conversar</Title>
            <Paragraph>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.</Paragraph>
        </Container>
    )
}