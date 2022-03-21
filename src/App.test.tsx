import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Object.defineProperty(window, 'matchMedia', {
//   writable: true,
//   value: jest.fn().mockImplementation((query) => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: jest.fn(), // Deprecated
//     removeListener: jest.fn(), // Deprecated
//     addEventListener: jest.fn(),
//     removeEventListener: jest.fn(),
//     dispatchEvent: jest.fn(),
//   })),
// });

describe('Testing Supplier Page', () => {
  it('Renders the page', () => {
    render(<App />);
    const linkElement = screen.getByText(/Suppliers/i);
    expect(linkElement).toBeInTheDocument();
  });
});
