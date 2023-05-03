import {Iframe} from "../page/index";

const iframe = new Iframe;

describe("iframe", () => {
  it("iframe validation", () => {
    // Arrange
    iframe.visit();
    // Action
    iframe.getFrameTitle("HTML Tutorial");
    iframe.goToCssPageInFrame();
    iframe.getFrameTitle("CSS Tutorial");
    // Assert
  });
});
