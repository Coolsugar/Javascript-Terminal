console.log("Loaded functionCmd.js");
var terminal_name = 'Terminal v.0.4(Alpha)';
var texteditorSAVE = 'EMPTY';
var saveslist = []; 
var helpmenu = `<u><b>List of commands</b></u><br> 
      <b>Console Commands:</b><br>
      <u>• clear - </u>If the terminal box gets too messy, run this command. It will clear all the text inside!<br>
      <u>• close - </u>Closes the tab the terminal is active on.<br>
      <u>• refresh - </u>Refreshes the terminal page.<br>
      <u>• help.type {sub command} - </u>Gives you the help menues of sub-commands. Type 'help.type help' for all the sub commands for help.type.<br>
      <u>• theme - </u>Allows user to change the theme of the page. Type 'theme list' for the list of available themes.<br>
      <u>• font - </u>Allows the user to change the terminal fonts. Type help.type for syntax.<br>
      <u>• date - </u>Displays current date. <br>
      <u>• time - </u>Displays current time. <br>
      <u>• output.download - </u> Download the terminal output on display.<br>
      <u>• choose - </u> Enter as many objects as you please and the terminal will pick one at random and return it to you. Syntax: choose {from / :} {object_one object_two object_three...}
      <br><br>
      <b>Math Commands:</b><br>
      <u>• math {syntax}  - </u> This command is used for running basic mathematic operations. Type 'help.type math' for syntax. You can add, subtract, multiply and divide two numbers with this command.<br>
      <u>• math.adv {type} {num} - </u> Advanced mathematical calculations. Type "help.type math.adv"<br>
      <u>• math.rand - </u> Generate random numbers. Type 'help.type math.rand' for syntax and subcommands.<br>
      <br><br>
      <b>Logging Commmands:</b><br>
      <u>•log.display : {text} - </u>Allows user to insert text into the console display box. This log will be visisble to the user in the output box. This allows user to store text and seperate commands.<br>
      <u>•log.store : {text} - </u>Allows user to store logs into a termorary database that is erased after refreshing.<br>
      <u>•log.store.see - </u>Displays the logs stored using the log.store command in the output box.<br>
      <u>•log.store.download - </u>Gives the user a prompt to download the logs stored using log.store.<br>
      <b>Logging Commmands:</b><br>
      <br><br>
      <b>Acccesibility Tips:</b><br>
      <br>• Pressinng the "Tab" button on your keyboar will automatically enter your pervious command into the input box.
      <br>• When logging in, if you type '-th' following by a whitespace and then a theme name, the terminal will automatically display your chosen theme upon logging in! Syntax: "{name} -th {theme_name}"
      <br>• Developer Mode - type ".dev enable" to get access to developer commands and logs.
      <br>• Simultaneous Commands - You can run several commands with a single input by separating commands by the "&&" argument. Example: "{command1} && {command2} {argument for command2} && {command3}"`
console.log(saveslist)
function functionCmd(cmd){ //command function begins
  var text = document.getElementById('output').innerHTML;
  var texteditor = document.getElementById('text_editor');
  var output = document.getElementById('output');
  function funcOut(out){output.innerHTML = text + '<br>' + out};
  cmd_el = cmd.split(" ");
  try{
    if (cmd_el.includes('&&') == true){
      cmds = cmd.split("&&");//text
      for (let i = 0 ; i < cmds.length ; i++){
        CmdI = cmds[i].split(' ')
        if (CmdI[0] == ''){CmdI.shift()};
        if(CmdI[CmdI.length - 1] == ''){CmdI.pop()};
        console.log("Running multiple functions: " + String(i + 1) + "/" + cmds.length);
        functionCmd(CmdI.join(' '));
      }
    return;
    }
  }catch{
    funcOut(`[Error!]: Something went wrong with running Simuletaneous Commands.`)
  }

  //Standard  changes:
  function scrollToBottom(div){
  div.scrollTop = div.scrollHeight;
  }
  input.value = '';
//commands list:
try{
if (cmd_el[0] == 'theme'){
  var sett = document.getElementById('page_theme')
  console.log(sett.href)
  if(cmd_el[1] == 'list'){
    funcOut(`Themes List:<br>
      •Homebrew (default) - Lime<br>
      •Blood - Red<br>
      •Classic - Black and White<br>
      •Lagoon (dev. mode default) - Blue <br><br>
      Syntax: theme {theme name} `)
  }else if (cmd_el[1] == 'homebrew'){
    if (sett.href == "theme_default.css"){
      funcOut("You are already on theme Homebrew.");
    }else{
      sett.href = 'theme_default.css';
      document.getElementById('data_theme').innerHTML = 'default';
      funcOut("[Terminal]: Theme set to Homebrew");
      console.log("Theme was changed.");
    }
  }else if(cmd_el[1] == 'blood'){
    if(sett.href == "theme_blood.css"){
      funcOut("You are already on theme Blood.");
    }else{
      sett.href = 'theme_blood.css';
      document.getElementById('data_theme').innerHTML = 'blood';
      funcOut("[Terminal]: Theme set to Blood");
      console.log("Theme was changed.");
    }
  }else if(cmd_el[1] == 'classic'){
    if(sett.href == "theme_classic.css"){
      funcOut("You are already on theme Classic.");
    }else{
      sett.href = 'theme_classic.css';
      document.getElementById('data_theme').innerHTML = 'classic';
      funcOut("[Terminal]: Theme set to Classic");
      console.log("Theme was changed.");
    }
  }else if(cmd_el[1] == 'lagoon'){
    if(sett.href == "theme_lagoon.css"){
      funcOut("You are already on theme Lagoon.");
    }else{
      sett.href = 'theme_lagoon.css';
      document.getElementById('data_theme').innerHTML = 'lagoon';
      funcOut("[Terminal]: Theme set to Lagoon");
      console.log("Theme was changed.");
    }
  }else{
    funcOut(`[Error]: Type "theme list" for the list of themes and syntax`);
    latest_cmd = cmd;
  }
  latest_cmd = cmd;
  }
  else if (cmd == 'hello world'){
    funcOut('[Terminal]: Hello to you too, ' + document.getElementById('data_name').innerHTML + '! And yes, the command prompt is working :)')
    latest_cmd = cmd;
  }else if (cmd == 'Hello world'){
    funcOut('[Terminal]: Hello to you too, ' + document.getElementById('data_name').innerHTML + '! And yes, the command prompt is working :)')
    latest_cmd = cmd;
  }
  else if (cmd == 'hello world!'){
    funcOut('[Terminal]: Hello to you too, ' + document.getElementById('data_name').innerHTML + '! You seem rather excited today. And yes, the command prompt is working :)')
    latest_cmd = cmd;
  }else if (cmd == 'hello'){
    funcOut('[Terminal]: Hello to you too, ' + document.getElementById('data_name').innerHTML + '!')
      latest_cmd = cmd;
  }else if (cmd == 'hi'){
    funcOut('[Terminal]: Hello to you too, ' + document.getElementById('data_name').innerHTML + '!')
    latest_cmd = cmd;
  }else if(cmd_el[0] == 'te'){
    latest_cmd = cmd;
    function funcTout(out){texteditor.value = texteditor.value + "\n\n[Editor]: " + out}
    if (cmd_el[1] == 'open'){
      if (document.getElementById('data_edit').innerHTML == 'F'){
        output.style.display = 'none';
        texteditor.style.display = 'block';
        document.getElementById('data_edit').innerHTML = 'T';
        funcOut("[Terminal]: Terminal Text Editor opened.");
        console.log('Switching to Text Editor.');
        if (cmd_el[2] == 'new'){
          texteditor.value =  `New File: {file name}`;
        }else if(cmd_el[2] == 'load'){
          if (cmd_el[3] == 'saves'){
            try{fileName = cmd_el[4]}
            catch{funcOut("[Error]: Please enter the file name of the file you would like to load from html saves storage.")}
            texteditor.value = 'The file you entered does not exist or could not be loaded.';
            texteditor.value = document.getElementById(fileName).innerHTML;
          }else if (cmd_el[3] == 'local'){funcTout("[Error!]: Text Editor load function is not yet supported.")}
           else{funcOut(`[Error]: Invalid argument. Files can be loaded from either "saves" (html saves) or from "local" (your device)[NOT SUPPORTED].`)}
        }//if not new then nothing else 
      }else if (document.getElementById('data_edit').innerHTML == 'T'){funcTout("[Terminal]: Text Editor is already open!"); console.log("Text Editor was already open.")}
      else {
        funcOut("[Error!]: Unexpected data values obtained. Error should now be resolved.");
        funcTout("[Error!]: Unexpected data values obtained. Error should now be resolved.");
        console.warn(("Unexpected data values obtained in ID: data_edit"));
        document.getElementById('data_edit').innerHTML = 'F';
      }
    }else if (cmd_el[1] == 'close'){
      if (document.getElementById('data_edit').innerHTML == 'T'){
        if (cmd_el[2] == 'save'){
          try{fName = cmd_el[3]}
          catch{
            funcTout("[Error]: You must give your file save a name! File name must end with .txt"); 
            return;
          }
          if (fName.split('.')[1] != 'txt'){
            funcTout(`[Error]: Your file name must end with ".txt" and cannot conatin any other periods ('.').`)
             return;
           }
          var fStore = document.getElementById('text_editor_logs');
          fStore.innerHTML = fStore.innerHTML + `<div id = '` + fName + `'>` + document.getElementById('text_editor').value + `</div>`;
          saveslist = saveslist.concat(fName)
          console.log(fName)
          console.log(saveslist)
          console.log("Text Editor document saved to local html storage.");
        }
        output.style.display = 'block';
        texteditor.style.display = 'none';
        document.getElementById('data_edit').innerHTML = 'F';
        funcOut("[Terminal]: Terminal Text Editor closed.");
        console.log('Switching to Terminal.');
      }else if (document.getElementById('data_edit').innerHTML = 'F'){funcOut("Text Editor is not open!")}
      else{
        funcOut("[Error!]: Unexpected data values obtained. Error should now be resolved.");
        funcTout("[Error!]: Unexpected data values obtained. Error should now be resolved.");
        console.warn(("Unexpected data values obtained in ID: data_edit"));
        document.getElementById('data_edit').innerHTML = 'F';
      }
    }else if (cmd_el[1] == 'saveslist'){
      if (document.getElementById('data_edit').innerHTML == 'T'){funcTout(`Displaying list of saved documents: <br>` + saveslist)}
      else if (document.getElementById('data_edit').innerHTML == 'F'){funcOut(`[Text Editor]: Displaying list of saved documents: <br>` + saveslist )}
      else{
      alert("[Error!]: Unexpected data values obtained. Error should now be resolved.")
      console.warn(("Unexpected data values obtained in ID: data_edit"));
      }
    }else{
      if (document.getElementById('data_edit').innerHTML == 'T'){funcTout(`[Error]: Text Editor command argument was not recognised. Do "help.type te" for syntax.`)}
      else if (document.getElementById('data_edit').innerHTML == 'F'){funcOut(`[Error]: Text Editor command argument was not recognised. Do "help.type te" for syntax.`)}
      else{
      alert("[Error!]: Unexpected data values obtained. Error should now be resolved.")
      console.warn(("Unexpected data values obtained in ID: data_edit"));
      }
    }
  }else if(cmd_el[0] == 'math'){
    if (cmd_el[1] == '(value.pi)'){
        num1 = Math.PI; 
        num2 = parseFloat(cmd_el[3]); 
        latest_cmd = cmd; 
      }
      else if (cmd_el[3] == '(value.pi)'){
        num2 = Math.PI; 
        num1 = parseFloat(cmd_el[1]); 
        latest_cmd = cmd; 
      }
      else if (cmd_el[1] == '(value.e)'){
        num1 = 2.7182818285;  
        num2 = parseFloat(cmd_el[3]); 
        latest_cmd = cmd; 
      }
      else if (cmd_el[3] == '(value.e)'){
        num2 = 2.7182818285;  
        num1 = parseFloat(cmd_el[1]); 
        latest_cmd = cmd;  
      }else{
           var num1 = parseFloat(cmd_el[1]);  
           var num2 = parseFloat(cmd_el[3]);  
           latest_cmd = cmd;  
      }//nested end - special values

      //nested - operations
      if(cmd_el[2] == '+'){
        var ans = num1 + num2; 
        funcOut('User: ' + cmd + '<br>' + '[Math]Terminal(Adding Numbers).answer: ' + ans); 
        latest_cmd = cmd; 
      }
        else if(cmd_el[2] == '-'){
          var ans = num1 - num2;
          funcOut('User: ' + cmd + '<br>' + '[Math]Terminal(Subtracting Numbers).answer: ' + ans);  
                //document.getElementById('output').innerHTML=text + '<br><br>' + 'User: ' + cmd + '<br>' + '[Math]Terminal(Subtracting Numbers).answer: ' + ans; 
          latest_cmd = cmd; 
        } 
        else if (cmd_el[2] == '*'){
          ans = num1 * num2; 
          funcOut('User: ' + cmd + '<br>' + '[Math]Terminal(Multiplying Numbers).answer: ' + ans);  
          latest_cmd = cmd; 
        }
        else if(cmd_el[2] == '/'){
          ans = num1 / num2;
          funcOut('User: ' + cmd + '<br>' + '[Math]Terminal(Dividing Numbers).answer: ' + ans); 
          latest_cmd = cmd; 
        }
        else if (cmd_el[2] == '^'){
          ans = Math.pow(num1 , num2);
          funcOut('User: ' + cmd + '<br>' + '[Math]Terminal(Exponent).answer: ' + ans); 
          latest_cmd = cmd; 
        }
        else if (cmd_el[2] == ''){
          funcOut('[Error!]Please enter operator!');  
          latest_cmd = cmd; 
        }else {
          funcOut('[Error!]Operator (+,-,*,/), not recognised: ' + cmd_el[2]); 
          latest_cmd = cmd; 
        }//nested end - operations
    } //end of math command, start of advanced math commands
    else if (cmd_el[0] == 'math.adv'){ 
    if (cmd_el[2] == '(value.pi)'){
            var num = Math.PI
          }else if (cmd_el[2] == '(value.e)'){
            var num = 2.7182818285
          }else{var num = parseFloat(cmd_el[2])}
          var ans = Math.sqrt(num); 
        //nested - operations
        if (cmd_el[1] == 'root'){
          funcOut('User:' + cmd + "<br>[Advanced Math]: Terminal Running √" + num + " = " + ans);
          //output.innerHTML = text + '<br><br>User:' + cmd + "<br>[Advanced Math]: Terminal Running √" + num + " = " + ans; 
          latest_cmd = cmd; 
          } 
          else if(cmd_el[1] == 'div?'){
            //nested numbers inside
            if (cmd_el[3] == 'by'){
            var num1 = parseFloat(cmd_el[2]);//by 
            var num2 = parseFloat(cmd_el[4]);//divisor
            var res = num1 % num2;  
            latest_cmd = cmd; 
            //nested - results
            if(res == '0'){
              funcOut(cmd +  '<br><br>' + "[Advanced Math]: Terminal Output: True<br> " + num1 + ' is divisible by ' + num2);
              //output.innerHTML = text + '<br><br>' + cmd +  '<br><br>' + "[Advanced Math]: Terminal Output: True<br> " + num1 + ' is divisible by ' + num2;  
            latest_cmd = cmd; 
            }else{ 
            funcOut(cmd +  '<br><br>' + "[Advanced Math]: Terminal Output: False<br>" + num1 + 'is NOT divisible by ' + num2); 
              //output.innerHTML = text + '<br><br>' + cmd +  '<br><br>' + "[Advanced Math]: Terminal Output: False<br>" + num1 + 'is NOT divisible by ' + num2; 
            latest_cmd = cmd; 
            }
          }else{
            funcOut("[Error!]Please specify BY between the two numbers. Type 'help.type math.adv' for syntax.");
            //output.innerHTML = text + "<br><br>[Error!]Please specify BY between the two numbers. Type 'help.type math.adv' for syntax.";
            latest_cmd = cmd; 
          }
        } //Divisibility check command ends. Trignometry for radians begin:
        else  if (cmd_el[1] == 'sin.rad'){
          var ans = Math.sin(num); 
          funcOut('User:' + cmd + "<br>[Advanced Math]: Terminal Running Sine of Radian " + num + " = " + ans); 
          //output.innerHTML = text + '<br><br>User:' + cmd + "<br>[Advanced Math]: Terminal Running Sine of Radian " + num + " = " + ans; 
          latest_cmd = cmd; 
        }  
        else if (cmd_el[1] == 'cos.rad'){
          var ans = Math.cos(num); 
          funcOut('User:' + cmd + "<br>[Advanced Math]: Terminal Running Cosine of Radian " + num + " = " + ans); 
          //output.innerHTML = text + '<br><br>User:' + cmd + "<br>[Advanced Math]: Terminal Running Cosine of Radian " + num + " = " + ans; 
          latest_cmd = cmd;       
        }
        else if (cmd_el[1] == 'tan.rad'){
          var ans = Math.tan(num);
          funcOut('User: ' + cmd + "<br>[Advanced Math]: Terminal Running Tangent of Radian " + num + " = " + ans);  
          //output.innerHTML = text + '<br><br>User: ' + cmd + "<br>[Advanced Math]: Terminal Running Tangent of Radian " + num + " = " + ans; 
          latest_cmd = cmd; 
        }
        // Radian trignometry ends - Degree Trignometry Begins
        else if(cmd_el[1] == 'sin.deg'){
          var ans = Math.sin(num * Math.PI / 180);  
          funcOut('User:' + cmd + "<br>[Advanced Math]: Terminal Running Sine of " + num + "° = " + ans);
          //output.innerHTML = text + '<br><br>User:' + cmd + "<br>[Advanced Math]: Terminal Running Sine of " + num + "° = " + ans; 
          latest_cmd = cmd; 
        }
        else if (cmd_el[1] == 'cos.deg'){
          var ans = Math.cos(num * Math.PI / 180); 
          funcOut('User:' + cmd + "<br>[Advanced Math]: Terminal Running Cosine of " + num + "° = " + ans); 
          //output.innerHTML = text + '<br><br>User:' + cmd + "<br>[Advanced Math]: Terminal Running Cosine of " + num + "° = " + ans; 
          latest_cmd = cmd; 
        }
        else if(cmd_el[1] == 'tan.deg'){
          var ans = Math.tan(num * Math.PI / 180); 
          funcOut('User:' + cmd + "<br>[Advanced Math]: Terminal Running Tangent of " + num + "° = " + ans); 
          //output.innerHTML = text + '<br><br>User:' + cmd + "<br>[Advanced Math]: Terminal Running Tangent of " + num + "° = " + ans;  
          latest_cmd = cmd;   
        }else{
          funcOut('[Error]: Type of operation ' + cmd_el[1] + ' was not recognised. Please type "help.type math.adv" for help.');
          //output.innerHTML = text + '<br><br>[Error] Type of operation ' + cmd_el[1] + ' was not recognised. Please type "help.type math.adv" for help.';  
          latest_cmd = cmd;//end of nested -trignometry
        }//end of nest
    }//end of advanced math
    //math random
    else if (cmd_el[0] == 'math.rand.int'){
      //nested security
      //if ((typeof num1 == number)(typeof num2 == number)){
      var num1 = parseFloat(cmd_el[1]); 
      var num2 = parseFloat(cmd_el[2]); 
      var res = Math.floor(Math.random() * num2) + num1; 
      funcOut("[User]: " + cmd + "<br>[Random]: Terminal giving Random integer between " + num1 + ' and ' + num2 + ' : <br>' + res); 
      //output.innerHTML = text + "<br><br>[User]: " + cmd + "<br>[Random]: Terminal giving Random integer between " + num1 + ' and ' + num2 + ' : <br>' + res;  
      latest_cmd = cmd; 
      /*}else{
        output.innerHTML = text + "<br>[Error!] Please enter a number!"
      }*/
    }
    else if(cmd_el[0] == 'choose'){
       if (cmd_el[1] == 'from'){
        c_el = cmd.split("from")
        
       }
       else if (cmd_el[1] == ':'){
        c_el = cmd.split(":")
     

       }
       else{
        funcOut(`[Error]: The correct syntax for this command is "choose {from / :} {option_one option_two option_three ...}<br>Please try again!`);
        //output.innerHTML = text + `<br><br>[Error]: The correct syntax for this command is "choose {from / :} {option_one option_two option_three ...}<br>Please try again!`
        input.value = "choose from"
       }

      c_el2 = c_el[1].split(" ")
      c_el2.splice('',1)
      function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }

      shuffle(c_el2)
      var choose = c_el2[0]
      if (choose == ''){
       shuffle(c_el2) 
      }
      funcOut("User]:" + cmd + "<br>[Random] Chosen object is: " + choose);
      //output.innerHTML = text + "<br><br> [User]:" + cmd + "<br>[Random] Chosen object is: " + choose;
      latest_cmd = cmd; 

    }
    else if (cmd_el[0] == 'math.rand'){
      //nested security
      //if ((typeof num1 == number)(typeof num2 == number)){
      var num1 = parseFloat(cmd_el[1]); 
      var num2 = parseFloat(cmd_el[2]); 
      var res = (Math.random() * num2) + num1;
      funcOut("User: " + cmd + "<br>[Random]:Terminal giving Random integer between " + num1 + ' and ' + num2 + ' : <br>' + res);  
      //output.innerHTML = text + "<br><br>User: " + cmd + "<br>[Random]:Terminal giving Random integer between " + num1 + ' and ' + num2 + ' : <br>' + res;  
      latest_cmd = cmd; 
      /*}else{
        output.innerHTML = text + "<br>[Error!] Please enter a numbers!"
      }*/

    }
    else if (cmd_el[0] == 'diceroll'){
      alert('res')
      if (cmd_el[1] == '1'){
        var res = Math.floor(Math.random() * 6) + 1;
        funcOut("[Random]: Dice Roll for 1 Dice Result: " + res);
        //output.innerHTML = text + "<br><br>[Random]: Dice Roll for 1 Dice Result: " + res;
      }
      else if (cmd_el[1] == '2'){
        var res = Math.floor(Math.random() * 12) + 2;
        funcOut("[Random]: Dice Roll for 1 Dice Result: " + res);
        //output.innerHTML = text + "<br><br>[Random]: Dice Roll for 1 Dice Result: " + res;
      }
    }
    //end of math Random
    //log commands begin
    else if (cmd_el[0] == 'log.display'){
      //nested
      if (cmd_el[1] == ':'){
      var cmd_el_log = cmd.split(":");  
      var log_display = cmd_el_log[1];
      funcOut("[LOG]: " + log_display);  
      //output.innerHTML = text + "<br><br>[LOG]: " + log_display; 
    }else {
      funcOut("[Error]Please make sure you insert a ':' before typing your text. Please ensure there is a gap between the initial command, the ':' and the text you would like to log.");
      //output.innerHTML = text + "<br><br>[Error]Please make sure you insert a ':' before typing your text. Please ensure there is a gap between the initial command, the ':' and the text you would like to log.";
      }
      latest_cmd = cmd;
    }
    else if (cmd_el[0] == 'log.store'){
      //nested
      if (cmd_el[1] == ':'){
      var cmd_el_log = cmd.split(":");  
      var log_store = cmd_el_log[1];//the text to be logged 
      var log_storage = document.getElementById('logs');//the div where the logs are stored
      var log_store_text = document.getElementById('logs').innerHTML;//the text in div where the logs are stored
      log_storage.innerHTML = log_storage.innerHTML + "<br>" + log_store;
      funcOut("[Logger]: The following LOG has been stored:<br> >> " + log_store); 
      //output.innerHTML = text + "<br><br>[Logger]: The following LOG has been stored:<br>" + log_store; 
      }else {
        funcOut("[Error]: Please make sure you insert a ':' before typing your text. Please ensure there is a gap between the initial command, the ':' and the text you would like to log.");
        //output.innerHTML = text + "<br><br>[Error]: Please make sure you insert a ':' before typing your text. Please ensure there is a gap between the initial command, the ':' and the text you would like to log.";  
      } 
      latest_cmd = cmd;
    }
    else if (cmd_el[0] == 'log.store.see'){
      var thetext = document.getElementById('logs').innerHTML
      funcOut('[Logger]: Showing stored logs:<br><br>' + thetext);
      //output.innerHTML = text + '<br>[Logger]: Showing stored logs:<br><br>' + thetext; 
      latest_cmd = cmd; 
    }
    else if (cmd_el[0] == 'log.store.clear'){
      ask = confirm("Are you sure? You willnot be able to recover these logs once they have been deleted!");
      if (ask == true){document.getElementById('logs').innerHTML = ''; funcOut("[Logger]: Logs Store has been cleared.")
      }//else{funcOut("[Logger]: Logs retained.")}
    }
    else if (cmd_el[0] == 'log.store.download'){
      funcOut("[Download]: Sent donwload link.");
      //output.innerHTML = text + "<br><br>[Download]: Sent donwload link.";  
      alert("Please click 'okay' to get the download prompt. This alert() modal is displayed for loading purposes.");  
      //download items
      var numGen3423 = Math.floor(Math.random() * 10000) + 1; 
      var textcontent = document.getElementById("logs").innerHTML;  
      var texttitle = "Terminal Logs" + numGen3423; 
      latest_cmd = cmd; 
      var downloadableLink = document.createElement('a'); 
      downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));  
      downloadableLink.download = texttitle;  
      document.body.appendChild(downloadableLink);  
      downloadableLink.click(); 
      document.body.removeChild(downloadableLink)
    }//log commands end
    //clear command begins
    else if(cmd_el[0] == 'clear'){
      document.getElementById('output').innerHTML = '[Terminal]: Terminal Clear';
      console.log("Terminal output cleared.")  
      latest_cmd = cmd; 
    }//end of clear command, refresh command starts
    else if (cmd_el[0] == 'refresh'){
      var res122 = confirm("Are you sure you would like to refresh this page? You will loose all your stored logs, and text insde the output box. Click 'Okay' to proceed."); 
      latest_cmd = cmd; 
      //nested
      if (res122 == true){
        javascript:history.go();
        funcOut("[Error!]: Unable to run {javascript:history.go()}. Unable to refresh.");  
        //output.innerHTML = text + "<br><br>[Error!]: Unable to run {javascript:history.go()}. Unable to refresh.";  
        latest_cmd = cmd; 
      }else{
        funcOut("[Error!]: Refresh command was canceled...");
        output.innerHTML = text + "<br><br>[Error!]: Refresh command was canceled...";  
        latest_cmd = cmd;//ERROR Bug, does not detect false. please check
      }
    }
    //refresh command ends,time commands
    else if (cmd_el[0] == 'time'){
      var date_time = new Date();   
      var hr = date_time.getHours().toString(); 
      var min = date_time.getMinutes().toString();  
      var sec = date_time.getSeconds().toString();
      funcOut("[Date]The current time is: " + hr + ':' + min);  
      //output.innerHTML = text + "<br><br>[Date]The current time is: " + hr + ':' + min ;//+':' + sec; 
    }
    else if (cmd_el[0] == 'date'){
      var date_time = new Date(); 
      var one = parseInt(1)
      var yr = date_time.getFullYear().toString();  
      var mon = date_time.getMonth() + one; 
      var day = date_time.getDate().toString();
      funcOut("[Date]Today's date is: " + day + '/' + mon  +'/' + yr); 
      //output.innerHTML = text + "<br><br>[Date]Today's date is: " + day + '/' + mon  +'/' + yr; 
    }//end of time commands
    //help command begins
    else if(cmd_el[0] == 'help'){ // format: <u>• - </u> <br>
      output.innerHTML = text + '<br><br>' + helpmenu;
      console.log("Displaying help menu.")  
      latest_cmd = cmd; 
    }//help command is over, list of help.type commands begin
    else if (cmd == 'help.type'){
      output.innerHTML = text + `<br><br> Please specify which help.type menu you would like to see. type "help.type help" for the list of menus.`
    }
    else if (cmd_el[0] == 'help.type'){
      console.log("Displaying specific help menu.")
      if(cmd_el[1] == 'math'){
          output.innerHTML = text + "<br><br><b>Math Syntax:</b><br>You can perform basic mathematic operations using this command, on only 2 numbers.<br>Symbols:</u> '+'(add), '-'(subtract),'*'(multiply),'/'(divide) and '^'(to the power of)<br><u>";  
          latest_cmd = cmd; 
        }
        else if (cmd_el[1] == 'math-val'){
          output.innerHTML = text + `<br><br><b>Math Values:</b><br>
          With this sub-command, you can use special mathematical values in your math commands.<br>
          •π(pi) = (value.pi)<br>
          •e = (valie.e)`;  
          latest_cmd = cmd; 
        }
        else if(cmd_el[1] == 'math.adv'){
          output.innerHTML = text + `<br><br><b>Advanced Math</b>
          With these commands you can execute the following operations:<br>
          •√(square root) Syntax: math.adv root {number}<br>
          •div? (checks if a number is divisible by another number.)
          <br><br>
          <u>Degree Trignometry</u><br>
          •sin.deg (sine of degree) Syntax : math.adv sin.deg {number}<br>
          •cos.deg (cosine of degree) Syntax : math.adv cos.deg {number}<br>
          •tan.deg (tangent of degree) Syntax : math.adv tan.deg {number}<br><br>
          <u>Radian Trignometry</u>
          <br>
          •sin.rad (sine of radian) Syntax : math.adv sin.rad {number}<br>
          •cos.rad (cosine of radian) Syntax : math.adv cos.rad {number}<br>
          •tan.rad (tangent of radian) Syntax : math.adv tan.rad {number}<br> `;  
          latest_cmd = cmd; 
        }
        else if (cmd_el[1] == 'math.rand'){
          output.innerHTML = text + `<br><br><b>Random Number Generation</b><br>
          <u>math.rand</u>
          Generate a random real number between two numbers:<br>
          Syntax : math.rand {minimum number} {maximum number}
          <br>
          <u>math.rand.int</u>
          Generate a random integer beteen two numbers:<br>
          Syntax : math.rand.int {minimum number} {maximum number}
          `;  
          latest_cmd = cmd; 
        }
        else if (cmd_el[1] == 'font'){
          output.innerHTML = text + `<br><br>
          <b>Font Commands</b>
          <u> > font.size</u>
          Used to set the font size of the terminal.<br>
          Commands:<br>
          •font.size set {number} - set the font of your choice.<br>
          •font.size return - return to the default font size of 3.<br><br>
          <u> > font.face</u>
          `
          latest_cmd = cmd;
        }
        else if (cmd_el[1] == 'help'){
          output.innerHTML = text + `<br><br>Help Subcommands available:<br>
          > math - Gives you math command syntax.(help.type math)<br>
          > math-val - Special mathematical values that you can use in math commands.(help.type math-val)<br>
          > math.rand - Syntaxt and subcommands for random number generation.<br>
          > font - Commands and syntaxt to customise terminal font size and face.<br>
          > te - Commands and syntax to operate Terminal Text Editor. [Still in development] <br>
          `;  
          latest_cmd = cmd; 
        }else{
          funcOut("<br>[Error!]Unkown subject for help.type {}. Type 'help.type help' for the list of subjects.")
          //output.innerHTML = text + "<br>[Error!]Unkown subject for help.type {}. Type 'help.type help' for the list of subjects."; 
        }
    }
    else if (cmd_el[0] == 'output.download'){
      var numGen4578 = Math.floor(Math.random() * 10000) + 1; 
      var textcontent = document.getElementById("output").innerHTML;  
      var texttitle = "Terminal Output" + numGen4578;  
      latest_cmd = cmd;
      funcOut(`<br><br>[Download]: Sent download link...`); 
      var downloadableLink = document.createElement('a'); 
      console.log('Output document created.')
      downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));  
      downloadableLink.download = texttitle;
      console.log('output document title and text encoded.')  
      document.body.appendChild(downloadableLink);  
      downloadableLink.click(); 
      document.body.removeChild(downloadableLink);
      funcOut(`<br><br>[Download]: Download has been executed...`);
      console.log('Output download sequence completed.')
    }
    else if (cmd_el[0] == 'close'){
      funcOut("[CLOSE]: Sent confirmation...[confirm()]")
         //output.innerHTML = text + "<br><br>[CLOSE]: Sent confirmation...[confirm()]"; 
      var res = confirm("Are you sure you would like to exit " + terminal_name + '?'); 
      if (res == true){
          window.close()
          output.innerHTML = text + "[Error!]: Unable to run {window.close()}. Please close the tab manually. This error will be patched in the future."; 
          console.warn('Window.close() did not work.')
          latest_cmd = cmd; 
      }else{
        funcOut("[Error!]: Window.close() was canceled!")
        //output.innerHTML = text + "<br><br>[Error]: Window.close() was canceled!"; 
        latest_cmd = cmd;//
        }
    }
    else if (cmd_el[0] == 'font.size'){
      //nested
      if (cmd_el[1] == 'set'){
        var font_input = cmd_el[2];
        funcOut("[Font Size]: Your terminal font has been changed to: " + font_input)
        //output.innerHTML = text + "<br><br>[Font Size]: Your terminal font has been changed to: " + font_input;
        var fontVar = document.getElementById('box_font');  
        fontVar.size = font_input; 
        latest_cmd = cmd; 
        console.log('Font size changed. User did not like the default font size I set for them :(') 
      }
      else if(cmd_el[1] == 'return'){
      funcOut("Font Size]: The font size was returned to normal:  " + '5')  
      //output.innerHTML = text + "<br><br>[Font Size]: The font size was returned to normal:  " + '5'; 
      var fontVar = document.getElementById('box_font');
      fontVar.size = '3';  
      latest_cmd = cmd;
      console.log('Font size changed. User did indeed like the default font size I had set for them :)') 
      }else{
      funcOut(`[Error]: Command attribute was not recognised. Please type "help.type font" for help!`)
      //output.innerHTML = text + `[Error!]: Command attribute was not recognised. Please type "help.type font" for help!`
       atest_cmd = cmd;
      console.error('Could not change font characteristic.') 
      }//end nest
    }//end of font cmd 
    else if (cmd_el[0] == '.dev'){
      latest_cmd = cmd;
      if (cmd_el[1] == 'enable'){
        document.getElementById('data_dev_mode').innerHTML = 'ON';
        console.warn("Enabled developer mode.");
        funcOut('[Terminal_DEV]: Enabled developer mode. Type ".dev help" for list of developer commands. ');
        sett.href = 'theme_lagoon.css';
        document.getElementById('data_theme').innerHTML = 'lagoon';
        funcOut(`[Terminal]: Theme set to Lagoon which is the default theme for developer mode. You may switch back to your prefered theme using the "theme" command.`);
        return;
      }else if (cmd_el[1] == 'disable'){
        document.getElementById('data_dev_mode').innerHTML = 'OFF';
        console.warn('Disabled developer mode.');
        funcOut('[Terminal_DEV]: Disabled developer mode.');
        return;
      }
      if (document.getElementById('data_dev_mode').innerHTML == 'ON'){ //checking if dev mode is enabled
        if (cmd_el[1] == 'logging'){
          if (cmd_el[2] == 'enable'){
            document.getElementById('data_dev_logid').innerHTML = 'T';
            funcOut(`[Terminal_DEV]: Enabled dev logging. Console logs will now be displayed in the terminal.`);
            console.log('Developer logging was enabled.')
          }else if (cmd_el[2] == 'disable'){
            document.getElementById('data_dev_logid').innerHTML = 'F';
            funcOut(`[Terminal_DEV]: Disabled dev logging. Console logs will no longer be displayed in the terminal.`); 
            console.log("Developer logging was disabled.") 
          }else{
            funcOut(`[Terminal_DEV_ERROR]: Unknown argument. Type ".dev help" for command list and syntax.`)
          }
        }else if (cmd_el[1] == 'alert'){
          var cmd_adm = cmd.split(":");
          var msg = cmd_adm[1];
          alert(msg);
          latest_cmd = cmd; 
          console.log('Developer commands executed.') 
        }else if (cmd_el[1] == 'console.log'){
          var cmd_adm = cmd.split(":");
          var msg = cmd_adm[1];
          console.log(msg);
          latest_cmd = cmd;
          console.log('Developer commands executed.')
        }else if (cmd_el[1] == 'console.warn'){
          var cmd_adm = cmd.split(":");
          var msg = cmd_adm[1];
          console.warn(msg);
          latest_cmd = cmd;
          console.log('Developer commands executed.');
        }else if (cmd_el[1] == 'console.error'){
          var cmd_adm = cmd.split(":");
          var msg = cmd_adm[1];
          console.error(msg);
          latest_cmd = cmd;
          console.log('Developer commands executed.');
        }else if (cmd_el[1] == 'F_crash'){
         document.write('Crashed Webpage...<br> Webpage was crashed manually using commands. To continue to use this page, click this button or refresh this page. <br> <button onclick = "javascript:history.go()">Back to Page</button> <br> All your stored logs and command data has been wiped.')
        }else if (cmd_el[1] == 'throw'){
          var cmd_el77 = cmd_el.split(':');
          var msg554 = cmd_el_77[1];
          latest_cmd = cmd;
          console.log('Developer commands executed.');
          throw "msg554";
        }else if (cmd_el[1] == 'help'){
          funcOut(`Displaying developer mode help menu: <br><br> You may disable developer mode by executing the command ".dev disable".<br>
            Syntax: ".dev {command} {required argument (if any)}"
            <br><u>• Logging - </u> Enables browser javascript console messages to be displayed directly in the Terminal.<br> 
            ".dev logging enable" to enable logging.<br>
            ".dev logging disable" to disable logging.<br>
            Please note that these logs are not stored automatically but can be downloaded as a .txt file using the "output.download" command.<br>
            <br><u>• Basic javascript commands - </u> Basic inbuilt javascript commands may be executed from within the Terminal. These include:<br>
            -> console.log()<br>
            -> console.warn()<br>
            -> console.error()<br>
            -> alert<br>
            -> confirm [!Yet to be Added!]<br>
            Syntax is given as ".dev {command} : {message to be displayed} "<br>
            Please note that you need not include the "()" as part of your functions. Example: ".dev console.log : Hello World!"<br><br>
            <u>• Special developer commands - </u> A few special developer commands like the following are supported.<br>
            -> F_crash - Running this command will clear the entire page. All functions will be unloaded and all logs and output messages will be deleted. There is no secondary check or confirmation box.<br>
            -> throw - Causes a catatrophic error within the system displaying the "[Error!!!]: Catastrophic Error" message. You may continue using the Terminal as normal after running this command.
            `)

        }else{
          funcOut(`[Terminal_DEV_ERROR]: Unknown argument. Type ".dev help" for command list and syntax.`)
        }




      }else if (document.getElementById('data_dev_mode').innerHTML == 'OFF'){
        funcOut(`[Terminal_DEV_ERROR]: You must enable developer mode to use .dev commands! Type ".dev enable" to enable developer commands.`)
      }else{
        funcOut(`[Terminal_DEV_ERROR!]: Severe Error - Your command has generated an unexpected variable. You may re-enable developer mode and expect commands to work as usual.`);
        document.getElementById('data_dev_mode').innerHTML = 'OFF';
        console.warn('Disabled developer mode due to severe error.');
      }
    }
    else if (cmd_el[0] == 'errors'){
      output.innerHTML = text + `<br><br>
      You may face many erros while using this terminal. This may be caused du to the following:<br>
      •The commands here have very strict syntax. An extra white-space can give your an error in some commands (while most of our commands are immune to extra spaces.<br>
      •In most of our commands, make sure you have a space between your text / number and the operator (: or +). We use these spaces to detect arguments.<br>
      •Make sure you are familiar with our syntax. We do not use quotes for storing text. If you are unfamiliar with the syntax, look at the help.type menues.<br><br>
      Error Tags:<br>
      •[Error] - Simple errors that are to be expected. Occur during improper syntax from user.<br>
      •[Error!] - Severe errors that not to be expected. Usually due to bugs or browser settings.<br>
      •[Error!!!] -  Catastrophic errors that are deemed impossible. Usually caught by the last line of error management. Usually accompanied by a javascript error message from the catch() function.<br>  `
    }else if(cmd_el[0] == ''){
      funcOut("<br><br>[Error!]Please enter your command!")
      //output.innerHTML = text + "<br><br>[Error!]Please enter your command!";
      console.warn("No command was entered ( " + cmd + ')'); 
      latest_cmd = cmd; 
    }else{
    output.innerHTML = text + '<br><br>[Error!]Your command (cmd = ' + cmd + ') was not recognised. Type "help" for the list of commands. Please make sure you give a space between every single argument in your commands.<br>Facing frequent errors? Type "errors" and resolve your problems!'; 
    console.warn("Did not recognise command: " + cmd);
    latest_cmd = cmd; 
    }
    scrollToBottom(output);
    document.getElementById('characters_count').innerHTML = "Sent!";
}catch(err){
  console.error("Catastrophic Error generated: " + err)
  funcOut(`[Error!!!]: Catastrophic Error - Your command has generated an error the system was not designed to handle! The terminal may not work properly anymore. <br> Function [catch(err)] returns: ` + err)
}  
}//I've fucked up in brackets. need to fix