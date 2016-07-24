Ext.define('SOFA.store.Client', {
    extend: 'Ext.data.Store',
    model: 'SOFA.model.Client',
    autoLoad: true,

   proxy: {
       type: 'ajax',
       url: 'data/client.json',
       reader: {
           type: 'json',
           root: 'clients',
           successProperty: 'success'
       }
   }
});