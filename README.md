# Setup

Download and extract the files

Open command prompt and cd to where you put the bot files

Install the required dependencies by running the command below in the folder with the bot files
```
npm i
```

# Adding the token
Create a file called ".env" and type
```
CLIENT_TOKEN=bottoken
```
Replace "bottoken" with your bot's token

# Configuring the bot
Open config.json in a text editor

The default prefix is '!'
To change the prefix replace '!' with whatever prefix you want

To allow someone to use whitelisted commands
Copy the users discord id and paste it in the whitelisted section

# Changing the status
Open config.json
To change PLAYING, COMPETING, WATCHING, LISTENING, STREAMING
```
"ActivityType": "WATCHING",
```
Change WATCHING to one of the above options

To change what the bot is PLAYING, COMPETING, WATCHING, LISTENING, STREAMING


```
"Activity": "Glowstudent",
```
Change 'Glowstudent' to what you want your bot to be doing

# Running the bot
Run the command below to start the bot
```
node main.js
```

# Support
Questions or errors?
Join the Discord: https://discord.gg/4wM63P7ZUd
