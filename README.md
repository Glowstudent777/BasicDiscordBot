<h1>Basic Discord Bot</h1>
<div align="center">
<img alt="GitHub Downloads" src="https://img.shields.io/github/downloads/Glowstudent777/BasicDiscordBot/total">
<img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/Glowstudent777/BasicDiscordBot">
<a href="https://github.com/Glowstudent777/BasicDiscordBot/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/Glowstudent777/BasicDiscordBot"></a>
<a href="https://github.com/Glowstudent777/BasicDiscordBot"><img alt="GitHub license" src="https://img.shields.io/github/license/Glowstudent777/BasicDiscordBot"></a>
<a href="https://discord.gg/4wM63P7ZUd"><img alt="Discord" src="https://img.shields.io/discord/774005477617041440?label=Discord&logo=discord"></a>
</div>

# Features
- Easy Setup
- Easy Configuration

Commands:
- Avatar
- Ping
- Profile
- Server Info
- Ban
- Kick
- Bot Controls ( Shutdown / Restart )

# Setup

Download and extract the files

Open command prompt and cd to where you put the bot files

Install the required dependencies by running the command below in the folder with the bot files
```
npm i
```

# Creating the Bot
Go to https://discord.com/developers/applications

Create a new application and go to the Bot tab

Select Add Bot and copy the token

# Adding the Token

## If you do not have the .env file
Create a file called ".env" and type
```
CLIENT_TOKEN=
```
Paste your bot token after `CLIENT_TOKEN=`

## If you do have the .env file
Open the .env file and paste your bot token after
```
CLIENT_TOKEN=
```

# Configuring the Bot
Open config.json in a text editor

The default prefix is '!'
To change the prefix replace '!' with whatever prefix you want

To allow someone to use whitelisted commands
Copy the users discord id and paste it in the whitelisted section

To add multiple whitelisted IDs separate them with commas

One User ID
```
"whitelist": ["OneID"]
```

Two User IDs
```
"whitelist": ["OneID", "AnotherID"]
```
And so on for as many users as you need


# Changing the Activity Type
Open config.json
To change PLAYING, COMPETING, WATCHING, LISTENING, STREAMING
```
"ActivityType": "WATCHING",
```
Change WATCHING to one of the above options

# Changing the Activity
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

# Wiki
Check the <a href="https://github.com/Glowstudent777/BasicDiscordBot/wiki">wiki</a> for more information about hosting and configuration

# Support
Questions or errors?
Join the Discord: https://discord.gg/4wM63P7ZUd
