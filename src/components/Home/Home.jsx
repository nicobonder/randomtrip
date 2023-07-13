import React from 'react'
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import s from './Home.module.css';
import video from './mountains.mp4';
//import video from './Earth.mp4';

export default function Home() {
 
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'a tu próximo destino',
        '¿Te animas a saltar sin red?'
      ],
      typeSpeed: 50,
      backSpeed: 100,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className={s.wrap}>
      <h1 className={s.homeTitle}>Bienvenid@</h1>
      <div className={s.typeWrap}>
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
      <div className={s.btns}>
        <Link className={s.link} to='trip'>Animate!</Link>
      </div>
      <video className={s.videoWorld} autoPlay loop muted>
        <source src={video} type="video/mp4"/>
      </video>
    </div>)
    


}
