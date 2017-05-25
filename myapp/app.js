/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'SenchaApp',

    extend: 'SenchaApp.Application',

    requires: [
        'SenchaApp.view.main.Main'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'SenchaApp.view.main.Main'
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to SenchaApp.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});

// OOP
/*
 // Shape does implicitly inherit from Ext.Base
 Ext.define('Shape', {

     // extend: 'Ext.Base',

     // All properties inside the config block have 
     // their accessor methods automatically generated
     config: {
         color: 'gray',     // creates getColor|setColor
         border: true,      // creates getBorder|setBorder
         shapeName: 'shape' // creates getShapeName|setShapeName
     },

     constructor: function (config) {
         Ext.apply(this, config);
         // Initialize the config block for this class
         // This auto-generates the accessor methods 
         // More information on this in the next section
         this.initConfig(config);
     },

     getShapeName: function () {
         return this.shapeName;
     },

     // This function will generate the test sentence for this shape, 
     // so no need to pass it as an argument
     getTestSentence: function () {
         return ['The area of the', this.getColor(), 
                 this.getShapeName(), 
                 (this.getBorder() ? 'with a border' : ''), 'is:', 
                 this.getArea()].join(' ');
     }
 });

 Ext.define('Square', {
     extend: 'Shape',

     // In a child class, the config block should only 
     // contain new configs particular for this class
     config: {
         side: 0 //  getSide and setSide are now available
     },
     color: 'red',
     shapeName: 'square',

     getArea: function() {
         return this.getSide() * this.getSide();
     },

     // 'side' is a property defined through the 'config' block, 
     // We can use this method before the value is modified
     // For instance, checking that 'side' is a number
     applySide: function (newValue, oldValue) {
         return (Ext.isNumber(newValue)? newValue : oldValue);
     }
 });

 var square = Ext.create('Square', {
     side: 4
 });

 square.side = 'five';

 // To modify it instead, we'll use the setSide method:
 square.setSide(5);

 Ext.define('ClosedCircuit', {
     extend: 'Square',

     side: 0,
     color: 'red',
     shapeName: 'ClosedCircuit',

     getArea: function() {
         return 0;
     },

     getTestSentence: function () {
         return "ClosedCircuit";
     }
 });

 var circuit = Ext.create('ClosedCircuit', {
     side: 10
 });

 // The generateTestSentence function doesn't exist anymore
 // so use the one that comes with the shape
 if (Ext.Msg) {
   Ext.Msg.alert('Message', [ square.getTestSentence() ].join('<br />'));
   Ext.Msg.alert('Message', [ circuit.getTestSentence() ].join('<br />'));
 } else {
   console.log(square.getTestSentence());
   console.log(circuit.getTestSentence());

   square.setSide(10);
   console.log(square.getTestSentence());
 }
*/

