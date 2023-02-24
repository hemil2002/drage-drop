import { useContext } from "react";
import { Card } from "../Card";
import { Cardholder } from "../CardProvider";

export const DropArea = () => {
  const [cards, setCards, draggedCards, setDragged, onDragging, setDragging] =
    useContext(Cardholder);

  const handleDrop = (e) => {
    // console.log(e);
    setDragged([...draggedCards, onDragging]);
    // console.log(draggedCards)
    // console.log(onDragging);
  };

  const dragOver = (e) => {
    // console.log("drag");
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
        {draggedCards.map((card) => {
          return <Card content={`card ${card}`} />;
        })}
      </div>
    </div>
  );
};
