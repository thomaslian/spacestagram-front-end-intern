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
        this.handleButtonDown = this.handleButtonDown.bind(this);
    }

    handleClick(event: any): void {
        if (this.state.starred) {
            this.setState({ starred: false });
        } else {
            this.setState({ starred: true });
        }
    }

    handleButtonDown(event: any) {
        // Keypresses other then Enter and Space should not trigger a command
        if (event.key !== 'Enter' && event.key !== ' ') {
            return;
        }

        this.handleClick(event);
    }

    render() {
        return (
            <div className={this.state.starred ? "Star starred" : "Star unstarred"} >
                <FontAwesomeIcon className="star-icon far" onClick={this.handleClick} onKeyDown={this.handleButtonDown} icon={faStar} role="button" tabIndex={0} />
            </div>
        );
    }
}