/**
 * This file defines controllers and their internal components
 * 
 * 
 * Part of NetCircuit Simulation Package
 * Author: Shreyak Chakraborty (C) 2021
*/


import $ from "jquery";


// not recommended to change these 2 values due to Architectural specs
const PINCOUNT = 10;
const REGISTERCOUNT = 10;


/**
 * Defines a NCVM register array that holds values within the NetController's internal memory
*/
class NCVM_RegisterArray 
{
	constructor(){
		this.datavalues = [];

		// initialize registers
		for (let i = 0; i < REGISTERCOUNT; i++) {
			this.datavalues[i] = {
				
				"registerindex": i,
				"registerdata": 0
			};
		}
	}

    setValue(index,value){
        this.datavalues[index] = value;
    }   
};


/**
 * The main class for defining the NetController device. It can take input and produce output as per NetCircuit Assembly code execution
 * It has 10 GPIO pins and 10 internal registers
*/
export default class NetController{
	constructor(pincount=10){
		this.pins = [];
		this.internal_memory = new NCVM_RegisterArray();
		this.pincolors = {
			0 : "#f78383",
			1 : "#a4e697",
			2 : "#97bff0"
		};

		// initialize the pins
		for(let i=0;i<pincount;i++){
			this.pins.push({
				pinnumber: i,
				pinstate: 0, //0 = OFF, 1 = INPUT, 2 = OUTPUT
			});
		}
	}

	
}

		