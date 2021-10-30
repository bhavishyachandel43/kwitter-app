var firebaseConfig = {
      apiKey: "AIzaSyCLOYZMbkroEwosRKr1v_PSXsRs4Is_gBo",
      authDomain: "practice-3e11b.firebaseapp.com",
      databaseURL: "https://practice-3e11b-default-rtdb.firebaseio.com",
      projectId: "practice-3e11b",
      storageBucket: "practice-3e11b.appspot.com",
      messagingSenderId: "255693807327",
      appId: "1:255693807327:web:72cebe765dddd16135536a"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
console.log(user_name);
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoom_name(this.id)' >#" +Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();
function redirectToRoom_name(name){
       console.log(name);
        localStorage.setItem("room_name", name);
         window.location = "kwitter_page.html"

}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}     
      
      

