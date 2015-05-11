////////////////////////////////////////////////////////
//                      Value Block
////////////////////////////////////////////////////////
Blockly.Blocks['value'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(65);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0"), "Value");
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['value'] = function(block) {
  var text_value = block.getFieldValue('Value');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



////////////////////////////////////////////////////////
//                      comparison Block
////////////////////////////////////////////////////////
Blockly.Blocks['comparison'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("A");
    this.appendValueInput("B")
        .appendField(new Blockly.FieldDropdown([["==", "EQ"], ["!=", "NEQ"], ["<", "LT"]]), "operators");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};

Blockly.JavaScript['comparison'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_operators = block.getFieldValue('operators');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


////////////////////////////////////////////////////////
//                      conditional Block
////////////////////////////////////////////////////////
Blockly.Blocks['condition_block'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendValueInput("A");
    this.appendValueInput("B")
        .appendField(new Blockly.FieldDropdown([["&&", "AND"], ["||", "OR"], ["", ""]]), "condition");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};

Blockly.JavaScript['condition_block'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_condition = block.getFieldValue('condition');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


////////////////////////////////////////////////////////
//                      true/False Block
////////////////////////////////////////////////////////
Blockly.Blocks['true_false'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["true", "T"], ["false", "F"], ["", ""]]), "TF");
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};

Blockly.JavaScript['true_false'] = function(block) {
  var dropdown_tf = block.getFieldValue('TF');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


////////////////////////////////////////////////////////
//                      getter Block
////////////////////////////////////////////////////////
Blockly.Blocks['register_get'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["X", "X"],
                                                ["Y", "Y"],
                                                ["SPEEDX", "SPEEDX"],
                                                ["SPEEDY", "SPEEDY"],
                                                ["DAMAGE", "DAMAGE"],
                                                ["AIM", "AIM"],
                                                ["COOLDOWN", "COOLDOWN"],
                                                ["DISTANCE", "DISTANCE"],
                                                ["DATA", "DATA"],
                                                ["INDEX", "INDEX"],
                                                ["RANDOM", "RANDOM"],
                                                ["A", "A"],
                                                ["B", "B"],
                                                ["C", "C"],
                                                ["D", "D"],
                                                ["E", "E"],
                                                ["F", "F"],
                                                ["G", "G"],
                                                ["H", "H"],
                                                ["I", "I"],
                                                ["J", "J"],
                                                ["K", "K"],
                                                ["L", "L"],
                                                ["M", "M"],
                                                ["N", "N"],
                                                ["O", "O"],
                                                ["P", "P"],
                                                ["Q", "Q"],
                                                ["R", "R"],
                                                ["S", "S"],
                                                ["T", "T"],
                                                ["U", "U"],
                                                ["V", "V"],
                                                ["W", "W"],
                                                ["Z", "Z"]]), "RegisterName");
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['register_get'] = function(block) {
  var registername = block.getFieldValue('RegisterName');
  
  var code = 'Registers.getR(\'' + registername + '\')';
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


////////////////////////////////////////////////////////
///                      setter Block
////////////////////////////////////////////////////////
Blockly.Blocks['register_set'] = {
  init: function() {
    this.setColour(260);
    this.appendValueInput("RegisterValue")
        .setCheck("Number")
        .appendField("set ")
        .appendField(new Blockly.FieldDropdown([["SPEEDX", "SPEEDX"],
                                                ["SPEEDY", "SPEEDY"],
                                                ["AIM", "AIM"],
                                                ["INDEX", "INDEX"],
                                                ["RANDOM", "RANDOM"],
                                                ["A", "A"],
                                                ["B", "B"],
                                                ["C", "C"],
                                                ["D", "D"],
                                                ["E", "E"],
                                                ["F", "F"],
                                                ["G", "G"],
                                                ["H", "H"],
                                                ["I", "I"],
                                                ["J", "J"],
                                                ["K", "K"],
                                                ["L", "L"],
                                                ["M", "M"],
                                                ["N", "N"],
                                                ["O", "O"],
                                                ["P", "P"],
                                                ["Q", "Q"],
                                                ["R", "R"],
                                                ["S", "S"],
                                                ["T", "T"],
                                                ["U", "U"],
                                                ["V", "V"],
                                                ["W", "W"],
                                                ["Z", "Z"]]), "RegisterName")
        .appendField(" to ");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Set Value to Register');
  }
};

Blockly.JavaScript['register_set'] = function(block) {
  var registervalue = Blockly.JavaScript.valueToCode(block, 'RegisterValue', Blockly.JavaScript.ORDER_ATOMIC);
  var registername = block.getFieldValue('RegisterName');
  
  var code = ' Registers.setR(\'' + registername + '\', ' + registervalue + '); ';
  
  return code;
};
