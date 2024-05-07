console.log("Loaded countChars.js")
function countChars(obj) {
  if (document.getElementById('data_theme').innerHTML === 'default'){
    document.getElementById('characters_count').innerHTML = obj.value.length + '/50';
    if (obj.value.length > 50) {
      document.getElementById('characters_count').style.color = 'red';
    }
    if (obj.value.length < 50) {
      document.getElementById('characters_count').style.color = 'lime';
    }
  }else if (document.getElementById('data_theme').innerHTML === 'blood'){
    document.getElementById('characters_count').innerHTML = obj.value.length + '/50';
    if (obj.value.length > 50) {
      document.getElementById('characters_count').style.color = 'orange';
    }
    if (obj.value.length < 50) {
      document.getElementById('characters_count').style.color = 'red';
    }
  }else if (document.getElementById('data_theme').innerHTML === 'classic'){
    document.getElementById('characters_count').innerHTML = obj.value.length + '/50';
    if (obj.value.length > 50) {
      document.getElementById('characters_count').style.color = 'red';
    }
    if (obj.value.length < 50) {
      document.getElementById('characters_count').style.color = 'black';
    }
  }else if (document.getElementById('data_theme').innerHTML === 'lagoon'){
    document.getElementById('characters_count').innerHTML = obj.value.length + '/50';
    if (obj.value.length > 50) {
      document.getElementById('characters_count').style.color = 'purple';
    }
    if (obj.value.length < 50) {
      document.getElementById('characters_count').style.color = 'white';
    }
  }else{
    output.innerHTML = text + `<br><br>[Error!]: Severe Error - Your commands have generated unexpected data values.`
    console.error('Severe Error: countChars() generated unexpected data values.')
  }
}