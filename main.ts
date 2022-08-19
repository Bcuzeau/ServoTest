input.onButtonPressed(Button.A, function () {
    Angle += 5
    pins.servoWritePin(AnalogPin.P1, Angle)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 180)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 0)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 180)
})
input.onButtonPressed(Button.B, function () {
    Angle += -5
    pins.servoWritePin(AnalogPin.P1, Angle)
})
let Angle = 0
Angle = 90
pins.servoWritePin(AnalogPin.P1, Angle)
