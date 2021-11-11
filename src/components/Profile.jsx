import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://ezdili-znaem.com/wp-content/uploads/2020/06/spain-fuerteventura-01.jpg" />
            </div>
            <div className={s.item}>ava + description</div>
            <div className={s.item}>My post</div>
            <div className={s.item}>New Post</div>
            <div className={s.item}>Post 1</div>
            <div className={s.item}>Post 2</div>





        </div>
    )
}

export default Profile;