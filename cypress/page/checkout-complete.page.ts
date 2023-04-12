class Finish {
    private end: string;

    constructor() {
        this.end = "#finish";
    }

    public selectFinish(): void {
        cy.get(this.end).click();
    }
}

export { Finish };
