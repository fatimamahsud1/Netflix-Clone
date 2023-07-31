import React from 'react'
import styled from "styled-components"
import { BackgroundImage } from '../components/BackgroundImage';
import { Header } from '../components/Header';

export const Signup = () => {
  return 
    <Container>
    <BackgroundImage/>
    <Header/>
    <div className='body flex column a-center j-center' >
    <div className='text flex column' >
      <h1>Unlimited Movies, TV shows and more</h1>
      <h4>Watch Anywhere, Cancel Anytime.</h4>
      <h6>
        Ready to start? Enter your email to restart or create membership
      </h6>


    </div>
    </div>

    </Container>;

}


const Container = styled.div``;