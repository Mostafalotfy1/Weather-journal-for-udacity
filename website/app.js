/* Global Variables */
let url = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
let apiKey = '&appid=ebfb7b7e7e8e84d1711e53acfe74a580';
let generator = document.getElementById('generate');
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
//event
generator.addEventListener('click', (e)=>{
    const newZip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    console.log(newZip)
    const getWeatherData = async(url , zip , key)=>{
    console.log(url+zip+key)
    const response = await fetch(url+zip+key)
    try{
        const data = await response.json();
        return data;
    }catch(e){
        console.log(e);
    }
}
    getWeatherData(url,newZip,apiKey).then(function(data){
       console.log(data);
       const getData = async (url = '' , data = {})=>{
    console.log(data);
    const res = await fetch(url , {
        method:'POST',
        credentials:"same-origin",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    try{
        const newData = await res.json();
        console.log(newData);
        return newData;
    }catch(e){
        console.log(e);
    }
}
       getData('/add',{date:newDate , temp:data.list[0].main.temp, content:feelings}) 
       const finallResualt = async ()=>{
    const req = await fetch('/all');
    console.log(req)
    try{
        const allData = await req.json();
        console.log(allData.Elements.date)
        document.getElementById('date').innerHTML = `Date : ${allData.Elements.date}`;
        document.getElementById('temp').innerHTML = `Temperature : ${allData.Elements.temp}`;
        document.getElementById('content').innerHTML = `I feel : ${allData.Elements.content}`;
    }catch(e){
        console.log(e)
    }
}
       finallResualt();
    })
    
});




