//Basic Get Requesat
async  function fetchUserData(){
    try{
const response= await fetch('https://api.github.com/users/nykz')
// console.log(response)

if(!response.ok){
throw new Error(`HTTP error! Status: ${response.Status}`);
}

//parse JSON Response
const userData=await response.json();
console.log(userData)
return userData;

    }catch(e){
        console.error(e)
    }  
}
fetchUserData();