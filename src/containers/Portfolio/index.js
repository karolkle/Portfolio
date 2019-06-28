import React from 'react'
import  './Portfolio.scss'
import Navigation from '../../components/Navigation'
import Projekt1 from '../../img/dec.png'
import Projekt2 from '../../img/dm.png'
import Projekt3 from '../../img/ent.png'
import Projekt4 from '../../img/im.png'
import Projekt5 from '../../img/kie.png'
import Projekt6 from '../../img/log.png'
import Projekt7 from '../../img/sko.png'
import Projekt8 from '../../img/skr.png'
import Projekt9 from '../../img/td.png'
import Projekt10 from '../../img/villa.png'
import Projekt11 from '../../img/dh24.png'


class Portfolio extends React.Component{
    render(){
        return(
            <>
            <div className="container-portfolio">
            <Navigation />
            <header className="portfolio__header">
                        <h3 className="portfolio__heading-3 u-margin-zero">Moje portfolio</h3>
        {/* <input type="button" onClick="window.location.href='#projects';" className="btn header__btn" value="Zobacz więcej" /> */} 
                        
            </header>
            <div className="text">
            <h2> Przykładowe strony</h2></div>
            <div className="projects" id="projects">
            <div className="project">
                <a href="http://decorent.org">
                        <img src={Projekt1} alt="Dec" />
                </a>
            <div className="bla"></div>
             
            </div>
            <div className="project">
                <a href="http://dobremiejsce.org">
                    <img src={Projekt2} alt="Dm" />
                </a>
            </div>
            <div className="project">
                 <a href="http://skris.pl">    
                    <img src={Projekt8} alt="Skr" />
                </a>
            </div>
            <div className="project">
                <a href="http://kierunekwschod.pl">
                    <img src={Projekt9} alt="Kie" />
                 </a>
            </div>
            <div className="project">
                 <a href="http:/loganimate.pl">
                    <img src={Projekt5} alt="Log" />
                </a>
            </div>
            <div className="project">
                 <a href="http://td-electronics.pl">
                    <img src={Projekt6} alt="Td" />
                </a>
            </div>
            <div className="project">
                <a href="http://villaecogalicja.pl">
                    <img src={Projekt10} alt="villa" />
                </a>
            </div>
            <div className="project">
                 <a href="http://doctorhouse24.pl">
                    <img src={Projekt11} alt="dh24" />
                </a>
            </div>
            </div>
            <div className="text">
            <h2> Opieka nad stronami</h2></div>
            <div className="projects u-margin-bottom-big">
            <div className="project">
                 <a href="http://enterculture.com">
                    <img src={Projekt3} alt="Ent" />
                    </a>
            </div>
            <div className="project">
                <a href="http://intermanager.org">
                    <img src={Projekt4} alt="Im" />
                    </a>
            </div>
            <div className="project">
                 <a href="http://centrum-skorosze.pl/">
                    <img src={Projekt7} alt="Sko" />
                    </a>
            </div>
        </div>   
        </div>
        
        </>
        )
    }
}



export default Portfolio