import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import listData from "./constants/listData";
import Todo from "./Todo";

describe("Todo Application", () => {
    it("renders submit button", () => {
        render(<App />);
        const submitBtn = screen.getByTestId("submit-btn");

        expect(submitBtn).toBeInTheDocument();
        expect(submitBtn).toHaveTextContent(/ثبت/i);
    });

    it("has an input to enter new todo", () => {
        render(<App />);

        const inputBox = screen.getByTestId("input");

        expect(inputBox).toBeInTheDocument();

        userEvent.type(inputBox, "Go Shopping");
        expect(inputBox).toHaveValue("Go Shopping");
    });

    it("Adds a todo by Keyboard", () => {
        render(<App />);

        const input = screen.getByTestId("input");

        userEvent.type(input, "buy some milk");
        userEvent.type(input, "{enter}");

        expect(screen.getByText("buy some milk")).toBeInTheDocument();
    });

    it("Adds a todo by clicking on submit button", () => {
        render(<App />);

        const submitBtn = screen.getByTestId("submit-btn");
        const inputBox = screen.getByTestId("input");

        userEvent.type(inputBox, "Go Do Something Else");
        userEvent.click(submitBtn);

        expect(screen.getByText("Go Do Something Else")).toBeInTheDocument();
    });

    it("Renders Todo list", () => {
        render(<Todo list={listData} />);

        expect(screen.getByText("Milking the cow")).toBeInTheDocument();
    });
});
