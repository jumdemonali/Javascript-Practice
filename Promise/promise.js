var promise = new Promise(function(resolve) {
    const x = "Mona";
    const y = "Mona"
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
     
  promise.
      then(function () {
          console.log('Success');
      }).
      catch(function () {
          console.log('Error has occurred');
      });