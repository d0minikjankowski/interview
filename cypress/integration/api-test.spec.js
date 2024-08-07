describe("api tests", () => {
    it("api test intercept", () => {
        cy.intercept("GET", "https://www.saucedemo.com/v1/").as("ApiResponse");
        cy.visit("https://www.saucedemo.com/v1/")
        cy.wait("@ApiResponse")
        cy.get("ApiResponse").then(response => {
            console.log(response)
            expect(response.response.statusCode).to.equal(200)
        })
    })
})