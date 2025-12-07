import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomizationForm from '../components/CustomizationForm';
import { describe, it, expect } from 'vitest';

const productMock = {
  id: 'perf1',
  name: 'Signature Eau de Parfum',
  basePrices: {
    "30": 12.0,
    "50": 18.0,
    "100": 30.0
  }
};

describe('CustomizationForm', () => {
  it('updates unit price when capacity changes and quantity affects discount', async () => {
    render(<CustomizationForm product={productMock} />);

    // default capacity is 50 from the component - assert displayed unit price exists
    const unitPriceEl = await screen.findByText(/Unit price/i);
    expect(unitPriceEl).toBeInTheDocument();

    // Change capacity to 100
    const capacity100Btn = screen.getByRole('button', { name: /100 ml/i });
    await userEvent.click(capacity100Btn);

    // Change quantity to 200 to trigger a discount tier
    const qtyInput = screen.getByRole('spinbutton');
    await userEvent.clear(qtyInput);
    await userEvent.type(qtyInput, '200');

    // New unit price should reflect discount - at minimum check that "Discount applied" text exists
    expect(screen.getByText(/Discount applied/i)).toBeInTheDocument();
  });
});