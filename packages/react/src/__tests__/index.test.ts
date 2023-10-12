import * as index from "..";

describe("top level exports", () => {
  it("matches snapshot", () => {
    expect(Object.keys(index)).toMatchSnapshot();
  });
});
