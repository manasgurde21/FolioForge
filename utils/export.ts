
import { PortfolioData } from '../types';

export const downloadPortfolio = async (data: PortfolioData, element: HTMLElement) => {
  // Get the rendered HTML content from the React component
  const contentHTML = element.innerHTML;

  // Try to fetch the current style.css to include in the download
  let customCSS = '';
  try {
      const response = await fetch('style.css');
      if(response.ok) {
          customCSS = await response.text();
      }
  } catch (e) {
      console.warn("Could not fetch style.css, falling back to basic styles.");
      customCSS = `
        :root { --font-sans: 'Inter', sans-serif; --font-display: 'Montserrat', sans-serif; }
        body { font-family: var(--font-sans); }
        h1, h2, h3, h4, h5, h6 { font-family: var(--font-display); }
      `;
  }

  // Construct the complete HTML file
  // We include the necessary CDNs for Fonts and Bootstrap so the file works offline/standalone
  const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name} - Portfolio</title>
    <meta name="description" content="${data.tagline}">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:wght@400;700&family=Merriweather:wght@300;400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    
    <style>
        /* Custom Styles */
        ${customCSS}
        
        /* Ensure full height in standalone mode */
        body {
            min-height: 100vh;
        }
    </style>
</head>
<body>
    ${contentHTML}
    
    <!-- Bootstrap JS Bundle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

  // Create a Blob from the HTML string
  const blob = new Blob([fullHTML], { type: 'text/html' });
  
  // Create a temporary link element to trigger the download
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const fileName = `${data.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_portfolio.html`;
  a.download = fileName;
  
  // Trigger download
  document.body.appendChild(a);
  a.click();
  
  // Cleanup
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
