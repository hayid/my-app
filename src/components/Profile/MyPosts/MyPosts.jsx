import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = () => {
    return (
   
        <div>
            My Posts
            
        
        <div>
            New Posts  </div>
            <div><button>add button</button>
             </div>
             <div className={s.posts}>
          <Posts message='Hi my friend' likesCount='5'/>
          <Posts message='How are you?'likesCount='25'/>
          </div>
                            </div>
    );
}

export default MyPosts;