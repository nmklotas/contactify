import { render, screen, waitFor, userEvent, fireEvent } from "./common";
import { FilterForm } from "../filter/FilterForm";

describe("FilterForm", () => {
  it("values submitted", async () => {
    const submit = jest.fn();

    render(<FilterForm cities={["city1", "city2"]} onSubmit={submit} />);

    userEvent.type(screen.getByRole("textbox"), "name-test");
    userEvent.selectOptions(screen.getByRole("combobox"), "city2");
    userEvent.click(screen.getByLabelText("Show active"));
    fireEvent.click(screen.getByRole("button", { name: /filter/i }));

    await waitFor(() =>
      expect(submit).toHaveBeenCalledWith({
        name: "name-test",
        city: "city2",
        showActive: false,
      })
    );
  });
});
