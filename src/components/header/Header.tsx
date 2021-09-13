import './Header.css';

import { ReactElement } from 'react';

export default function Header(): ReactElement {
    return (
        <div className="Header">
            <h1>Spacestagram</h1>
            <h2>Photos provided by the NASA API</h2>
        </div>
    );
}