
// Business logic to be tested
Ext.define('SenchaApp.view.main.HistoryLogger', {
    // Implicitly inherits from Ext.Base
    //extend: 'Ext.Base',

    // Historical log of all selected entries
    history: {},

    // Adds a new entry to the historical log
    addToHistory: function(key, value) {
        //Object.defineProperty(this.history, key);
        this.history[key] = value;
    },

    // Gets an entry from the historical log
    getFromHistory: function(key) {
        return this.history[key];
    }
});

var HL = function CreateHistoryLogger() {
    this.history = {};
    this.addToHistory = function(key, value) {
        this.history[key] = value;
    }
    this.getFromHistory = function(key) {
        return this.history[key];
    }
}

