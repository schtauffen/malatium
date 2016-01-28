import {
  isArray,
  isFunction,
  isObject,
  isComponent
} from "../index"
const assert = require("assert")

describe("Malatium.js", () => {

  describe("helper functions", () => {

    describe("isArray", () => {
      it("should return true when argument is an array", () => {
        assert.equal(true, isArray([1,2,3]))
        assert.equal(true, isArray(new Array("a", "b", "c")))
      })

      it("should return false when argument is not an array", () => {
        assert.equal(false, isArray({a: 1, b:2}))
        assert.equal(false, isArray(123))
        assert.equal(false, isArray("abc"))
        assert.equal(false, isArray(()=>{}))
        assert.equal(false, isArray(true))
      })
    })

    describe("isFunction", function () {
      it("should return true when argument is a function", () => {
        assert.equal(true, isFunction(()=>{}))
        assert.equal(true, isFunction(new Function()))
        assert.equal(true, isFunction(isFunction))
      })

      it("should return false when argument is not a function", () => {
        assert.equal(false, isFunction({a: 1, b:2}))
        assert.equal(false, isFunction([1,2,3]))
        assert.equal(false, isFunction(123))
        assert.equal(false, isFunction(true))
        assert.equal(false, isFunction("abc"))
        assert.equal(false, isFunction(null))
        assert.equal(false, isFunction(undefined))
      })
    })

    describe("isObject", () => {
      it("should return true when argument is an object", () => {
        assert.equal(true, isObject({a: 1, b: 2}))
        assert.equal(true, isObject([1,2,3]))
        assert.equal(true, isObject(()=>{}))
      })

      it("should return false when argument is not an object", () => {
        assert.equal(false, isObject(null))
        assert.equal(false, isObject(undefined))
        assert.equal(false, isObject("abc"))
        assert.equal(false, isObject(123))
      })
    })

    describe("isComponent", () => {
      class Component {
        view () {
          return "yolo"
        }
      }

      it("should return true when argument is a component", () => {
        assert.equal(true, isComponent({view:()=>{}}))
        assert.equal(true, isComponent(new Component))
      })

      it("should return false when argument is not a component", () => {
        assert.equal(false, isComponent(Component))
        assert.equal(false, isComponent({}))
        assert.equal(false, isComponent([]))
        assert.equal(false, isComponent(()=>{}))
        assert.equal(false, isComponent("abc"))
        assert.equal(false, isComponent(123))
        assert.equal(false, isComponent(null))
        assert.equal(false, isComponent(undefined))
      })
    })
  })
})
