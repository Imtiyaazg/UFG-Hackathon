describe('Hackathon task 3', () => {

  it('should test task 3', function () {
    cy.visit('https://demo.applitools.com/gridHackathonV2.html');

    // click on first black shoe V1
    //cy.get('#IMG__imgfluid__215').click();

    // click on first black shoe V2
    cy.get('#product_1').click();

    // initialize test session
    cy.eyesOpen({
      appName: 'Hackathon App',
      testName: 'Task 3',
      stepName: 'Product Details Test'
    });

    // capture product details view
    cy.eyesCheckWindow({
      tag: 'Product Details Test',
      fully: true
    });

    // close session and display results
    cy.eyesClose();
  });
});