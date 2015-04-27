////////////////////////////////////////////////////////
//                      Fire Block
////////////////////////////////////////////////////////
Blockly.Blocks['fire'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendValueInput("DEGREE")
        .setCheck("Number")
        .appendField("fire(");
    this.appendValueInput("RANGE")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['fire'] = function(block) {
var value_degree = block.getFieldValue('DEGREE');
var value_range = block.getFieldValue('RANGE');
  var code = 'fireAtGivenRangeAndDegree(' + value_degree +',' + var value_range + ');';
  return code;
};


////////////////////////////////////////////////////////
//                      scan Block
////////////////////////////////////////////////////////
Blockly.Blocks['scan'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendValueInput("DEGREE")
        .setCheck("Number")
        .appendField("scan(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.JavaScript['scan'] = function(block) {
  var value_degree = block.getFieldValue('DEGREE');
  var code = 'scanAtDegree(' + value_degree + ')';
  return code;
};

////////////////////////////////////////////////////////
//                      move Block
////////////////////////////////////////////////////////
Blockly.Blocks['move'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendValueInput("DEGREE")
        .setCheck("Number")
        .appendField("move(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['move'] = function(block) {
  var value_degree = Blockly.JavaScript.valueToCode(block, 'DEGREE', Blockly.JavaScript.ORDER_ATOMIC);
  // TD: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

////////////////////////////////////////////////////////
//                      stop Block
////////////////////////////////////////////////////////
Blockly.Blocks['stop'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("stop();");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['stop'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

////////////////////////////////////////////////////////
//                      Tank location X Block
////////////////////////////////////////////////////////
Blockly.Blocks['tank_loc_x'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("loc_x()");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.JavaScript['tank_loc_x'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

////////////////////////////////////////////////////////
//                      Tank location Y Block
////////////////////////////////////////////////////////
Blockly.Blocks['tank_loc_y'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("loc_y()");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.JavaScript['tank_loc_y'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

////////////////////////////////////////////////////////
//                      speed Block
////////////////////////////////////////////////////////
Blockly.Blocks['tank_speed'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("speed()");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.JavaScript['tank_speed'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

////////////////////////////////////////////////////////
//                      health Block
////////////////////////////////////////////////////////
Blockly.Blocks['tank_health'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("health()");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.JavaScript['tank_health'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



