import PracticeIndex from "./Index";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";


describe("<PracticeIndex />", () => {
  beforeEach(()=> {
        render (
      <BrowserRouter>
      <PracticeIndex />
      </BrowserRouter>
    )
  })
  it("renders a Delete button that is clickable", () => {
    const deleteButton = screen.getByRole("button", { name: /Delete/i });
    expect(deleteButton).toBeInTheDocument();
  });
})