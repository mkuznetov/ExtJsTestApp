/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

// Application controller
Ext.define('SenchaApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'SenchaApp.view.main.HistoryLogger'
    ],
    logger: new SenchaApp.view.main.HistoryLogger(),

    alias: 'controller.main',

    data: "",

    onItemSelected: function (sender, record) {

        data = record.getData();
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            // Saving the data (email, timestamp) in history log.
            var key = data.email;
            var value = new Date();
            this.logger.addToHistory(key, value);
            console.log("data key: " + key + ", timestamp: " + value);
        }
    },
});

