var childAge = [ 11, 12, 3, 6, 8 ];

function ageAveraged( array ) {
  var sum = 0;
  for ( var i = 0; i < array.length; i++ ) {
    sum += array[ i ];
  }
  sum = sum / array.length;
  console.log( " average child age is : " + ageAveraged( childAge ) );
  return sum;
}
