var cityinput = document.getElementById("cityin");
var btn = document.getElementById("add");
var cityoutput = document.getElementById("cityout");
var des = document.getElementById("des");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var box = document.querySelector(".box");
var icon = document.getElementById("icon")
apik = "3045dd712ffe6e702e3245525ac7fa38"; // id lien ket API
function convert(K_C) {
  return (K_C - 273).toFixed(2); // Kelvin sang độ C
}


btn.addEventListener('click', ()=>{
    box.style.display = "block";
fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityinput.value+'&appid='+apik)
  .then(res => res.json())

  .then(data =>{
    var name = data['name']
    var desc = data['weather']['0']['description']
    var temparature = data['main']['temp']
    var windspeed = data['wind']['speed']
    const {descrip, id} = data.weather[0]
    cityoutput.innerHTML = `Weather of <span>${name}</span>`
    temp.innerHTML = `Temparature: <span>${convert(temparature)} °C</span>`
    des.innerHTML = `Sky Condition: <span>${desc} </span>`
    wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`
    if(id == 800){
      icon.src = "./img/clear.svg"
    } else if (id >= 200 && id <= 232){
      icon.src = "./img/storm.svg"
    } else if (id >= 600 && id <= 622){
      icon.src = "./img/snow.svg"
    } else if (id >= 701 && id <= 781){
      icon.src = "./img/haze.svg"
    } else if (id >= 801 && id <= 804){
      icon.src = "./img/cloud.svg"
    } else if ((id >= 500 && id <= 531) || (id >= 300 && id <=321)){
      icon.src = "./img/rain.svg"
    }
   
  })
  

  .catch(err => alert("Please input valid city !!!"))
})