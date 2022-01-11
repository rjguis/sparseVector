const _ = require('underscore');

class SparseVector {
  constructor(vector) {
    this.sparseEncoded = [];
    this.build(vector);
  }
  
  build(vector) {
    // NOTE: Data structure generation is similar in some respects to run length encoding.
    // In term of memory requirements, we hold an object of two numbers per non-zero value.
    _.each(vector, (item, index) => {
      if (item !== 0) {
        this.sparseEncoded.push({offset: index, item});
      } 
    });

    console.log('Built data structure:', vector);
  }  
  
  dotProduct(operand) {
    return SparseVector.DotProduct(this, operand);
  }
  
  // NOTE: in term of CPU performance, total number iterations equal the smallest number of non-zero values in either of the two vectors
  static DotProduct(sparseVector1, sparseVector2) {
    let result = 0;

    let sv1 = sparseVector1.sparseEncoded;
    let sv2 = sparseVector2.sparseEncoded;
    
    let sv1Index = 0;
    let sv2Index = 0;
  
    while (sv1Index < sv1.length && sv2Index < sv2.length) {
      if (sv1[sv1Index].offset === sv2[sv2Index].offset) {        
        result += sv1[sv1Index].item *  sv2[sv2Index].item;
        sv1Index++;
        sv2Index++;
      } else if (sv1[sv1Index].offset < sv2[sv2Index].offset) {
        sv1Index++;
      } else {
        sv2Index++;
      }                      
    }
    
    return result;     
  }  
}

module.exports = SparseVector;