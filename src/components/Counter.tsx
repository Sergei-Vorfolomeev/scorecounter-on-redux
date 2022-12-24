import React, {useCallback} from 'react';
import styles from "../App.module.css";
import {Display} from "./Display";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {decreaseScoreAC, increaseScoreAC, resetScoreAC} from "../store/counterReducer";
import {CounterType, SetterType} from "../App";

type CounterPropsType = {

}

export const Counter: React.FC<CounterPropsType> = (props) => {

    const counter = useSelector<AppRootStateType, CounterType>(state => state.counter)
    const setter = useSelector<AppRootStateType, SetterType>(state => state.setter)

    const dispatch = useDispatch()

    const increaseScore = useCallback(() => {
        dispatch(increaseScoreAC())
    }, [dispatch]);
    const decreaseScore = useCallback(() => {
        dispatch(decreaseScoreAC())
    }, [dispatch]);
    const resetScore = useCallback(() => {
        dispatch(resetScoreAC(setter.startValue))
    }, [setter.startValue, dispatch]);

    return (
        <div className={styles.counterBox}>
            <div className={styles.countDisplayBox}>
                <Display/>
            </div>
            <div className={styles.buttonBox}>
                <Button name={'inc'} callback={increaseScore} disabled={counter.score === counter.maxScore || setter.startValue >= setter.maxValue}/>
                <Button name={'dec'} callback={decreaseScore} disabled={counter.score === counter.startScore || setter.startValue >= setter.maxValue}/>
                <Button name={'res'} callback={resetScore} disabled={counter.score === counter.startScore || setter.startValue >= setter.maxValue}/>
            </div>
        </div>
    );
};

