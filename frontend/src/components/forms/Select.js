import styles from "./css/Select.css";

function Select({name, text}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma opção </option>
            </select>

        </div>
    )
}
export default Select