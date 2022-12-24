import styles from './Button.module.css'
import {memo} from "react";

type ButtonPropsType = {
    name: string
    callback: () => void
    disabled: boolean
}
export const Button = memo((props: ButtonPropsType) => {

    return (
        <button
            onClick={props.callback}
            disabled={props.disabled}
            className={styles.btn}
        >
            {props.name}
        </button>
    )
});