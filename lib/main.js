#!/usr/bin/env node

var cli = require("./cli");

cli.runCli(process, console, cli.parseArgs());
