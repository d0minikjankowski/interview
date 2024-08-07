describe ("go to url and assert", () => {
    it("url test", () => {
        cy.visit("www.google.com")
    })

    it("assert", () => {
        cy.contains('#W0wltc', "Odrzuć wszystko").click()
        cy.get('[aria-label="Gmail "]').should("exist")
    })
})