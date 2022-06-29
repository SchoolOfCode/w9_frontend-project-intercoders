/*
import { render, screen, fireEvent } from "@testing-library/react";
import AnnouncementList from "./AnnouncementList.js";


test("Checking the Announcement cards", () => {
  render(<App />);
  const linkElement = screen.getByText("Room: ");
  expect(linkElement).toBeInTheDocument();
});


//test block
test("AnnouncementList test", () => {
  // render the component on virtual dom
  render(<AnnouncementList />);

  //select the elements you want to interact with
  const roomNumber = screen.getByDisplayValue("Room:");

  //assert the expected result
  expect(roomNumber).toBeInTheDocument();
});
*/

import * as React from "react";
import * as ReactDOM from "react-dom";
import AnnouncementList from "./AnnouncementList.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AnnouncementList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
