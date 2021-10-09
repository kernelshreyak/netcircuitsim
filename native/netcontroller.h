/*

    Header file for the NetController Virtual Machine (NCVM) implementation in C++.
    This file defines the main Controller class and associated components which are internal to the controller

    Part of the NetCicuit Simulation Package
    Author: Shreyak Chakraborty (C) 2021
    License: GNU GPLv3
*/


#ifndef NETCONTROLLER_H
#define NETCONTROLLER_H


#include <SFML/Graphics.hpp>
#include "connectors.h"

#define PINCOUNT 10
#define REGISTERCOUNT 5

/**
 * Defines a NCVM register array that holds values within the NetController's internal memory
*/
class NCVM_RegisterArray 
{
    public:
        int datavalues[REGISTERCOUNT];
        NCVM_RegisterArray()
        {
            for(int i=0;i < REGISTERCOUNT;i++)
                datavalues[i] = 0;
        }

        void setValue(int index,int value)
        {
            datavalues[index] = value;
        }
};



/**
 * The main class for the NetCircuit Controller
*/
class NetController 
{
    public:
        NCVM_RegisterArray internal_memory;
        NetPin pins[10];

        NetController()
        {
            for(int i=0;i<PINCOUNT;i++)
                pins[i].pinstate = 0;
        }

        /**
         * Executes a command on the NCVM and returns success or error message
        */
        std::string execNCVMCommand(std::string optype,int pin_number,int datavalue)
        {
            std::string returnmessage;
            // execution level validations for all NCVM commands. See specification for commands
            if(optype == "SETPIN"){
                if(datavalue == 1 || datavalue == 2){
                    pins[pin_number].pinstate = datavalue;
                    returnmessage =  "NCVM_EXEC_SUCCESS";
                }
                else{
                    returnmessage =  "NCVM_EXEC_ERROR: Invalid data value for SETPIN";
                }       
            }
            else{
                returnmessage =  "NCVM_EXEC_ERROR: Invalid OPTYPE";
            }

            return returnmessage;
        }

};





#endif