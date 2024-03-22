// components
import {NavLink} from 'react-router-dom';

// hooks
import {useTheme} from '@contexts/themeContext';

// utils
import {memo} from 'react';

// assets
import light from '@assets/logo_light.svg';
import dark from '@assets/logo_dark.svg';

const Logo = ({imgClass, textClass}) => {
    const {theme} = useTheme();

    return (
        <NavLink className="logo" to="/">
            <span className={`logo_img relative ${imgClass || ''}`}>
                <img src={light} alt="ShopPoint" />
                <img className={`absolute top-0 left-0 ${theme === 'light' ? 'hidden' : ''}`}
                     src={dark}
                     alt="ShopPoint" />
            </span>
            <h4 className={`logo_text ${textClass || ''}`}>ShopPoint</h4>
        </NavLink>
    )
}

export default memo(Logo)