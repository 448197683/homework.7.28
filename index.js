const span = document.querySelector("span");
const img = document.querySelector("img");
const icons = document.querySelectorAll("i");

const data = fetch(`https://randomuser.me/api/`);

data.then(function(x){
  const json = x.json();
  return json;
})
.then(function(json){
  const user = json;
  console.log(user);
  const pic = user.results[0].picture.large;
  img.src = `${pic}`;
  const nameTitle = user.results[0].name.title;
  const nameFirst = user.results[0].name.first;
  const nameLast = user.results[0].name.last;
  const email = user.results[0].email;
  const age = user.results[0].dob.age;
  const cell = user.results[0].cell;
  const city = user.results[0].location.city;
  for(let i = 0; i < icons.length; i++){
    icons[i].addEventListener('mouseenter', function(e){
      const ent = e.target.className;
      if(ent === `fas fa-user`){
        span.innerHTML = `My name is ${nameTitle} ${nameFirst} ${nameLast}`;
        icons[0].style.color = `red`;
      }else if(ent === `far fa-envelope`){
        span.innerHTML = `${email}`;
        icons[1].style.color = `red`;
      }else if(ent === `fas fa-birthday-cake`){
        span.innerHTML = `I'm ${age} years old`;
        icons[2].style.color = `red`;
      }else if(ent === `fas fa-mobile-alt`){
        span.innerHTML = `${cell}`;
        icons[3].style.color = `red`;
      }else{
        span.innerHTML = `I'm ${city}`
        icons[4].style.color = `red`;
      }
    })
    icons[i].addEventListener('mouseleave', function(e){
      const ent = e.target.className;
      if(ent === `fas fa-user`){
        icons[0].style.color = `white`;
      }else if(ent === `far fa-envelope`){
        icons[1].style.color = `white`;
      }else if(ent === `fas fa-birthday-cake`){
        icons[2].style.color = `white`;
      }else if(ent === `fas fa-mobile-alt`){
        icons[3].style.color = `white`;
      }else{
        icons[4].style.color = `white`;
      }
    })
  }
})