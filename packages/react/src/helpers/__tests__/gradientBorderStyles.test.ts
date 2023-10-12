import { gradientBorderStyles } from "../gradientBorderStyles";

describe("gradientBorderStyles", () => {
  it("should return the correct styles", () => {
    const styles = gradientBorderStyles();
    expect(styles.background).toContain(
      "linear-gradient(var(--my-bg-primary), var(--my-bg-primary)) 0 0 / 100% 100% no-repeat"
    );
    expect(styles.background).toContain(
      "linear-gradient(to right, var(--my-gradient-start) 0%, var(--my-gradient-stop) 100%)"
    );
    expect(styles.backgroundClip).toBe("content-box, border-box");
    expect(styles.padding).toBe(1);
  });
});
