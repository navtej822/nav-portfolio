import React,{useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css';
export default function AboutMe(props){
    let fadeInScreenHandler = (screen) =>{
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const SCREEN_CONSTANTS = {
        description: "Ambitious, energetic and result oriented master of science student looking for full time opportunities in Computer Science Domain.",
        highlights:{
            bullets:[
                "I am currently studying in University of Texas at Arlington and I will graduate in May, 2022.",
                "Experience with web application development using HTML5, CSS, JavaScript",
                "Proficiency in SQL and extensive experience with database driven applications. ",
                "Sharp problem-solving skills along with excellent troubleshooting and debugging skills.",
                "Passionate programmer with excellent communication and verbal skills.",
                "Willingness and ability to quickly delve into new environments and learn new technologies.",
            ],
            heading:"Here are Few Highlights:"
        }
    }
    const renderHighlight = ()=>{
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>(
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

    return(
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className='about-me-options'>
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
                </div>
            </div>
        </div>
    )
}