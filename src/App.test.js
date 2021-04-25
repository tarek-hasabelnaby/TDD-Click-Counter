import Enzyme, { shallow } from "enzyme";
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
