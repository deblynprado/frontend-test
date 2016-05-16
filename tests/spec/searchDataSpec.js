describe('searchData', function(){
  var array = [{ foo: 'bar', baz: 'quux'}];
  it('should check for an object in the array with the right properties', function(){
    var searchString = {foo: 'bar'};
    expect(array).toContain(jasmine.objectContaining(searchString));
  });

  it('should return alue found inside array', function(){
    var searchString = {foo: 'bar'};
    if(expect(array).toContain(jasmine.objectContaining(searchString))) {
      return searchString;
    }
  });
});
