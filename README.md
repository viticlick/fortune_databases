# Developer quotes
This repo tries to recover several quotes related with development world and put all together.

Here's how to download the project and how to use it with different tools:

## How to use
- You can clone this project from the repo with the git command:
  > ~$: git clone https://github.com/gatsbimantico/developers-quotes.git

- Download only the quotes file.
  > ~$: wget https://raw.githubusercontent.com/gatsbimantico/developers-quotes/master/developers

- Download only the quotes file.
  > ~$: wget https://raw.githubusercontent.com/gatsbimantico/developers-quotes/master/developers.json

- Fetch the JSON file from the CDN
  > https://cdn.jsdelivr.net/gh/gatsbimantico/developers-quotes/developers.json

## Build in JSON

### Instructions
After installing <a href="https://nodejs.org">NodeJS</a>, if you don't have it already installed. Just simply run:
> ~$: node build.json.js

And it will produce a json file with the quotes, ready to be consumed.

## Build for Fortune

### About fortune
<a href="https://linux.die.net/man/6/fortune" title="fortune">fortune</a> is a simple program that displays a pseudorandom message from a database of quotations that first appeared in Version 7 Unix.

If you want to add some more quotes to your database, or remove it, the only thing that you have to do is to split the qoutes with the '%' character.

### Instructions

#### Instalation
If you don't have installed fortune yet on your system, probably you can download it from the public repositories.
For example, debian distrubutions can install the software with the command:
> ~$: sudo apt-get install fortune

You can try if the installation was right running the command
> ~$: fortune

And fortune will show you a random message from its database.

#### Build the database
To generate the databases for the program fortune you should execute the command into the project folder, where the developers file is placed.
> ~$: sudo strfile developers

That command will generate _developers.dat_ with all the qoutes in a binary file.

#### Place the database
The route used by fortune in a linux system is:
> /usr/share/games/fortunes/

Then, you can move the generated file to the fortune quotes source folder.
> ~$: sudo mv developers.dat /usr/share/games/fortunes/developers.dat

#### Test the database
To test the new database you only have to run the command with the 'developers' param, what means that database will be used by fortune
> ~$: fortune developers

## Expand your bounds, and make it fun
fortune can be used with other programs like <a href="https://es.wikipedia.org/wiki/Cowsay" title="cowsay">cowsay</a>. If you have cowsay installed you can run all together and show funny messages.
