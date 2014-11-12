sap.ui.jsview("jf_app_2.vista1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf jf_app_2.vista1
	*/ 
	getControllerName : function() {
		return "jf_app_2.vista1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf jf_app_2.vista1
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "APP SAPUI5 BY ICE",
			content: [new sap.m.Button({
                text : "Ir a",
                tap : function() {
                          alert("Hola hector!!");
                }
      })
			
			]
		});
	}

});