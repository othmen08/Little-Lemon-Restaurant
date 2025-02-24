import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm"


describe("Inputs Validation", ()=>{
    const availableTimes = ["17:00", "18:00", "19:00"]
    test('the correct attributes are applied to the HTML element', () => {
        
        render(<BookingForm availableTimes={availableTimes}/>);

        expect(screen.getByLabelText(/Date:/)).toHaveAttribute("required");
        expect(screen.getByLabelText(/Time:/)).toHaveAttribute("required");
        expect(screen.getByLabelText(/Guests:/)).toHaveAttribute("required");
        expect(screen.getByLabelText(/Guests:/)).toHaveAttribute("min");
        expect(screen.getByLabelText(/Guests:/)).toHaveAttribute("max");
        expect(screen.getByLabelText(/Occasion:/)).toHaveAttribute("required");
        expect(screen.getByRole("button")).toHaveAttribute("disabled");
    })
})

describe("Submit Button Disabled State", () => {
    const availableTimes = ["17:00", "18:00", "19:00"];
    const dispatch = jest.fn();
    const onSubmit = jest.fn();

    test('button is disabled if guests are less than 1', () => {
        render(<BookingForm availableTimes={availableTimes} onSubmit={jest.fn()} dispatch={dispatch}/>);

        const dateInput = screen.getByLabelText(/Date:/);
        fireEvent.change(dateInput, { target: { value: "" } });

        const timeInput = screen.getByLabelText(/Time:/);
        fireEvent.change(timeInput, { target: { value: "17:00" } });

        const guestsInput = screen.getByLabelText(/Guests:/);
        fireEvent.change(guestsInput, { target: { value: "0" } }); // Invalid: less than 1

        const submitButton = screen.getByRole("button");
        expect(submitButton).toBeDisabled(); // Button should be disabled
    });

    test('button is disabled if guests are greater than 10', () => {
        render(<BookingForm availableTimes={availableTimes} onSubmit={jest.fn()} dispatch={dispatch}/>);

        const dateInput = screen.getByLabelText(/Date:/);
        fireEvent.change(dateInput, { target: { value: "2025-02-01" } });

        const timeInput = screen.getByLabelText(/Time:/);
        fireEvent.change(timeInput, { target: { value: "" } });

        const guestsInput = screen.getByLabelText(/Guests:/);
        fireEvent.change(guestsInput, { target: { value: "11" } }); // Invalid: greater than 10

        const submitButton = screen.getByRole("button");
        
        expect(submitButton).toBeDisabled(); // Button should be disabled
    });

    test('button is enabled if guests are between 1 and 10', () => {
        
        render(<BookingForm availableTimes={availableTimes} onSubmit={onSubmit} dispatch={dispatch}/>);

        const dateInput = screen.getByLabelText(/Date:/);
        fireEvent.change(dateInput, { target: { value: "2025-02-01" } });
       

        const timeInput = screen.getByLabelText(/Time:/);
        fireEvent.change(timeInput, { target: { value: "17:00" } });

        const guestsInput = screen.getByLabelText(/Guests:/);
        fireEvent.change(guestsInput, { target: { value: "5" } }); // Valid: between 1 and 10



        const submitButton = screen.getByRole("button");
        expect(submitButton).not.toBeDisabled(); // Button should be enabled
    });
});