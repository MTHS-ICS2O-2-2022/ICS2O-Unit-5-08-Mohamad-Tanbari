// Copyright (c) 2023 Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: May 2023
// This file contains the JS functions for index.html

'use strict'
/*
 * This function does multiploication using an old and simple method
 */

function calculate() {
  // Define variable
  let answer = 0

  // Get user unput
  let numberA = parseFloat(document.getElementById("numberA").value)
  let numberB = parseFloat(document.getElementById("numberB").value)

  console.log(numberA)
  // Perform subtraction in a while loop
  while (numberA >= numberB) {
    // Subtract the number
    numberA -= numberB
    // Add the amount of times the number can be subtracted (for a final divison answer)
    answer++
  }

  // Output answer
  document.getElementById("answer").innerHTML = "The answer is " + answer + " R" + numberA
}
