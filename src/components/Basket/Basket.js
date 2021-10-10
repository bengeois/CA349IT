import React from 'react';

import './../../styles/components/Basket.scss'

const Basket = () => {
    return (
        <div className="basket-box">
            <span className="basket-article-nb">{0}</span>
            <div className="basket-logo-box">
                <img className="basket-img" src="/img/basket.png" alt="Basket" />
                Basket
            </div>
        </div>
    );
};

export default Basket;