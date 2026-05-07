# Team Photos Directory

Place team member photos here.

## Photo Guidelines

**File Naming:**
- Use lowercase, no spaces
- Format: firstname-lastname.jpg
- Examples: john-doe.jpg, jane-smith.jpg, mbah-fortem.jpg

**Photo Specifications:**
- Format: JPG or PNG
- Minimum size: 400x400 pixels
- Recommended: 600x600 pixels (square)
- File size: Under 500KB (optimize before uploading)
- Background: Professional, solid color or subtle gradient preferred

**How to Add:**

1. Save your photo to this directory: `public/team/your-name.jpg`
2. Update `src/data/team.json` with: `"photo": "/team/your-name.jpg"`
3. Build and deploy: `npm run build && sh deploy.sh`

## Photo Optimization Tools

Before uploading, optimize your images:

**Online Tools:**
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
- ImageOptim (Mac app)

**Command Line:**
```bash
# Using ImageMagick (if installed)
convert original.jpg -resize 600x600^ -gravity center -extent 600x600 -quality 85 optimized.jpg
```

## Fallback

If no photo is provided or the image fails to load, a default blue gradient icon will be displayed automatically.

## Examples

✅ Good: `/team/john-smith.jpg` (600x600, 150KB, professional headshot)
❌ Bad: `/team/IMG_1234.jpg` (4000x3000, 5MB, vacation photo)
