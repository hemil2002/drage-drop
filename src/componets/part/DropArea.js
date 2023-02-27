import { useContext, useEffect, useState } from "react";
import { Card } from "../Card";
import { Cardholder } from "../CardProvider";

export const DropArea = () => {
  const [
    cards,
    setCards,
    draggedCards,
    setDragged,
    onDragging,
    setDragging,
    currentCard,
    setCurrentCard,
  ] = useContext(Cardholder);

  const [screenY, setScreenY] = useState(0);

  // useEffect(()=>{
  //   console.log(currentCard)
  // },[currentCard])

  const handleDrop = (e) => {
    if (onDragging && draggedCards.length < 11) {
      return setDragged([...draggedCards, onDragging]);
    }

    console.log(currentCard);

    console.log(screenY / 82);
    if (currentCard) {
    }
    // console.log(draggedCards)
    // console.log(onDragging);
  };

  const dragOver = (e) => {
    // console.log(e.screenY)
    setScreenY(e.screenY);
    e.preventDefault();
  };

  return (
    <div className="second_Part">
      <h2>DropArea</h2>
      <div
        className="drop-list"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => dragOver(e)}
      >
        {draggedCards.map((card, index) => {
          return (
            <Card
              key={index}
              content={`card ${card.name}`}
              place="drop"
              card={card}
            />
          );
        })}
      </div>
    </div>
  );
};
