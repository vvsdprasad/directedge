import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../Home";
import { describe, it, expect } from "vitest";

describe("Home page", () => {
  it("renders hero heading and CTA", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/Style Meets Brand Identity/i)).toBeInTheDocument();
    expect(screen.getByText(/Explore Catalog/i)).toBeInTheDocument();
  });
});