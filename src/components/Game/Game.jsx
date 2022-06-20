import React from "react";
import { Theme } from "../Theme/Theme";
import styles from "./Game.module.css";
import allTheme from "../Theme/imgTheme/allTheme.jpg";
import biologiya from "../Theme/imgTheme/biologiya.jpg";
import geografy from "../Theme/imgTheme/geografy.jpg";
import history from "../Theme/imgTheme/history.jpg";
import music from "../Theme/imgTheme/music.jpg";
import iskusstvo from "../Theme/imgTheme/iskusstvo.jpg";
import coinsShop from './coinsShop.png';
import { NavLink } from 'react-router-dom';


export const Game = () => {

    return(
        <div className={styles.game}>
            <h1>Добро пожаловать в игру "Эрудит"</h1>
            <h2>Выбери тему для игры</h2>
            <div className={styles.flexTheme}>
                <Theme nameTheme="История" imgTheme={history} linkThemeGame="/game/history"/>
                <Theme nameTheme="География" imgTheme={geografy} linkThemeGame="/game/geography" />
                <Theme nameTheme="Искусство" imgTheme={iskusstvo} linkThemeGame="/game/art"/>
                <Theme nameTheme="Биология" imgTheme={biologiya} linkThemeGame="/game/biology"/>
                <Theme nameTheme="Музыка" imgTheme={music} linkThemeGame="/game/music"/>    
                <Theme nameTheme="Все темы" imgTheme={allTheme} linkThemeGame="/game/allTheme"/>
            </div>
            <NavLink to="/shop">
                <div className={styles.coins}>
                    <img src={coinsShop}  />
                    <p>Отвечай на вопросы и получай монеты</p>
                </div>
            </NavLink>
            
        </div>
    )
}