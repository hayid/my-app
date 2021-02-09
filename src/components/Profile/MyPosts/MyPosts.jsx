import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = (props) => {

 debugger;
    let postsElements = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} />);

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