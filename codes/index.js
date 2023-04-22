document.getElementById("open").onclick = function() {
    document.getElementById("dropdown_ctn").style.right = "0";
}

document.getElementById("close").onclick = function() {
    document.getElementById("dropdown_ctn").style.right = "-100%";
}

$(function() {
    $("#navbar").load("navbar.html");
  });
  
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('name').textContent = data.name;
    document.getElementById('age').textContent = data.age;
    document.getElementById('email').textContent = data.email;
  })
  .catch(error => console.error(error));


function openCity(evt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
    