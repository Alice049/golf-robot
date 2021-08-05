input.onButtonPressed(Button.A, function () {
    if (baserotation == 0) {
        baserotationchange = 20
    } else if (baserotation == 180) {
        baserotationchange = -20
    } else {
    	
    }
    baserotation += baserotationchange
    servos.P0.setAngle(baserotation)
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    servos.P2.setAngle(180)
    basic.pause(1000)
    servos.P2.setAngle(0)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(2000)
    servos.P2.setAngle(140)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    if (armrotation == 0) {
        armrotationchange = 20
    } else if (armrotation == 180) {
        armrotationchange = -20
    } else {
    	
    }
    armrotation += armrotationchange
    servos.P1.setAngle(armrotation)
    basic.pause(100)
})
let armrotationchange = 0
let armrotation = 0
let baserotationchange = 0
let baserotation = 0
baserotation = 80
baserotationchange = 20
armrotation = 80
armrotationchange = -20
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
servos.P0.setAngle(baserotation)
basic.pause(500)
servos.P1.setAngle(armrotation)
basic.pause(500)
servos.P2.setAngle(140)
