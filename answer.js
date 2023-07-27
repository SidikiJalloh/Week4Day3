for(let i =1; i<=20; i++){
    console.log(i)
}
// for(let i = 0; i<=200; i++){
//     if(i % 2 == 0){
//         console.log(i +" is even")
//     }
// }

for(let i=1; i<=100; i++){
    if(i%3==0 && i%5 == 0 ){
        console.log("FizzBuzz")
    }if(i % 3== 0){
        console.log("Fizz")
    }if(i%5== 0){
        console.log( "Buzz")
    }else{
        console.log(i)
    }
}