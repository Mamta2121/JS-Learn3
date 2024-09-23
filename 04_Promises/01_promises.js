//fetch('https://something.com').then().catch().finally()



//Promise is object
//Creating a Promise 

const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //DB calls , cryptography, network

    setTimeout(function(){
        console.log(('Async task is complete'));
        resolve() //.then() se connect hua
    }, 1000)
});

//Consuming a Promise
promiseOne.then(function(){
    console.log("Promise Consumed")
})



//Creating and Consuming both in one go without priorly storing in a variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async Taks2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("async 2 Resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout( function(){
    resolve({ username: "Chai", email: "chai@example.com"}) //passing data to resolve   
    }, 1000)
})

promiseThree.then(function(user){
    //ab jo resolve me data bheja usse yha per access krn hai
    console.log(user)
})

const promiseFour = new Promise( function(resolve, reject){
    setTimeout( function(){
        let error = true 

        if(error)  //if(!error)
        {
            resolve({username: "mamta", password: "12323"})
        }
        else
        {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})


//this is chaining of then first then me data aaya resolve se 
//fir second then me data aaya first then se and so on
//at the end catch me aayega agr promise se reject aayega (if error is true)
//at the finally ye to execute hota he hai chahe reject hua ho ya resolve hua ho
promiseFour
.then( (user)=>{
    console.log(user);
    return user.username;
})
.then( (username)=> {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("The promise is either resolve or rejected"))


const promiseFive = new Promise( function(resolve, reject){

    setTimeout( function(){
        let error = true 

        if(!error) //if(error)  
        {
            resolve({username: "javascript", password: "12323"})
        }
        else
        {
            reject('ERROR: JS went wrong')
        }
    }, 1000)

});

//One more Approach 
//consuming promise using async await 
//in async we use try catch to handle error
async function consumePromiseFive(){
   try
   {
       const response =  await promiseFive
       console.log(response)
   }
   catch(error)
   {
       console.log(error);
   }
}
consumePromiseFive()



//One more example of async await


//await mtlb kisi kam ke hone ka intezar krna jiske bhi aage await lga hoga vo kaam jab tak nhi hoga tab tak  execution aage nhi badega
//So any time consuming task should have await in front of it so that execution waits untill the task is completed

/*
async function getAllUsers(){
    try 
    {
        const response = await fetch( 'https://jsonplaceholder.typicode.com/users')
        //console.log(response)
        const data = await response.json()  //this take time hence put ae=wait in front of it so that execution does not go till end without even doing this
        console.log(data)
    }
    catch(error)
    {
        console.log("E: ", error);
    }
}

getAllUsers();
*/


//Doing above task usinf fetch then catch finally instead of async await

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
})
.then( (data) => console.log(data))
.catch((error)=> console.log(error))

//this fetch ouput is consoled pehle then upr wala code..because of fetch queue...which is executed first

