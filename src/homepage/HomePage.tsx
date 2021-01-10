import React from 'react';
import RightSideContents from '../components/RightSideContents/RightSideContents'
import Msgs from '../components/WhatsMessagesContainer/WhatsMessagesContainer';
import Header from '../components/Header/Header';
import {Container, LeftSide, RightSide} from './HomePageStyles';


export default function HomePage(){
    return(
        <Container>
            <LeftSide>
                <Header/>
                <Msgs></Msgs>
            </LeftSide>

            <RightSide>
                <RightSideContents></RightSideContents>
            </RightSide>
        </Container>
    )
}