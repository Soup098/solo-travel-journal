import { useState } from 'react'
// ***********************************************
import Header from './components/Header'
import Card from './components/Card'
import data from './data.js'

export default function App() {
    const cardData = data.map((place) =>{
        return(
            <Card 
            place = {place}
        />
        )
    })
    
    return (
        <div className="main-content">
        <Header />
        {cardData}
        </div>
    )
}



