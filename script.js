const editor = document.getElementById("editor");
const undoBtn = document.getElementById("undoBtn");
const redoBtn = document.getElementById("redoBtn");
const clearBtn = document.getElementById("clearBtn");
const statusText = document.getElementById("status");
const undoCount = document.getElementById("undoCount");
const redoCount = document.getElementById("redoCount");

// These arrays are stacks. The last item in each array is the top.
const undoStack = [];
const redoStack = [];
let currentText = "";

function updateDisplay(message) {
  undoBtn.disabled = undoStack.length === 0;
  redoBtn.disabled = redoStack.length === 0;
  undoCount.textContent = `${undoStack.length} ${undoStack.length === 1 ? "state" : "states"}`;
  redoCount.textContent = `${redoStack.length} ${redoStack.length === 1 ? "state" : "states"}`;
  if (message) statusText.textContent = message;
}

editor.addEventListener("input", () => {
  if (editor.value !== currentText) {
    undoStack.push(currentText);       // PUSH previous state
    currentText = editor.value;
    redoStack.length = 0;              // New edit clears redo history
    updateDisplay("Edit saved. The previous text was pushed onto the undo stack.");
  }
});

undoBtn.addEventListener("click", () => {
  if (undoStack.length === 0) return;
  redoStack.push(currentText);
  currentText = undoStack.pop();       // POP most recent saved state
  editor.value = currentText;
  updateDisplay("Undo complete: restored the most recent saved state.");
});

redoBtn.addEventListener("click", () => {
  if (redoStack.length === 0) return;
  undoStack.push(currentText);
  currentText = redoStack.pop();
  editor.value = currentText;
  updateDisplay("Redo complete: restored the change you undid.");
});

clearBtn.addEventListener("click", () => {
  if (editor.value === "" && currentText === "") {
    updateDisplay("The editor is already empty.");
    return;
  }
  undoStack.push(currentText);
  currentText = "";
  editor.value = "";
  redoStack.length = 0;
  updateDisplay("Editor cleared. You can use Undo to restore the previous text.");
});

updateDisplay("Start typing to create your editing history.");
