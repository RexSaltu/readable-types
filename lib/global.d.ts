import { TestsCallback, AssertsCollection, assertType as _assertType } from "./readable-test-types";

declare global {
  var PASS: PASS;
  type PASS = {
    status: "PASS";
  };

  var FAIL: FAIL;
  type FAIL<T extends String = 'No Message'> = {
    status: "FAIL";
    msg: string;
  };

  function describeType(description: string, cb: () => void): void;
  function testType(description: string, tests: AssertsCollection | TestsCallback): void;

  var assertType: typeof _assertType;
}
