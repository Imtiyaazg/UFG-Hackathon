describe('Hackathon V1 task 1', () => {

  it('should test task 1', function () {
    cy.visit('https://demo.applitools.com/gridHackathonV1.html');

    // initialize test session
    cy.eyesOpen({
      appName: 'Hackathon App',
      testName: 'Task 1',
      stepName: 'Cross-Device Elements Test'
    });

    // capture storefront view
    cy.eyesCheckWindow({
      tag: 'Cross-Device Elements Test',
      fully: true
    });

    // close session and display results
    cy.eyesClose();
  });
});