
import './App.scss';
import Navigation from './components/Navigation';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import logo from './images/home/smoother.svg';

import img1 from './images/home/temp/collection1.png';
import img2 from './images/home/temp/collection2.png';
import img3 from './images/home/temp/collection3.png';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function App() {
  return (
    <div>
      <div className="navigation">
        <div className="left_logo">
          <div>
            <h3>Feminite Feathers</h3>
          </div>
        </div> {/* left_logo */}
        <div className="right">
          <div>
            <h3>Home</h3>
          </div>
          <div>
            <h3>Shop</h3>
          </div>
          <div>
            <h3>About Us</h3>
          </div>
          <div>
            <h3>Contact</h3>
          </div>
        </div> {/* right */}
      </div> {/* Navigation */}

      <div className="home">
        <div className="title_section">
          <div className="image_container">
            <p> Title Section </p>
            {/*<img src={logo} alt="lake" width={600} height="auto" />*/}
          </div>
        </div> {/* header_section */}

        <div className="mission_statement">
          <div className="grayHeader">
            <div>
              <h1>About Feminite Feathers</h1>
            </div>
          </div>
          <div className="mission_statement_body">
            <div>
              <h2> Mission Statement </h2>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="mission_buttons">
                <div>
                  <button className="button_one"> Learn More </button>
                </div>
                <div>
                  <button className="button_one"> Shop Now </button>
                </div>
              </div>
            </div>
          </div>
        </div> {/* mission_statement */}

        <div className="newest_collection">
          <div className="floral_image">
            <div className="black_cover">
              <div>
                <h1> Newest Collection </h1>
              </div>
            </div>
          </div>
          <div className="angled_container">
            <div className="no_cover">
              <div><img src={img1} alt="lake" width='100%' height="auto" /></div>
              <div><img src={img2} alt="lake" width='100%' height="auto" /></div>
              <div><img src={img3} alt="lake" width='100%' height="auto" /></div>
            </div>
          </div>
        </div> {/* newest_collection */}
      </div> {/* home */}

      <div className="contact_us">
        <div className="grayHeader">
          <div>
            <h1>Get in Contact With Us</h1>
          </div>
        </div>
        <div className="contact_content">
          <div className="left">
            <h2> Feminite Feathers </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
          <div className="right">
              <LoadScript
              googleMapsApiKey="AIzaSyCwj3pLUXTXop00qhAjDLnJFxTg9-V0Nwg"
              >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
              </GoogleMap>
            </LoadScript>
          </div>
        </div>{/* contact_content*/}
      </div> {/* contact_us */}

      <div className="footer">
        <div></div>
        <div className="right">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
