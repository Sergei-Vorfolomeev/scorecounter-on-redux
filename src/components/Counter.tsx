import React, {useCallback} from 'react';
import styles from "../App.module.css";
import {Display} from "./Display";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {decreaseScoreAC, increaseScoreAC, resetScoreAC} from "../store/counterReducer";
import {CounterType, SetterType} from "../App";

export const Counter = () => {

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

    const disabledIncButton = counter.score === counter.maxScore || setter.startValue >= setter.maxValue
    const disabledDecAndResetButton = counter.score === counter.startScore || setter.startValue >= setter.maxValue

    return (
        <div className={styles.counterBox}>
            <div className={styles.countDisplayBox}>
                <Display/>
            </div>
            <div className={styles.buttonBox}>
                <Button name={'inc'} callback={increaseScore} disabled={disabledIncButton}/>
                <Button name={'dec'} callback={decreaseScore} disabled={disabledDecAndResetButton}/>
                <Button name={'res'} callback={resetScore} disabled={disabledDecAndResetButton}/>
            </div>
        </div>
    );
};

