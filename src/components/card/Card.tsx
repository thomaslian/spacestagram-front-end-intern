import './Card.css';
import CardConfig from '../../interfaces/CardConfig';

import { ReactElement } from 'react';

export default function Card(props: CardConfig): ReactElement {
    if (props.imageUrl.includes("youtube")) {
        console.log("Youtube link!");
    }
    return (
        <div className="Card" style={{ borderColor: props.borderColor, color: props.textColor }}>
            {props.imageUrl && !props.imageUrl.includes("youtube") ? <img src={props.imageUrl} alt={props.title}></img> : null}
            {props.imageUrl.includes("youtube") ?
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
                </div> : null}
            <div className="CardText">
                <h3>{props.title}</h3>
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