import { ReactElement } from 'react';

import './CardContainer.css';
import CardConfig from '../../interfaces/CardConfig';
import Card from '../card/Card';

export default function CardContainer(props: { cardArray: CardConfig[] }): ReactElement {
    return (
        <div className="CardContainer">
            {props.cardArray.map((card: CardConfig) => <Card key={card.imageUrl} imageUrl={card.imageUrl} date={card.date} title={card.title} description={card.description} />)}
        </div>
    );
}