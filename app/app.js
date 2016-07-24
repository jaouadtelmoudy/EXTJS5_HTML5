Ext.application({
   name: 'SOFA',
   appFolder: 'app',
   autoCreateViewport : false,
   controllers: [
     'Client'
   ],
   
   launch: function() {
       Ext.create('SOFA.view.Viewport');
   }
});














/* Ext.onReady(function(){
     
    Ext.Msg.show({
   title: 'Milton',
   msg: 'Have you seen my stapler?',
   buttons: {
        yes: true,
        no: true,
        cancel: true
    },
    icon: 'milton-icon',
    fn: function(btn) {
        Ext.Msg.alert('You Clicked', btn);
    }
 }); 
    //Comment acceder a un objet $('#myDiv).html('Dull Work')
    Ext.get("myDiv").dom.innerHTML = 'Dull Work';
    
     var monPanelPrincipale = new Ext.Panel({
        title:'panel principal',
        frame:true,
    });
    
    var monViewport = new Ext.Viewport({
        title:'viewport',
        layout:'fit',
        items:monPanelPrincipale
    });
    
  var maFenetre = new Ext.Window({
        title : 'ma nouvelle fenere', //le titre de la fenetre
        width:500, //la largeur
        height:250 // la hauteur
    });
    
    // on affiche la fenetre
    maFenetre.show();  
   
}); 

Ext.onReady(function(){
    
     var pageUne = new Ext.Panel({
        title:'première page',
        html:'1ere page 1 '
    });
    
    var pageDeux = new Ext.Panel({
        title:'deuxième page',
        html:'deuxième page 2'
    });
    
    var pageTrois = new Ext.Panel({
        title:'Troisième page',
        html:'Troisième page 3'
    });
    
    var pageQuatre = new Ext.Panel({
        title:'Quatrième page',
        html:'Quatrième page 4'
    });
    
    var monTabPanel = new Ext.TabPanel({
        title:'Menu Pricipal',
        activeTab: 0,
        enableTabScroll:true,
        items:[pageUne,pageDeux,pageTrois,pageQuatre]
    });
    
    var monViewport = new Ext.Viewport({
        title:'viewport',
        layout:'fit',
        items:monTabPanel
    }) 
}); 


 Ext.onReady(function(){
    
    var mesChampsDeDonnees = [
        {name: 'numero_enregistrement'},
        {name: 'nom_enregistrement'},
        {name: 'date_creation',type:'date',dateFormat:'Y-m-d'}
    ];
    
    var mesDonnees = {
        rows:[
            {numero_enregistrement: 1,nom_enregistrement: 'Premier enregistrement',date_creation: '2011-03-13'},
            {numero_enregistrement: 2,nom_enregistrement: 'Deuxieme enregistrement',date_creation: '2011-03-14'},
            {numero_enregistrement: 3,nom_enregistrement: 'Troisième enregistrement',date_creation: '2011-03-15'}
        ]
    }
    
    
    var monStore = new Ext.data.JsonStore({
        root: 'rows',
        idProperty: 'numero_enregistrement',
        fields:mesChampsDeDonnees,
        data:mesDonnees 
    });
    
    
    var mesColonnes = [
        {header: 'Identifiant', width: 200, dataIndex: 'numero_enregistrement', sortable: true},
        {header: 'Nom',         width: 200, dataIndex: 'nom_enregistrement',    sortable: true},
        {header: 'Date',        width: 200, dataIndex: 'date_creation',xtype:'datecolumn',format:'d/m/Y',sortable: true}
    ];
    
    var monGridPanel = new Ext.grid.GridPanel({
        autoHeight:true,
        renderTo:Ext.getBody(),
        store: monStore,
        columns:mesColonnes
    });
    
    
    monGridPanel.hide();
}); 
 */
