import './Card.css';
import CardConfig from '../../interfaces/CardConfig';

import { ReactElement } from 'react';

export default function Card(props: CardConfig): ReactElement {
    console.log(props);
    return (
        <div className="Card" style={{ borderColor: props.color, color: props.textColor }}>
            <img src={props.imageUrl} alt={props.title}></img>
            <div className="CardText">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className="TakeSpace"></div>
        </div>
    );
}

Card.defaultProps = {
    color: '#514D51',
    textColor: 'black'
}