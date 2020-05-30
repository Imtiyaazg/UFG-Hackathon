describe('Hackathon V1 task 3', () => {

  it('should test task 3', function () {
    cy.visit('https://demo.applitools.com/gridHackathonV1.html');

    // click on first black shoe V1
    cy.get('#IMG__imgfluid__215').click();

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