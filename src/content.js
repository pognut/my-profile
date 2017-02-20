import React, { Component } from 'react';
import tourpic from './tourpic.png'
import beespic from './beespic.png'

// To do:
// 1) refine content (revise writing, screenshot projects) (last step before usability)
// 2) clean up css (classes and ids, not child selectors everywhere)
// 3) DONE clean up text (better font, spacing etc)
// 4) why you should hire me section (memory line should have joke about never losing trivia night)
// 5) clean up react so no if statement in return, all content should be loaded through big tile(?), clean up spare files and rename obvious create-react-app files
// 6) DONE resume display/download (in about me)
//random fixes
// make the back button more obvious/accessable
// move front page stuff closer together(?)
// fix the blurry tour pic


var smallAbout=[
  <h2>ABOUT ME</h2>
]

var smallSkills=[
<h2>SKILLS TO PAY THE BILLS</h2>
]

var smallProjects=[<h2>PAST PROJECTS</h2>]

var smallContact=[
<h2>GIVE ME A BUZZ</h2>
]

var bigAbout=[
  <h2 className="big-header">About me, in detail</h2>,
  <p>Hello, I'm Nick! I graduated from Vassar College with a BA in Science and Technology studies. After a number
  of different sales and customer service jobs, including leading walking tours of New York City, I decided to take
  the plunge and become a web developer. Six months and a stint as a teaching assistant at my old bootcamp later, here I am,
  a fullstack web developer extraordinaire!
  </p>,
  <p>
  I love learning new things and creating new systems, so if I don't have the precise skills you're looking for, give it a month and I will.
  My past as a sales/customer service rep, along with my outgoing and friendly personality, have given me an exquisite set of people skills
  as well, perfect for any client facing roles or project management.
  </p>
]


var bigSkills=[
<h2 className="big-header">So many skills. So many bills...</h2>,
<h3>Known Skills</h3>,
<ul id = "known">
  <li>HTML, CSS, JS (The basics)</li>

  <li>Ruby, Ruby on Rails (My favorite)</li>
  <li>Git, Heroku, MySQL/PSQL</li>
  <li>Sales and Customer Services </li>

</ul>,
<h3>Skills I'm Practicing</h3>,
<ul id="learning">
  <li>NodeJS, ExpressJS, ReactJS (The many children of Javascript)</li>
  <li>Spanish and Chinese (proficient)</li>
  <li>Python</li>
</ul>,
<h3>What I Want to Learn</h3>,
<ul id="want-to-learn">
  <li>Everything else!</li>
</ul>

]

var bigProjects=[
<h2 className="big-header">Past Projects</h2>,
<div>
  <a href="https://google-tours.herokuapp.com" target="_blank"><img src={tourpic} /></a>
  <p>This is Google Tours (name subject to change), my final project at General Assembly, the bootcamp that taught me web development.
  Google Tours was inspired by my time leading walking tours in New York City, and lets users create their own custom tours by applying
  written text blurbs to google street view panoramas. The site is built using a Rails backend, and while the live version front end was
  created with vanilla JavaScript, I'm currently refactoring it to use ReactJS.
  </p>
  <a href="http://www.beehavenbees.com" target="_blank"><img src={beespic}/></a>
  <p>This is Bee Haven Bees, a beekeeping service based out of Glen Ridge NJ. A relative of mine runs Bee Haven Bees, and asked me to
  help him with a site redesign. (I know you've had this happen to you before, don't lie) Being the kind soul that I am, I helped him out,
  which provided me a wealth of experience with CSS and basic site design. It's not fancy, but it's my first true website and I'm damn proud of it.
  </p>
</div>]

var bigContact=[
<h2 className="big-header">Here's how you can get in touch</h2>,
<div>
<h4>By email: <a href="mailto:nickmichel100@gmail.com">nickmichel100@gmail.com</a></h4>
<h4>Or phone: 561-596-0368</h4>
<h4>Or <a href="https://www.linkedin.com/in/nicholas-michel/">LinkedIn</a></h4>
</div>
]

var content=[{big:bigAbout, small:smallAbout},
{big:bigSkills, small:smallSkills},
{big:bigProjects, small:smallProjects},
{big:bigContact, small:smallContact}]

export default content
