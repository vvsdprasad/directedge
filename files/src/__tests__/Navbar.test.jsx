import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

describe('Navbar', () => {
  it('renders brand and navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Brand
    expect(screen.getByText(/Direct Edge/i)).toBeInTheDocument();

    // Links (desktop)
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.getByText(/Corporate Solutions/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();

    // CTA
    expect(screen.getAllByText(/Order Now/i)[0]).toBeInTheDocument();
  });
});