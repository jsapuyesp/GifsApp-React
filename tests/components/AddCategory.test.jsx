import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en el componente <AddCategory/>", () => {
  const placeholder = "Placeholder";

  test("Debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory placeholder={placeholder} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Hola" } });

    expect(input.value).toBe("Hola");
  });

  test("Debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory placeholder={placeholder} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    const newValue = "Goky";

    fireEvent.input(input, { target: { onNewValue: newValue } });

    fireEvent.submit(form);

    expect(input.value).toBe("");
  });
});
