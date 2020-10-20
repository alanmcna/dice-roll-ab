let dice = 0
basic.showString("Hey Leif!")
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.clearScreen()
        dice = 0
        for (let index = 0; index <= 7; index++) {
            dice = randint(1, 6)
            basic.showNumber(dice)
        }
        for (let index = 0; index <= 4; index++) {
            basic.clearScreen()
            basic.pause(100)
            basic.showNumber(dice)
        }
    }
})
