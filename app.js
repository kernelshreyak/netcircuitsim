import { compile_netcontroller_assembly } from  "./compiler/netctrlcompiler.js";
import $ from "jquery";

import NetController from "./NetCircuit/controller";

const controller = new NetController();

controller.renderpins();

$("#compile_code").on("click",() => {
    const data = $("#compiler_src").val();
    const compilation_result = compile_netcontroller_assembly(controller,data);
    $("#compiler_response").html(compilation_result);
});