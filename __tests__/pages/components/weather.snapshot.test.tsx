/**
 * @jest-environment jsdom
 */

import { act, render, fireEvent } from "@testing-library/react";
import PageComponentWeather from "../../../pages/components/weather";

describe("PageComponentWeather", () => {
  test("renders correctly", async () => {
    let component: any;
    await act(async () => {
      component =
        await render(<PageComponentWeather></PageComponentWeather>);
    });
    expect(component.asFragment()).toMatchSnapshot();
  });

  test("clicks the h1 element and updates the state", async () => {
    let component: any;
    await act(async () => {
      component = await render(<PageComponentWeather></PageComponentWeather>);
    });
    fireEvent.click(component.container.querySelector("h1"));

    expect(component.asFragment()).toMatchSnapshot();
  });

});
