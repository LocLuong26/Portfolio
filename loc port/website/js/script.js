var typed = new Typed(".input", {
	strings:["Web Developer.","AI Enthiusiast.","Software Engineer.","Student"],
	typeSpeed:130,
	backSpeed:80,
	loop:true
});

const header = document.querySelector('header');

window.addEventListener('scroll', function() {
	header.classList.toggle("sticky", window.scrollY > 130);
});

let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	menulist.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", () => {
	const videos = document.querySelectorAll(".project-video");
  
	const observer = new IntersectionObserver((entries, obs) => {
	  entries.forEach(entry => {
		const video = entry.target;
		if (entry.isIntersecting) {
		  video.play().catch(err => {
			console.log("Play prevented:", err); // debug block
		  });
		} else {
		  video.pause();
		}
	  });
	}, {
	  threshold: 0.6 // play when 60% in view
	});
  
	videos.forEach(video => observer.observe(video));
  });
  
