/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ashlyn
 * Created on: Feb 2026
 * This program will show the current temperature
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    let temp = input.temperature()
    basic.showString("The temperature is:" + (temp) + "C")
})
