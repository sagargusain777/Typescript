

function add(x: number, y: number) {
    // Function body with addition
    return x + y;
  }
  
  // Because the function adds two numbers and returns the result, the compiler infers the return type to be 'number'
  const sum = add(5, 3);
  
  // You can use the inferred type without explicitly defining it
  console.log(sum);

  
  function sub(x: number, y: number) {
    // Function body with addition
    return "I will define the Function type as String";
  }
  
  // Because the function adds two numbers and returns the result, the compiler infers the return type to be 'number'
  const finalResult= sub(5, 3);
  
  // You can use the inferred type without explicitly defining it
  console.log(sum);