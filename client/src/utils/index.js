export const setFullscreenImage = (e) => {
  if (!document.fullscreenElement) {
    if (e.currentTarget.requestFullscreen) {
      e.currentTarget.requestFullscreen();
    } else if (e.currentTarget.mozRequestFullScreen) {
      /* Firefox */
      e.currentTarget.mozRequestFullScreen();
    } else if (e.currentTarget.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      e.currentTarget.webkitRequestFullscreen();
    } else if (e.currentTarget.msRequestFullscreen) {
      /* IE/Edge */
      e.currentTarget.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari & Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }
  }
};
