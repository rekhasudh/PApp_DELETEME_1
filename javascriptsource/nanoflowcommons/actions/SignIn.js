import { Big } from "big.js";

// This file was generated by Mendix Studio Pro.
// BEGIN EXTRA CODE
// END EXTRA CODE
/**
 * Tries to login using a username and password.
 *
 * Returns an HTTP response status code, for example:
 * - 200 when the login succeeds
 * - 401 when the entered username or password is incorrect
 * - 0 when the network connection is unavailable
 *
 * @param {string} username - This field is required.
 * @param {string} password - This field is required.
 * @param {boolean} useAuthToken - This field is optional.
 * @returns {Promise.<Big>}
 */
async function SignIn(username, password, useAuthToken) {
    // BEGIN USER CODE
    if (!username || !password) {
        return Promise.resolve(new Big(401));
    }
    return new Promise(resolve => {
        const onSuccess = () => resolve(new Big(200));
        const onError = (error) => resolve(new Big(error.status));
        if (typeof useAuthToken === "undefined") {
            mx.login(username, password, onSuccess, onError);
        }
        else {
            mx.login2(username, password, useAuthToken, onSuccess, onError);
        }
    });
    // END USER CODE
}

export { SignIn };
