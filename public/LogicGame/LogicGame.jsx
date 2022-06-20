import styles from "./LogicGame.module.css";
import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Modal } from "semantic-ui-react";

export const LogicGame = () =>{

    const gameLink = useNavigate()
    const [numberAnswer, setNumberAnswer] = useState(1)
    const [open, setOpen] = React.useState(false)

    useEffect(() => {
    if(numberAnswer === ArrayQuestions.length +1){
            gameLink('/') }
            
      });

   
    let randomAsk = Math.floor(Math.random() * ArrayQuestions.length);
    let random = ArrayQuestions[randomAsk];
    let randomQuest =  random.quest;
    let randomAnswer = [random.answer.false1, random.answer.false2, random.answer.false3, random.answer.true];
    let buttonAnswer = randomAnswer.sort(() => Math.random() - 0.5);
   


function  answerClick(){
    if(buttonAnswer[0] === random.answer.true){
        setNumberAnswer(numberAnswer+1)
        return setOpen(true)
    } else if(buttonAnswer[1] === random.answer.true){
        setNumberAnswer(numberAnswer+1)
        return setOpen(true)
    }else if(buttonAnswer[2] === random.answer.true){
        setNumberAnswer(numberAnswer+1)
        return setOpen(true)
    }else if(buttonAnswer[3] === random.answer.true){
        setNumberAnswer(numberAnswer+1)
        return setOpen(true)
    }
    else {
        return setOpen(true)
    }
};
  
    return(
        <div className={styles.history} >
                <h2>История</h2>
                <div className={styles.Question}>
                    {randomQuest}
                </div>
                <div className={styles.blockQuestions}>
                    <button onClick={answerClick}>{buttonAnswer[0]}</button>
                    <button onClick={answerClick}>{buttonAnswer[1]}</button>
                    <button onClick={answerClick}>{buttonAnswer[2]}</button>
                    <button onClick={answerClick}>{buttonAnswer[3]}</button>
                </div>
                <div className={styles.numberAnswer}>{numberAnswer}/{ArrayQuestions.length}</div>
                <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>   
                    <Modal.Content>
                        <Modal.Description >
                        <div className={styles.Window}>
                            <h4 className={styles.h4}>Верно!</h4>
                            <span className={styles.SpanFalse}>Верный ответ - <p className={styles.P}>"аа"</p></span>
                            <button class={styles.btnNext} onClick={() => setOpen(false)}>Перейти дальше</button>
                        </div>
                        </Modal.Description>
                    </Modal.Content>
                 </Modal>
        </div>
    )
}