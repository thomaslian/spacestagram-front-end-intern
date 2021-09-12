import './Header.css';

import React from 'react';

type Props = {};
type State = { hidden: boolean, path: string };

export default class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hidden: true, path: window.location.pathname };
    }

    componentDidMount(): void {
        //window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount(): void {
        //window.removeEventListener("resize", this.handleResize.bind(this));
    }

    componentDidUpdate(): void {
        //this.setState({ path: window.location.pathname });
    }

    render(): React.ReactNode {
        return (
            <div className="Header">
                <h1>Spacestagram</h1>
                <h2>Photos provided by the NASA API</h2>
            </div>
        );
    }
}