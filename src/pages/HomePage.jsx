import React from 'react'
import Card from '../components/Card';
import cardImage from "../assets/card.svg"; 
import cardImage1 from "../assets/card1.svg"; 
import cardImage2 from "../assets/card2.svg"

const HomePage = () => {
  return (
    <div className='container p-lg-5 overflow-scroll' style={{background: "var(--primary-bg-gradient)"}}>
        <h2 className='heading d-flex justify-content-center pt-lg-2 pt-sm-1 pb-lg-2'>Sample Books Generated by BookAI</h2>
        <p className='sub-heading d-flex justify-content-center pb-3'>Explore some of the captivating books created using our AI technology.</p>
    <div className='main-container d-flex gap-5 justify-content-center'>
    <Card 
                title="Science Fiction" 
                text="As Dr. Elara stepped through the shimmering portal, she knew there was no turning back. The fate of two universes now rested in her hands..."
                imgSrc={cardImage}
            />
            <Card 
                title="Mystery" 
                text="Detective Avery Stone uncovers a trail of secrets buried deep within the city, where nothing is as it seems and everyone has something to hide."
                imgSrc={cardImage1}
            />
            <Card 
                title="Fantasy" 
                text="In a world where dragons soar above enchanted forests, young Aelin must harness her magic to defeat the darkness threatening her kingdom."
                imgSrc={cardImage2}
            />
    </div>
    </div>
  )
}

export default HomePage