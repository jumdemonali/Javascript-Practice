function getData(a, b, callback){  
    console.log(" Addition of numbers " + a + " and " + b + " is: " + (a+b));  
     callback();  
     }  
  function display(){  
   console.log('Execution of callback');  
     }  
 getData(50, 30, display); 