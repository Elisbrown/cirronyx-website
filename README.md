# Cirronyx Consulting Website

Enterprise Cloud, AI & DevOps consulting website built with React and deployed to Google Cloud Storage.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Google Cloud SDK (for deployment)
- Access to your GCS bucket

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The website will open at `http://localhost:3000`

## 📁 Project Structure

```
cirronyx-website/
├── public/
│   ├── index.html          # HTML template
│   └── manifest.json       # PWA manifest
├── src/
│   ├── data/               # Easy-to-edit content files
│   │   ├── projects.json   # Case studies/portfolio
│   │   ├── services.json   # Service offerings
│   │   ├── team.json       # Leadership team (with photos)
│   │   └── testimonials.json # Client testimonials
│   ├── App.jsx             # Main application
│   ├── index.js            # React entry point
│   └── index.css           # Tailwind CSS
├── package.json            # Dependencies
├── deploy.sh               # Deployment script
└── README.md               # This file
```

## 📝 Updating Content

### Adding a New Project

Edit `src/data/projects.json`:

```json
{
  "id": "unique-project-id",
  "title": "Project Title",
  "client": "Client Name",
  "industry": "Industry",
  "challenge": "What problem did they have?",
  "solution": "What did you build?",
  "results": [
    "Metric 1: 50% improvement",
    "Metric 2: $5M saved"
  ],
  "technologies": ["AWS", "Kubernetes", "Python"]
}
```

### Adding a Testimonial

Edit `src/data/testimonials.json`:

```json
{
  "id": "testimonial-4",
  "quote": "Working with Cirronyx was transformative...",
  "author": "CTO Name",
  "company": "Company Name",
  "project": "Project type"
}
```

### Adding a Team Member

Edit `src/data/team.json`:

```json
{
  "id": "team-member-2",
  "name": "Full Name",
  "title": "Job Title",
  "photo": "/team/photo.jpg",
  "bio": "Biography...",
  "expertise": ["Area 1", "Area 2"],
  "education": "Education details",
  "certifications": "Key certifications"
}
```

**Adding Photos:**
1. Save square photo (600x600px) to `public/team/firstname-lastname.jpg`
2. Add `"photo": "/team/firstname-lastname.jpg"` to team member JSON
3. Build and deploy

See `TEAM_SECTION_GUIDE.md` for detailed photo guidelines.

### Modifying Services

Edit `src/data/services.json` to add/modify service offerings.

## 🏗️ Building for Production

```bash
# Create optimized production build
npm run build
```

This creates a `build/` directory with static files ready for deployment.

## 🚢 Deployment to Google Cloud Storage

### One-Time Setup

1. **Configure your bucket name** in `deploy.sh`:
   ```bash
   BUCKET_NAME="your-bucket-name.com"
   ```

2. **Make deploy script executable**:
   ```bash
   chmod +x deploy.sh
   ```

3. **Ensure your GCS bucket is configured for static website hosting**:
   ```bash
   gsutil web set -m index.html -e index.html gs://your-bucket-name.com
   ```

4. **Set bucket to public** (if needed):
   ```bash
   gsutil iam ch allUsers:objectViewer gs://your-bucket-name.com
   ```

### Deploy

```bash
# Build and deploy in one command
npm run deploy

# Or step by step
npm run build
sh deploy.sh
```

## 🛠️ Development Workflow

### Daily Development
```bash
npm start                  # Start dev server
# Make changes to files
# See changes live at localhost:3000
```

### Update Content Only
1. Edit JSON files in `src/data/`
2. Run `npm run build`
3. Run `sh deploy.sh`
4. Changes are live!

### Add New Features (e.g., Security Checker Tool)

1. **Create new component** in `src/components/`:
   ```jsx
   // src/components/SecurityChecker.jsx
   export default function SecurityChecker() {
     return (
       <div>
         {/* Your security checker UI */}
       </div>
     );
   }
   ```

2. **Import and use in App.jsx**:
   ```jsx
   import SecurityChecker from './components/SecurityChecker';
   
   // Add in return statement where you want it
   <SecurityChecker />
   ```

3. **Build and deploy**:
   ```bash
   npm run build
   sh deploy.sh
   ```

## 🔧 Advanced Customization

### Changing Colors/Theme

Edit `src/index.css` and `src/App.jsx` to modify:
- Primary colors (currently blue-600, cyan-600)
- Background gradients
- Typography styles

### Adding New Sections

1. Create section in `App.jsx` following existing patterns
2. Add navigation link in the `<nav>` component
3. Add footer link if needed

### Performance Optimization

The build process automatically:
- Minifies JavaScript and CSS
- Optimizes images
- Creates production-ready bundles
- Enables code splitting

## 📦 Package Scripts

```bash
npm start      # Development server (localhost:3000)
npm run build  # Production build
npm test       # Run tests
npm run deploy # Build + Deploy to GCS
```

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deploy Fails
```bash
# Check Google Cloud authentication
gcloud auth list

# Re-authenticate if needed
gcloud auth login

# Verify bucket access
gsutil ls gs://your-bucket-name.com
```

### Content Not Updating
- Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
- Clear cache-control headers:
  ```bash
  gsutil setmeta -h "Cache-Control:no-cache" gs://your-bucket/index.html
  ```

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Google Cloud Storage Static Hosting](https://cloud.google.com/storage/docs/hosting-static-website)
- [Lucide Icons](https://lucide.dev/)

## 🤝 Support

For questions or issues:
- Check this README
- Review existing code patterns
- Test changes locally before deploying

## 📄 License

© 2025 Cirronyx. All rights reserved.
