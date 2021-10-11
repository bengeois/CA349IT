import React from 'react';
import { useSelector } from 'react-redux';

import './../../styles/components/Basket.scss'

const Basket = () => {
    const itemsCount = useSelector((state) => state.basket.itemsCount);

    return (
        <div className="basket-box">
            <span className="basket-article-nb">{itemsCount}</span>
            <div className="basket-logo-box">
                <img className="basket-img" src="/img/basket.png" alt="Basket" />
                Basket
            </div>
        </div>
    );
};

export default Basket;