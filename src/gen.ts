import { Uri } from "vscode";

const vscode = require("vscode");
const child_process = require("child_process");
const path = require('path');
const fs = require('fs');
module.exports = function(context) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.generateBytecode', (uri) => {
        if (!uri) {
            vscode.window.showInformationMessage("Empty file");
            return;
        }
        console.log(uri.path);
        let child = require('child_process').execFile('python', ['-m', 'dis', uri.fsPath]); 
		child.stdout.on('data', (data) => {
            console.log("???");
            let bc = data.toString();
            console.log(bc);
            let filePath = uri.fsPath;
            if (filePath.endsWith(".py")) {
                filePath += "bc";
            }
            else {
                filePath += ".pybc";
            }
            // vscode.window.showInformationMessage(filePath);
            vscode.window.showInformationMessage("Generation succeeded");
            fs.writeFileSync(filePath, bc, {encoding: 'utf8', flag: 'w'});
        });
    }));
};
