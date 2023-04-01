const likeButton = document.getElementById("likeButton");

function notificationSave(notifyObject) {
  // Save notifications array to localStorage
  localStorage.setItem("notifications", JSON.stringify(notifyObject));
}

likeButton.addEventListener("click", function () {
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
  const emojis = ["😀", "😍", "👍", "🌟", "🎉", "🍕", "🐶", "🌈", "🚀", "🎸"];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const notifications = {
    id: notificationID,
    message: randomEmoji + " You like a new product!! ",
    read: false,
  };
  existingNotify.push(notifications);
  notificationSave(existingNotify);
});
