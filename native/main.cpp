/*
    This file serves as the main entry point for the C++ based native implementation of the NetCicuit Simulator.
    Utilizes SFML 2.5 for rendering the controllers, actuators and sensors in real-time

    All render operations occur here.
    This implementation uses a single thread as of now


    Part of the NetCicuit Simulation Package
    Author: Shreyak Chakraborty (C) 2021
    License: GNU GPLv3
*/


#include <SFML/Graphics.hpp>



#include "netcontroller.h"
#include "actuators.h"

#include <iostream>
#include <string>

using namespace std;


int main(int argc, char const *argv[])
{
    // define and initialize components
    NetController controller;


    //execute NVMC commands from input file/string 
    string execresult;
    execresult = controller.execNCVMCommand("SETPIN",0,1);
    execresult = controller.execNCVMCommand("SETPIN",1,2);
    
      
    // create shapes for the components rendering

    // fonts and labels
    sf::Font font;
    font.loadFromFile("arial.ttf"); 


    // Controller pins
    sf::CircleShape controllerpins[PINCOUNT];
    for(int i = 0;i< PINCOUNT;i++)
    {
        controllerpins[i].setRadius(10);
        controllerpins[i].setPosition(50*(i+1),20);
        controllerpins[i].setFillColor(sf::Color::Red);
    }


    // Main render cycle
    // Controller window
    sf::RenderWindow window(sf::VideoMode(800,300), "NetCircuit Controller");
    window.setFramerateLimit(0);
    // window.setVerticalSyncEnabled(true); 

    // // actuators window
    // sf::RenderWindow window2(sf::VideoMode(200,200), "NetCircuit Actuators");
    // window2.setFramerateLimit(0);
    // window2.setVerticalSyncEnabled(true);
    
    sf::Texture texture; 
    string filename; 
    int framenum = 0;
    while (window.isOpen())
    {
        sf::Event event;
        while (window.pollEvent(event))
        {
            if(event.type == sf::Event::Closed){
                window.close();
            }
        }


        window.clear(sf::Color::White); //background color




        //---------------------------- draw components started--------------------------------------------
        for(int i = 0;i< PINCOUNT;i++){
            // if(controller.pins[i].pinstate == 1){
            //     controllerpins[i].setFillColor(sf::Color::Blue);
            // }
            // else if(controller.pins[i].pinstate == 2){
            //     controllerpins[i].setFillColor(sf::Color::Green);
            // }

            if(i%2 == 0) controllerpins[i].setFillColor(sf::Color::Green);
            else controllerpins[i].setFillColor(sf::Color::Blue);

            window.draw(controllerpins[i]);
        }
        //---------------------------- draw components completed--------------------------------------------

        texture.create(window.getSize().x, window.getSize().y);
        texture.update(window);
        filename = "frame"+to_string(framenum)+".jpg";
        if(texture.copyToImage().saveToFile(filename))
        {
            cout << "frame saved" << filename <<endl;
        }
        
        // window.display();
        sf::sleep(sf::seconds(0.5));
        
        framenum += 1;
    }
    return 0;
}