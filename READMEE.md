# Portfolio - React Only (No Backend)

A modern, dark-themed portfolio website built with **React only**, featuring smooth scrolling navigation and **direct WhatsApp messaging**.

## 🚀 Features

- **Pure React App**: No backend server needed!
- **Direct WhatsApp Integration**: Messages go straight to your WhatsApp
- **Fixed Sidebars**: Profile sidebar (left) and navigation sidebar (right)
- **Smooth Scrolling**: Navigate seamlessly between sections
- **Responsive Design**: Optimized for all screen sizes
- **Dark Theme**: Sleek black background with green accents

## 📁 Project Structure

```
Adnan_Portfolio/
└── frontend/          # React app (Vite)
    ├── src/
    │   ├── components/
    │   │   ├── ProfileSidebar.jsx
    │   │   ├── NavigationSidebar.jsx
    │   │   ├── AboutSection.jsx
    │   │   ├── ServicesSection.jsx
    │   │   ├── ResumeSection.jsx
    │   │   ├── ToolsSection.jsx
    │   │   ├── ReviewsSection.jsx
    │   │   └── ContactSection.jsx
    │   ├── App.jsx
    │   └── index.css
    └── package.json
```

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Navigate to project**
```bash
cd d:/Adnan_Portfolio/frontend
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure WhatsApp Number**

Edit `src/components/ContactSection.jsx` line 14:
```javascript
const WHATSAPP_NUMBER = '923001234567'; // Replace with your number
```

**Important:** Use your WhatsApp number **without the + sign**
- Example: If your number is +92 300 1234567
- Use: `923001234567`

## 🚀 Running the Application

```bash
cd frontend
npm run dev
```

App will run on `http://localhost:5173`

## 📱 How WhatsApp Integration Works

1. User fills out the contact form
2. Clicks "Send Message"
3. **WhatsApp opens automatically** with a pre-filled message
4. User just clicks send in WhatsApp
5. **You receive the message directly** on your WhatsApp!

**No backend, no database, no complexity!** 🎉

## 🎨 Customization

### Update Your WhatsApp Number

Edit `frontend/src/components/ContactSection.jsx`:
```javascript
const WHATSAPP_NUMBER = 'YOUR_NUMBER_HERE'; // Without + sign
```

### Update Profile Information

Edit `frontend/src/components/ProfileSidebar.jsx`:
- Change name, title, location
- Update social media links
- Replace profile image

### Modify Content

Each section is a separate component in `frontend/src/components/`:
- `AboutSection.jsx` - About/intro text
- `ServicesSection.jsx` - Services offered
- `ResumeSection.jsx` - Education & experience
- `ToolsSection.jsx` - Tech stack
- `ReviewsSection.jsx` - Client testimonials
- `ContactSection.jsx` - Contact form

### Change Colors

Edit `frontend/src/index.css`:
```css
:root {
  --bg-primary: #000000;
  --accent-green: #00ff88;
  /* ... more variables */
}
```

## 📦 Build for Production

```bash
npm run build
```

This creates a `dist` folder ready for deployment.

## 🌐 Deployment

Deploy the built app to:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop `dist` folder
- **GitHub Pages**: Push `dist` folder
- **Any static hosting**: Upload `dist` folder

## 🔧 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **React Icons** - Icon library
- **Vanilla CSS** - Styling

## 📄 License

MIT License - Feel free to use this template!

---

Built with ❤️ using React
