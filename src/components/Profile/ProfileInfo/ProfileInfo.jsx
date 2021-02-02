import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                Ava+description
                </div>
        </div>
    );
}

export default ProfileInfo;