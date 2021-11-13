import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://ezdili-znaem.com/wp-content/uploads/2020/06/spain-fuerteventura-01.jpg" />
            </div>
            <div>
                <div className={s.descriptionBlock}>ava + description</div>
            </div>
        </div>
    )
}

export default ProfileInfo;