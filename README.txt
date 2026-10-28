STACK UNDO AND REDO TEXT EDITOR

Files:
- index.html: website structure
- style.css: website design
- script.js: stack and undo/redo functionality

RUN LOCALLY:
1. Extract the ZIP file.
2. Open the stack-undo-redo-website folder in Visual Studio Code.
3. Open index.html in a browser, or use the Live Server extension in VS Code.
4. Type in the text area and test Undo, Redo, and Clear.

DEPLOY:
1. Create/sign in to GitHub and create a new repository.
2. Upload index.html, style.css, and script.js (README.txt is optional).
3. On Vercel, import the GitHub repository and deploy it as a static site.
4. No build command is required. The website entry file is index.html.

PROJECT CONCEPT:
The application demonstrates stacks using Undo and Redo. Undo and redo histories use arrays where push() adds an item and pop() removes the most recent item, following Last In, First Out (LIFO).
