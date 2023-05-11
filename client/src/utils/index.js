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

export const whatssapConnection = (
  service,
  username,
  userMail,
  userPhone,
  reservationAmount,
  selectedDate
) => {
  let phone = "+573168243757"; // replace with the phone number you want to send a message to
  let message = `Quisiera reservar su servicio de ${service}.\n\nMis datos de contacto son los siguientes:\n\nNombre: ${username}\n\nEmail: ${userMail}\n\nTeléfono: ${userPhone}\n\n# de personas para la reserva: ${reservationAmount}\n\nFecha de reserva: ${selectedDate}`; // replace with the custom message you want to send
  // encode the message
  let encodedMessage = encodeURIComponent(message);

  // create the URL
  let url = `https://wa.me/${phone}?text=${encodedMessage}`;

  console.log(
    service,
    username,
    userMail,
    userPhone,
    reservationAmount,
    selectedDate
  );
  return url;
};
