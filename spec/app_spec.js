/*jshint expr: true */
/*globals
  describe beforeEach afterEach it
  App visit
 */
var expect = chai.expect;

describe('mocha with ember testing', function() {
    "use strict";

    beforeEach(function() {
        visit('/');
    });

    afterEach(function() {
        App.reset();
    });

    it('renders and can use ember test helpers', function() {
        expect(find('.jumbotron', '#ember-test-fixture'))
            .to.exist;
    });
});
