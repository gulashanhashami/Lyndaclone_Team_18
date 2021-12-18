// var stack = [];

function languageFunc(stack) {
  // document.querySelector("#language .selected").classList.toggle("active");
  var found = false;
  for (var i = stack.length - 1; i >= 0; i--) {
    if (stack[i] === document.querySelector("#language .options-container")) {
      found = true;
    }
    stack[i].classList.toggle("active");
    stack.pop();
  }
  if (!found) {
    var optionsContainer = document.querySelector(
      "#language .options-container"
    );
    optionsContainer.classList.toggle("active");
    stack.push(document.querySelector("#language .options-container"));
  }
}

function typeFunc(stack) {
  // document.querySelector("#type .selected").classList.toggle("active");
  var found = false;
  for (var i = stack.length - 1; i >= 0; i--) {
    if (stack[i] === document.querySelector("#type .options-container")) {
      found = true;
    }
    stack[i].classList.toggle("active");
    stack.pop();
  }

  if (!found) {
    let optionsContainer = document.querySelector("#type .options-container");
    optionsContainer.classList.toggle("active");
    stack.push(document.querySelector("#type .options-container"));
  }
}

function timeFunc(stack) {
  // document.querySelector("#time .selected").classList.toggle("active");
  var found = false;
  for (var i = stack.length - 1; i >= 0; i--) {
    if (stack[i] === document.querySelector("#time .options-container")) {
      found = true;
    }
    stack[i].classList.toggle("active");
    stack.pop();
  }

  if (!found) {
    let optionsContainer = document.querySelector("#time .options-container");
    optionsContainer.classList.toggle("active");
    stack.push(document.querySelector("#time .options-container"));
  }
}

function levelFunc(stack) {
  // document.querySelector("#level .selected").classList.toggle("active");
  var found = false;
  for (var i = stack.length - 1; i >= 0; i--) {
    if (stack[i] === document.querySelector("#level .options-container")) {
      found = true;
    }
    stack[i].classList.toggle("active");
    stack.pop();
  }

  if (!found) {
    let optionsContainer = document.querySelector("#level .options-container");
    optionsContainer.classList.toggle("active");
    stack.push(document.querySelector("#level .options-container"));
  }
}

function allFunc(stack) {
  // document.querySelector("#all .selected").classList.toggle("active");
  var found = false;
  for (var i = stack.length - 1; i >= 0; i--) {
    if (
      stack[i] === document.querySelector("#all .options-container") ||
      stack[i] === document.querySelector("#all .popup")
    ) {
      found = true;
    }
    stack[i].classList.toggle("active");
    stack.pop();
  }

  if (!found) {
    let popup = document.querySelector("#all .popup");
    popup.classList.toggle("active");
    stack.push(document.querySelector("#all .popup"));
  }
}

let savedData = [];

// Display course...
function display(data, append) {
  data.forEach((item) => {
    if (item.type === "COURSE") {
      let mainDiv = document.createElement("div");
      let imageBox = document.createElement("div");
      imageBox.addEventListener("click", function () {
        courseDetail(item);
      });
      let image = document.createElement("img");
      image.src = item.image;
      imageBox.append(image);

      let matterBox = document.createElement("div");
      let p1 = document.createElement("p");
      p1.textContent = item.type;

      let h2 = document.createElement("h2");
      h2.textContent = item.name;

      let p2 = document.createElement("p");
      p2.textContent = `By: ${item.by} . ${item.year}`;

      let optionBox = document.createElement("div");
      optionBox.setAttribute("class", "optionBox");

      let leftBox = document.createElement("div");
      let span = document.createElement("span");
      span.textContent = `${item.learners} learners . Skill: ${item.skill}`;
      leftBox.append(span);

      let rightBox = document.createElement("div");
      rightBox.setAttribute("class", "wholeSaveBox");

      let saveBox = document.createElement("div");
      saveBox.setAttribute("class", "saveBox");
      let smallBox1 = document.createElement("div");
      let smallBox2 = document.createElement("div");
      let smallBox3 = document.createElement("div");

      let popDiv = document.createElement("div");
      let popP1 = document.createElement("p");
      popP1.textContent = "Add to Collection";

      let popP2 = document.createElement("p");
      popP2.textContent = "Share";

      popDiv.append(popP1, popP2);

      // rightBox.append(popDiv);

      saveBox.addEventListener("click", () => {
        let popDiv = document.createElement("div");
      });

      saveBox.append(smallBox1, smallBox2, smallBox3);

      let saveButton = document.createElement("button");
      saveButton.textContent = "Save";
      saveButton.addEventListener("click", () => {
        savedData.push(item);
        localStorage.setItem("Saved Course", JSON.stringify(savedData));
      });

      rightBox.append(saveBox, saveButton);

      optionBox.append(leftBox, rightBox);

      matterBox.append(p1, h2, p2, optionBox);

      mainDiv.append(imageBox, matterBox);

      let hr = document.createElement("hr");

      var toAppend = append;

      toAppend.append(mainDiv, hr);
    } else if (item.type === "VIDEO") {
      let mainDiv = document.createElement("div");
      let imageBox = document.createElement("div");
      imageBox.addEventListener("click", function () {
        courseDetail(item);
      });
      let image = document.createElement("img");
      image.src = item.image;
      imageBox.append(image);

      let matterBox = document.createElement("div");
      let p1 = document.createElement("p");
      p1.textContent = item.type;

      let h2 = document.createElement("h2");
      h2.textContent = item.name;

      let p2 = document.createElement("p");
      p2.textContent = `${item.year} . From the course: ${item.fromTheCourse}`;

      let optionBox = document.createElement("div");
      optionBox.setAttribute("class", "optionBox");

      let leftBox = document.createElement("div");
      let span = document.createElement("span");
      span.textContent = `${item.learners} learners`;
      leftBox.append(span);

      let rightBox = document.createElement("div");
      rightBox.setAttribute("class", "wholeSaveBox");

      let saveBox = document.createElement("div");
      saveBox.setAttribute("class", "saveBox");
      let smallBox1 = document.createElement("div");
      let smallBox2 = document.createElement("div");
      let smallBox3 = document.createElement("div");
      saveBox.append(smallBox1, smallBox2, smallBox3);

      let saveButton = document.createElement("button");
      saveButton.textContent = "Save";
      saveButton.addEventListener("click", () => {
        savedData.push(item);
        localStorage.setItem("Saved Course", JSON.stringify(savedData));
      });

      rightBox.append(saveBox, saveButton);

      optionBox.append(leftBox, rightBox);

      matterBox.append(p1, h2, p2, optionBox);

      mainDiv.append(imageBox, matterBox);

      let hr = document.createElement("hr");

      var toAppend = append;

      toAppend.append(mainDiv, hr);
    } else if (item.type === "AUDIO") {
      let mainDiv = document.createElement("div");
      let imageBox = document.createElement("div");
      imageBox.addEventListener("click", function () {
        courseDetail(item);
      });
      let image = document.createElement("img");
      image.src = item.image;
      imageBox.append(image);

      let matterBox = document.createElement("div");
      let p1 = document.createElement("p");
      p1.textContent = item.type;

      let h2 = document.createElement("h2");
      h2.textContent = item.name;

      let p2 = document.createElement("p");
      p2.textContent = `${item.year} . From the course: ${item.fromTheCourse}`;

      let optionBox = document.createElement("div");
      optionBox.setAttribute("class", "optionBox");

      let leftBox = document.createElement("div");
      let span = document.createElement("span");
      span.textContent = `${item.learners} learners`;
      leftBox.append(span);

      let rightBox = document.createElement("div");
      rightBox.setAttribute("class", "wholeSaveBox");

      let saveBox = document.createElement("div");
      saveBox.setAttribute("class", "saveBox");
      let smallBox1 = document.createElement("div");
      let smallBox2 = document.createElement("div");
      let smallBox3 = document.createElement("div");
      saveBox.append(smallBox1, smallBox2, smallBox3);

      let saveButton = document.createElement("button");
      saveButton.textContent = "Save";
      saveButton.addEventListener("click", () => {
        savedData.push(item);
        localStorage.setItem("Saved Course", JSON.stringify(savedData));
      });

      rightBox.append(saveBox, saveButton);

      optionBox.append(leftBox, rightBox);

      matterBox.append(p1, h2, p2, optionBox);

      mainDiv.append(imageBox, matterBox);

      let hr = document.createElement("hr");

      var toAppend = append;

      toAppend.append(mainDiv, hr);
    } else if (item.type === "LEARNING PATH") {
      let mainDiv = document.createElement("div");
      let imageBox = document.createElement("div");
      imageBox.addEventListener("click", function () {
        courseDetail(item);
      });
      let image = document.createElement("img");
      image.src = item.image;
      imageBox.append(image);

      let matterBox = document.createElement("div");
      let p1 = document.createElement("p");
      p1.textContent = item.type;

      let h2 = document.createElement("h2");
      h2.textContent = item.name;

      let p2 = document.createElement("p");
      p2.textContent = `${item.year}`;

      let optionBox = document.createElement("div");
      optionBox.setAttribute("class", "optionBox");

      let leftBox = document.createElement("div");
      let span = document.createElement("span");
      span.textContent = `${item.learners} learners . Skill: ${item.skill}`;
      leftBox.append(span);

      let rightBox = document.createElement("div");
      rightBox.setAttribute("class", "wholeSaveBox");

      let saveBox = document.createElement("div");
      saveBox.setAttribute("class", "saveBox");
      let smallBox1 = document.createElement("div");
      let smallBox2 = document.createElement("div");
      let smallBox3 = document.createElement("div");
      saveBox.append(smallBox1, smallBox2, smallBox3);

      let saveButton = document.createElement("button");
      saveButton.textContent = "Save";
      saveButton.addEventListener("click", () => {
        savedData.push(item);
        localStorage.setItem("Saved Course", JSON.stringify(savedData));
      });

      rightBox.append(saveBox, saveButton);

      optionBox.append(leftBox, rightBox);

      matterBox.append(p1, h2, p2, optionBox);

      mainDiv.append(imageBox, matterBox);

      let hr = document.createElement("hr");

      var toAppend = append;

      toAppend.append(mainDiv, hr);
    }
  });
}



function courseDetail(item) {
  localStorage.setItem("coursed", JSON.stringify(item));
  window.location.href = "coursedetail.html";
}

// sorting according to selected languages

function showLanguages(data, stack, consistentData) {
  for (var i = 0; i < stack.length; i++) {
    if (stack[i] === document.querySelector("#language .options-container")) {
      stack.splice(i, 1);
    }
  }

  document.getElementById("displayProducts").innerHTML = null;

  let selected;
  var newData = [];

  var radioboxes = document.querySelectorAll("#language input");
  for (var i = 0; i < radioboxes.length; i++) {
    if (radioboxes[i].checked) {
      selected = radioboxes[i].value;
    }
  }

  data.forEach((item) => {
    if (item.language === selected) {
      newData.push(item);
    }
  });
  document.querySelector("#language .selected").classList.toggle("active");

  let toAppend = document.getElementById("displayProducts");
  display(newData, toAppend);

  document
    .querySelector("#language .options-container")
    .classList.toggle("active");

  document.querySelector("#language .selected").textContent = selected;

  consistentData.push(newData);

  return newData;
}


// closing selected language
function languageClose(stack, consistentData) {
  document.querySelector("#language .selected").textContent = "Language";
  document.querySelector("#language .selected").classList.toggle("active");

  document.getElementById("displayProducts").innerHTML = null;
  for (var i = 0; i < stack.length; i++) {
    if (stack[i] === document.querySelector("#language .options-container")) {
      stack.splice(i, 1);
    }
  }

  var radioboxes = document.querySelectorAll("#language input");
  for (var i = 0; i < radioboxes.length; i++) {
    if (radioboxes[i].checked) {
      radioboxes[i].checked = false;
    }
  }

  document
    .querySelector("#language .options-container")
    .classList.toggle("active");

  consistentData.pop();
  let toAppend = document.getElementById("displayProducts");
  display(consistentData[consistentData.length - 1], toAppend);
}

// sorting according to selected type

function showType(data, stack, consistentData) {
  document.querySelector("#type .selected").classList.toggle("active");

  for (var i = 0; i < stack.length; i++) {
    if (stack[i] === document.querySelector("#type .options-container")) {
      stack.splice(i, 1);
    }
  }

  document.getElementById("displayProducts").innerHTML = null;

  var checkboxes = document.querySelectorAll("#type input");
  var selectedarr = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedarr.push(checkboxes[i].value);
    }
  }

  var newData = [];

  for (var i = 0; i < selectedarr.length; i++) {
    data.forEach((item) => {
      if (selectedarr[i] === item.type) {
        newData.push(item);
      }
    });
  }

  let toAppend = document.getElementById("displayProducts");
  display(newData, toAppend);
  document.querySelector(
    "#type .selected"
  ).textContent = `Type(${newData.length})`;

  document.querySelector("#type .options-container").classList.toggle("active");
  consistentData.push(newData);
  return newData;
}

// closes type option 

function typeClose(stack, consistentData) {
  document.querySelector("#type .selected").classList.toggle("active");

  for (var i = 0; i < stack.length; i++) {
    if (stack[i] === document.querySelector("#type .options-container")) {
      stack.splice(i, 1);
    }
  }

  var checkboxes = document.querySelectorAll("#type input");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkboxes[i].checked = false;
    }
  }

  document.querySelector("#type .selected").textContent = `Type`;

  document.querySelector("#type .options-container").classList.toggle("active");
  consistentData.pop();
  let toAppend = document.getElementById("displayProducts");
  display(consistentData[consistentData.length - 1], toAppend);
}


// sorting according to selected time period
function showTime(data, stack, consistentData) {
  document.querySelector("#time .selected").classList.toggle("active");

  for (var i = 0; i < stack.length; i++) {
    if (stack[i] === document.querySelector("#time .options-container")) {
      stack.splice(i, 1);
    }
  }

  document.getElementById("displayProducts").innerHTML = null;

  var selected = [];
  var newData = [];
  let checkboxes = document.querySelectorAll("#time input");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selected.push(checkboxes[i].value);
    }
  }

  for (var i = 0; i < selected.length; i++) {
    let value = Number(selected[i]) - 1;
    console.log(value);
    if (value > 10800) {
      data.forEach((item) => {
        if (Number(item.duration) > 10800) {
          newData.push(item);
        }
      });
    } else if (value < 10800 && value >= 7200) {
      data.forEach((item) => {
        if (Number(item.duration) >= 7200 && Number(item.duration) < 10800) {
          newData.push(item);
        }
      });
    } else if (value < 7200 && value >= 3600) {
      data.forEach((item) => {
        if (Number(item.duration) >= 3600 && Number(item.duration) < 7200) {
          newData.push(item);
        }
      });
    } else if (value < 3600 && value >= 1800) {
      data.forEach((item) => {
        if (Number(item.duration) >= 1800 && Number(item.duration) < 3600) {
          newData.push(item);
        }
      });
    } else if (value < 1800 && value >= 600) {
      console.log("yes");
      data.forEach((item) => {
        if (Number(item.duration) >= 600 && Number(item.duration) < 1800) {
          newData.push(item);
        }
      });
    } else if (value < 600) {
      data.forEach((item) => {
        if (Number(item.duration) < 600 && Number(item.duration) >= 0) {
          newData.push(item);
        }
      });
    }
  }

  let toAppend = document.getElementById("displayProducts");
  display(newData, toAppend);

  document.querySelector("#time .options-container").classList.toggle("active");

  if (newData.length === 0) {
    var mainDiv = document.createElement("div");
    var img = document.createElement("img");
    img.src =
      "https://cdn.dribbble.com/users/8106/screenshots/15480894/media/1af3c28dc6bd8d62d351308e5a03133c.png?compress=1&resize=400x300";
    var h1 = document.createElement("h1");
    h1.textContent = "No data found with related time limit";

    mainDiv.append(img, h1);
    document.getElementById("displayProducts").append(mainDiv);
  }

  consistentData.push(newData);
  return newData;
}

// closes time option

function timeClose(stack, consistentData) {
  document.querySelector("#time .selected").classList.toggle("active");

  for (var i = 0; i < stack.length; i++) {
    if (stack[i] === document.querySelector("#time .options-container")) {
      stack.splice(i, 1);
    }
  }

  // document.getElementById("displayProducts").innerHTML = null;

  let checkboxes = document.querySelectorAll("#time input");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkboxes[i].checked = false;
    }
  }

  document.querySelector("#time .options-container").classList.toggle("active");
  consistentData.pop();
  let toAppend = document.getElementById("displayProducts");
  display(consistentData[consistentData.length - 1], toAppend);
}


// sorting according to selected level
function showLevel(data, stack, consistentData) {
  document.querySelector("#level .selected").classList.toggle("active");

  for (var i = 0; i < stack.length; i++) {
    if (stack[i] === document.querySelector("#level .options-container")) {
      stack.splice(i, 1);
    }
  }

  document.getElementById("displayProducts").innerHTML = null;

  let checkboxes = document.querySelectorAll("#level input");
  let selected = [];
  let newData = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selected.push(checkboxes[i].value);
    }
  }

  for (var j = 0; j < selected.length; j++) {
    data.forEach((item) => {
      let arr = item.level;

      for (var k = 0; k < arr.length; k++) {
        if (arr[k] === selected[j]) {
          newData.push(item);
          break;
        }
      }
    });
  }

  let toAppend = document.getElementById("displayProducts");
  display(newData, toAppend);
  console.log(newData);

  document
    .querySelector("#level .options-container")
    .classList.toggle("active");

  consistentData.push(newData);
  return newData;
}

// closes level option

function levelClose(stack, consistentData) {
  document.querySelector("#level .selected").classList.toggle("active");

  for (var i = 0; i < stack.length; i++) {
    if (stack[i] === document.querySelector("#level .options-container")) {
      stack.splice(i, 1);
    }
  }

  let checkboxes = document.querySelectorAll("#level input");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkboxes[i].checked = false;
    }
  }

  document
    .querySelector("#level .options-container")
    .classList.toggle("active");

  consistentData.pop();
  let toAppend = document.getElementById("displayProducts");
  display(consistentData[consistentData.length - 1], toAppend);
}

// sorting according to selected filter

function showAll(data, stack, consistentData) {
  document.querySelector("#all .selected").classList.toggle("active");

  for (var i = 0; i < stack.length; i++) {
    if (stack[i] === document.querySelector("#all .options-container")) {
      stack.splice(i, 1);
    }
  }

  document.getElementById("displayProducts").innerHTML = null;
  let radioboxes = document.querySelectorAll("#all-language input");
  let checkboxes1 = document.querySelectorAll("#all-type input");
  let checkboxes2 = document.querySelectorAll("#all-time input");
  let checkboxes3 = document.querySelectorAll("#all-level input");

  let selected;
  var newData = [];
  let selectedarr = [];

  for (var i = 0; i < radioboxes.length; i++) {
    if (radioboxes[i].checked) {
      selected = radioboxes[i].value;
    }
  }

  data.forEach((item) => {
    if (item.language === selected) {
      newData.push(item);
    }
  });

  for (var i = 0; i < checkboxes1.length; i++) {
    if (checkboxes1[i].checked) {
      selectedarr.push(checkboxes1[i].value);
    }
  }

  for (var i = 0; i < selectedarr.length; i++) {
    data.forEach((item) => {
      if (selectedarr[i] === item.type) {
        newData.push(item);
      }
    });
  }

  selectedarr = [];

  for (var i = 0; i < checkboxes2.length; i++) {
    if (checkboxes2[i].checked) {
      selectedarr.push(checkboxes2[i].value);
    }
  }

  for (var i = 0; i < selectedarr.length; i++) {
    let value = Number(selected[i]) - 1;
    if (value > 10800) {
      data.forEach((item) => {
        if (Number(item.duration) > 10800) {
          newData.push(item);
        }
      });
    } else if (value < 10800 && value >= 7200) {
      data.forEach((item) => {
        if (Number(item.duration) >= 7200 && Number(item.duration) < 10800) {
          newData.push(item);
        }
      });
    } else if (value < 7200 && value >= 3600) {
      data.forEach((item) => {
        if (Number(item.duration) >= 3600 && Number(item.duration) < 7200) {
          newData.push(item);
        }
      });
    } else if (value < 3600 && value >= 1800) {
      data.forEach((item) => {
        if (Number(item.duration) >= 1800 && Number(item.duration) < 3600) {
          newData.push(item);
        }
      });
    } else if (value < 1800 && value >= 600) {
      console.log("yes");
      data.forEach((item) => {
        if (Number(item.duration) >= 600 && Number(item.duration) < 1800) {
          newData.push(item);
        }
      });
    } else if (value < 600) {
      data.forEach((item) => {
        if (Number(item.duration) < 600 && Number(item.duration) >= 0) {
          newData.push(item);
        }
      });
    }
  }

  selectedarr = [];

  for (var i = 0; i < checkboxes3.length; i++) {
    if (checkboxes3[i].checked) {
      selectedarr.push(checkboxes3[i].value);
    }
  }

  for (var j = 0; j < selectedarr.length; j++) {
    data.forEach((item) => {
      let arr = item.level;

      for (var k = 0; k < arr.length; k++) {
        if (arr[k] === selected[j]) {
          newData.push(item);
          break;
        }
      }
    });
  }

  let toAppend = document.getElementById("displayProducts");
  display(newData, toAppend);

  document.querySelector("#all .popup").classList.toggle("active");

  consistentData.push(newData);

  return newData;
}

// removes all selected options in filter

function closeAllFilter(stack) {
  for (var i = 0; i < stack.length; i++) {
    if (stack[i] === document.querySelector("#all .popup")) {
      stack.splice(i, 1);
    }
  }

  let radioboxes = document.querySelectorAll("#all-language input");
  let checkboxes1 = document.querySelectorAll("#all-type input");
  let checkboxes2 = document.querySelectorAll("#all-time input");
  let checkboxes3 = document.querySelectorAll("#all-level input");

  for (var i = 0; i < radioboxes.length; i++) {
    if (radioboxes[i].checked) {
      radioboxes[i].checked = false;
    }
  }

  for (var i = 0; i < checkboxes1.length; i++) {
    if (checkboxes1[i].checked) {
      checkboxes1[i].checked = false;
    }
  }

  for (var i = 0; i < checkboxes2.length; i++) {
    if (checkboxes2[i].checked) {
      checkboxes2[i].checked = false;
    }
  }

  for (var i = 0; i < checkboxes3.length; i++) {
    if (checkboxes3[i].checked) {
      checkboxes3[i].checked = false;
    }
  }

  document.querySelector("#all .popup").classList.toggle("active");
}

// resets all selected options


function allReset(data, stack, consistentData) {
  location.reload();
  document.querySelector("#all .selected").classList.toggle("active");

  for (var i = 0; i < stack.length; i++) {
    if (stack[i] === document.querySelector("#all .options-container")) {
      stack.splice(i, 1);
    }
  }

  let radioboxes = document.querySelectorAll("#all-language input");
  let checkboxes1 = document.querySelectorAll("#all-type input");
  let checkboxes2 = document.querySelectorAll("#all-time input");
  let checkboxes3 = document.querySelectorAll("#all-level input");

  for (var i = 0; i < radioboxes.length; i++) {
    if (radioboxes[i].checked) {
      radioboxes[i].checked = false;
    }
  }

  for (var i = 0; i < checkboxes1.length; i++) {
    if (checkboxes1[i].checked) {
      checkboxes1[i].checked = false;
    }
  }

  for (var i = 0; i < checkboxes2.length; i++) {
    if (checkboxes2[i].checked) {
      checkboxes2[i].checked = false;
    }
  }

  for (var i = 0; i < checkboxes3.length; i++) {
    if (checkboxes3[i].checked) {
      checkboxes3[i].checked = false;
    }
  }
  consistentData = [];
  let toAppend = document.getElementById("displayProducts");
  display(data, toAppend);
}

// resets all selected options

function reset(data, stack, consistentData) {
  location.reload();
  document.querySelector("#language .selected").textContent = "Language";
  document.querySelector("#type .selected").textContent = "Type";
  document.getElementById("displayProducts").innerHTML = null;
  for (var i = 0; i < stack.length; i++) {
    stack.pop();
  }

  var languageradioboxes = document.querySelectorAll("#language input");
  for (var i = 0; i < languageradioboxes.length; i++) {
    if (languageradioboxes[i].checked) {
      languageradioboxes[i].checked = false;
    }
  }
  var typecheckboxes = document.querySelectorAll("#type input");
  for (var i = 0; i < typecheckboxes.length; i++) {
    if (typecheckboxes[i].checked) {
      typecheckboxes[i].checked = false;
    }
  }

  let timecheckboxes = document.querySelectorAll("#time input");
  for (var i = 0; i < timecheckboxes.length; i++) {
    if (timecheckboxes[i].checked) {
      timecheckboxes[i].checked = false;
    }
  }

  let levelcheckboxes = document.querySelectorAll("#level input");
  for (var i = 0; i < levelcheckboxes.length; i++) {
    if (levelcheckboxes[i].checked) {
      levelcheckboxes[i].checked = false;
    }
  }

  let radioboxes = document.querySelectorAll("#all-language input");
  let checkboxes1 = document.querySelectorAll("#all-type input");
  let checkboxes2 = document.querySelectorAll("#all-time input");
  let checkboxes3 = document.querySelectorAll("#all-level input");

  for (var i = 0; i < radioboxes.length; i++) {
    if (radioboxes[i].checked) {
      radioboxes[i].checked = false;
    }
  }

  for (var i = 0; i < checkboxes1.length; i++) {
    if (checkboxes1[i].checked) {
      checkboxes1[i].checked = false;
    }
  }

  for (var i = 0; i < checkboxes2.length; i++) {
    if (checkboxes2[i].checked) {
      checkboxes2[i].checked = false;
    }
  }

  for (var i = 0; i < checkboxes3.length; i++) {
    if (checkboxes3[i].checked) {
      checkboxes3[i].checked = false;
    }
  }

  let toAppend = document.getElementById("displayProducts");
  consistentData = [];
  display(data, toAppend);
}

function openSortOptions() {
  document.getElementById("sortOptions").classList.toggle("active");
}

function viewcount(data) {
  document.getElementById("displayProducts").innerHTML = null;
  var selected = document.getElementById("viewCount");
  var value;
  if (selected.checked) {
    value = selected.value;
  }
  var newData = data.sort(function (a, b) {
    a = a.totalLearners;
    b = b.totalLearners;
    return b - a;
  });
  console.log(newData);
  let toAppend = document.getElementById("displayProducts");
  display(newData, toAppend);
  document.getElementById("sortOptions").classList.toggle("active");
}
export {
  // stack,
  languageFunc,
  typeFunc,
  timeFunc,
  levelFunc,
  allFunc,
  display,
  showLanguages,
  languageClose,
  showTime,
  timeClose,
  showLevel,
  levelClose,
  showAll,
  closeAllFilter,
  allReset,
  reset,
  showType,
  typeClose,
  openSortOptions,
  viewcount,
};
