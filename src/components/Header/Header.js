import React from "react";

import Basket from "./../Basket/Basket";

import './../../styles/components/Header.scss';

const Header = () => {
    return (
        <div className="header-box">
            <div className="tool-box">
                <div className="right-item">
                    <Basket />
                </div>
            </div>
        </div>
    );
};

export default Header;