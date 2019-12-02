"use strict";

const expect = require("chai").expect;
const createCaptcha = require("../index");

describe("#createCaptcha", function() {
  it("param value should work", function() {
    const randomString = Math.random()
      .toString(36)
      .substring(2, 15);
    const result = createCaptcha({ value: randomString });
    expect(result).to.have.property("value", randomString);
  });

  it("param length should work", function() {
    const length = Math.floor(Math.random() * 9 + 1);
    const result = createCaptcha({ length: length });
    expect(result.value).to.have.lengthOf(length);
  });
  it("param length should work", function() {
    const testParams = [
      { char: "a", length: 4 },
      { char: "b", length: 8 },
      { char: "5", length: 3 },
      { char: "s", length: 43 },
    ];
    for (let i = 0; i < testParams.length; i++) {
      const param = testParams[i];
      const {char, length} = param;
      const result = createCaptcha({ charset: [char], length: length });
      const expectedValue = Array(length+1).join(char);
      expect(result).to.have.property("value", expectedValue);
    }
  });
});
