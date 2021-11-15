import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {




    // let posts = [
    //     { id: 1, message: 'Hi, how are you', likesCount:16 },
    //     { id: 2, message: "It's my first post", likesCount:25},
    // ]


    let postsElements = props.posts
        .map((p) => <Post message={p.message} like={p.likesCount} />)

    return (

        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>

                <div>
                    <button>Add post</button>
                </div>

            </div>

            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
}

export default MyPosts;