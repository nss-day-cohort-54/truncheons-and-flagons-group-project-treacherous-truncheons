//function to export html of audio tag
export const AudioAlert = () => {

    return `<audio id="fanfare"><source src="audio/fanfare.mp3" type="audio/mpeg"></audio>`

}
//function that plays audio when invoked

export const playAudio = () => {
    document.querySelector("#fanfare").play()
}
