//1.
    function countdown(num) {
    let startNumber = num;
    let fn = function () {
      startNumber--;
      if (startNumber === 0) {
        clearInterval(timerId);
        console.log("DONE!");
      } else {
        console.log(startNumber);
      }
    };
  
    let timerId = setInterval(fn, 1000);
  }
  countdown (5);

  //2 
  function randomGame(){

    function counter(){
      let count = 0;
      return function(){
          return ++count
      }
    }
    let gameCount = counter();

    function fn(){
      var randomNum = Math.random();
      if(randomNum > 0.75){
        console.log(gameCount());
          clearInterval(timerId);
      } else {
        gameCount()
      }
    }
    let  timerId = setInterval(fn, 1000);
  }
    console.log(randomGame())
  //3
  function isEven(num) {
    return num % 2 === 0 ? true : false;
  }
  console.log(isEven (2))
  
  //4
  function isOdd(num) {
    return num % 2 !== 0 ? true : false;
  }
  console.log(isOdd (14))

  //5
  function isPrime(n){
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if(n % i === 0){
        return false;
      }
    };
  
    if(n !== Math.round(n)){
      return false;
    } else if(n < 2){
      return false;
    } else {
      return true;
    }
  }
  console.log(isPrime(8))
  
  //6
  function numberFact(num,callback){
  return callback(num)
  }
  console.log(numberFact(59, isEven))

    //7
    function find (array, callback){
  return array.find (function (value){
      if (callback(value))
      return value
  })
    }
    let result = find ([8,11,4,27], function(val){
    return val >= 10
    })
 console.log (result)

    //8
  function findIndex (array, callback){
    return array.findIndex (function (value){
      if (callback(value))
      return value
    })
  }
    let result = findIndex ([8,11,4,27], function(val){
  return  val >= 10
    })
    console.log (result)

  //9
  function specialMultiply(a,b){
    if(arguments.length === 1){
      return function(b){
        return a*b;
      }
    }
    return a*b;
  }
  console.log(specialMultiply(3,4)) // 12
  console.log(specialMultiply(3)(4)); // 12
  console.log(specialMultiply(3));