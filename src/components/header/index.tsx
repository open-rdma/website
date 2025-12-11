import styles from './index.module.css';
import logo from '@/assets/header/logo.svg';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_inner}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                    <div className={styles.logo_text}>
                        GOLDEN <span style={{color: '#FFFFFF99'}}>NIC</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
