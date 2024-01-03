const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt user to select a media stream, pass to videoElement, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("whooops, something went wrong...", error);
  }
}

// On load
selectMediaStream();
