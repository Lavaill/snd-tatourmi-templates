const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'mothershipThermal.css');
const css = fs.readFileSync(cssPath, 'utf8');
const cssTag = `<style>\n${css}\n</style>`;

// Configure Nunjucks
nunjucks.configure({ autoescape: false }); // Set autoescape to false as templates use | safe

function renderTemplate(dirPath) {
    const templateName = path.basename(dirPath);
    let templatePath = path.join(dirPath, 'print.html.njk');
    
    // Support for both extensions if needed
    if (!fs.existsSync(templatePath)) {
        templatePath = path.join(dirPath, 'print.html.njks');
    }
    
    const dataPath = path.join(dirPath, 'skeleton.json');
    const outputPath = path.join(dirPath, 'preview.html');

    if (!fs.existsSync(templatePath) || !fs.existsSync(dataPath)) {
        return;
    }

    try {
        const rawData = fs.readFileSync(dataPath, 'utf8');
        const json = JSON.parse(rawData);
        
        // Use the skeleton JSON directly as the 'it' object
        const renderData = { it: json };

        const templateSource = fs.readFileSync(templatePath, 'utf8');
        let rendered = nunjucks.renderString(templateSource, renderData);
        
        // Strip the external githack stylesheet link to avoid conflicts
        rendered = rendered.replace(/<link[^>]+mothership\.css[^>]*>/gi, '<!-- External CSS removed for preview -->');

        // Inject CSS
        if (rendered.includes('</head>')) {
            rendered = rendered.replace('</head>', `${cssTag}\n</head>`);
        } else if (rendered.includes('<body>')) {
            rendered = rendered.replace('<body>', `<body>\n${cssTag}`);
        } else {
            rendered = `${cssTag}\n${rendered}`;
        }

        fs.writeFileSync(outputPath, rendered);
        console.log(`[OK] Generated preview in ${templateName}`);
    } catch (err) {
        console.error(`[ERROR] Failed to render ${templateName}:`, err.message);
    }
}

// Get all directories starting with 'tatourmi_'
const dirs = fs.readdirSync(__dirname, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name.startsWith('tatourmi_'))
    .map(dirent => path.join(__dirname, dirent.name));

console.log(`Starting batch render for ${dirs.length} templates...`);
dirs.forEach(renderTemplate);
console.log('Done.');
