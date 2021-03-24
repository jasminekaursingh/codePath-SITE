# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jasmine Singh**

Time spent: **#5** hours spent in total

Link to project: https://glitch.com/edit/#!/frosted-aromatic-mind
## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](http://g.recordit.co/mCrLyQd1HG.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

stackoverflow.com for general coding questions in Javascript, HTML, and CSS and w3schools.com for how to create round buttons assets in CSS.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

Challenges I faced during creating this submission came mostly in modifying the playClueSequence function to play the clues at a faster rate every round.
This mostly came in the fact that I was overcomplicating what I would ultimately need to do and had issues in eliminating the pause gaps after each button hold in a clue.
I tried many different methods which took up a majority of the time I could spend on this project, such as doing do-while loops, nested-if statements, for loops, etc. to divide or subtract milliseconds from the clueHoldTime variable.
I overcame this situation by utilizing a simple nested if-statement that utilized the index variable already provided in the for loop.
The for loop would execute the if-statement if the index was not zero, meaning that after the first turn, the clueHoldTime would decrease by 100ms and continue into the rest of the for-loop.
This meant that when executing the playClueSequence function when starting the game, the clue would play at the normal starting hold time and decrease by 100ms increments every single round until either winning or losing the game.
This effectively sped up the clue sequence and solved the biggest challenge I encountered while working on this submission.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Questions I have regarding web development would be regarding Full-Stack development and programming databases and servers. How would you go about programming a dynamic website's server and database to work together?
How would you optimize this website's database and server in order to work for all of the users? Furthermore, I had read about MongoDB and how it is a NoSQL database and I was curious on how exactly the different mechanism for storage and retrieval of data would work in the case of it being non-relational.
I hope to get answers to these questions regarding Full-Stack development and programming servers and databases by participating in Codepath's SITE internship!

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would definitely attempt to add a timer function and different audio and image files to finish off the rest of the optional features for the game! After doing this, I would want to go in a refactor many functions,
namely the guess(btn) function located in script.js to make it much more optimized and efficent. I would also liked to make the entire webpage look a bit more aesthetically pleasing by using different images for the background, text fonts and colors.
I would also like to add the ability to make the game never-ending by continuing to play clue sequences after each round until the user has used up all of their attempts.
I would most likely have to create a maximum speed for the clues to play at in order to still have the possibility for the user to actually view and hear the clues, but I would want them to play very quickly to make it the most difficult version of the game.


## License

    Copyright [Jasmine Kaur Singh]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.