import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'



export default function Resume(props){
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) =>{
        if(screen.fadeInScreen !== props.id)return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) =>{
        return(
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'>
                    <span>{props.heading?props.heading:''}</span>
                    {props.fromDate && props.toDate ?(
                        <div className='heading-date'>
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ):(<div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading? props.subHeading:''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description?props.description:''}</span>
                </div>
            </div>
        </div>
        )
        
    };
    const resumeBullets = [
        {label:"Education", logoSrc: "education.svg"},
        {label:"Work History", logoSrc: "work-history.svg"},
        {label:"Programming Skills", logoSrc: "programming-skills.svg"},
        {label:"Projects", logoSrc: "projects.svg"},
        {label:"Interests", logoSrc: "interests.svg"}
    ];

    const programmingSkillDetails = [
        {skill:"Java", ratingPercentage: 80},
        {skill:"JavaScript", ratingPercentage: 65},
        {skill:"PHP", ratingPercentage: 60},
        {skill:"HTML", ratingPercentage: 70},
        {skill:"CSS", ratingPercentage: 70},
        {skill:"Python", ratingPercentage: 50},
        {skill:"R Language", ratingPercentage: 30},
        {skill:"MySQL", ratingPercentage: 65},
        {skill:"Cloud", ratingPercentage: 50},
        {skill:"React JS", ratingPercentage: 40},

    ];

    const projectDetails = [
        {
            title:"Personal Portfolio Website",
            duration: {fromDate: "Feb 22",toDate:"Feb 22"},
            description: "My portfolio website to contact with me and show my progress.",
            subHeading:"Technologies Used: React JS, BootStrap",
        },
        {
            title:"Twitter Sentiment Analysis",
            duration: {fromDate: "Sep 21",toDate:"Oct 21"},
            description: "Classified the tweets into Postive, Negative and Neutral using Naive Bayes and other algorithms.",
            subHeading:"Technologies Used: Python(Sci-kit Learn), NumPy",
        },
        {
            title:"Ride Sharing Website",
            duration: {fromDate: "Mar 21",toDate:"Aug 21"},
            description: "Web App where you can book and share a Cab.",
            subHeading:"Technologies Used: PHP, JavaScript, HTML, MySQL, Maps API, CSS",
        },
        {
            title:"Voting Demographic Analyzer",
            duration: {fromDate: "Oct 20",toDate:"Dec 20"},
            description: "Displayed the current poll of the presidential election based on the candidate selection of all users.",
            subHeading:"Technologies Used: Python, HTML, CSS, BootStrap, JS, IBM Cloud",
        },
        {
            title:"Classification, Clustering and Association Rule Mining",
            duration: {fromDate: "Aug 20",toDate:"Dec 20"},
            description: "Did Classification, Clustering and Association rule mining using three real worls datasets.",
            subHeading:"Technologies Used: RStudio",
        },
    ];



    const resumeDetails = [
        <div className = 'resume-screen-container' key= "education">
            <h5>🏫 University of Texas at Arlington <span id="utaSpace">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span id='utaSpan'>2020-2022</span></h5>
               
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Masters of Science in Computer Science</h6>
            <br />
            
            {/* <ResumeHeading
              heading ={"University of Texas at Arlington"}
              subHeading ={"Masters of Science in Computer Science"}
              fromDate={"2020"}
              toDate={"2022"}
            /> */}
            <h5>🏫 University of Petroleum and Energy Studies <span id='upesSpan'>2015-2019</span></h5>
            
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bachelors of Technology in Computer Science</h6>
            <br />
            
            {/* <ResumeHeading
              heading ={"University of Petroleum and Energy Studies"}
              subHeading ={"Bachelors of Technology in Computer Science"}
              fromDate={"2015"}
              toDate={"2019"}
            /> */}
            <h5>🏫 High School<span id="ppsSpace">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span id='ppsSpan'>2008-2015</span></h5>
              
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Punjab Public School, Nabha </h6>
            <br />
            
            {/* <ResumeHeading
              heading ={"High School"}
              subHeading ={"The Punjab Public School, Nabha"}
              fromDate={"2015"}
              toDate={"2008"}
            /> */}
        </div>,
        <div className='resume-screen-container' key="work-experience" id="wecare">
            {/* <ResumeHeading
              heading ={"WeCare Insurance"}
              subHeading ={"Software Engineer Intern"}
              fromDate={"June 21"}
              toDate={"Aug 21"}
            /> */}
            <br />
            <br />
             <h5>🏢 WeCare Insurance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id='utaSpan'>June 21-Aug 21</span></h5>
                <br />
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software Engineer Intern</h6>
            <br />
            <div className='experience-description'>
                <span className='resume-description-text'>
                - Designed and developed a part of company website which took user information and displayed the best available insurance for the user using web automation.
                </span>
            </div>
            <div className='experience-description'>
                <span className='resume-description-text'>
                - Used HTML, PHP, JavaScript, MySQL, Java Selenium for web automation.
                </span>
                <br />
                <span className='resume-description-text' id='interns'>
                - Lead a team of 6 interns and gained some experience in teamwork and leadership.
                </span>
            </div>
            <br />
            <div className='resume-screen-container programming-skills-container' key="programming-skills">
                {programmingSkillDetails.map((skill, index)=>(
                    <div className='skill-parent' key={index}>
                        <div className='heading-bullet'></div>
                        <span>{skill.skill}</span>
                        <div className='skill-percentage'>
                            <div style={{width: skill.ratingPercentage + "%"}} className='active-percentage'>

                            </div>
                        </div>
                        </div>
                ))}
            </div>

            <div className='resume-screen-container' key="projects">
                {/* {projectDetails.map((projectDetails, index)=>(
                    <ResumeHeading
                        key= {index}
                        heading = {projectDetails.title}
                        subHeading = {projectDetails.subHeading}
                        description = {projectDetails.description}
                        fromDate = {projectDetails.duration.fromDate}
                        toDate={projectDetails.duration.toDate}
                    />
                ))} */}
                <br />
                <h7 id="project1">Personal Portfolio Website <span id='upesSpan'>Feb 22 - Feb 22</span></h7><br />
                <h11 id="project2">Technologies Used: React JS, BootStrap</h11>
                <p id="project3">My portfolio website to contact with me and show my progress.</p>
                <h7 id="project1">Twitter Sentiment Analysis <span id='upesSpan'>Sep 21 - Oct 21</span></h7><br />
                <h11 id="project2">Technologies Used: Python(Sci-kit Learn), NumPy</h11>
                <p id='project3'>Classified the tweets into Postive, Negative and Neutral using Naive Bayes and other algorithms.</p>
                
                <h7 id="project1">Voting Demographic Analyzer <span id='upesSpan'>Oct 20 - Dec 20</span></h7><br />
                <h11 id="project2">Technologies Used: Python, HTML, CSS, BootStrap, JS, IBM Cloud</h11><br />
                <p id='project3'>Displayed the current poll of the presidential election based on the candidate selection of all users.</p>
                <h7 id="project1">Classification, Clustering and Association Rule Mining<span id='upesSpan'>Aug 20 - Dec 20</span></h7><br />
                <h11 id="project2">Technologies Used: RStudio</h11><br />
                <p id='project3'>Did Classification, Clustering and Association rule mining using three real worls datasets.</p>
            
                
            </div>

            <div className='resume-screen-container' key="interests">
                {/* <ResumeHeading 
                    heading='Technology'
                    description= 'I try to educate myself about the new technologies everyday.'

                />
                <ResumeHeading 
                    heading='Flying'
                    description= 'The world up there is totally different.'

                /> */}
                <br />
                <br />
                <h5>Technology</h5>
                <h6>I try to educate myself about the new technologies everyday.</h6>
                <br />
                <h5>Flying</h5>
                <h6>The world up there is totally different.</h6>
                    
            </div> 
        </div>
    ];
    const handleCarousal = (index)=>{
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: {transform: "translateY("+index*offsetHeight*-1+"px)"},
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = ()=>{
        return resumeBullets.map((bullet, index)=> (
            <div 
            onClick={()=>handleCarousal(index)}
            className = {index=== selectedBulletIndex? "bullet selected-bullet":"bullet"}
            key ={index}>
                <img className='bullet-logo' src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                alt = 'oops... no internet connection' />
                <span className='bullet-label'>{bullet.label}</span>
            </div>

        ))
    }
    
    const getResumeScreen =()=>{
        return(
            <div
            style={carousalOffSetStyle.style}
            className='resume-details-carousal'
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>

        );
    };
    return (
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title = {'Resume'} subHeading={"My Progress Till Now"}/>
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>{getResumeScreen()}</div>
                </div>
            </div>

        </div>
    )
}