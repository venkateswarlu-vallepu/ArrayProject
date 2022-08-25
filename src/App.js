
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

//concat
let states = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh"]

let capitals = ["Amaravati","Itanagar","Dispur","Patna","Naya Raipur","Panaji","Gandhinagar","Chandigarh","Shimla"]


  return (
    <div className="App">
      <h1>Day-1 Array Methods</h1>
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
      <br></br>
      <h1>Day-2 Array Methods</h1>

    <button type='button' onClick={()=>{

     console.log("Concat & Typeof")
     let combinedArr = states.concat(capitals);
     console.log(combinedArr);
     console.log("Type is");
     console.log(typeof(combinedArr));
     let combinedArr2 = states+capitals;
    console.log(combinedArr2)
    console.log("Type is");
    console.log(typeof(combinedArr2));
    console.log("-----------------------------------------")
     }}>Concat</button>


     <button type='button'  onClick={()=>{
      console.log("Every")

      let numbers = [64,863,63,83,87,937,53,576,245,233,76,343,55]
      console.log("Condition:-")
      let numbersResult = numbers.every((num)=>{
      console.log("Checking all the given numbers will satisfy the condition")
      return num >= 100;
      });
      console.log("Result:-")
      if(numbersResult === true){
        console.log("Given numbers all are satisfying the given condition")
      } else{
        console.log("Given numbers all are not satisfying the given condition")
      }
      console.log("-----------------------------------------")
     }}>Every</button>

     <button type='button' onClick={()=>{
      let marks = [43,53,78,91,99,64,54,23,67,23,87,69,56,34,32,21]
      let firstClassMarks = marks.filter((marks)=>{
        return marks >= 80 && marks <= 100;
      });
      console.log(firstClassMarks);
      console.log("Even Number")
      let marks2 = [56,76,89,64,90,73,82,89,87,92,41,83];
      let evenNumber = marks2.filter((marks2)=>{
      return marks2 % 2 === 0;
      });
      console.log(evenNumber)
      console.log("Odd Number")
      let marks3 = [89,64,90,73,82,89,87,92,41,83];
      let oddNumber = marks3.filter((marks3)=>{
      return marks3 % 2 !== 0;
      });
      console.log(oddNumber)
      console.log("-----------------------------------------")
     }}>Filter</button>

     <button type='button' onClick={()=>{
     let marksSheet = [43,53,78,91,99,64,54,23,67,23,87,69,56,34,32,21];
     let highestMarks = marksSheet.find((marksSheet)=>{
      return marksSheet >=90;
     });
     console.log(highestMarks)
     console.log("--------------------------------------------")
     }}>Find</button>

    <button type='button' onClick={()=>{
     let marksSheet = [43,53,78,91,99,64,54,23,67,23,87,69,56,34,32,21];
     let highestMarks = marksSheet.findIndex((marksSheet)=>{
      return marksSheet >=60;
     });
     console.log(highestMarks)
     console.log("--------------------------------------------")
     }}>Find Index</button>

    <button type='button' onClick={()=>{
     let marksSheet = [43,53,78,91,99,64,54,23,67,23,87,69,56,34,32,21];
     
     marksSheet.forEach((marksSheet)=>{
      console.log(marksSheet);
     })
     console.log("--------------------------------------------")
     }}>For Each</button>

     <button type='button' onClick={()=>{
      console.log("From Method:-")
       console.log("Original Sentence:-")
       
     let todaysNewUpdate = "Scientist Samir V Kamat Appointed As New Chief Of Defence Research Body."
     console.log(todaysNewUpdate)
     console.log("converted to array:-")
     let tnu = Array.from(todaysNewUpdate)
     console.log(tnu);
     console.log("Reverse of Original Sentence:-")
     let tnu1 = Array.from(todaysNewUpdate)
     tnu1.reverse();
     console.log(tnu1.join(""))
     console.log("--------------------------------------------")

     }}>From</button>


     <button type='button' onClick={()=>{
      console.log("isArray Method:-")
      console.log("Original Sentence:-")
      
    let todaysNewUpdate = "Scientist Samir V Kamat Appointed As New Chief Of Defence Research Body."
    console.log(todaysNewUpdate)
    console.log("Checking Array or Not:-")
    console.log(Array.isArray(todaysNewUpdate));
    console.log("--------------------------------------------")
     }}>isArray</button>

     <button type='button' onClick={()=>{
       console.log("without Map method:-")
       console.log(oscars);
       let newOscarsArr = oscars.map((br)=>{
        return br + " Garu";
       });
       console.log("with Map method:-")
       console.log(newOscarsArr);
       console.log("--------------------------------------------")

       let sscMarks =[89,64,90,73,82,89]
       console.log("without Map method(using Numbers):-")
       console.log(sscMarks);
       let afterMapMethod = sscMarks.map((marks)=>{
        return marks+7;
       });
       console.log("with Map method(using Numbers):-")
       console.log(afterMapMethod)
       console.log("--------------------------------------------")

       
     }}>Map</button>

     <button type='button' onClick={()=>{
      console.log("Reduce:-")
      let numbers = [32,32,34,37434,45,63,6346,346,45,134,6,25,6262,56];
    console.log("before Reduce method:-")
    console.log(numbers);
    let totalOfNumbers = numbers.reduce((total , values)=>{
      return total += values
    });
     console.log("after Reduce method:-")
     console.log(totalOfNumbers);
     console.log("--------------------------------------------")

     }}>Reduce</button>

<button type='button' onClick={()=>{
      console.log("Reduce:-")
      let numbers = ["v","e","n","k","a","t","e","s","h"];
    console.log("before Reduce-Right method:-")
    console.log(numbers);
    let totalOfNumbers = numbers.reduceRight((total , values)=>{
      return (total += values)
    });
     console.log("after Reduce-Right method:-")
     console.log(totalOfNumbers);
     console.log("--------------------------------------------")

     }}>Reduce-Right</button>


   <button type='button' onClick={()=>{
    console.log("Slice:-")
    console.log("Original Array:-")
    console.log(states);
    let newStates = states.slice(2,5);
    console.log("After using Slice method:-")
    console.log(newStates);
    console.log("--------------------------------------------")

   }}>Slice</button>

   <button type='button' onClick={()=>{
    console.log("Sort method:-")
    console.log("By using Alphabetical-Words:-")
    console.log("without Sort method:-")
    console.log(capitals);
    capitals.sort();
    console.log("with Sort method:-")
    console.log(capitals)
    console.log("By using Numbers:-")

    let newSort = [43,23,65,87,24,75,91,100,243];
console.log("without Sort method:-")
console.log(newSort);
newSort.sort((a, b)=>{
  return a - b;
});
console.log("with Sort method");
console.log(newSort);
   }}>Sort</button>


    </div>
  );
}

export default App;
