// scripts/generate-pdfs.cjs
const { readdir } = require('fs/promises');
const { join, basename } = require('path');
const { mdToPdf } = require('md-to-pdf');

const TEMPLATES_DIR = 'static/templates';
const LANGUAGES = ['en', 'sv'];

// Styling for PDFs
const pdfStyles = `
  body {
    font-family: 'Georgia', 'Times New Roman', serif;
    line-height: 1.6;
    color: #3d3020;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 60px;
  }
  
  h1 {
    color: #221b12;
    font-size: 28px;
    margin-top: 40px;
    margin-bottom: 20px;
    border-bottom: 3px solid #9d7d4f;
    padding-bottom: 10px;
  }
  
  h2 {
    color: #334a33;
    font-size: 22px;
    margin-top: 30px;
    margin-bottom: 15px;
    border-bottom: 2px solid #c8d9c8;
    padding-bottom: 8px;
  }
  
  h3 {
    color: #5c4830;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  p {
    margin-bottom: 12px;
  }
  
  ul, ol {
    margin: 15px 0;
    padding-left: 30px;
  }
  
  li {
    margin-bottom: 8px;
  }
  
  strong {
    color: #221b12;
    font-weight: 600;
  }
  
  em {
    font-style: italic;
  }
  
  blockquote {
    border-left: 4px solid #759e75;
    padding-left: 20px;
    margin: 20px 0;
    font-style: italic;
    color: #5c4830;
  }
  
  code {
    background-color: #f5f0e8;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    font-size: 14px;
  }
  
  pre {
    background-color: #f5f0e8;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
    margin: 20px 0;
  }
  
  pre code {
    background: transparent;
    padding: 0;
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 20px 0;
  }
  
  th, td {
    border: 1px solid #e8dcc8;
    padding: 10px;
    text-align: left;
  }
  
  th {
    background-color: #f5f0e8;
    font-weight: 600;
    color: #221b12;
  }
  
  hr {
    border: 0;
    border-top: 2px solid #e8dcc8;
    margin: 30px 0;
  }
  
  .checkbox {
    margin-right: 5px;
  }
  
  /* Print-specific styles */
  @media print {
    body {
      padding: 20px;
    }
  }
  
  /* Page break control */
  h1, h2, h3 {
    page-break-after: avoid;
  }
  
  table, pre, blockquote {
    page-break-inside: avoid;
  }
`;

async function generatePdf(mdFilePath, outputPath, lang) {
  const filename = basename(mdFilePath, '.md');
  console.log(`  Generating PDF for: ${filename} (${lang})...`);
  
  try {
    // For md-to-pdf v5.x, we pass the path directly
    const pdf = await mdToPdf(
      { path: mdFilePath },
      {
        dest: outputPath,
        css: pdfStyles,
        body_class: 'markdown-body',
        pdf_options: {
          format: 'Letter',
          margin: {
            top: '20mm',
            right: '20mm',
            bottom: '20mm',
            left: '20mm'
          },
          printBackground: true
        }
      }
    );
    
    console.log(`    ✓ Created: ${basename(outputPath)}`);
    return true;
  } catch (error) {
    console.error(`    ✗ Error generating PDF for ${filename}:`, error.message);
    return false;
  }
}

async function processLanguage(lang) {
  console.log(`\nProcessing ${lang.toUpperCase()} templates:`);
  
  const langDir = join(TEMPLATES_DIR, lang);
  
  try {
    const files = await readdir(langDir);
    const mdFiles = files.filter(file => file.endsWith('.md'));
    
    console.log(`  Found ${mdFiles.length} markdown files`);
    
    let successCount = 0;
    let failCount = 0;
    
    for (const file of mdFiles) {
      const mdPath = join(langDir, file);
      const pdfPath = join(langDir, file.replace('.md', '.pdf'));
      
      const success = await generatePdf(mdPath, pdfPath, lang);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
    }
    
    console.log(`\n  Summary for ${lang}:`);
    console.log(`    ✓ Success: ${successCount}`);
    if (failCount > 0) {
      console.log(`    ✗ Failed: ${failCount}`);
    }
    
    return { successCount, failCount };
  } catch (error) {
    console.error(`  Error reading directory ${langDir}:`, error.message);
    return { successCount: 0, failCount: 0 };
  }
}

async function main() {
  console.log('=================================');
  console.log('  PDF Template Generator');
  console.log('=================================');
  
  let totalSuccess = 0;
  let totalFail = 0;
  
  for (const lang of LANGUAGES) {
    const { successCount, failCount } = await processLanguage(lang);
    totalSuccess += successCount;
    totalFail += failCount;
  }
  
  console.log('\n=================================');
  console.log('  TOTAL RESULTS');
  console.log('=================================');
  console.log(`  ✓ Total Success: ${totalSuccess}`);
  if (totalFail > 0) {
    console.log(`  ✗ Total Failed: ${totalFail}`);
  }
  console.log('=================================\n');
  
  if (totalFail > 0) {
    process.exit(1);
  }
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
