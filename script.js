const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt user to select a media stream, pass to videoElement, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
  } catch (error) {}
}

// On load
selectMediaStream();
