import { Carousel } from 'react-carousel-minimal';
import Line from './../images/line.png';
import LogoPhotopedia from './LogoPhotopedia';
import SocialMedia from './SocialMedia/SocialMedia';
import ReturnButton from './ReturnButton';
import './Gallery.css';


function Gallery() {
 const data = [
    {
      image: "https://live.staticflickr.com/65535/51800968726_9a0f4ab7f2_o.jpg",
      caption: "Westhavelland"
    },
    {
      image: "https://live.staticflickr.com/65535/51801703245_9aeac3abc0_o.jpg",
      caption: "Westhavelland"
    },
    {
      image: "https://live.staticflickr.com/65535/51801703220_3bc75e3e7e_o.jpg",
      caption: "Westhavelland"
    },
    {
      image: "https://live.staticflickr.com/65535/51800969911_9aa549ff2f_o.jpg",
      caption: "Westhavelland"
    },
    
  ];

  const captionStyle = {
    fontSize: '1em',
    fontWeight: 'light',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'light',
  }
  return (
    <>
    <div className="left_content_gallery">
      <LogoPhotopedia />
    </div>
    <div className="return">
        <a href="/">
          <h4>Return</h4>
          <ReturnButton />
        </a>
        
        
        
      
    </div>
    <div className="photo_gallery">
      
      <div style={{ textAlign: "center", fontFamily:"Perpetua Titling MT Light" }}>
        <h2>Westhavelland</h2>
        <img src={Line} alt='line' width="200px" />
        
        <div className="photo_gallery_container"
        style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="1000px"
            height="650px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="200px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
      <div className="social_media">
        <SocialMedia />
      </div>
      
    </div>
    
    </>
  );
}

export default Gallery;