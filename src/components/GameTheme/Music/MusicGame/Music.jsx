import styles from "./Music.module.css";
import { ArrayQuestions } from "../MusicArray/MusicArray";
import React, { useState,useEffect } from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import { Modal } from "semantic-ui-react";


export const Music = () =>{

    const gameLink = useNavigate()
    const [numberAnswer, setNumberAnswer] = useState(1)
    const [open, setOpen] = React.useState(false)

    useEffect(() => {
    if(numberAnswer === ArrayQuestions.length +1){
                gameLink('/') 
            }
            
      });

   
    let randomAsk = Math.floor(Math.random() * ArrayQuestions.length);
    let random = ArrayQuestions[randomAsk];
    let randomQuest =  random.quest;
    let randomAnswer = [random.answer.false1, random.answer.false2, random.answer.false3, random.answer.true];
    let buttonAnswer = randomAnswer.sort(() => Math.random() - 0.5);
   
    const [textH, setTextH] = useState('Неверно!')
    const [textSpan, setTextSpan] = useState('Верный ответ -')
    const [textP, setTextP] = useState(random.answer.true)

function  answerClickOne(){
 
    if(buttonAnswer[0] === random.answer.true){
        setNumberAnswer(numberAnswer+1)
        return setOpen(true), setTextH('Верно'), 
        setTextSpan('Продолжай в том же духе!'), setTextP('')    
    } 
        else {
            return setOpen(true), setTextH('Неверно!'), 
            setTextSpan('Верный ответ -'), setTextP(random.answer.true) 
        }
};
function  answerClickTwo(){
    if(buttonAnswer[1] === random.answer.true){
        setNumberAnswer(numberAnswer+1)

        return setOpen(true), setTextH('Верно'), 
        setTextSpan('Продолжай в том же духе!'), setTextP('')    
    } 
    else {
        return setOpen(true), setTextH('Неверно!'), 
        setTextSpan('Верный ответ -'), setTextP(random.answer.true) 
    }
};
function  answerClickThree(){
    if(buttonAnswer[2] === random.answer.true){
        setNumberAnswer(numberAnswer+1)
        return setOpen(true), setTextH('Верно'), 
        setTextSpan('Продолжай в том же духе!'), setTextP('')
    } 
    else {
        return setOpen(true), setTextH('Неверно!'), 
        setTextSpan('Верный ответ -'), setTextP(random.answer.true) 
    }
};    
function  answerClickFour(){

    if(buttonAnswer[3] === random.answer.true){
        setNumberAnswer(numberAnswer+1)
        return setOpen(true), setTextH('Верно'), 
        setTextSpan('Продолжай в том же духе!'), setTextP('')
    } 
    else {
        return setOpen(true), setTextH('Неверно!'), 
        setTextSpan('Верный ответ -'), setTextP(random.answer.true) 
    }
};




    return(
        <div className={styles.history} >
            <NavLink to="/"><button className={styles.HomeClick}>Перейти на главную</button></NavLink>
                <h2>Музыка</h2>
                <div className={styles.Question}>
                    {randomQuest}
                </div>
                <div className={styles.blockQuestions}>
                    <button onClick={answerClickOne}>{buttonAnswer[0]}</button>
                    <button onClick={answerClickTwo}>{buttonAnswer[1]}</button>
                    <button onClick={answerClickThree}>{buttonAnswer[2]}</button>
                    <button onClick={answerClickFour}>{buttonAnswer[3]}</button>
                </div>
                <div className={styles.numberAnswer}>{numberAnswer}/{ArrayQuestions.length}</div>
                <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>   
                    <Modal.Content>
                        <Modal.Description >
                        <div className={styles.Window}>
                            <h4 className={styles.h4}>{textH}</h4>
                            <span className={styles.SpanFalse}>{textSpan}<p className={styles.P}>{textP}</p></span>
                            <button class={styles.btnNext} onClick={() => setOpen(false)}>Перейти к случайному вопросу</button>
                        </div>
                        </Modal.Description>
                    </Modal.Content>
                 </Modal>
        </div>
    )
}