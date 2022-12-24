import React, {ChangeEvent, FC} from 'react';
import styles from './SetDisplay.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setMaxValueAC, setStartValueAC} from "../store/setterReducer";
import {AppRootStateType} from "../store/store";
import {SetterType} from "../App";

type SetDisplayPropsType = {}

export const SetDisplay: FC<SetDisplayPropsType> = (props: SetDisplayPropsType) => {

    const setter = useSelector<AppRootStateType, SetterType>(state => state.setter)
    const dispatch = useDispatch()

    const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+event.currentTarget.value))
    }
    const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(+event.currentTarget.value))
    }

    return (
        <div className={styles.setDisplayBox}>
            <div>
                max value:
                <input type={"number"}
                       onChange={onChangeMaxValueHandler}
                       className={setter.startValue >= setter.maxValue ? styles.error : ''}
                />
            </div>
            <div>
                start value:
                <input type={"number"}
                       onChange={onChangeStartValueHandler}
                       className={setter.startValue >= setter.maxValue ? styles.error : ''}
                />
            </div>
        </div>
    );
};

