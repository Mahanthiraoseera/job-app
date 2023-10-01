import React from 'react';
import './Perks.css';
import images from '../../constants/images'


 const Perks= () => {
  return (
    <div id='benfits' className='perks-container'>
        <div className="card-div">
        <div className="card-divs">
            <div className='card-one'>
                <img src={images.icon1} className='card-img' alt='office-icon-1'/>
                <h2 className='header-1'>Large Beautiful Office</h2>
                <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum provident necessitatibus quasi in earum molestiae placeat eius soluta? Minus quas</p>
            </div>
            <div className='card-two'>
              <img src={images.icon2} className='card-img' alt='office-icon-1'/>
              <h2 className='header-1'>Great Co-workers</h2>
              <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum provident necessitatibus quasi in earum molestiae placeat eius soluta? Minus quas</p>
          </div>
        </div>
        <div className="card-divs">
            <div className='card-one'>
              <img src={images.icon3} className='card-img' alt='office-icon-1'/>
              <h2 className='header-1'>Easy Location</h2>
              <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum provident necessitatibus quasi in earum molestiae placeat eius soluta? Minus quas</p>
            </div>
            <div className='card-two'>
              <img src={images.icon4} className='card-img' alt='office-icon-1'/>
              <h2 className='header-1'>Educational Opportunity</h2>
              <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum provident necessitatibus quasi in earum molestiae placeat eius soluta? Minus quas</p>
          </div>
        </div>
        <div className="card-divs">
            <div className='card-one'>
                <img src={images.icon6} className='card-img' alt='office-icon-1'/>
                <h2 className='header-1'>Performance Award</h2>
                <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum provident necessitatibus quasi in earum molestiae placeat eius soluta? Minus quas</p>
            </div>
            <div className='card-two'>
              <img src={images.icon5} className='card-img' alt='office-icon-1'/>
              <h2 className='header-1'>Easy access to leadership</h2>
              <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum provident necessitatibus quasi in earum molestiae placeat eius soluta? Minus quas</p>
          </div>
        </div>
        </div>
         <div className='perks-text'>
            <h1>Perks & Benefits</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat id nihil tenetur culpa amet repudiandae, non veritatis laborum maiores perferendis rem vitae dolores excepturi praesentium aspernatur nam aliquam laudantium porro ab omnis quasi dignissimos! Id ea similique porro veritatis blanditiis ex sint mollitia quo! Autem molestiae, omnis reiciendis voluptatum, tempora magnam reprehenderit esse, dignissimos ullam quasi quam? Odio quidem deleniti similique excepturi illum expedita exercitationem explicabo ipsum tempora assumenda iste, in, iure tempore aliquam quos accusantium repellendus, molestias natus veritatis cumque quae accusamus error id? Soluta, molestias eaque? Tempore nobis voluptatem accusamus asperiores ratione odit assumenda aut incidunt possimus laudantium.</p>
            <button>Learn more</button>
      </div>
    </div>
  )
 }

export default Perks;
