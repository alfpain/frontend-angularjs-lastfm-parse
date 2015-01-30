describe("Testing", function(){
  beforeEach(module('AuthApp'));
  var $controller;
   beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  it("si es verdadero", function(){
    expect(user).not.toBe("");

  });
  it("asdsa"), function(){

     expect(user).toEqual(0);
     
  }

  it("prueba"), function(){

    expect($('<input type="text" />').focus()).toBeFocused()
  }
});
