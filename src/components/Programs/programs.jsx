import React from 'react'
import './program.css'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
    return (
        <div className='Programs' id='programs'>
            {/* Headers */}
            <div className='programs-header'>
                <span className='strock-text'>Explore our</span>
                <span>Programs</span>
                <span className='strock-text'>to shape you</span>
            </div>
            <div className='program-categories'>
                {programsData.map((program) => (
                    <div className='category'>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className='join-now'>
                            <span>Join Now</span>
                            <img src={RightArrow} />
                        </div>
                    </div>
                ))};
            </div>
        </div>
    )
}

export default Programs