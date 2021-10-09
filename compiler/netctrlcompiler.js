/*
 * NetController Assembly Language Compiler
 * 
 * Implements the JavaScript version of the NetController Virtual Machine (NCVM)
 * 
 * Part of NetCircuit Simulation Package
 * Author: Shreyak Chakraborty (C) 2021

*/

/**
 * Execute a command on the NCVM
 * @param {*} controller [the NetController instance to execute NCVM commands] 
 * @param {*} cmd_string [single command string in NCVM Assembly] 
 * @returns Execution result/error from NCVM
 */
function exec_ncvm_command(controller,cmd_string){
	const cmdparts = cmd_string.split(" ")

	if(cmdparts[0] == "") return;

	const command = {
		"optype" : cmdparts[0],
		"pinvalue" : cmdparts[1],
		"param" : cmdparts[2]
	};

	console.log(command);
	// execute the command on NCVM
	try{
		// validate commands
		switch (command.optype) {
			case "SETPIN":
				console.log(`NCVM: set PIN${command.pinvalue} to ${command.param}`);
				controller.pins[command.pinvalue].pinstate = command.param;
				controller.renderpins();
				break;
		
			default:
				return "NCVM_EXEC_ERROR: ";
				break;
		}
		return "";

	}
	catch(err){
		console.error(err);
		return "NCVM_EXEC_ERROR:" + err;
	}
	

	
}



/**
 * 
 * Main compiler driver function for NetController Assembly
 * @param {*} controller [the NetController instance to execute NCVM commands] 
 * @param {*} data [NCVM Assembly code] 
 * @returns Compilation Error/Success message string
 */
function compile_netcontroller_assembly(controller,data){
	let compiler_response = "";
	console.log(data);
	try{
		const commands = data.split("\n");
		if(commands.length == 0){
			return "NCVM_COMPILE_ERROR: Invalid Assembly code";
		}
		console.log("commands",commands);
		console.log("-----NETCONTROLLER ASSEMBLY COMPILER 1.0----");
		console.log("Compilation start");

		for(let i=0;i<commands.length;i++){
			let execresponse = exec_ncvm_command(controller,commands[i]);
			if(execresponse.includes("NCVM_EXEC_ERROR")){
				return execresponse;
			}
			compiler_response += execresponse;
		}
				
		
		console.log("Compilation finished");
		
		if(compiler_response == "")
			return "NCVM Execution success!";
	}
	catch(err){
		console.error(err);
		return "NCVM_COMPILE_ERROR:" + err;
	}
		
}

exports.compile_netcontroller_assembly = compile_netcontroller_assembly;