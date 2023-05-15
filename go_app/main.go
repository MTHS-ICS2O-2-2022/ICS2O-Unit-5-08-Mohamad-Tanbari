// Made by Mohamad
// Made on May 2023
//
// This program does simple division

package main

import (
	"fmt"
)

func main() {
	// Declare variables
	var numberA int
	var numberB int
	var answer int

	// Ask user for input
	fmt.Println("Enter first number: ")
	fmt.Scanln(&numberA)
	fmt.Println("Enter second number: ")
	fmt.Scanln(&numberB)

	// Divide using subraction
	for numberA >= numberB {
		numberA -= numberB
		answer++
	}

	// Output answer
	fmt.Println("The answer is", answer, " R", numberA)

	fmt.Println("Done.")
}
