import styles from './Display.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {CounterType, SetterType} from "../App";


export const Display = () => {

    const counter = useSelector<AppRootStateType, CounterType>(state => state.counter)
    const setter = useSelector<AppRootStateType, SetterType>(state => state.setter)

    return (
        <div>
            {setter.maxValue > setter.startValue && <div className={counter.score === counter.maxScore ? styles.limitScore: ''}>{counter.score}</div>}
            {setter.maxValue <= setter.startValue && <div className={styles.error}>Incorrect values</div>}
        </div>
    )
}