import '../css/styles.css';
import Typed from 'typed.js';
import React from 'react';

export default function Simple() {
	const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['I am a Software Engineer.^1000', 'I like to think.^1000'],
      typeSpeed: 40,
	  loop: true,
	  smartBackspace: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


	return (
		<>	
			<div className="universalStyle">

				<div className="intro">
					<h4>## Mayank Nayak</h4>
					<span ref={el} />
					<h6>[mayank.nayak@hotmail.com]</h6>
					<h6>Madison, WI - 53711</h6>
					<hr></hr>
				</div>
				<div className='simpleDetails'>
					<h5 className='hashtags'>## Projects</h5>
					<ul className='listItems'> 
						<li className='listItems'><b className='arrow'>-></b> Sorting Visualizer  <a href='https://64a0e5bd0103a815a1499236--darling-frangipane-aa31e5.netlify.app/' target="_blank" rel="noreferrer">[View]</a></li>
					</ul>
					<h5 className='hashtags'>## Education</h5>
					<ul className='listItems'> 
						<li className='listItem'><b className='arrow'>-></b> Computer Sciences BS from University of Wisconsin Madison (2020 - 2023)</li>
					</ul>
					<h5 className='hashtags'>## Experience</h5>
					<ul className='listItems'> 
						<li className='listItems'><b className='arrow'>-></b> Programmer Intern at Acuity Insurance (May '23 - Sept '23)  <a href='https://www.acuity.com/' target="_blank" rel="noreferrer">[Link]</a></li>
						<li className='listItems'><b className='arrow'>-></b> Student Intern at Rezonant Design (Apr '19 - May '19) <a href='https://rezonant.net/' target="_blank" rel="noreferrer">[Link]</a></li>
						<li className='listItems'><b className='arrow'>-></b> Student Intern at Fastah API (Apr '18 - May '18) <a href='https://www.getfastah.com/' target="_blank" rel="noreferrer">[Link]</a></li>
					</ul>
				</div>
				
				
			</div >
		
		</>

	);
}