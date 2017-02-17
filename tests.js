QUnit.test("Test the getAreaCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getAreaCode(num);
    assert.deepEqual(result, "415", "Valid area code test passed.");
});

QUnit.test( "Errors thrown for getAreaCode", function (assert) {
    assert.throws( function() {
        getAreCode("415)444-5555");
    }, "Missing '('. An error should have been thrown." );

    assert.throws( function() {
        getAreCode("(415 444-5555");
    }, "Missing ')'. An error should have been thrown." );
});

QUnit.test("Test the getCOCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getCO(num);
    assert.deepEqual(result, "555", "Valid CO code test passed.");
});

QUnit.test( "Errors thrown for getCOCode", function (assert) {
    assert.throws( function() {
        getCO("(415)5551111");
    }, "Missing '-'. An error should have been thrown." );
});

QUnit.test("Test the getLineCode function.", function (assert) {
    var num = "(415)555-5555";
    var result = getLineCode(num);
    assert.deepEqual(result, "5555", "Valid line code test passed.");
});

QUnit.test( "Errors thrown for getLineCode", function( assert ) {
    assert.throws( function() {
        getLineCode("(415)444-r555");
    }, "Includes letter 'r'. An error should have been thrown." );

    assert.throws( function() {
        getLineCode("(415)444-55555");
    }, "Length of String is greater then 4. An error should have been thrown." );
});
