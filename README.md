# Copy All Open Files

## Overview

The "Copy All Open Files" extension for Visual Studio Code provides a convenient way to copy the contents of all currently open files into a single new file. This can be particularly useful for quickly consolidating code snippets, creating backups, or preparing code for sharing.

## Features

- **Copy All Open Files:** Copies the content of all open files in the editor and combines them into a single new file.
- **File Titles Included:** Each file's content is preceded by its file name for easy identification.

## Installation

1. **From the Marketplace:**

   - Visit the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/) and search for "Copy All Open Files."
   - Click "Install" to add the extension to your VS Code.

2. **Manual Installation:**
   - Download the latest `.vsix` file from the [releases](#) page.
   - Open VS Code, go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.
   - Click on the `...` at the top-right corner of the Extensions view, select `Install from VSIX...`, and choose the downloaded `.vsix` file.

## Usage

1. Open all the files you want to copy in VS Code.
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the Command Palette.
3. Type `Copy All Open Files` and select the command.
4. A new file will be created containing the content of all open files, each prefixed with its respective file name.

## Example

If you have the following files open in VS Code:

- **file1.js**:

  ```javascript
  console.log("This is file 1");
  ```

- **file2.js**:
  ```javascript
  console.log("This is file 2");
  ```

Running the "Copy All Open Files" command will create a new file with the following content:

```plaintext
// file1.js
console.log("This is file 1");

// file2.js
console.log("This is file 2");
```

## Development

### Prerequisites

- [Node.js](https://nodejs.org/)
- [VS Code](https://code.visualstudio.com/)
- [TypeScript](https://www.typescriptlang.org/)

### Building the Extension

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/copy-all-open-files.git
   cd copy-all-open-files
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Compile the TypeScript code:

   ```sh
   npm run compile
   ```

4. Launch the extension in VS Code:
   - Open the project in VS Code.
   - Press `F5` to open a new VS Code window with the extension loaded.

### Publishing

1. Ensure you have the `vsce` tool installed:

   ```sh
   npm install -g vsce
   ```

2. Package the extension:

   ```sh
   vsce package
   ```

3. Publish the extension:
   ```sh
   vsce publish
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs, feature requests, or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
