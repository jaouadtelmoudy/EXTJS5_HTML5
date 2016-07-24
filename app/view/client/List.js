Ext.define('SOFA.view.client.List', {
   extend: 'Ext.grid.Panel',
   alias: 'widget.commandelist',
   title: 'Liste des Clients',
   store: 'Client',
   autoScroll: true,
   height: Ext.getBody(),
   initComponent: function() {
       this.tools = [{
            type:'plus',
            tooltip: 'Nouvelle Commande',
            itemId: 'addCommand',
            handler: function(event, toolEl, panel){
            // refresh logic
            }
        }],
       this.columns = [


           {
               header: 'Agent', dataIndex: 'agent', flex: 1,itemId: 'agentList',
               renderer: function(value, metadata, record){
                   myToolTipText = "<b>" + record.get('agent') + "</b>";
                   metadata.tdAttr = 'data-qtip="' + myToolTipText + '"';
                   return value;
               }
           },
           {
               header: 'Matricule', dataIndex: 'mat', flex: 2,itemId: 'matList',
               renderer: function(value, metadata, record){
                   myToolTipText = "<b>" + record.get('mat') + "</b>";
                   metadata.tdAttr = 'data-qtip="' + myToolTipText + '"';
                   return value;
               }
           }



       ];
       this.dockedItems = [{
           xtype: 'pagingtoolbar',
           store: this.store,   // same store GridPanel is using
           dock: 'bottom',
           displayInfo: true
       }],
       this.callParent(arguments);
   }
});
