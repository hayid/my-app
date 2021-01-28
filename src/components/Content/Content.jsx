import React from 'react';
import s from './Content.module.css'; 
import MyPosts from './MyPosts/MyPosts';
import Posts from './MyPosts/Posts/Posts';


const Content = () => {
    return (
    <div className={s.content}>
        <img src='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'/>
            <div>Ava+description</div>
        <MyPosts />
        
       </div>

    );
}

export default Content;