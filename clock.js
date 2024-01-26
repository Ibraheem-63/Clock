const body = document.querySelector("body"),
 hourHand = document.querySelector(".hour"),
 minuteHand = document.querySelector(".minute"),
 secondHand = document.querySelector(".second"),
 modeSwitch = document.querySelector(".mode-switch");

 if(localStorage.getItem('mode') === 'Dark mode'){
     // add dark to body and set switch mode to light
     body.classList.add('dark')
     modeSwitch.textContent = ('Light mode')
 }

 // add a click eventlistener to switch
 modeSwitch.addEventListener("click", () => { 
     // add dark class to bodey element
     body.classList.toggle("dark");
     // check if dark class is currently present on the body element
     const isDarkmode = body.classList.contains("dark");
     console.log(isDarkmode)
     // change text dark 
     modeSwitch.textContent = isDarkmode ? "Light Mode " : "Dark Mode";
     // set local storage mode items based on dark class presence
     localStorage.setItem("mode", isDarkmode ? "Dark Mode" : "Light Mode")
 })

 const updateTime = () => {
   // get the current time and calculate degrees for colock hands
   let date =  new Date(),
   secToDeg = (date.getSeconds() / 60) * 360,
   minToDeg = (date.getMinutes() / 60) * 360,
   hrToDeg = (date.getHours() / 12) * 360;

   //rotate the clock hands to the approprte degrees based on the current time
   secondHand.style.transform = `rotate(${secToDeg}deg)`;
   minuteHand.style.transform = `rotate(${minToDeg}deg)`;
   hourHand.style.transform = `rotate(${hrToDeg}deg)`;
 }

 // call update time tp set clock hands every seconds
setInterval(updateTime, 1000)

// call updateTime funtion on page load
updateTime();