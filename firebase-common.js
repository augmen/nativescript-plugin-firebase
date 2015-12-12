var firebase = {};

firebase.loginType = {
  ANONYMOUS: "anonymous",
  PASSWORD: "password"
};

firebase.instance = null;

// this implementation is actually the same for both platforms, woohoo :)
firebase.logout = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      instance.unauth();
      resolve();
    } catch (ex) {
      console.log("Error in firebase.logout: " + ex);
      reject(ex);
    }
  });
};

module.exports = firebase;