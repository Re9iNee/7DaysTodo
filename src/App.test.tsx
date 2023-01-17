import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Todo from "./Todo";

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

describe("Todo Application", () => {
    it("Add a todo to List", () => {
        render(<Todo />);

        const input = screen.getByRole("textbox");

        expect(input).toBeDefined();
        userEvent.type(input, "buy some milk");
        userEvent.type(input, "{enter}");

        expect(screen.getByText("buy some milk")).toBeInTheDocument();
    });
});
