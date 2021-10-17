describe('My First Test', () =>
{
    it('Open KASA homework page', () =>
    {
        cy.visit('https://deploy-preview-570--kasa-website.netlify.app/checkout?sessionId=616c82dca8775a001db4b8ff')
        
        // cy.get(".select-wrapper has-icon-left").click

        cy.get(".checkbox-title-wrapper").click

        cy.get("#checkout-email").type("Email")

        cy.get("#firstName").type("FIRST NAME")

        cy.get("#lastName").type("LAST NAME")

        cy.get("#phoneNumber").type("+36201105789")

        cy.get("#billing-name").type("bbbbbb")

        cy.get("#street-1").type("aaaaaaa")

        cy.get("#street-1").type("aaaaaaa")

        cy.end

        
    })
  })