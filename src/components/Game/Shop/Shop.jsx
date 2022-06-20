import styles from './Shop.module.css'
import kumis from './imgShop/kumis.png'
import coin from './imgShop/coin.png'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const Shop = () =>{
    
    const [coins, setCoins] = useState(17)
    const purchase = () =>{
        if(coins > 7){
            setCoins(coins -purchaseKumis)
            alert('Поздравляем с покупкой кумыса')
        }
    }
let purchaseKumis = 10

    return( 
    <div className={styles.shop}>
    <NavLink to="/"><button className={styles.HomeClick}>Перейти на главную</button></NavLink>

        <div className={styles.coinsAmount}>У тебя: {coins} монет<img src={coin} className={styles.coin} /></div>
        <div className={styles.toggle}>
            <span>{purchaseKumis} монет<img src={coin} className={styles.coin}/></span>
            <img src={kumis} onClick={purchase} className={styles.product}/>
            <p>Кумыс для хорошего настроения</p>
        </div>
        
    </div>
    )

}