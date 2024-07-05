import map from '../../Images/map.svg';
import country1 from '../../Images/country-1.png';
import country2 from '../../Images/country-2.png';
import country3 from '../../Images/country-3.png';
import country4 from '../../Images/country-4.png';
import country5 from '../../Images/country-5.png';


const TopDestinations = () => {
  return (
    <div>
        <div class="section destination bg-primary py-5">
        <div class="image-2"></div>
        <div class="container">
        <h1 className="text-center text-white">Top Destinations for MBBS</h1>
          
        <div class="map">
          <img class="map-image img-fluid" src={map} />
        </div>
                
        <div className="row justify-content-center">
              <div className="col-9">
              <div class="CTA-3 bg-dark">
              <div class="d-flex justify-content-between align-items-center">
                <div class="title-3">
                    <h4 class="text-white">Other Destinations</h4>
                    <p class="text-white col-8 mb-0">Explore more countries where you can pursue your MBBS.</p>
                </div>
                <div class="d-flex justify-content-end  flex-column">
                  <div class="countries mb-2 d-flex align-items-center justify-content-end">
                    <img class="img-fluid" src={country1} />
                    <img class="img-fluid ml-m" src={country2} />
                    <img class="img-fluid ml-m" src={country3} />
                    <img class="img-fluid ml-m" src={country4} />
                    <img class="img-fluid ml-m" src={country5} />
                    <span class="country-more ml-m">+20</span>
                  </div>
                  <div className="primary-button-wrapper">
                     <a href="#" className="btn btn-secondary text-white py-2 px-4 flex-wrap flex-sm-shrink-0">Discover More Destinations</a>
                </div>  
                </div>
              </div>
        </div>
              </div>
        </div>     
       
        </div>
    </div>
    </div>
  )
}

export default TopDestinations