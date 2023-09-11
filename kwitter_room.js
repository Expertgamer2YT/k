
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDpdybKWO5TmIId8gYCchMLvILhfxZQWYQ",
      authDomain: "practice-94-6a68f.firebaseapp.com",
      databaseURL: "https://practice-94-6a68f-default-rtdb.firebaseio.com",
      projectId: "practice-94-6a68f",
      storageBucket: "practice-94-6a68f.appspot.com",
      messagingSenderId: "383533811662",
      appId: "1:383533811662:web:26134b8897690dcff80d9f",
      measurementId: "G-G6TYXLG7P5",
    };
   
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome "+user_name;

     function addRoom(){
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose :"adding roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room_name"+Room_names);
       row = "<div class = 'room_name' id ="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+= row;
      
      });});}
getData();
 function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location= "kwitter_page.html";

 }

 function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
 }
