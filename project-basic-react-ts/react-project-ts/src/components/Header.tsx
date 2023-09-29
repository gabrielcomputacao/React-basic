
import styles from  './Header.module.css';
import ignitelogo from '../assets/Ignite-simbol.svg'

export function Header(){
    return (
        <div className={styles.header}>
            <img src={ignitelogo} alt="Logo do ignite" />
        </div>
    )
}