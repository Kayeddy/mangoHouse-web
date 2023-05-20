import { proxy } from "valtio";
import Cookies from "js-cookie"; //Allows us to establish one or more contexts inside the different states of out application

const state = proxy({
  userOnHomepage: true, //Is the user currently on the homepage?
  userLoggedIn: false,
  cookiesAccepted: false,
  acceptCookies: function () {
    console.log("Accept Cookies function was called");
    state.cookiesAccepted = true;
    Cookies.set("cookiesAccepted", "true", { expires: 365 });
  },
  userViewingService: {
    state: false,
    service: null,
  },
});

export default state;
