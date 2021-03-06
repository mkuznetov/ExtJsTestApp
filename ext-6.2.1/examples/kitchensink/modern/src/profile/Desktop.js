Ext.define('KitchenSink.profile.Desktop', {
    extend: 'KitchenSink.profile.Base',

    controllers: ['Main'],

    views: ['TouchEvents'],

    mainView: 'KitchenSink.view.desktop.Main',

    isActive: function () {
        return Ext.os.is.Desktop;
    }
});
