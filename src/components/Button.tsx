import styles from './Button.module.css'

type ButtonPropsType = {
    name: string
    callback: () => void
    disabled: boolean
}
export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button
            onClick={onClickHandler}
            disabled={props.disabled}
            className={styles.btn}
        >
            {props.name}
        </button>
    )
}