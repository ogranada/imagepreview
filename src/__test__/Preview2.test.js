import React from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Preview2 } from "../components/Preview2";

const dummyFakeEvent = {
  target: {
    files: [
      new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" }),
    ],
  },
}

afterEach(() => {
    cleanup()
  }) // Default on import: runs it after each test.

describe(" Preview2 Tests ", () => {
  let component;
  
  afterEach(cleanup);

  beforeEach(() => {
    component = render(<Preview2 />);
  });

  test("Must have an image", () => {
    expect(component.getByTestId("imageFile")).toBeTruthy();
  });

  test(" Must have an input file ", () => {
    expect(component.getByTestId("inputFile")).toBeTruthy();
  });

  test(" Must distpatch a change event", async () => {
    const input = component.getByTestId("inputFile");
    const image = component.getByTestId("imageFile");
    await act(async () => {
      console.log('----');
    });
    await act(async ()=>{
      fireEvent.change(input, dummyFakeEvent);
    })
    await waitFor(() => {
      expect(image).toHaveAttribute("src", "chucknorris.png");
    });
    console.log('xxxx')
  });
});
