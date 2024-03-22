// styling
import styles from './styles.module.scss';

// components
import Logo from '../Logo'
import {NavLink} from 'react-router-dom';

// assets
import collage from '@assets/collage_404.webp';

const Error = () => {
    return (
        <div className={styles.container}>
            <img className={styles.media} src={collage} alt="404" />
            <div className={styles.main}>
                <span className={styles.main_code}>404</span>
                <h1 className={styles.main_title}>Page Not Found</h1>
                <NavLink className={`${styles.main_btn} btn btn--primary`} to="/">
                    Back to Home Page
                </NavLink>
            </div>
            <div className={styles.logo}>
                <Logo imgClass={styles.logo_img} textClass={styles.logo_text} />
            </div>
        </div>
    )
}

export default Error