/**
 * 
 */
/*Blockly.Blocks['move_forwd_backwd'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendDummyInput("move")
        .appendField("move")
        .appendField(new Blockly.FieldDropdown([["forward", "forward"], ["backward", "backward"]]), "direction")
        .appendField("by")
        .appendField(new Blockly.FieldTextInput("100"), "pixels")
        .appendField("pixels");
	this.setOutput(true, "boolean");
    this.setTooltip('');
  }
};

Blockly.JavaScript['move_forwd_backwd'] = function(block) {
  var statements_move = Blockly.JavaScript.statementToCode(block, 'move');
  var dropdown_direction = block.getFieldValue('direction');
  var text_pixels = block.getFieldValue('pixels');
  // TODO: Assemble JavaScript into code variable.
  var code;
  if(dropdown_direction == "forward")
  {
	code = 'moveForward('+text_pixels+')';
  }
  if(dropdown_direction == "backward")
  {
	code = 'moveBackward('+text_pixels+')';
  }
  return code;
};*/

Blockly.Blocks['move_forwd_backwd'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("move");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Forward", "forward"], ["Backward", "backward"]]), "Register");
    this.appendDummyInput()
        .appendField("to");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["100", "100"], ["200", "200"], ["300", "300"]]), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['move_forwd_backwd'] = function(block) {
  var dropdown_register = block.getFieldValue('Register');
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code;
  
  if(dropdown_register == "forward")
  {
	//code = 'for(var i = 0; i < 4; i++){';
	code = 'moveForward('+dropdown_name+');';
	//code += 'setTimeout(dummy, 200);';
	//code += '}';
  }
  if(dropdown_register == "backward")
  {
	code = 'moveBackward('+dropdown_name+');';
  }
  return code;
};