import Enzyme, { configure, shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a shallowWrapper for the app component
 * @function setup
 * @returns {shallowWrapper}
 */

const setup = () => shallow(<App />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("render without error", () => {
  // generate wrapper with shallow fn.
  const wrapper = setup();
  const appRootComponent = findByTestAttr(wrapper, "component-app");
  // make an assertions
  expect(appRootComponent.length).toBe(1);
});

describe("Increment", () => {
  test("renders increment button", () => {
    const wrapper = setup();
    const incrementButton = findByTestAttr(wrapper, "inc-btn");
    // make an assertions
    expect(incrementButton.length).toBe(1);
  });
  test("renders counter display", () => {
    const wrapper = setup();
    const displayCounter = findByTestAttr(wrapper, "display-counter");
    expect(displayCounter.length).toBe(1);
  });
  test("counter display starts at 0", () => {
    const wrapper = setup();
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
  });
  // we test the counter behaviour
  test("clicking button incrments counter display", () => {
    const wrapper = setup();
    // find the button
    const incrementButton = findByTestAttr(wrapper, "inc-btn");
    // click the button --> using simulate(event ...)
    incrementButton.simulate("click");

    // find the display, and test that number has been incremented
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("1");
  });
});

describe("decrement button", () => {
  test("render decrement button", () => {
    const wrapper = setup();
    const decrementButton = findByTestAttr(wrapper, "dec-btn");
    expect(decrementButton.length).toBe(1);
  });

  test("clicking decrement button decrements counter display when state is greater than 0", () => {
    const wrapper = setup();
    const incrementButton = findByTestAttr(wrapper, "inc-btn");
    incrementButton.simulate("click");
    const decrementCounter = findByTestAttr(wrapper, "dec-btn");
    decrementCounter.simulate("click");
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
  });
});

describe("error when counter goes below 0", () => {
  test("error does not show when not needed", () => {
    const wrapper = setup();
    const errorDiv = findByTestAttr(wrapper, "err-msg");
    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(true);
  });
});

describe("counter is 0 and decement is clicked", () => {
  // using describe here so I can use "before ech" for shared setup

  // scoping wrapper to the describe
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
    // find the buuton
    const decrementButton = findByTestAttr(wrapper, "dec-btn");
    decrementButton.simulate("click");
  });

  test("error shows", () => {
    // check the class for the error
    const errorDiv = findByTestAttr(wrapper, "err-msg");
    // using enzyme's ".hasClass()" method
    // http://airbnb.io/enzyme/docs/api/ShallowWrapper/hasClass.html
    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(false);
  });

  test("counter still displays 0", () => {
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
  });

  test("clicking increment clears the error", () => {
    // find and click the increment button
    const incButton = findByTestAttr(wrapper, "inc-btn");
    incButton.simulate("click");

    // check the class of the error message
    const errorDiv = findByTestAttr(wrapper, "err-msg");
    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(true);
  });
});
