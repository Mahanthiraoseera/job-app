import React from 'react';
import './Search.css';
import JobCard from './Jobcard';
import images from '../../constants/images';

const Search = () => {
  return (
    <div id='search' className='search'>
      <div className='search-div-one'>
        <h2 className='div-one-head-one'>We're looking for <br/> talented people</h2>
        <h2 className='div-one-head'>We're looking for talented people</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aut molestiae, similique atque saepe aperiam eius reprehenderit inventore in voluptates sequi, ducimus fugit quibusdam ratione porro hic culpa doloribus labore</p>
      </div>
        <div className='search-div-two'>
          <div className='search-div'>
            <h2>Current Openings</h2>
            <p>25 Jobs available</p>
        </div>
        <div className='search-div-three'>
          <img src={images.search} alt='se'/>
          <input type='text' className='search-input-ele' placeholder='Search Jobs'/>
        </div>
      </div>
      <div className='align-div'>
        <div className="align-row">
          <JobCard/>
          <JobCard/>
        </div>
        <div className="align-row">
          <JobCard/>
          <JobCard/>
        </div>
      </div>
      <div className='view-btn-div'>
        <button className='view-btn'>view all openings</button>
      </div>
    </div>
  )
}

export default Search