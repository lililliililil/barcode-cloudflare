// Home.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import '../css/Home.css';

const Home = () => {

    const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [goalsRef, goalsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const barcodename = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(-40px)' },
        delay: 200
    })

    const aboutProps = useSpring({ 
        opacity: 1, 
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(-20px)' },
        delay: 600
      });
    
      const goalsProps = useSpring({ 
        opacity: 1, 
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(-20px)' },
        delay: 600
      });

    return (
        <div className='home'>
      <header className="App-header">
        <animated.div ref={aboutRef} style={barcodename} className="barcode_text">
            <h1><strong>Barcode</strong></h1>
            <h5>👋 Hello! nice to meet you!</h5>
        </animated.div>
        <animated.div style={aboutProps} className="animated-text">
          <h1>ABOUT</h1>
          <p>I work better than yesterday to make a better project! I thrive in collaborative environments where creativity and innovation are encouraged, and I'm always eager to learn new technologies and methodologies. I'm always passionate about coding and do my best!</p>
        </animated.div>
        <animated.div ref={goalsRef} style={goalsProps} className="animated-text">
          <h1>GOALS</h1>
          <p>It may not be possible, but my goal is to make a small contribution to IT, or programming. Or I want to create an innovative coding world with you. I will try to make coding the center and heart of our lives.</p>
        </animated.div>
      </header>
        </div>
    );
};

export default Home;
