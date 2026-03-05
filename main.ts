input.onButtonPressed(Button.A, function () {
    message_id = message_id + 1
    if (message_id == messages.length) {
        message_id = 0
    }
    messages[message_id].showImage(0)
})
input.onButtonPressed(Button.AB, function () {
    playMelody()
})
function playMelody () {
    music.play(music.stringPlayable("C E C E G - G - ", 170), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C E C E G - G - ", 170), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 B A G F - A - ", 170), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G F E D C - C - ", 170), music.PlaybackMode.UntilDone)
}
input.onButtonPressed(Button.B, function () {
    radio.sendValue("message", message_id)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showString("Gesendet:")
    messages[message_id].showImage(0)
})
radio.onReceivedValue(function (name, value) {
    if (name == "message") {
        message_id = value
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showString("Nachricht gekommen:")
        messages[message_id].showImage(0)
    }
})
let messages: Image[] = []
let message_id = 0
radio.setGroup(1)
basic.showString("Hello Mertens!")
message_id = 0
messages = [
images.iconImage(IconNames.Duck),
images.iconImage(IconNames.Rollerskate),
images.iconImage(IconNames.Giraffe),
images.iconImage(IconNames.Ghost),
images.iconImage(IconNames.Tortoise),
images.iconImage(IconNames.Snake)
]
