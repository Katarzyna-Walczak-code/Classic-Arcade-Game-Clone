# Classic Arcade Game Clone Project

## Table of Contents

* [Overview](#Overview)
* [Instructions](#Instructions)
* [Rules](#Rules)

## Overview

The .zip file includes:
- static html file
- css styling
- object-oriented JavaScript files

To open the game, navigate to your local copy of index.html and open it in your browser.

## Instructions

Player, Enemy and Gem classes were created using object-oriented JavaScript (app.js).

1. The Enemy function initiates the Enemy by:
    - loading the image by setting this.sprite to the appropriate image in the image folder
    - setting the Enemy initial location
    - setting the Enemy speed
2. The update method for the Enemy:
    - updates the Enemy location
    - handles collision with the Player
3. The render method for the Enemy
4. The myPlayer function initiates the Player by:
    - loading the image by setting this.sprite to the appropriate image in the image folder
    - setting the Player initial location
5. The update method for the Player which creates a congratulations message when the player reaches water
6. The render method for the Player
7. The handleInput method, which receives user input, allowedKeys (the key which was pressed) and move the player according to that input
8. The Gems function initiates the Gem on the board
9. The update method for the Gem changes score to 1, when player touches that gem and move it to the corner location
10. The render method for the Gem

## Rules

1. You need to get to the water using keyboard arrow keys.
2. If you hit a bug, you will be relocated to the starting point.
3. If you get a gem, you will score 1 point.
