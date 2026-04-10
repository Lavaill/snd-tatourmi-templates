In order to work on the stylesheets more easily I've had an AI agent make a script to generate a preview of the templates. Here's how you can use it :

To visualize the templates with sample data and the global stylesheet, use the included `render.js` script (requires Node.js):

1.  **Install dependencies** (first time only):
    ```powershell
    npm install nunjucks
    ```
2.  **Generate previews**:
    ```powershell
    node render.js
    ```

The script will scan all template directories and generate a `preview.html` file in each one. You can open these files in VS Code (ideally using the "Live Preview" extension) to see the final rendered handout.
