
let authenticated = true;
module.exports = {


  authenticated() {
    return authenticated;
  },
  logIn() {
    authenticated = true;
  },
  logOut() {
    authenticated = false;
  },
  signUp() {
    authenticated = true;
  }

}


