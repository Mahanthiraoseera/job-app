import React from 'react';
import './Search.css';
import images from '../../constants/images';

const JobCard = () => {
  return (
    <div className='job-search-div'>
        <h1>UI Developer</h1>
        <p><span>Labkafe</span> | Full Time</p>
        <div className='respon-div'>
            <h5>Responsibilty</h5>
            <img src={images.dropdown} alt='dr'/>
        </div>
        <ul>
            <li>Experience with popular React.js workflows</li>
            <li>Experience with popular React.js workflows</li>
        </ul>
        <button>Apply</button>
    </div>
  )
}

export default JobCard;