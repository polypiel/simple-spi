QUnit.test( "url has parts", function( assert ) {
  var url1 = urlmodule.str_2_url("http://angelcalvo.com");
  var url2 = urlmodule.str_2_url("http://angelcalvo.com#id");
  var url3 = urlmodule.str_2_url("http://angelcalvo.com?p=angel");
  var url4 = urlmodule.str_2_url("http://angelcalvo.com#id?p=angel");

  assert.ok(!url1.hasParams());
  assert.ok(!url1.hasRef());

  assert.ok(!url2.hasParams());
  assert.ok(url2.hasRef());

  assert.ok(url3.hasParams());
  assert.ok(!url3.hasRef());

  assert.ok(url4.hasParams());
  assert.ok(url4.hasRef());
});

// URL testing
QUnit.test( "url to String", function( assert ) {
  var url = urlmodule.str_2_url("http://angelcalvo.com");

  assert.equal(url.toString(), "http://angelcalvo.com");
});

// URL testing
QUnit.test( "current url", function( assert ) {
  var url = urlmodule.currentUrl();

  assert.equal(url.toString(), window.location.pathname);
});

QUnit.test("url params", function(assert) {
  var url = urlmodule.str_2_url("http://angelcalvo.com/project.html?p=angel");
  assert.ok(url.hasParam('p'));
  assert.equal(url.params['p'], "angel")
});

QUnit.test("url equals", function(assert) {
  var url1 = urlmodule.str_2_url("http://angelcalvo.com");
  var url11 = urlmodule.str_2_url("http://angelcalvo.com/");
  var url2 = urlmodule.str_2_url("http://angelcalvo.com#id1");
  var url3 = urlmodule.str_2_url("http://angelcalvo.com#id2");
  var url4 = urlmodule.str_2_url("http://angelcalvo.com/projects.html?c=web&t=wordpress");
  var url5 = urlmodule.str_2_url("http://angelcalvo.com/projects.html?t=wordpress&c=web");

  assert.ok(url1.equals(url11), "test tailing slashes");
  assert.ok(!url1.equals(url2));
  assert.ok(!url2.equals(url3));
  assert.ok(url4.equals(url5));
});
