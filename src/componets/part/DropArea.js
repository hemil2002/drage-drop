import { useContext, useState } from "react";
import { Card } from "../Card";
import { Cardholder } from "../CardProvider";

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
];

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

  const handleDrop = (e) => {
    let abc = Number((screenY / 95).toString().split(".")[0]);
    const position = abc > 3 ? abc : abc - 1;
    let temp = draggedCards
      ?.filter((card) => {
        if (currentCard?.id == card?.id) {
          return false;
        }
        return true;
      })
      .map((card, index) => {
        return {
          ...card,
          id: index,
        };
      });

    if (currentCard) {
      return setDragged(
        insert(temp, position, { ...currentCard, id: draggedCards.length })
      );
    } else if (onDragging && draggedCards.length < 11) {
      return setDragged(
        insert(draggedCards, position, {
          ...onDragging,
          id: draggedCards.length,
        })
      );
    }
  };

  const dragOver = (e) => {
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
        {draggedCards?.map((card, index) => {
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
