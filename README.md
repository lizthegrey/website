# Liz Fong-Jones Personal Website

A clean, maintainable static site to replace the Squarespace version.

## Structure

- `index.html` - Semantic HTML5 structure with all content
- `styles.css` - Modern CSS Grid layout with responsive design
- `script.js` - Minimal vanilla JavaScript for accordion functionality

## Features

- **Semantic HTML**: Human-readable, properly structured markup
- **CSS Grid Layout**: Modern, flexible layout that's easy to maintain
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Accordion Section**: Archived talks fold out/in on click
- **No Build Process**: Just static files - upload and serve
- **Accessible**: Proper ARIA labels and semantic elements

## Hosting

To host on your VM:

1. Install a simple web server (if not already installed):
   ```bash
   # Option 1: Python 3
   python3 -m http.server 8080

   # Option 2: nginx
   sudo apt install nginx
   sudo cp -r /home/lizf/website/* /var/www/html/
   ```

2. Or use any static hosting service (GitHub Pages, Netlify, etc.)

## Maintenance

### Update Content
Edit `index.html` directly - it's semantic and easy to read.

### Add New Talks
Add a new `<article class="talk">` block inside `#talks-content` in `index.html`.

### Style Changes
Modify CSS variables in `styles.css` at the top:
- `--accent-color`: Link color
- `--primary-bg`: Background color
- `--text-primary`: Main text color
- etc.

### Social Links
Update the social links in the `#social` section of `index.html`.

## No Dependencies

This site has zero dependencies - no npm, no build process, no frameworks.
Just HTML, CSS, and vanilla JavaScript.
