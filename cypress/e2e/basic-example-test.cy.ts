describe("Basic example test", () => {
	it("Can navigate and filter patients without throwing", () => {
		cy.visit("/");

		cy.findByRole("searchbox").type("Gelato");

		cy.get("tbody").within(() => {
			cy.findAllByRole("row").should("have.length", 1);
		});

		cy.findByRole("searchbox").clear();

		cy.get("tbody").within(() => {
			cy.findAllByRole("row").should("not.have.length", 1);
		});
	});
});
