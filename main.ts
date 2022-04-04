input.onButtonPressed(Button.A, function () {
    basic.showNumber(doorclosetime - dooropentime)
})
radio.onReceivedString(function (receivedString) {
    door = receivedString
    if (door == "open") {
        opencount += 1
        dooropentime = input.runningTime()
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.No)
    } else {
        doorclosetime = input.runningTime()
        music.stopAllSounds()
        basic.showIcon(IconNames.Yes)
    }
})
let door = ""
let doorclosetime = 0
let dooropentime = 0
radio.setGroup(1)
let opencount = 0
dooropentime = 0
doorclosetime = 0
basic.forever(function () {
	
})
