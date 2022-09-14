import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Styles/card.css"



const UserCard = ({ user, darkMode}) => {


    

    return (
        <div className={`user-info__card ${darkMode ? 'bg-dark': ''}`}>
            <div className="user-container">
                <div className='avatar-container'>
                    <img className='user-avatar' src={user?.avatar_url} alt="" />
                </div>
                <div className='user-info__container'>
                    <h2 className="user-name">{user?.name ? user.name : 'Name not available'}</h2>
                    <h3 className="user-username">{user?.login}</h3>
                    <h3 className={`user-joined ${darkMode ? 'color-dark': ''}`}>Joined {user?.created_at}</h3>
                </div>
            </div>
            <div className={`bio ${darkMode ? 'color-dark': ''}`}>
                <p>
                    {user?.bio ? user.bio : "This profile has no bio"}
                </p>
            </div>
            <div className={`stats-container ${darkMode ? 'bg-dark2': ''}`}>
                <div>
                    <h4>Repos</h4>
                    <h2>{user?.public_repos}</h2>
                </div>
                <div>
                    <h4>Followers</h4>
                    <h2>{user?.followers}</h2>
                </div>
                <div>
                    <h4>Following</h4>
                    <h2>{user?.following}</h2>
                </div>
            </div>
            <ul className="user-list">
                <li>
                <i className="fa-solid fa-location-dot"></i>{user?.location ? user.location : "Not Available"}   
                </li>
                <li>
                <i className="fa-solid fa-link"></i><span>{user?.blog ? user.blog : "Not Available"}</span>
                </li>
                <li>
                <i className="fa-brands fa-twitter"></i><span>{user?.twitter_username ? user.twitter_username : "Not Available"}</span>
                </li>
                <li>
                <i className="fa-solid fa-building"></i><span>{user?.company ? user.company : "Not Available"}</span>
                </li>
            </ul>
        </div>
    )
}

export default UserCard
