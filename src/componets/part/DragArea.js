import { useContext } from "react";
import { Card } from "../Card";
import { Cardholder } from "../CardProvider";

export const DragArea = () => {	
	const [cards] = useContext(Cardholder);
	// console.log(cards);
	return(
		<div className="first_Part">
			<h2>DragArea</h2>
			<div className="card-list">
				{cards.map(card=>(
					<Card content={`card ${card}`} dragElem={card}/>
				))}
			</div>
		</div>
	)
}