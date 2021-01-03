import React from 'react';
import Header from '../components/Header/Header';
import {Container, LeftSide, RightSide} from './HomePageStyles';

export default function HomePage(){
    return(
        <Container>
            <LeftSide>
                <Header/>
            </LeftSide>

            <RightSide>

            </RightSide>
        </Container>
    )
}