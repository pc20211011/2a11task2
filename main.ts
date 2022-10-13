input.onButtonPressed(Button.A, function () {
    while (false) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.showLeds(`
        . . . . .
        . # . # #
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . # . # #
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . # . # #
        . # # # #
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . # . # #
        . # # # #
        . . # # .
        . . # . .
        `)
    basic.showLeds(`
        # . . # #
        # # # # #
        . # # # .
        . . # # .
        . . # . .
        `)
    basic.showIcon(IconNames.Heart)
})
