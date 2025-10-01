# Examples Directory

## CSS Loading Effects - Individual Examples

This directory contains individual examples and demonstrations for each loading effect implemented in the CSS-Loading-Effects project.

### Available Examples

Each example is a standalone HTML file that demonstrates a specific loading effect with its corresponding CSS.

#### 🔄 Spinner Effects
- **Classic Spinner** - Basic rotating border spinner
- **Dual Spinner** - Counter-rotating dual ring spinner
- **Ripple Loader** - Expanding circle ripple animation

#### 🔵 Dot Animations
- **Bouncing Dots** - Three dots with staggered bounce animation
- **Pulsing Dots** - Dots with scale pulse effect

#### 📊 Bar Animations
- **Dancing Bars** - Vertical bars with rhythmic scaling
- **Wave Bars** - Horizontal wave motion effect

#### 💧 Fluid Effects
- **Pulse Loading** - Smooth scale and opacity pulse
- **Fade Loading** - Gentle opacity transition
- **Wave Animation** - Flowing wave motion

#### 📈 Progress Indicators
- **Progress Bar** - Animated progress with gradient
- **Skeleton Loading** - Shimmer effect for content placeholders

#### 🎯 Interactive Elements
- **Button Loading States** - Buttons with integrated loading spinners
- **Loading Overlays** - Full-screen loading implementations

### Usage Instructions

1. **Individual Examples**: Each file can be opened directly in a browser
2. **Copy & Paste**: Extract the CSS for any effect you need
3. **Customization**: Modify CSS variables to match your brand colors
4. **Integration**: Add effects to your existing projects

### Customization Variables

```css
:root {
  --primary-color: #667eea;    /* Main effect color */
  --secondary-color: #764ba2;  /* Secondary color */
  --accent-color: #f093fb;     /* Highlight color */
  --animation-duration: 1s;    /* Animation speed */
  --border-radius: 8px;        /* Element roundness */
}
```

### Performance Tips

- ✅ All animations use `transform` and `opacity` for best performance
- ✅ Hardware acceleration enabled via CSS properties
- ✅ Minimal DOM manipulation required
- ✅ Lightweight and responsive design

### Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### File Structure

```
examples/
├── README.md              # This documentation
├── spinners/
│   ├── classic-spinner.html
│   ├── dual-spinner.html
│   └── ripple-loader.html
├── dots/
│   ├── bouncing-dots.html
│   └── pulsing-dots.html
├── bars/
│   ├── dancing-bars.html
│   └── wave-bars.html
├── effects/
│   ├── pulse-loading.html
│   ├── fade-loading.html
│   └── wave-animation.html
├── progress/
│   ├── progress-bar.html
│   └── skeleton-loading.html
└── interactive/
    ├── button-loading.html
    └── loading-overlay.html
```

### Integration Examples

#### Basic Spinner
```html
<div class="spinner"></div>
```

#### Dots Loader
```html
<div class="dots-loader">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
```

#### Progress Bar
```html
<div class="progress-container">
  <div class="progress-bar"></div>
</div>
```

#### Button with Loading
```html
<button class="btn loading">Loading...</button>
```

### Contributing

To add new examples:

1. Create a new HTML file in the appropriate category folder
2. Include the base CSS from `../styles.css`
3. Add specific styles for your new effect
4. Test across different browsers
5. Update this README with your new example

### License

All examples are provided under the MIT License - see the [LICENSE](../LICENSE) file for details.

### Author

**Gabriel Demetrios Lafis**
- GitHub: [@galafis](https://github.com/galafis)
- Email: gabrieldemetrios@gmail.com

---

⭐ **Star this project** if these examples are helpful!

🔧 **Need custom loading effects?** Feel free to open an issue or contribute!

📝 **Found a bug?** Please report it in the main repository issues section.
