function Myfunction(a) {
    return (b) => {
       return (c) => {
         return a * b * c
         }
        }
 }
 console.log(Myfunction(14)(5)(2));