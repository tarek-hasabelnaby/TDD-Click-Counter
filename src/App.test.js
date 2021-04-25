import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("render without error", () => {
  // generate wrapper with shallow fn.
  const wrapper = shallow(<App />);
  const appRootComponent = wrapper.find("[data-test='component-app']");
  // make an assertions
  expect(appRootComponent.length).toBe(1);
});

test("renders increment button", () => {});
test("renders counter display", () => {});
test("counter display starts at 0", () => {});
// we test the counter behaviour
test("clicking button incrments counter display", () => {});
