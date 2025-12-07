import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Navbar";
import { describe, it, expect } from "vitest";

describe("Navbar", () => {
  it("renders brand and primary links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText(/Direct Edge/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.getByText(/Corporate Solutions/i)).toBeInTheDocument();
    expect(screen.getByText(/Order Now/i)).toBeInTheDocument();
  });
});