// Created by: Zaida Hammel
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict";

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-02-HTML/sw.js", {
    scope: "/ICS2O-Unit5-02-HTML/",
  });
}

/**
 * This function determines if an integer is negative or positive.
 */
function myButtonClicked() {
  const userInteger = parseInt(document.getElementById("integer").value);
  if (userInteger > -1) {
    document.getElementById("answer").innerHTML =
      "The integer you input is positive.";
  } else {
    document.getElementById("answer").innerHTML =
      "The integer you input is a negative.";
  }
}
