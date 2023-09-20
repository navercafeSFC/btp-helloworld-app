sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("sap.btp.hellowordui5.controller.View1", {
            onInit: function () {

            },
            onAlertMessageBoxPress: function () {
               // debugger;
                MessageBox.alert("You have been alerted! Source Change Test 1");
            }            
        });
    });
