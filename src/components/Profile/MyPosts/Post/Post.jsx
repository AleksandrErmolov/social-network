import React from 'react';
import s from './Post.module.css'

const Post = (props) => {

    return (

        <div className={s.item}>
            <img src="https://avatars.mds.yandex.net/get-zen_doc/1582174/pub_5dcce8e84052283fcdc490a3_5dce4274cd7152643c8dd3ce/scale_1200" />
            {props.message}

            <div>
                <span>like</span>{props.like}
            </div>
        </div>


    )
}

export default Post;