/**
 * 
 */
Blockly.Blocks['move_forwd_backwd'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendDummyInput("move")
        .appendField("move")
        .appendField(new Blockly.FieldDropdown([["forward", "forward"], ["backward", "backward"]]), "direction")
        .appendField("by")
        .appendField(new Blockly.FieldTextInput("1000"), "pixels")
        .appendField("pixels");
	this.setPreviousStatement(true);
	this.setNextStatement(true);
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
	code = 'Forward('+text_pixels+');';
  }
  if(dropdown_direction == "backward")
  {
	code = 'Backward('+text_pixels+');';
  }
  return code;
};