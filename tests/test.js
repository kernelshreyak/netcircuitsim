import { compile_netcontroller_assembly } from  "../compiler/netctrlcompiler.js";
import fs from "fs";

const data = fs.readFileSync("abc.nctrl")

compile_netcontroller_assembly(data.toString())