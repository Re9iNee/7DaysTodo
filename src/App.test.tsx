import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
    render(<App />);

    const AppHeader = screen.getByText(/My Todo Application/i);
    expect(AppHeader).toBeInTheDocument();
});

test("renders a submit button", () => {
    render(<App />);

    const submitBtn = screen.getByTestId("submit-btn");

    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toHaveTextContent(/submit/i);
});
