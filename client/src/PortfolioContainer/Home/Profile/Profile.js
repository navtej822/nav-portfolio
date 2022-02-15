import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
import ScrollService from '../../../utilities/ScrollService';
export default function Profile(){
    return(
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className='colz-icon'>
                            {/* <a href = '#'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href = '#'>
                            <i className='fa fa-google-plus-square'></i>
                        </a> */}
                        <a href = 'https://github.com/navtej822'>
                            <i className="fa fa-github"></i>
                        </a>
                        {/* <a href = '#'>
                            <i className='fa fa-youtube-square'></i>
                        </a> */}
                        <a href = 'https://www.linkedin.com/in/navtejindersinghbrar/'>
                            <i className="fa fa-linkedin"></i>
                        </a>
                        </div>      
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hey! I'm <span className="highlighted-text">Navtejinder</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                           {" "}
                           <Typical 
                           loop = {Infinity}
                           steps = {[
                               "Enthusiastic Dev 💻",
                               2000,
                               "Passionate ❤️‍🔥",
                               2000,
                               "Learner 📝",
                               2000,
                               "Student 👨‍🎓",
                               2000,
                               "Doer ⚔️",
                               2000
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                        Open To Work.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                        {" "}
                        Hire Me{" "}
                    </button>
                    <a href = 'CompResume.pdf' download='Resume.pdf'>
                        <button className='btn highlighted-btn'>
                            Download Resume
                        </button>
                    </a>
                </div>
              </div>
              <div className='profile-picture'>
                  <div className='profile-picture-background'></div>
              </div>
            </div>
        </div>
    );
}
