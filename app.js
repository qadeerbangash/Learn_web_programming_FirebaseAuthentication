//====SIGNUP====//
let signup=()=>{
    let email=document.getElementById("email")
    let password=document.getElementById("password")

    // console.log(email.value)
    // console.log(password.value)
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((result) => {
        console.log(result)
      // Signed in 
      var user = result.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      
      console.log(errorMessage)
    });
}





//====LOGIN====//
let login=()=>{
    let email=document.getElementById("login-email")
    let password=document.getElementById("login-password")
//Email koi bhi ho hum sign up kar sakty hai example==>yahoo,hotmail etc
    // console.log(email.value)
    // console.log(password.value)
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      console.log("User login Successfuly")
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)

    });


}