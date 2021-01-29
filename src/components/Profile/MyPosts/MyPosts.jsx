import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = () => {
    return (

        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
               
                <div> <button>add button</button></div>
            </div>
            <div className={s.posts}>
                <Posts message='Hi my friend' likesCount='5' />
                <Posts message='How are you?' likesCount='25' />
            </div>
        </div>
    );
}

export default MyPosts;