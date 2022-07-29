import React, { useState, useEffect } from "react";
import backFace from '../assets/imagenes/gatito.png'


const Card = ({name, number, frontFace, flipCard, unflippedCards, disabledCards}) => {
    const [isFlipped, setIsFlipped] = useState(true)
    const [hasEvent, setHasEvent] = useState(true)

    useEffect(() => {
        if (unflippedCards.includes(number)) {
            setTimeout(() => setIsFlipped(true), 700);
        }
    }, [unflippedCards])

    useEffect(() => {
        if(disabledCards.includes(number)) {
            setHasEvent(false);
        }

    }, [disabledCards])

    const handleClick = () => {
       const value = flipCard(name, number);
       if (value !== 0) {
           setIsFlipped(!isFlipped)  

       }
    }

    const gatito = <img className="card-image" src={backFace} alt="" onClick={ hasEvent ? handleClick: null} />
    const imagenes = <img className="card-image " src={frontFace} alt="" onClick={hasEvent ? handleClick: null}/>
    return (
        
        <div className="card">
         {
         isFlipped ? gatito : imagenes 
         }  
        </div>
    )
}
export default Card