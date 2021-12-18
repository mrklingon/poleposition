function mkRoad () {
    for (let index = 0; index < 100; index++) {
        road.push(randint(0, 3))
    }
}
input.onButtonPressed(Button.A, function () {
    carx += -1
    if (carx < 0) {
        carx = 0
    }
})
function shoRoad () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index <= 4; index++) {
        line = road[index]
        for (let index2 = 0; index2 <= 4; index2++) {
            for (let index3 = 0; index3 <= line; index3++) {
                led.plotBrightness(index3, index, 128)
            }
        }
    }
    road.push(road.removeAt(0))
    if (led.pointBrightness(carx, cary) > 0) {
        game.removeLife(1)
    } else {
        led.plot(carx, cary)
    }
}
input.onButtonPressed(Button.B, function () {
    carx += 1
    if (carx > 4) {
        carx = 4
    }
})
let line = 0
let cary = 0
let carx = 0
let road: number[] = []
road = []
mkRoad()
carx = 4
cary = 4
game.setLife(5)
basic.forever(function () {
    shoRoad()
    basic.pause(200)
})
