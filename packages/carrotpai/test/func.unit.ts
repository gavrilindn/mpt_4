import * as chai from "chai";
import {timeToNewYear} from "../index";
import {expect} from "chai";

chai.expect

describe('test func', function (){
    it('test 1', function () {
        expect(timeToNewYear(new Date())).to.be.a('string')
    });
})