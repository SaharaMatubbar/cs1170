// Close the splash screen when the close button is clicked
const splash = document.getElementById("close-button");
if (splash) {
  splash.addEventListener("click", function () {
    document.getElementById("splash-screen").style.display = "none";
  });
}

const showNotifyCount = JSON.parse(localStorage.getItem("isNotify") || 0);
if (showNotifyCount == 0) {
  notifyCount.style.display = "none";
} else {
  notifyCount.style.display = "block";
}
document.getElementById("notifyCount").textContent = showNotifyCount;

// Modal panel - Show notification.
const allNotification = document.getElementById("allNotification");

const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modal-backdrop");
openModalButton.addEventListener("click", function () {
  notifyCount.style.display = "none";
  modal.classList.add("active");
  modalBackdrop.classList.add("active");

  localStorage.setItem(
    "isNotify",
    JSON.stringify(parseInt(localStorage.getItem("isNotify") || 0) * 0)
  );

  const getnotifications =
    JSON.parse(localStorage.getItem("notifications")) || [];
  const tempNotify = [];
  allNotification.innerHTML = "Your Unread Notifications";
  getnotifications.forEach((notification, index) => {
    const newParagraph = document.createElement("p");
    console.log(notification.read);
    if (notification.read == false) {
      const dynamicContent = document.createElement("li");
      dynamicContent.textContent = notification.message;
      allNotification.appendChild(dynamicContent);
    } else {
      if (index === getnotifications.length - 1) {
        allNotification.innerHTML = "";
        const dynamicContent = document.createElement("p");
        dynamicContent.textContent = "No New Notifications";
        allNotification.appendChild(dynamicContent);
      }
    }

    const updateNotifications = {
      id: notification.id,
      message: notification.message,
      read: true,
    };

    tempNotify.push(updateNotifications);
  });
  localStorage.setItem("notifications", JSON.stringify(tempNotify));
});
closeModalButton.addEventListener("click", function () {
  modal.classList.remove("active");
  modalBackdrop.classList.remove("active");
});
