import react from "react";
import './GalleryHeader';

class PhotoEntry extends React.Component {

    render() {
  
      // console.log("this.props.caption = " + this.props.caption);
      // console.log("this.props.location = " + this.props.location);
      // console.log("this.props.src = " + this.props.src);
      // console.log("-------------------------------");

      window.addEventListener('load', function() {
        resizeLogo();
        window.addEventListener('resize', resizeLogo);
      });
      
      function resizeLogo() {
        const header = document.querySelector('header');
        const logo = document.querySelector('#logo');
        const headerWidth = header.offsetWidth;
        const logoWidth = logo.offsetWidth;
        const scaleFactor = headerWidth / logoWidth;
        logo.style.transform = `scale(${scaleFactor})`;
      }

    }

}

export default Gallery;