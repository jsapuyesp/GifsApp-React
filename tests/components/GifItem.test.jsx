import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem/>', () => {
  const image = {
    id: 0,
    title: 'Titulo',
    url: 'http://localhost/url'
  }
  test('Debe hacer match con el snapshot', () => {

    const { container } = render(<GifItem key={image.id} {...image} />)
    expect(container).toMatchSnapshot();
  });

  test('El título y url de la imagen deben coincidir', () => {

    render(<GifItem key={image.id} {...image} />)
    // screen.debug();
    const { src, alt } = screen.getByRole('img');
    expect(alt).toBe(image.title);
    expect(src).toBe(image.url);
  });

  test('Se debe renderizar el título', () => {

    render(<GifItem key={image.id} {...image} />)
    // screen.debug();

    expect(screen.getByText(image.title)).toBeTruthy();
  });



});