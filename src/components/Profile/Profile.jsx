import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Posts from './MyPosts/Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {
    return (
        <div>
            <ProfileInfo />
 

            <MyPosts />


        </div>

    );
}

export default Profile;