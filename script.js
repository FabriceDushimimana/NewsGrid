const nav =  document.querySelector('nav');
const ul = document.querySelector('.ul');
const skills = document.querySelector('.skills');
const experience = document.querySelector('.experience');
const education = document.querySelector('.education');
const awards = document.querySelector('.awards');
const items = document.querySelectorAll('.list li');
const a = document.querySelector('.a');
const bb = document.querySelector('.bb');
const cc = document.querySelector('.cc');
const dd = document.querySelector('.dd');
const move = document.querySelector('.move');


window.addEventListener('scroll', () =>{

	nav.classList.toggle('sticky', window.scrollY > 0);
    move.classList.toggle('show', window.scrollY > 30);
})


const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', () =>{

    ul.classList.toggle('right');

	const as = document.querySelectorAll('.ul a');

	as.forEach(a =>{

		a.addEventListener('click', () =>{


			ul.classList.remove('right');
		})
	})
})

items.forEach(item =>{
 


 item.addEventListener('click', function (){
      	
 	if (item.innerText === 'Main Skills') {

 		skills.style.display = 'flex';
 		awards.style.display = 'none';
 		education.style.display = 'none';
 		experience.style.display = 'none';
 		a.classList.add('li');
        bb.className = '';
 		cc.className = '';
 		dd.className = '';

 	} else if(item.innerText === 'Awards'){
        
        awards.style.display = 'block';
        skills.style.display = 'none';
        education.style.display = 'none';
 		experience.style.display = 'none';
 		a.classList.remove('li');
 		bb.className = 'li';
 		cc.className = '';
 		dd.className = '';
 	} else if(item.innerText === 'Experience'){

 		awards.style.display = 'none';
        skills.style.display = 'none';
        education.style.display = 'none';
 		experience.style.display = 'block';
 		a.classList.remove('li');
 		bb.className = '';
 		cc.className = 'li';
 		dd.className = '';
 	} else if(item.innerText === 'Education'){

 		awards.style.display = 'none';
        skills.style.display = 'none';
        education.style.display = 'block';
 		experience.style.display = 'none';
 		a.classList.remove('li');
 		 bb.className = '';
 		cc.className = '';
 		dd.className = 'li';
 	}
 })
    

})