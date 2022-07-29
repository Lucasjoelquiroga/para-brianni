import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import images from './assets/import'


function App() {
  const [cards, setCards] = useState([])
  const [firsCard, setFirsCard] = useState({})
  const [secondCard, setSecondCard] = useState({})
  const [unflippedCards, setUnflippedCards] = useState([])
  const [disabledCards, setDisabledCards] = useState([])
  



  const shuffleArray = (Array) =>{
    for (let i = Array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = Array[i];
      Array[i] = Array[j];
      Array[j] = temp;
    }
  }
  useEffect(() => {
    shuffleArray(images)
    setCards(images)

  },[])

  useEffect(() => {
    checkForMatch();
    
    
  },[secondCard]);

  const flipCard =(name, number) => {
    if (firsCard.name === name && firsCard.number === number) {
      return 0;
    }
    if (!firsCard.name) {
      setFirsCard({name, number})

    }
    else if (!secondCard.name){
      setSecondCard({name, number})
    }
    return 1;
  }
  const checkForMatch = () => {
    if (firsCard.name && secondCard.name) {
      const Match = firsCard.name === secondCard.name;
      Match ? disableCards() : unflipCards();

    }
  }
  const disableCards =() => {
    setDisabledCards([firsCard.number, secondCard.number])
    resetCards();
  };
  const unflipCards = () => {
    setUnflippedCards([firsCard.number, secondCard.number])
    resetCards();
  };

  const resetCards = () => {
    setFirsCard({})
    setSecondCard({})
  }

  return (
    <div className="App">
     
<main>
      <div className='cards-container'>
{
  cards.map((card, index) => (
<Card name={card.player}
      number={index}
      frontFace={card.src}
      flipCard={flipCard}
      unflippedCards={unflippedCards}
      disabledCards={disabledCards}/>
  ))
}
<br /><br /><br />
<div className='brianni'>

<strong><span>Juego de memoria</span> <span>Para Brianni💝</span></strong>
</div>
      </div>
    
  
</main>

      
    </div> 
  )
}

export default App
