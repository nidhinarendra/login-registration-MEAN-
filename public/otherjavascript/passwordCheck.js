var pwcheck = function(){

  if (document.getElementById('password').value.length < 6){
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Password should be atleast 6 characters';
  }
  else{
    document.getElementById('message').style.color = 'white';
    document.getElementById('message').innerHTML = ' ';
  }
}

var pwrecheck = function(){
  if (document.getElementById('password').value == document.getElementById('repassword').value){
    document.getElementById('alert_message').style.color = 'white';
    document.getElementById('alert_message').innerHTML = 'Password matched';
  }
  else{
    document.getElementById('alert_message').innerHTML = 'Password do not match';
    document.getElementById('alert_message').style.color = 'red';
  }
}
