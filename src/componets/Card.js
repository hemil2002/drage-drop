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
  ] = useContext(Cardholder);

  const handleDrag = (e, elemId) => {
    setDragging(elemId);
    setCurrentCard(elemId);
  };

  const handeleClick = () => {
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
        handeleClick()
        handleDrag(e, props.dragElem)
      }}
      style={{ color: "black" }}
    >
      <p>{props.content}</p>
    </div>
  );
};
