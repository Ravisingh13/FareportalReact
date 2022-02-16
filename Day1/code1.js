function EmployeeDetails(){
    var name;
    var age ;
    var designation ;

    return {
    
    name: name,
    age: age,
    designation: designation
  
    //     getName: function () {
    //         return name;
            
    //     },
    //     getAge : function() {
    //         return age;
    //     },
    // getDesignation : function(){
    //     // return designation;
    // }
    }
    
}
debugger;
 const arr = [];
for (let index = 0; index < 2; index++) {
    var NAME = prompt("Whats ur name");
    var AGE = prompt("Whats ur age");
    var Design = prompt("Whats ur Designation");
    var x = EmployeeDetails();
    debugger;
    x.name=NAME;
    x.age = AGE;
    x.designation = Design;
    
     arr.push(x);
    
    
}
console.log(arr);
console.log(arr[0].name);
