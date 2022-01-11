const SparseVector = require('./SparseVector');
const should = require('should');

describe('Test suite', function() {
  it('should calc dot product when both sparse vectors are same size ', function() {
    const sv1 = new SparseVector([1,0,0,5,0,1,0,0,2]);
    const sv2 = new SparseVector([1,0,0,2,0,0,1,0,9]);

    const result = sv1.dotProduct(sv2);
    should(result).eql(29);
  });
  
  it('should calc dot product when one is larger than the other ', function() {
    const sv1 = new SparseVector([0,0,3,0,0,1,0,0,0,9,9,9,9,9,]);
    const sv2 = new SparseVector([0,0,6,9,0,0,1,0,0]);

    const result = sv1.dotProduct(sv2);
    should(result).eql(18);    
  });
  
  // Note: In reality i would test more at the extremeties
});
  



