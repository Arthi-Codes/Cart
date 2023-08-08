function showFields(option) {
  var fields1 = document.getElementById("report1"); //In this code getElementById is used to perform specified DOM using ID's mentioned for each fields
  var fields2 = document.getElementById("report2");
  var fields3 = document.getElementById("report3");
  const box1 = document.getElementById("box1");
  const box2 = document.getElementById("box2");
  const box3 = document.getElementById("box3");

  if (option === "Pair1" || option === "box1") {
    fields1.style.display = "block"; //The style property is called to display and block the property of specified elements
    fields2.style.display = "none";
    fields3.style.display = "none";
    box1.classList.add("clicked"); //Adding and Removing Classes using classlist property
    box2.classList.remove("clicked");
    box3.classList.remove("clicked");
    document.getElementById("Pair1").checked = true; //This is used to update the checked status of radiobutton using checked = true and false
  } else if (option === "Pair2" || option === "box2") {
    fields1.style.display = "none";
    fields2.style.display = "block";
    fields3.style.display = "none";
    box1.classList.remove("clicked");
    box2.classList.add("clicked");
    box3.classList.remove("clicked");
    document.getElementById("Pair2").checked = true;
  } else if (option === "Pair3" || option === "box3") {
    fields1.style.display = "none";
    fields2.style.display = "none";
    fields3.style.display = "block";
    box1.classList.remove("clicked");
    box2.classList.remove("clicked");
    box3.classList.add("clicked");
    document.getElementById("Pair3").checked = true;
  }
}

//Adding Event Listener using vanilla js
const button = document.getElementById("myButton");

button.addEventListener("click", function () {
  console.log("Button clicked!");
});
