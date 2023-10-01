import React from 'react'
import './Workplace.css';
import images from '../../constants/images';

const Workplace = () => {
  return (
    <div id='awards' className='workplace'>
        <div className='work-div'>
          <h2 className='work-div-head-one'>Fun at <br/> workplace</h2>
          <h2 className='work-div-head-two'>Fun at workplace</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aut molestiae, similique atque saepe aperiam eius reprehenderit quibusdam ratione porro hic culpa doloribus labore</p>
        </div>


        <div className='img-container'>
        <div className='img-div-row'>
            <img src={images.work1} alt='images' className='image-outer'/>
            <div className='img-div-col'>
                <img src={images.work5} alt='images'/>
                <img src={images.work6} alt='images' />
            </div>
                <img src={images.work4} alt='images' />
            <div className='img-div-col-set'>
                <img src={images.work5} alt='images'/>
                <img src={images.work6} alt='images' />
            </div>
        </div>
        <div className='img-div-row'>
            <img src={images.work2} alt='images' />
              <img src={images.work3} alt='images' />
            <div className='img-div-col'>
                <img src={images.work7} alt='images' />
                <img src={images.work8} alt='images' />
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default Workplace;