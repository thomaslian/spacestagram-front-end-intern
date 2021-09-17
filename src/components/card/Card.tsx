import './Card.css';
import CardConfig from '../../interfaces/CardConfig';
import Star from '../star/Star';

import { ReactElement } from 'react';

export default function Card(props: CardConfig): ReactElement {

    let imageContent;

    if (props.imageUrl) {
        if (props.imageUrl.includes("youtube")) {
            imageContent = (
                <div className="youtube-responsive">
                    <iframe
                        width="853"
                        height="480"
                        src={props.imageUrl}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Youtube video"
                    />
                </div>
            )
        } else if (props.imageUrl) {
            imageContent = <img src={props.imageUrl} alt={props.title}></img>
        }
    }

    return (
        <div className="Card" style={{ borderColor: props.borderColor, color: props.textColor }}>
            {imageContent}
            <div className="CardText">
                <Star />
                <div className="cardTextHeader">
                    <h3>{props.title}</h3>
                    <p>Date taken: <time>{props.date}</time></p>
                </div>
                <p>{props.description}</p>
            </div>
            <div className="TakeSpace"></div>
        </div>
    );
}

Card.defaultProps = {
    borderColor: 'gray',
    textColor: 'black'
}