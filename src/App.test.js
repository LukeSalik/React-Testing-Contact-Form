import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<ContactForm />);
});

test("renders input fields", () => {
  const { getByText, getByLabelText } = render(<ContactForm />);
  const firstName = getByLabelText(/First Name/i);
  const lastName = getByText(/Last Name/i);
  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
});

//test("inputs");
test("testing submit", () => {
  const { getByLabelText, getByText } = render(<ContactForm />);
  const firstName = getByLabelText(/First Name/i);
  const lastName = getByText(/Last Name/i);
  fireEvent.change(firstName, { name: "firstName", value: "" });
  fireEvent.change(lastName, { name: "lastName", value: "" });
});
