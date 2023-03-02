import { useContext } from "react";
import { Cardholder } from "./CardProvider";

export const Card = (props) => {
  const [
    cards,
    setCards,
    draggedCards,
    setDragged,
    onDragging,
    setDragging,
    currentCard,
    setCurrentCard,
    tell,
    setTell,
  ] = useContext(Cardholder);

  const handleDrag = (e, elemId) => {
    setDragging(elemId);

    if (props.place == "drop") {
      setCurrentCard(props.card);
    } else {
      setCurrentCard(null);
    }
  };

  return (
    <div
      className="card"
      draggable="true"
      onDrag={(e) => {
        handleDrag(e, props.dragElem);
      }}
      style={{ color: "black" }}
    >
      <p>{props.content}</p>
    </div>
  );
};
