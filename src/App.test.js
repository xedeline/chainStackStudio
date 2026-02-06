// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders chainStack title', () => {
    render(<App />);
    const titleElement = screen.getByText(/chainStack/i);
    expect(titleElement).toBeInTheDocument();
});
