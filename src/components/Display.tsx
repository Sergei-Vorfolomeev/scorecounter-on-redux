import styles from './Display.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {CounterType, SetterType} from "../App";
import {memo} from "react";

export const Display = memo(() => {

    const counter = useSelector<AppRootStateType, CounterType>(state => state.counter)
    const setter = useSelector<AppRootStateType, SetterType>(state => state.setter)

    const limitScore = counter.score === counter.maxScore ? styles.limitScore: ''

    return (
        <div>
            {setter.maxValue <= setter.startValue
            ? <div className={styles.error}>Incorrect values</div>
            : <div className={limitScore}>{counter.score}</div>}
        </div>
    )
});