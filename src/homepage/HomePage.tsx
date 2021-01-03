import React from 'react';
import Sms from '../components/WhatsMessagesContainer/WhatsMessagesContainer';
import Header from '../components/Header/Header';
import {Container, LeftSide, RightSide} from './HomePageStyles';


export default function HomePage(){
    return(
        <Container>
            <LeftSide>
                <Header/>
                <Sms></Sms>
            </LeftSide>

            <RightSide>

            </RightSide>
        </Container>
    )
}