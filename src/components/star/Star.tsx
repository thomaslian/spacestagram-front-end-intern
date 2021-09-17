import './Star.css';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

type Props = {};
type State = { starred: boolean }; // Should be moved to the Card Component to handle if the if the card is starred or not

export default class Star extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { starred: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event: any): void {
        console.log(event);
        // Keypresses other then Enter and Space should not trigger a command
        if (event.nativeEvent.pointerType !== "mouse" && event.key !== 'Enter' && event.key !== ' ') {
            return;
        }

        if (this.state.starred) {
            this.setState({ starred: false });
        } else {
            this.setState({ starred: true });
        }
    }

    render() {
        return (
            <div className={this.state.starred ? "Star starred" : "Star unstarred"} >
                <FontAwesomeIcon className="star-icon far" onClick={this.handleClick} onKeyDown={this.handleClick} icon={faStar} role="button" tabIndex={0} />
            </div>
        );
    }
}