describe('Training Data Generation', () => {


  it('downloading images', () => {
    cy.visit('http://localhost:4200/');


    cy.get('.item').each(() => {

      cy.get('#path-desc').invoke('text').then((path) => {
        cy.get('#training-data-img')  // Replace with the appropriate selector
          .first()
          .invoke('attr', 'src')
          .then((src) => {
            cy.request(src).then(() => {
              if (src) {
                let data = src!.split(',')[1];
                cy.writeFile(`cypress/download/${path}.png`, data, 'base64');
              } else {
                cy.log(`img ${path} could not be loaded correctly`);
              }
            });
          });
      });

      cy.get('button').click();
    });

  });

});
