//YOUR FIREBASE LINKS
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

    room_name= localStorage.getItem("room_name");
    user_name= localStorage.getItem("user_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
      document.getElementById("msg").value= "";



    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name1= message_data['name'];
      message1= message_data['message'];
      like1= message_data['like'];
      name_with_tag = "<h4>"+name1+"<img class='user_tick' src = 'tick.png'></h4> ";
      message_with_tag = " <h4 class = 'message_h4'>"+message1+"</h4>";
      like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value="+like1+ " onclick='updatelike(this.id)'> ";
      span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like:"+like1+"</span></button><hr>";
      row = name_with_tag+message_with_tag+like_button+span_with_tag;
      document.getElementById("output").innerHTML+= row;

//End code
      } });  }); }
getData();

function updatelike(message_id){
      console.log("click on like buttons are"+message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_like = Number(likes) + 1;
      console.log(update_like);
      firebase.database().ref(room_name).child(message_id).update({
            like : update_like
      });

 }


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
 }

 