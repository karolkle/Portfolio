import React from 'react'
import  './Navigation.scss'

class Home extends React.Component{
    render(){
        return(
            <>
            <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
        
                    <label htmlFor="navi-toggle" className="navigation__button">
                        <span className="navigation__icon">&nbsp;</span>
                    </label>
        
                    <div className="navigation__background">&nbsp;</div>
        
                    <nav className="navigation__nav">
                        <ul className="navigation__list">
                        
                            <li className="navigation__item"><a href="/" className="navigation__link">Strona główna</a></li>
                            <li className="navigation__item"><a href="/portfolio" className="navigation__link">Portfolio</a></li>
                            <li className="navigation__item"><a href="/blog" className="navigation__link">Blog</a></li>
                            <li className="navigation__item"><a href="/kontakt" className="navigation__link">Kontakt</a></li>
                        
                        </ul>
                    </nav>
                </div>
               </> 
        )
    }
}

export default Home;