import React from 'react';
import Sms from '../components/Sms/Sms';
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