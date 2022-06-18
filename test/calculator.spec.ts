// import { describe, test, it } from "mocha";
// import { expect, assert } from "chai"
// import {  } from "jest";
import {add, addPromise} from "../utils/calculator"

describe("calcluator testcases", function(){
    test("Add method", function(){
        // expect(add(2,3)).equal(5);
        expect(add(2,3)).toEqual(5);
    })

    it("Add method testing implemented using promise", async function(){
        const result = await addPromise(4,9);
            // expect(result).to.equal(13);
            expect(result).toEqual(13);
    })

    // test("Add method assert", function(){
    //     assert(add(2,3) === 5, "Sum is not correct")
    // })

    // it("Add method testing implemented using promise assert", async function(){
    //     const result = await addPromise(4,9);
    //         assert(result === 13, "Promise result is not correct")
    //         // expect(result).to.equal(13);
    // })
})












// import { add } from "../utils/calculator";
// import { equal } from "assert";

// //testcase for add method
// const a = 4;
// const b = 3;
// const expected = 7;
// const result = add(a,b);

// equal(result, expected, "Expected value from add method is not correct")