console.log("Loaded functionLogin.js")
function functionLoginNAME(){ 
  var nameRaw = document.getElementById('name_input').value;
  if (nameRaw == 'c'){nameRaw = 'Coolsugar32'; console.log('Coolsugar32 has logged in!')}
  if (nameRaw == ''){
    name = 'User'
    console.log("User was in a hurry. Did not enter name while logging in.")
  }else{
  name_split = nameRaw.split(" ")
  name = name_split[0]
  if (name_split[1] == '-th'){
    if (name_split[2] == 'blood'){
      functionCmd('theme blood')
    }else if (name_split[2] == 'homebrew'){
      functionCmd('theme homebrew')
    }else if (name_split[2] == 'classic'){
      functionCmd('theme classic')
    }else if (name_split[2] == 'lagoon'){
      functionCmd('theme lagoon')
    }else{
      alert("[Error]: The theme you selected does not exist!")
    }
  }
}
  document.getElementById('output').innerHTML = 'Login(UserName:' + name + ');<br>Type "help" for the the list of commands.'
  document.getElementById('input').style = 'border-top-margin: 0px;';
  var btn_enter = document.getElementById('send').style.display = 'inherit';
  document.getElementById('name_holder').innerHTML = "Logged in as: " + name;
  document.getElementById('characters_count').style.display = 'inherit';
  document.getElementById('data_name').innerHTML = name;
  console.log("User logged in as: " + name)
  //document.getElementById('data_dev_id').innerHTML = 'T'
}

function functionLogin(){
  document.getElementById('output').innerHTML = `<center><br><br><textarea class = 'inputNAME' id = 'name_input' placeholder = 'Enter your name...' style = 'max-width:15%; height:20px; white-space: nowrap;' maxlength = '25'; float: center;></textarea><br><button onclick = 'functionLoginNAME()' class = 'btn'>Login</button></center>`
}
