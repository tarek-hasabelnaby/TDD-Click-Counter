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

test("renders increment button", () => {});
test("renders counter display", () => {});
test("counter display starts at 0", () => {});
// we test the counter behaviour
test("clicking button incrments counter display", () => {});
