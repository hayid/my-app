import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = (props) => {

    let posts = [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "Wgatsapp?", likesCount: 11 },
        { id: 3, message: "HOW?", likesCount: 25 },
        { id: 4, message: "OK?", likesCount: 36 }
    ]

    let postsElements = posts.map(p => <Posts message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements}
            </div>
        </div>
    )
}

export default MyPosts;