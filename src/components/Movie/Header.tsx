/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react';
import {HeaderPictureStyled, HeaderTextContainerStyled, ScrollButtonStyled} from "./Moive.styles";

function scroll(): void {
    const searchForm = document.getElementById('search-form');
    searchForm?.scrollIntoView({behavior: 'smooth'});
}

const Header = () => {
    return (
        <HeaderPictureStyled>
            <HeaderTextContainerStyled>
                <div>Film-go</div>
                <div>Whether you're looking to express yourself with witty one-liners, hilarious images, or clever
                    wordplay, MemeLab has got you covered. With its intuitive design and seamless functionality, you can
                    create and share your favorite memes with just a few clicks.
                </div>
                <ScrollButtonStyled>Explore</ScrollButtonStyled>
            </HeaderTextContainerStyled>
        </HeaderPictureStyled>
    );
};

export default Header;
