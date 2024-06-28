import * as vscode from "vscode";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.copyAllOpenFiles",
    async () => {
      // Get all open text documents
      const openTextDocuments = vscode.workspace.textDocuments;

      // Initialize content variable
      let content = "";

      // Iterate over all open documents and gather their content
      for (const doc of openTextDocuments) {
        if (doc.isUntitled) {
          // Skip untitled (unsaved) documents
          continue;
        }

        // Add file name as title
        content += `// ${path.basename(doc.fileName)}\n\n`;

        // Add file content
        content += doc.getText() + "\n\n";
      }

      // Create a new untitled document and set its content
      const newDoc = await vscode.workspace.openTextDocument({
        content: content,
        language: "plaintext",
      });

      // Show the new document in an editor
      await vscode.window.showTextDocument(newDoc);
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
