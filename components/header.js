import { useState , useEffect } from 'react';
import Link from 'next/link';


const Header = () => {

  const [isMobileModal,setMobileModal] = useState(false);

  const getWindowDimension = () =>{
    const width = window.innerWidth;
    return width;
  };

  const clickHandler = () => {
    setMobileModal(!isMobileModal);
  };

  useEffect(() => {
    const links = document.querySelectorAll(".links");
    console.log({links});
    
    function handleResize() {
      getWindowDimension() < 700 ? "" : setMobileModal(false);
    }

    window.addEventListener('resize', handleResize);

    links.forEach((link) => {
      link.addEventListener("click",function () {
        setMobileModal(false)
      });
    });

    return() => {
      window.removeEventListener("resize",handleResize);
    }

  }, []);


  return ( 
    <div className="navigation" >    
      {/*<nav className="navbar" >
          
          <div className={isMobileModal ? navcontent : navcontent + " " + navbarmobileclosed}>
              
          </div>
      </nav> 
      <button className={ isMobileModal ? navicon_open + " " + navicon : navicon} onClick={clickHandler} >
          <span></span>
          <span></span>
          <span></span>
      </button>*/}
    </div>
  );
}
 
export default Header;