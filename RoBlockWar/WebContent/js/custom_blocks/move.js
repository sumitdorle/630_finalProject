/**
 * 
 */
Blockly.Blocks['move_forwd_backwd'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("move");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["UP", "up"], ["DOWN", "down"], ["LEFT", "left"], ["RIGHT", "right"]]), "Register");
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
  
  if(dropdown_register == "up")
  {
	code = 'moveUp('+dropdown_name+');';
  }
  else if(dropdown_register == "down")
  {
	code = 'moveDown('+dropdown_name+');';
  }
  else if(dropdown_register == "left")
  {
	code = 'moveLeft('+dropdown_name+');';
  }
  else if(dropdown_register == "right")
  {
	code = 'moveRight('+dropdown_name+');';
  }
  
  return code;
};