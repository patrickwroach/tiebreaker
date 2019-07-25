import React from "react";
import { shallow, mount } from "enzyme";
import sinon from 'sinon';
import  setHighOrLow  from "./setHighOrLow";


  describe("Set High or Low functon ", () => {
      console.log(setHighOrLow);
      const RandomizerStub = sinon.stub();
      setHighOrLow.__Rewire__('Radomizer', RandomizerStub);
  /*     const setStateSpy = spy(setHighOrLow, 'setState');
      it("should be fire randomizer with 0 and 1 and params", () => {

      });
      it("should call setState with the appropriate value", () => {

      });
 */

    
  });
  
