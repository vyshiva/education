/*
 * Implement all your JavaScript in this file!
 */
 var lastDigit = false;
 var lastOperand = false;
 var lastEqual = false;
 var valueDisplay = '';
 var memory ='';
 var operand = '';
 var number2;
  
 $('.digit').click(function(){
 	if (lastEqual){
		clearData();
		test();		
	} 
	if (valueDisplay == 'Infinity'){
		clearData();
		test();
	}
 	var currentDigit = $(this).val();
 	if (lastDigit) 
 		valueDisplay = Number(valueDisplay) * 10 + Number(currentDigit);
	else valueDisplay = currentDigit;
	number2 = valueDisplay;
 	$('#display').val(valueDisplay);
 	lastDigit = true;
 	lastOperand = false;
 	lastEqual = false;
	test();
 	return false;
 });
 $('.operand').click(function(){
 	if (valueDisplay == 'Infinity'){
		clearData();
		test();
		return false;
	}
	if (operand && memory && lastDigit){
 		valueDisplay = String(operation(operand, Number(memory),Number(valueDisplay)));
 		memory = valueDisplay;
	}
 	if (lastDigit && !memory ) {
 		memory = valueDisplay;
 	}
 	$('#display').val(valueDisplay);
 	if (this.id == 'divideButton') operand = '/';
 	else operand = $(this).html();
 	lastDigit = false;
 	lastOperand = true;
 	lastEqual = false;
	test();
 	return false;
 });
 $('#clearButton').click(function(){
	clearData();
	test();
 	return false;
 });
 $('#equalsButton').click(function(){
 	if (valueDisplay == 'Infinity'){
		clearData();
		test();
		return false;
	}
	if (!memory){
		return false;
	}
 	if (operand && memory && lastDigit){
		valueDisplay = String(operation(operand, Number(memory),Number(valueDisplay)));
		memory = valueDisplay;
	}
	if (operand && memory && number2 && lastEqual){
		valueDisplay = String(operation(operand, Number(memory),Number(number2)))	;
		memory = valueDisplay;
	}
	$('#display').val(valueDisplay);
	if (lastOperand){
		lastEqual = false;
	}else {
		lastDigit = false;
 		lastOperand = false;
 		lastEqual = true;
 	}
	test();
 	return false;
 });
function operation(operand,num1,num2){
 	switch (operand) {
   		case '+':
      		return num1 + num2;
   		case '-':
      		return num1 - num2;
   		case '/':
   			if (num2 == 0){
				return 'Infinity';
			}
			else
   				return num1 / num2;
   		case '*':
   			return num1 * num2;
	}
}
function clearData(){
 	lastDigit = false;
 	lastOperand = false;
 	lastEqual = false;
 	valueDisplay = '';
 	operand = '';
 	memory = '';
 	number2 = '';
 	$('#display').val(valueDisplay);	
}
 function test(){
 	$('#output').html('lastDigit ' + lastDigit + 
 					'<br> lastOperand ' + lastOperand +
 					'<br> lastEqual ' + lastEqual + 
 					"<br> memory " + memory + 
 					"<br> number2 " + number2 + 
 					"<br> operand " + operand + 
 					"<br> valueDisplay " + valueDisplay);  
 }
