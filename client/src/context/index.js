import { proxy } from "valtio"; //Allows us to establish one or more contexts inside the different states of out application

const state = proxy({
  userOnHomepage: true, //Is the user currently on the homepage?
  userLoggedIn: false,
  userViewingService: {
    state: false,
    service: null,
  },
});

export default state;
