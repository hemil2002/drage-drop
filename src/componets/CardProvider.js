import { createContext, useEffect, useState } from "react";

export const Cardholder = createContext();

export const CardProvider = (props) => {
  const [cards, setCards] = useState([
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
  ]);
  const [onDragging, setDragging] = useState(null);
  const [draggedCards, setDragged] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    console.log(currentCard);
  }, [currentCard]);

  return (
    <Cardholder.Provider
      value={[
        cards,
        setCards,
        draggedCards,
        setDragged,
        onDragging,
        setDragging,
        currentCard,
        setCurrentCard,
      ]}
    >
      {props.children}
    </Cardholder.Provider>
  );
};
