
import './App.css';

function App() {
  //Fill

let country =["SouthIndia","WestIndia","EastIndia","NorthIndia"];

//Includes
let oscars = ["Bhanu Athaiya","Satyajit Ray","AR Rehman","Gulzar","Resul Pookutty"]

//IndexOf & Join
let totalList = ["SouthIndia","WestIndia","EastIndia","NorthIndia","Bhanu Athaiya","Satyajit Ray","AR Rehman","Gulzar","Resul Pookutty"]

//Push & unShift
let mobiles = ["Iphone","Samsung","Oppo","Vivo","Nothing","Realme","Xiaomi","Sony","HTC","Huawei"]

//Pop & Shift
let cars =["Tesla","Audi","Merc","Rolls-Royce","Range-Rover","Lamborghini","Honda","Hyndai","Renolt","Mahindra"]


  return (
    <div className="App">
      <button type='button' onClick={()=>{
        console.log("Fill:-")
       console.log(country); 
       console.log(`We dont have four indias only one i.e--`)
       console.log(country.fill("INDIA"))
       console.log(country.length)
       console.log("---------------------------------------")

      }}>Fill</button>

      <button type='button' onClick={()=>{
        console.log("Includes:-")
        console.log(oscars);
        console.log(oscars.includes("Gulzar"))
        console.log(oscars.includes("MS Dhoni"))
        console.log("-----------------------------------------")
      }}>Includes</button>

<button type='button' onClick={()=>{
        console.log("IndexOf:-")
        console.log(totalList.indexOf("AR Rehman"))
        console.log(totalList[5])
        console.log("-----------------------------------------")
      }}>IndexOf</button>
      
      <button type='button' onClick={()=>{
        console.log("Join:-")
      console.log(totalList.join("\n"))
      console.log("-----------------------------------------")
      }}>Join</button>

<button type='button' onClick={()=>{
        console.log("toString:-")
      console.log(totalList.toString())
      console.log("-----------------------------------------")
      }}>toString</button>
     
     <button type='button' onClick={()=>{
        console.log("lastIndexOf:-")
        console.log(totalList.lastIndexOf("Gulzar"))
        console.log(totalList[5])
        console.log("-----------------------------------------")
      }}>lastIndexOf</button>

      <button type='button' onClick={()=>{
       console.log("Push:-")
       console.log("Before")
       console.log(mobiles);
       mobiles.push("Motorola")
       console.log("After")
       console.log(mobiles)
       console.log("-----------------------------------------")
      }}>Push</button>

<button type='button' onClick={()=>{
       console.log("unShift:-")
       console.log("Before")
       console.log(mobiles);
       mobiles.unshift("Motorola")
       console.log("After")
       console.log(mobiles)
       console.log("-----------------------------------------")
      }}>unShift</button>


      <button type='button' onClick={()=>{
       console.log("Pop:-")
       console.log("Before")
       console.log(cars);
       cars.pop();
       console.log("After")
       console.log(cars)
       console.log("-----------------------------------------")
      }}>Pop</button>

<button type='button' onClick={()=>{
       console.log("Shift:-")
       console.log("Before")
       console.log(cars);
       cars.shift();
       console.log("After")
       console.log(cars)
       console.log("-----------------------------------------")
      }}>shift</button>

<button type='button' onClick={()=>{
       console.log("Splice(only Removing):-")
       console.log("Before")
       console.log(cars);
       cars.splice(2,4);
       console.log("After")
       console.log(cars)
       console.log("-----------------------------------------")
       console.log("Splice(only Adding):-")
       console.log("Before")
       console.log(cars);
       cars.splice(2,0,"KIA");
       console.log("After")
       console.log(cars)
       console.log("-----------------------------------------")
       console.log("Splice(Remove+Adding):-")
       console.log("Before")
       console.log(cars);
       cars.splice(3,2,"MG");
       console.log("After")
       console.log(cars)
       console.log("-----------------------------------------")
      }}>splice</button>



    </div>
  );
}

export default App;
