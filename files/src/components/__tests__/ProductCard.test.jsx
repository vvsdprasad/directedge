import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "../ProductCard";
import { describe, it, expect } from "vitest";

const sampleProduct = {
  id: "test1",
  name: "Test Product",
  short: "Short description",
  image: "https://example.com/image.jpg"
};

describe("ProductCard", () => {
  it("renders product name and CTA", () => {
    render(
      <MemoryRouter>
        <ProductCard product={sampleProduct} />
      </MemoryRouter>
    );

    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText(/View Customization Options/i)).toBeInTheDocument();
  });
});