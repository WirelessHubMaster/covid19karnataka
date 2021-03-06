import React from 'react';

function About() {
	return(
	 <>
		<div className="uk-text-lead">About</div>
		<p>This is a project created to track the daily and total statistics of covid 19 cases in Karnataka.
			The source of the data is from an open source API from <a href="https://github.com/covid19india/api">covid19india.org.</a><br/>
			This project is made using <a href="https://reactjs.org/">Reactjs.</a><br/>
			The charts are made using <a href="https://recharts.org/">Recharts.</a><br/><br/>
			
			   A message for the people who are viewing this site on anything other than a smartphone.
			This site is made on a smartphone because i don't have access to a laptop or a desktop. So, I develop on my android smartphone only.
			So, please don't hate me if you see things out of place on this site because of resizing issues. I hope you understand. Thank you!<br/><br/>
			
			Stay safe, wear a mask and let's work together to stop Covid19 in our country!
		</p>
	 </>
	);
}

export default About;