import { createContext, useState } from "react";

export const Cardholder = createContext();

export const CardProvider = (props) => {

  const [cards, setCards] = useState([1, 2, 3, 4, 5]);
  const [onDragging, setDragging] = useState(null);
  const [draggedCards, setDragged] = useState([]);

  return (
    <Cardholder.Provider
      value={[
        cards,
        setCards,
        draggedCards,
        setDragged,
        onDragging,
        setDragging,
      ]}
    >
      {props.children}
    </Cardholder.Provider>
  );
};
