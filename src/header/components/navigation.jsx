import React from 'react';

const Navigation = () => (
    <nav role="navigation">
        <ul className="navigation">
            <li className="navigation__item">
                <a href="javascript:void(0);" className="navigation__text">Track Order</a>
            </li>
            <li className="navigation__item">
                <a href="javascript:void(0);" className="navigation__icon navigation__icon--search"></a>
            </li>
            <li className="navigation__item">
                <a href="javascript:void(0);" className="navigation__icon navigation__icon--user"></a>
            </li>
            <li className="navigation__item">
                <a href="javascript:void(0);" className="navigation__icon navigation__icon--shopping"></a>
            </li>
        </ul>
    </nav>
);

export default Navigation;