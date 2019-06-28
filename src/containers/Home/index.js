import React from 'react'
import  './Home.scss'
import ReactPlayer from 'react-player'
import Slider from '../../img/Magic-Mouse-Scroll.mp4'
import Navigation from '../../components/Navigation'

class Home extends React.Component{
    render(){
        return(
            <>
            <Navigation />
            <div className="slider">
            <div className="slider__bg-video">
                
                <ReactPlayer className="slider__bg-video-content" url={Slider} playing muted loop />
                    Your browser is not supported!
                
            </div>
        
            
            <div className="slider__heading u-center-text">
                    <h2 className="slider__heading-main u-margin-bottom-big">
                        Cześć, nazywam się Karol Klechowski.
                    </h2>
                    <h3 className="slider__heading-sub-main u-margin-bottom-small">
                            <p>Zajmuję się tworzeniem stron internetowych od strony frontu.</p>
                            <p> Moimi narzędziami są HTML, CSS, BOOTSTRAP, JAVA SCRIPT, REACT.</p>
                            <p> Zapraszam na mojego githuba: <a href="https://github.com/karolkle">https://github.com/karolkle</a></p>
                            <p> Kontakt do mnie: <a href="mailto:karol.klech@gmail.com">karol.klech@gmail.com</a></p>
                           

                        </h3>
                </div>
        </div>  </>
        )
    }
}

export default Home;