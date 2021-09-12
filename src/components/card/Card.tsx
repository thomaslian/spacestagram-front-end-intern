import './Card.css';
import CardConfig from '../../interfaces/CardConfig';

import { ReactElement } from 'react';

export default function Card(props: CardConfig): ReactElement {
    console.log(props);
    return (
        <div className="Card" style={{ borderColor: props.color, color: props.textColor }}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div className="TakeSpace"></div>
        </div>
    );
}

Card.defaultProps = {
    color: '#514D51',
    textColor: 'black'
}