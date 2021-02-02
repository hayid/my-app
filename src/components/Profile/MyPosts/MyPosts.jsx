import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = () => {
        let postData = [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'something...?', likesCount: 10}
        ]


    return (

        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
               
                <div> <button>Send</button></div>
            </div>
            <div className={s.posts}>
                <Posts message={postData[0].message} likesCount={postData[0].likesCount} />
                <Posts message={postData[1].message} likesCount={postData[1].likesCount} />
            </div>
        </div>
    );
}

export default MyPosts;