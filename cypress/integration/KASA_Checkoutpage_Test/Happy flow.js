// This test go through all the forms, filling them and place a reservation as a happy flow

describe('Happy flow', () =>
{
    it('Open KASA checkout page', () =>
    {
        cy.visit('https://deploy-preview-570--kasa-website.netlify.app/checkout?sessionId=616c82dca8775a001db4b8ff')
        
    
        // Guest forms
        cy.get("#checkout-email").type("johnwick@test.com")
        cy.get("#firstName").type("John")
        cy.get("#lastName").type(" Wick")
        cy.get("#phoneNumber").type("+36201105789")

        // Kasa discount
        //cy.get(".checkbox-title-wrapper").click()

        // Billing forms
        cy.get("#billing-name").should('have.value', 'John  Wick')
        cy.get("#street-1").type("Budapesti street 11.")
        cy.get("#city").type("Budapest")
        cy.get('#country').select('Hungary')
        cy.get('#state').type('Pest')
        cy.get("#zip").type("1111")

        //Payment forms
        context('Actions', () => {

            it('should fill out creditcard', () => {
                cy.getWithinIframe('[name="cardnumber"]').type('1111 1111 1111 1111');
            });
        });

        cy.get('iframe')
            .eq(1)
            .iframeLoaded()
            .its('document')
            .getInDocument('[name="exp-date"]')
            .type('1220');

        cy.get('iframe')
            .eq(2)
            .iframeLoaded()
            .its('document')
            .getInDocument('[name="cvc"]')
            .type('123');

        cy.get("#name-on-card").type("John Wick")

        //Redeem Kasa credit
        cy.get('.link-text').contains('Redeem Kasa credit').click()
        cy.get('#kasa-credit').type('123456')

        //Promotional code
        //cy.get('.link-text').contains('Add promotional code').click()
        cy.get('.column-content.checkout-page__cart').contains('Add promotional code').click()
        cy.wait(2000)
        
        //cy.get('.column-content.checkout-page__cart').type('Coupon2') 

        //cy.get('.input-container.coupon__input').first().type('Coupon2')

        //cy.get('#promotional-code').should('not.have.css', 'display', 'none').type('Coupon2')

        //cy.get('#promotional-code').type('Coupon2').isVisible()

        /*cy.get('.text-container').contains('Apply').click()
        cy.get('.mt: 16-rem').contains('Requested coupon can not be used.')
        cy.get('#promotional-code').clear()
        cy.get('#promotional-code').type('KASAMETEST2020')
        cy.get('.text-container').contains('Apply').click()
        cy.get('.column-content.checkout-page__cart').contains('KASAMETEST2020')
        cy.get('.link-text').contains('Remove code').click()
        cy.get('.column-content.checkout-page__cart').contains('KASAMETEST2020').should('not.exist')*/
        
        //Book now
        cy.get(".submit-button.button.is-primary").click()

        
    })
  })