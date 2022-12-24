import React, {useCallback} from 'react';
import styles from "../App.module.css";
import {SetDisplay} from "./SetDisplay";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {SetterType} from "../App";
import {setValuesAC} from "../store/counterReducer";


type SetterPropsType = {

}

export const Setter: React.FC<SetterPropsType> = (props) => {

    const setter = useSelector<AppRootStateType, SetterType>(state => state.setter)
    const dispatch = useDispatch()

    const setValues = useCallback(() => {
        dispatch(setValuesAC(setter.startValue, setter.maxValue))
    }, [setter.startValue, setter.maxValue, dispatch])

    return (
        <div className={styles.setBox}>
            <div className={styles.setDisplayBox}>
                <SetDisplay />
            </div>
            <div className={styles.buttonBox}>
                <Button name={'set'} disabled={setter.startValue >= setter.maxValue} callback={setValues}/>
            </div>
        </div>
    );
};