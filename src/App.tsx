import React from 'react';
import styles from './App.module.css';
import {Counter} from "./components/Counter";
import {Setter} from "./components/Setter";

export type CounterType = {
    score: number
    maxScore: number
    startScore: number
}
export type SetterType = {
    maxValue: number
    startValue: number
}

function App() {
    return (
        <div className={styles.app}>
            <Setter/>
            <Counter/>
        </div>
    );
}

export default App;
