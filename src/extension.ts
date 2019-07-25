// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscode-cpython-explorer" is now active!');
    require("./helloworld")(context);
    require("./gen")(context);
    require("./jump")(context);
    

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed

	// 	// Display a message box to the user
	// 	// vscode.window.showInformationMessage('Hello World!');
    //     let filename = vscode.window.activeTextEditor.document.fileName;
    //     vscode.window.showInformationMessage(filename)
	// 	let child = require('child_process').execFile('python', ['-m', 'dis', filename]); 
	// 	// use event hooks to provide a callback to execute when data are available: 
	// 	child.stdout.on('data', (data) => {
    //         let bc = data.toString();
    //         console.log(bc);
    //         let path = require('path');
    //         let fs = require('fs');
    //         // let filePath = path.join(vscode.workspace.rootPath, 'test.bc');
    //         let filePath = filename;
    //         if (filePath.endsWith(".py")) {
    //             filePath += "bc";
    //         }
    //         else {
    //             filePath += ".pybc";
    //         }
    //         vscode.window.showInformationMessage(filePath);
    //         fs.writeFileSync(filePath, bc, {encoding: 'utf8', flag: 'w'});
    //     });


	// 	// var openPath = vscode.Uri.parse("file:///" + filePath); //A request file path
	// 	// vscode.workspace.openTextDocument(openPath).then(doc => {
	// 	//    vscode.window.showTextDocument(doc);
	// 	// });


	// });

	// context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
