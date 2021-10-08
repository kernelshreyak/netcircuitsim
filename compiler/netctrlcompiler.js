/**
 * NetController Assembly Language Compiler
 * Part of NetCircuit Simulation Package
 * Author: Shreyak Chakraborty (C) 2021

*/
 	

function parse_command(cmd_string){
	const cmdparts = cmd_string.split(" ")

	if(cmdparts[0] == "") return;

	const command = {
		"optype" : cmdparts[0],
		"pinvalue" : cmdparts[1],
		"param" : cmdparts[2]
	}
	console.log(command)
}



/**
 * 
 * Main compiler driver function for NetController Assembly
 */
function compile_netcontroller_assembly(data){
	try{
		const commands = data.split("\n")
		
		console.log("---------------------------NETCONTROLLER ASSEMBLY COMPILER 1.0----------------------")
		console.log("Compilation start")

		for(let i=0;i<commands.length;i++)
			parse_command(commands[i])
		
		console.log("Compilation finished")
	}
	catch(err){
		throw new Error("COMPILER ERROR:" + err)
	}
		
}

exports.compile_netcontroller_assembly = compile_netcontroller_assembly;