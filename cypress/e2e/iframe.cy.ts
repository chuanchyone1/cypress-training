import {Iframe} from "../page/index";

const iframe = new Iframe;

describe("iframe", () => {
  it("iframe validation", () => {
    // Arrange
    iframe.visit();
    // Action
    // Assert
    cy.get(".left_h2").should("have.text", "HTMLHTMLHTMLHTMLHTMLHTMLHTML");
  });

  it(
      "retries",
      {
        retries: {
          runMode: 2,
          openMode: 0,
        },
      },
      () => {

      },
  );
});
