# node-slash-command

A basic [Slack slash command](https://api.slack.com/slash-commands) in node.js for running on the [Beep Boop](https://beepboophq.com) platform.  It can run on any platform as long as the following environment variables are provided:

+ `PORT` - the port to start the http server on
+ `SLACK_VERIFY_TOKEN` - the verify token for your Slack slash commands

Exposes a `/beepboop` route that is intended to power a Slack slash command.
