Ext.define('SOFA.view.User', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.user',
    id: 'usertabpanel',
    
    autoScroll : true,
    //resizable: true,
    requires: [
        'SOFA.view.client.List'
         
    ],
    
    initComponent: function() {
        
        this.items = [{
            xtype: 'form',
            bodyStyle: 'padding:5px',
            title: 'Liste des commandes',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'clientcommande',
                align: 'start'
            },{
                xtype: 'commandelist',
                align: 'end',
                height: 285
            }]
        }  ];
    
    this.callParent();
//    this.on('afterrender', function() {
//        if (this.getHeight() > this.maxHeight) {
//            this.setHeight(this.maxHeight);
//        }
//       this.center();
//    }, this);
    
    }
});