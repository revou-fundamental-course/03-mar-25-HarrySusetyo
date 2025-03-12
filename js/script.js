// ini file js

// javascript untuk progress bar
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// javascript untuk memberi nama / selamat datang
function replacename(){
  var name = prompt("mohon isi nama anda :","");
  var n = name.length;

  if(n < 1) {
    promptempty();
  }
  else{
    document.getElementById('name').innerHTML = name;
  }
}

// Validasi jika promt tidak diisi
function promptempty(){
  var name = prompt("nama tidak boleh kosong, mohon diisi :","");
  var n = name.length;

  if(n < 1) {
    promptempty();
  }
  else{
    document.getElementById('name').innerHTML = name;
  }
}

replacename();

// membuat pesan
function validatefrom(){
  const name = document.forms["meassage-form"]["txtname"].value;
  const birthday = document.forms["meassage-form"]["bdate"].value;
  const gender = document.forms["meassage-form"]["gender"].value;
  const pesan = document.forms["meassage-form"]["txtpesan"].value;

  if(name == "" || birthday == "" || gender == "" || pesan == ""){
    alert("pesan kosong");
    return false;
  }

  setsenderui(name, birthday, gender, pesan);

  return false;
}

function setsenderui(name, birthday, gender, pesan){
  document.getElementById("input-name").innerHTML = name;
  document.getElementById("input-birthday").innerHTML = birthday;
  document.getElementById("input-gender").innerHTML = gender;
  document.getElementById("input-pesan").innerHTML = pesan;
}