import React from 'react';
import './styles.scss';

interface HeaderProps {
    text: string;
}

export const Header = ({ text }: HeaderProps) => {

    return (
        <header className='header-styled'>
            {text}
        </header>
    );
};