import { render, screen } from '@testing-library/react';
import { test, expect } from "@jest/globals";
import App from './App';
import Register from "./components/Register/Register.js"



test('renders register', () => {
  
  render(<Register/>);
  
  // const onClick = jest.fn()
   const button = screen.getByRole("button", {name: "Register"});
   
   expect(button).toBeInTheDocument()
  //  screen.debug()
  //const button = screen.getByText("Add To List")
 });


 