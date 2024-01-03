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

button.addEventListener("click", async () => {
  // Disable the button when we click on it
  button.disable = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset the button
  button.disabled = false;
});

// On load
selectMediaStream();
