import $ from "jquery";

export default class NetController{
	constructor(pincount=10){
		this.pins = [];
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

	renderpins(){
		$("#controllerpins").html("");
		this.pins.forEach((pin) => {
			$("#controllerpins").append(`
			<div id="pin${pin.pinnumber}" style="background-color:${this.pincolors[pin.pinstate]}">
				<b>PIN${pin.pinnumber}</b>
			</div>`);
		});
	}
}

		