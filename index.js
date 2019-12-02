"use strict";
/**
 * There is a single object parameter as an input to the function
 * Here is the list of available parameters, all of them optional
 * -- charset {arr} list of characters to generate captcha from
 * -- length {number} length of the captcha
 * -- value {String} value of the captcha
 */

module.exports = p => {
  const params = Object.assign({}, p);
  if (params.charset === undefined) {
    params.charset = "1234567890abcdefghijklmnoprstuvyz".split('');
  }
  if (params.length === undefined) {
    params.length = 8;
  }
  if (params.value === undefined) {
    params.value = "";
    const len = params.charset.length;
    for (let i = 0; i < params.length; i++) {
      params.value += params.charset[Math.floor(Math.random() * len)];
    }
  }

  return {
    value: params.value
  };
};
