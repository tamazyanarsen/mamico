const videoElement = document.getElementById('video') as HTMLVideoElement
const startButton = document.getElementById('button-start')

startButton?.addEventListener('click', start)

document.addEventListener('load', _e => console.log('on load'))

function start() {
    navigator.mediaDevices.getDisplayMedia({ video: true, audio: false }).then(e => {
        if (videoElement) {
            videoElement.srcObject = e;
            videoElement.play();
            const src = videoElement.srcObject;
            setTimeout(() => {
                console.log(src.getTracks())
                console.log(src.getVideoTracks())
            }, 3000);
        }
    })
}
