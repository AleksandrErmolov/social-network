import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://ezdili-znaem.com/wp-content/uploads/2020/06/spain-fuerteventura-01.jpg" />
            </div>
            <div>
                <div className={s.item}>ava + description</div>
                <MyPosts />
            </div>
        </div>
    )
}

export default Profile;