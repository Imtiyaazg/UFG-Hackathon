describe('Hackathon task 2', () => {

  it('should test task 2', function () {
    //cy.visit('https://demo.applitools.com/gridHackathonV1.html');
    cy.visit('https://demo.applitools.com/gridHackathonV2.html');

    // filter by black shoe
    cy.get('#SPAN__checkmark__107').click();
    cy.get('#filterBtn').click();

    // initialize test session
    cy.eyesOpen({
      appName: 'Hackathon App',
      testName: 'Task 2',
      stepName: 'Filter Results'
    });

    // capture product grid view
    cy.eyesCheckWindow({
      tag: 'Filter Results',
      target: 'region',
      selector: '#product_grid'
    });

    // close session and display results
    cy.eyesClose();
  });
});