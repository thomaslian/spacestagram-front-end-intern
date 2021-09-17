import './Spinner.css';

import { ReactElement } from 'react';

export default function Header(): ReactElement {
    return (
        <div className="Spinner">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    );
}