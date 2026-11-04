# Srimadhu M — Portfolio Website

A responsive, dark-themed portfolio built with HTML, CSS and vanilla JavaScript.

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a modern browser. No build step is required.
3. For best results, run a local server (for example, VS Code Live Server).

## Included files
- `assets/profile.jpg` — supplied profile photo
- `assets/Srimadhu_M_Resume.pdf` — supplied resume, linked to Download Resume
- `assets/nsn-ai-project.pdf` — supplied NSN AI project PDF, shown in the project preview dialog
- `index.html`, `styles.css`, `script.js` — complete website source

## Contact details\nThe contact section and footer display the supplied phone number, email, LinkedIn, GitHub and Vedasandur location.\n\n## Enable the EmailJS contact form
The form is wired to EmailJS but needs your own account credentials before it can send messages.

1. Create/sign in to an account at https://www.emailjs.com/
2. Add an email service and create an email template.
3. In the template, use these template variables:
   - `{{from_name}}`
   - `{{reply_to}}`
   - `{{subject}}`
   - `{{message}}`
4. Open `script.js` and replace:
   - `YOUR_EMAILJS_PUBLIC_KEY`
   - `YOUR_EMAILJS_SERVICE_ID`
   - `YOUR_EMAILJS_TEMPLATE_ID`
5. Save and reload the website. Test the form with your own email address.

The EmailJS public key is intended for browser use. Configure allowed origins / domain restrictions in EmailJS where available, and enable its anti-abuse protections.

## Before publishing
- Check all contact details and social links.
- Add real project links or screenshots for FitLife, Food Delivery App and Bus Booking System if you have them. Their current cards are presentation concepts based on the project names, not supplied project artifacts.
- Host the folder on GitHub Pages, Netlify or another static hosting provider. Keep the `assets` folder alongside `index.html`.
