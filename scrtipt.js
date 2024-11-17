document.querySelector(".view-button").addEventListener("click", function () {
  let name = prompt("What is your name?");
  if (name.length) {
    alert(
      "Thanks, " +
        name +
        " , we will be in touch. Meanwhile, there are a lot of recipes for Salads!"
    );
  } else {
    alert("No name, no Greek Yogurt for you!");
  }
});
