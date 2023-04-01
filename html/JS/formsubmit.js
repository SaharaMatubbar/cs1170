function saveMessage(myName) {
  notifyCount.style.display = "block";
  localStorage.setItem(
    "isNotify",
    JSON.stringify(parseInt(localStorage.getItem("isNotify") || 0) + 1)
  );
  const showNotifyCount = JSON.parse(localStorage.getItem("isNotify") || 0);
  document.getElementById("notifyCount").textContent = showNotifyCount;

  localStorage.setItem(
    "notificationLastID",
    JSON.stringify(
      parseInt(localStorage.getItem("notificationLastID") || 0) + 1
    )
  );

  const notificationID = JSON.parse(localStorage.getItem("notificationLastID"));
  const existingNotify =
    JSON.parse(localStorage.getItem("notifications")) || [];
  const emojis = ["📩", "📬", "📫"];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const notifications = {
    id: notificationID,
    message: randomEmoji + " Hey, " + myName + ". Message sent!! ",
    read: false,
  };
  existingNotify.push(notifications);
  localStorage.setItem("notifications", JSON.stringify(existingNotify));
}

// Get the form element
const form = document.querySelector("form");
// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();
  // Get the form data and convert it to an object
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  // Save the data to local storage

  localStorage.setItem("formData", JSON.stringify(data));
  form.reset();
  saveMessage(data.name);
  alert("Thank You! Our support team will get back to you.");
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
