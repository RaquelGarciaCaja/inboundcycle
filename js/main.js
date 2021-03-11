"use strict";

const sendButton = document.querySelector(".js-button");
const popup = document.querySelector(".js-popup");
const closeBtn = document.querySelector(".js-close");

// functions

// to press btn
function sendInfo() {
  popup.style.display = "flex";
}

// close window
function closeWindow() {
  popup.style.display = "none";
}

// event btn
sendButton.addEventListener("click", sendInfo);
closeBtn.addEventListener("click", closeWindow);
