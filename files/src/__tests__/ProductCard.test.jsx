import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

const mockProduct = {
  id: 'test-1',
  name: 'Test Product',
  short: 'Short description',
  image: 'https://example.com/image.jpg'
};

describe('ProductCard', () => {
  it('renders product image, name and CTA', () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );

    expect(screen.getByAltText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText(/View Customization Options/i)).toBeInTheDocument();
  });
});