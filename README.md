# Remix MythX plugin

[![CircleCI](https://circleci.com/gh/aquiladev/remix-mythx-plugin/tree/master.svg?style=svg)](https://circleci.com/gh/aquiladev/remix-mythx-plugin/tree/master)

Performs Static and Dynamic Security Analysis using the MythX Cloud Service.

## Install plugin
In order to start using the plugin you need to activate it in plugin manager.

![Plugin activation](assets/plugin_activation.png?raw=true "Plugin activation")

The plugin has dependency `Solidity Compiler` plugin, you need to activate in also.

## Credentials
After plugin activation you may open the plugin.

![Plugin usage](assets/plugin_usage.png?raw=true "Plugin usage")

You can see a block with credentials on top of the left side panel. Those will be used for execution security analysis via MythX.
There are trial credentials by default. You can use those credentials to analyze your contracts, but the report will be restricted.

You can create own account on [mythx.io](https://mythx.io/)

## Execution
1. Select smart contract in a `File explorer`
2. Compile the contract in `Solidity compiler` plugin
3. Open `MythX` plugin
4. Select needed contract
5. Click `Analize`, wait response

## Report

![Plugin report](assets/plugin_report.png?raw=true "Plugin report")
When the report is received you will see a list of issues. You can click on an issue it will highlight the place of the issue in a code.