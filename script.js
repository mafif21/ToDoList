// parent element
const container = document.querySelector(".container");

//task class
const task = document.querySelector(".task");

//ul class
const ul = document.querySelector(".list");

container.addEventListener("click", function (eve) {
  //input user
  if (eve.target.className == "add") {
    //if input empty
    if (task.value == "") {
      alert("Input your task");
    } else {
      //make new li
      const newLi = document.createElement("li");

      //make new p and include text
      const pLi = document.createElement("p");
      pLi.setAttribute("class", "paragraph");
      const pText = document.createTextNode(task.value);
      pLi.appendChild(pText);

      //make new div right
      const newDiv = document.createElement("div");
      newDiv.setAttribute("class", "right");

      //make new delete button
      const newBtn = document.createElement("button");
      newBtn.setAttribute("type", "button");
      newBtn.setAttribute("class", "delete");
      const textBtn = document.createTextNode("Delete");
      newBtn.appendChild(textBtn);
      newDiv.appendChild(newBtn);

      //input all new element to parent (li)
      newLi.appendChild(pLi);
      newLi.appendChild(newDiv);

      //input to parent element (ul)
      ul.appendChild(newLi);

      //reset input value
      task.value = "";
    }
  }

  if (eve.target.classList.contains("paragraph")) {
    eve.target.classList.toggle("finished");
  }

  if (eve.target.classList.contains("delete")) {
    target = eve.target.parentElement.parentElement;
    target.remove();
  }
});
