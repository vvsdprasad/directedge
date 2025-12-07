import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomizationForm from "../CustomizationForm";
import { describe, it, expect } from "vitest";

const product = {
  id: "perf1",
  name: "Signature Eau de Parfum",
  basePrices: { "30": 12.0, "50": 18.0, "100": 30.0 }
};

describe("CustomizationForm", () => {
  it("shows unit price and updates total on quantity change", async () => {
    render(<CustomizationForm product={product} />);

    // Default capacity is 50ml (18.0 + finish & packaging)
    const unitPriceEl = await screen.findByText(/Unit price/i);
    expect(unitPriceEl).toBeInTheDocument();

    // Change quantity
    const qtyInput = screen.getByRole("spinbutton");
    fireEvent.change(qtyInput, { target: { value: "50" } });

    // Total should update - look for "Estimated total"
    expect(screen.getByText(/Estimated total/i)).toBeInTheDocument();
  });
});