# Singer Psych Website

A professional mental health practice website for Lisa Singer, Psychiatric Mental Health Nurse Practitioner.

## 🚀 Quick Start

Simply open `index.html` in any web browser. No installation or build process required!

## 📋 Contact Information

- **Phone:** (516) 366-4397
- **Location:** Flushing, NY
- **Email:** contact@singerpsych.com

## 📸 Adding Lisa Singer's Photo

To add the professional photo:

1. Save your professional photo as `lisa-singer-photo.jpg` in the main project folder
2. The image will automatically display on the About section of the homepage
3. Recommended image size: 300px width minimum, professional headshot format

**Note:** I've attached a photo in our conversation - save it to the project folder as `lisa-singer-photo.jpg`

## 📧 Contact Form - Setup Instructions

The contact form is currently **client-side only** and shows an alert message. To make it fully functional and receive form submissions via email, you have several options:

### Option 1: Formspree (Easiest - Recommended)
**Free tier available, no coding required**

1. Go to [Formspree.io](https://formspree.io/)
2. Sign up for a free account
3. Create a new form and get your form endpoint
4. Update the form in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Add name attributes to inputs:
   ```html
   <input type="text" name="name" placeholder="Your Name" required>
   <input type="email" name="email" placeholder="Your Email" required>
   <input type="tel" name="phone" placeholder="Phone Number">
   <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
   ```
6. Remove the JavaScript form handling from `script.js` (lines 40-62)

**Pros:** Easy setup, free tier available, reliable
**Cons:** Formspree branding on free tier

### Option 2: EmailJS (No Backend Required)
**Free tier: 200 emails/month**

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Connect your email service (Gmail, Outlook, etc.)
3. Create an email template
4. Add EmailJS SDK to your HTML (before closing `</body>`):
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```
5. Update the form submission code in `script.js` with EmailJS code
6. Follow their documentation for implementation

**Pros:** Direct to your email, customizable
**Cons:** Requires some JavaScript configuration

### Option 3: Web3Forms
**Free, unlimited form submissions**

1. Go to [Web3Forms.com](https://web3forms.com/)
2. Enter your email to get an access key
3. Update form in `index.html`:
   ```html
   <form action="https://api.web3forms.com/submit" method="POST">
       <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
       <input type="text" name="name" placeholder="Your Name" required>
       <!-- rest of form -->
   </form>
   ```

**Pros:** Completely free, unlimited submissions, no signup required
**Cons:** Less customization options

### Option 4: Backend Service (Most Control)
**Requires hosting and backend development**

If you want full control, you can:
1. Create a backend API (Node.js, Python Flask, PHP, etc.)
2. Use a service like Netlify Functions, AWS Lambda, or Vercel
3. Set up your own email sending server
4. Update the form to POST to your API endpoint

**Pros:** Complete control, professional solution
**Cons:** More complex, requires backend development and hosting

### Recommended Solution for This Project:
**Use Formspree or Web3Forms** - they're the easiest to set up and perfect for a small practice website.

## 🎨 Features

### Main Website (index.html)
- Hero section with calming background image
- About section with profile photo
- Mental health services showcase
- Contact form
- Responsive design with mobile hamburger menu

### ADHD Services Page (adhd.html)
- Comprehensive ADHD information
- FAQ section with 8 common questions
- SEO optimized with:
  - Meta tags for search engines
  - Schema.org markup for AI search engines (ChatGPT, Perplexity, etc.)
  - Open Graph tags for social sharing
  - Canonical URL
- Symptoms breakdown
- Service offerings

## 📱 Mobile Menu

On mobile devices (under 768px width), the navigation automatically collapses into a hamburger menu that slides out from the right.

## 🔧 Customization

### Update Content
- Edit `index.html` for home page content
- Edit `adhd.html` for ADHD services page
- Update contact information in both files

### Change Colors
- Open `styles.css`
- Main brand color: `#2c5f7d` (teal blue)
- Accent color: `#ff6b6b` (coral red)
- Search and replace to change throughout the site

### Add More Pages
1. Create a new HTML file (e.g., `services.html`)
2. Copy the header and footer from `index.html`
3. Add your content
4. Add a link to the navigation menu

## 🌐 SEO Features

The ADHD page is optimized for search engines and AI assistants:
- Proper meta descriptions and keywords
- Schema.org medical markup
- FAQ schema for rich search results
- Mobile-friendly responsive design
- Fast loading (no framework overhead)

## 🚫 What You DON'T Need

- ❌ Node.js or npm (despite the earlier confusion!)
- ❌ Build tools or compilation
- ❌ Database setup
- ❌ Complex hosting

## 📁 File Structure

```
Lisa Singer NP/
├── index.html          # Main homepage
├── adhd.html          # ADHD services page
├── styles.css         # All styling
├── script.js          # Animations, menu, form handling
├── lisa-singer-photo.jpg  # Professional photo (you need to add this)
└── README.md          # This file
```

## 🌟 Next Steps

1. **Add your photo** - Save as `lisa-singer-photo.jpg`
2. **Set up contact form** - Follow Option 1 or 3 above
3. **Review content** - Update any placeholder text
4. **Test on mobile** - Check responsive design
5. **Deploy** - Upload to your hosting provider

## 📞 Support

For questions about the website, contact the developer or refer to this README.

---

Built with HTML, CSS, and JavaScript - No frameworks, no complications!
