import { render, screen } from '@testing-library/react';
import App from './App';
import pokeFetch from './pokeFetch';

test('renders header correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pokédex/i);
  const headerElement = document.querySelector('.App-header')
  expect(headerElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});

test('should render pokemon card', () => {
  render(<App />);
  const pokeCard = document.querySelector('.poke-card');
  expect(pokeCard).toBeInTheDocument();
});

test('pokeFetch is a function', () => {
  expect(typeof pokeFetch).toBe('function');
});

