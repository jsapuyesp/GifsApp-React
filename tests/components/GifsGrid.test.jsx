import { render, screen } from "@testing-library/react";
import { GifsGrid } from "../../src/components/GifsGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Test en <GifsGrid/>", () => {
  const category = "Goky";
  const gifs = [
    {
      id: "ABC",
      title: "Hola",
      url: "https://localhost/Hola.jpg",
    },
    {
      id: "ABCD",
      title: "Holas",
      url: "https://localhost/Holas.jpg",
    },
  ];

  test("Debe mostrar un loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifsGrid category={category} />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe mostrar imagenes usando el useFetchGifs", () => {
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifsGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
