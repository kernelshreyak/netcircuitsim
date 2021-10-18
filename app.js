import { compile_netcontroller_assembly } from  "./compiler/netctrlcompiler.js";
import $ from "jquery";

import NetController from "./NetCircuit/controller";

let controller = new NetController();


// Render functions for the controller

controller.renderpins = function(){
    $("#controllerpins").html("");
    this.pins.forEach((pin) => {
        $("#controllerpins").append(`
        <div id="pin${pin.pinnumber}" style="background-color:${this.pincolors[pin.pinstate]}">
            <b>PIN${pin.pinnumber}</b>
        </div>`);
    });
};
controller.renderregisters = function(){
    $("#registers").html("");
    this.internal_memory.datavalues.forEach((register) => {
        $("#registers").append(`
        <div class='register' id='${register.registerindex}'">
            <b>R${register.registerindex}<br><b>DATA</b>: ${register.registerdata}</b>
        </div>`);
    });
};



controller.renderpins();
controller.renderregisters();


$("#compile_code").on("click",() => {
    const data = $("#compiler_src").val();
    const compilation_result = compile_netcontroller_assembly(controller,data);
    console.log("compilation_result",compilation_result);
    $("#compiler_response").html(compilation_result);
});