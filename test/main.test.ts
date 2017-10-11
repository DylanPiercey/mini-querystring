import * as assert from "assert";
import { parse, stringify } from "../dist";

describe("Mini-Querystring", () => {
  describe("parse", () => {
    it("shallow", () => {
      assert.deepEqual(parse("a=1&b=2&c&d[e]=1"), {
        "a": "1",
        "b": "2",
        "c": "",
        "d[e]": "1",
      });
    });

    it("deep", () => {
      assert.deepEqual(parse("a=1&b=2&c&d[e]=1", true), {
        a: "1",
        b: "2",
        c: "",
        d: {
          e: "1",
        },
      });
    });
  });

  describe("stringify", () => {
    it("shallow", () => {
      assert.deepEqual("a=1&b=2&c=&d=%5Bobject%20Object%5D", stringify({
        a: "1",
        b: "2",
        c: "",
        d: {
          e: "1",
        },
      }));
    });

    it("deep", () => {
      assert.deepEqual("a=1&b=2&c=&d%5Be%5D=1", stringify({
        a: "1",
        b: "2",
        c: "",
        d: {
          e: "1",
        },
      }, true));
    });
  });
});
