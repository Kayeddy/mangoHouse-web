/**
 * Toggles full-screen mode on the element that triggered the event.
 * It checks for various browser implementations of the full-screen API.
 * If the document is already in full-screen mode, it exits full-screen mode.
 *
 * @param {Event} e - The event object that triggered the full-screen request.
 */
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

/**
 * Constructs a WhatsApp URL for initiating a chat with a pre-filled message.
 * The message includes details for a reservation service request.
 *
 * @param {string} service - The service type for which the reservation is being made.
 * @param {string} username - The name of the user making the reservation.
 * @param {string} userMail - The email address of the user.
 * @param {string} userPhone - The phone number of the user.
 * @param {string} reservationAmount - The number of people included in the reservation.
 * @param {string} selectedDate - The date for which the reservation is made.
 * @returns {string} The fully constructed URL ready to be used to initiate a WhatsApp chat.
 */
export const whatssapConnection = (
  service,
  username,
  userMail,
  userPhone,
  reservationAmount,
  selectedDate
) => {
  let phone = "+573168243757"; // replace with the phone number you want to send a message to
  let message = `Quisiera reservar su servicio de ${service}.\n\nMis datos de contacto son los siguientes:\n\nNombre: ${username}\n\nEmail: ${userMail}\n\nTeléfono: ${userPhone}\n\n# de personas para la reserva: ${reservationAmount}\n\nFecha de reserva: ${selectedDate}`;
  // encode the message
  let encodedMessage = encodeURIComponent(message);

  // create the URL
  let url = `https://wa.me/${phone}?text=${encodedMessage}`;

  return url;
};
