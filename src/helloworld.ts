import { Uri } from "vscode";

const vscode = require("vscode");
module.exports = function(context) {
    context.subscriptions.push(vscode.commands.registerCommand("extension.sayHello2", () => {
        vscode.window.showInformationMessage("Extension activated!");
    }));
};


