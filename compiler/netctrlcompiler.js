/**
 * NetController Assembly Language Compiler
 * Part of NetCircuit Simulation Package
 * Author: Shreyak Chakraborty (C) 2021

*/
 	

function parse_command(cmd_string){
	console.log("CMD REC: " + cmd_string)
	const cmdparts = cmd_string.split(" ")

	const opcode = cmd_string[0]
	console.log("OPCODE:"+opcode)
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