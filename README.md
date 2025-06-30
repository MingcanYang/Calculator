# JavaScript Calculator

> A React-based calculator app built to meet the FreeCodeCamp JavaScript Calculator project requirements.

---

## 🚀 Features Overview

* **Number buttons (0–9)** with IDs: `zero`, `one`, `two`, …, `nine`.
* **Operator buttons** for addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`), with IDs: `add`, `subtract`, `multiply`, `divide`.
* **Decimal point** button (`.`) with ID: `decimal`.
* **Clear (AC)** button to reset all inputs and results, with ID: `clear`.
* **Equals (=)** button to compute the result, with ID: `equals`.
* **Display screen** shows the current input or result, with ID: `display`.

---

## 📜 User Stories

1. The calculator must contain a clickable **=** button with `id="equals"`.
2. The calculator must contain ten clickable number buttons for **0–9**, with IDs: `zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`.
3. The calculator must contain four operator buttons with IDs: `add`, `subtract`, `multiply`, `divide`.
4. The calculator must contain a clickable decimal point (`.`) button with `id="decimal"`.
5. The calculator must contain a clickable clear (`AC`) button with `id="clear"`.
6. The calculator must contain a display element with `id="display"`.
7. Pressing the **clear** button at any time resets the display to `0` and clears all calculations.
8. As numbers are entered, the display updates to show the current input.
9. The calculator must support chaining operations of any length, and pressing **=** shows the correct result.
10. The calculator must not allow numbers to start with multiple leading zeros.
11. Only one decimal point is allowed per number.
12. The calculator must handle operations on numbers with decimal points.
13. If two or more operators are entered consecutively, the calculator uses only the last operator entered (excluding the negative sign `-`).
14. Pressing an operator immediately after **=** should start a new calculation using the previous result.
15. The calculator results should support up to six decimal places, ensuring at least four decimal places of precision.

---

## 📁 Project Structure

```text
project-folder/
├── index.html    # Main HTML file (mount point + CDN imports)
├── style.css     # CSS for layout, buttons, and responsiveness
└── app.js        # React components and calculation logic
```

---

## ⚡ Quick Start

1. **Clone** or **download** the project:

   ```bash
   git clone https://github.com/yourusername/js-calculator.git
   ```
2. **Navigate** to the project directory and start a local server:

   ```bash
   cd js-calculator
   python3 -m http.server 8000
   ```
3. **Open** your browser to `http://localhost:8000`.

---

## 🧪 Testing

* The FreeCodeCamp test suite is included via:

  ```html
  <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
  ```
* Click the **Tests** button in the top-left corner to run all user-story checks.

---

## 🔧 Customization

* Change color scheme by editing `style.css`.
* Extend functionality by adding keyboard input support, percentage, square root, or other advanced operations.
