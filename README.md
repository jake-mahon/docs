# Netwrix Product Documentation

A modern, multi-product documentation site built with **Docusaurus v3.8.1** that hosts comprehensive documentation for the entire Netwrix security product portfolio.

## 🎯 Overview

This documentation site serves as the central hub for all Netwrix product documentation, featuring:

- **20+ Security Products** across 7 categories
- **Multi-version Support** for product documentation
- **Single-product Development Mode** for faster development
- **Performance Optimizations** with Docusaurus Faster features
- **Responsive Design** with dark mode support
- **Search** capabilities with Algolia

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+**
- **npm**
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/netwrix/docs.git
cd docs

# Install dependencies
npm install

# Start development server (all products)
npm start

# Or start single product for faster development
npm start 1secure
npm start accessanalyzer/12.0
npm start endpointpolicymanager
```

### Single Product Development (Recommended)

For faster development, use single-product mode:

```bash
# Non-versioned products
npm start 1secure
npm start endpointpolicymanager
npm start pingcastle

# Versioned products (product/version)
npm start accessanalyzer/12.0
npm start auditor/10.7
npm start identitymanager/6.2

# Special cases
npm start identitymanager/saas
```

## 📁 Project Structure

```
├── docs/                          # Product documentation
│   ├── 1secure/                  # Non-versioned product
│   │   ├── index.md
│   │   └── getting-started/
│   ├── accessanalyzer/           # Versioned product
│   │   ├── 11.6/
│   │   └── 12.0/
│   └── endpointpolicymanager/    # Large single-version product
├── src/                          # React components & pages
│   ├── components/
│   │   ├── HomepageFeatures/    # Product showcase
│   │   ├── CommunityHighlights/ # Community section
│   │   └── CommunityShowcase/
│   ├── css/
│   │   └── custom.css           # Theme customization
│   └── pages/
│       └── index.js             # Homepage
├── scripts/                     # Development & build utilities
│   ├── start-wrapper.js         # Single-product dev mode
│   ├── build-single.js          # Single-product builds
│   ├── rename-product.js        # Product renaming utility
│   └── path-converter.js        # Path conversion utility
├── sidebars/                    # Sidebar configurations
│   ├── sidebar.js               # Default sidebar
│   ├── 1secure.js              # Product-specific sidebars
│   └── accessanalyzer/
│       ├── 11.6.js
│       └── 12.0.js
├── static/                      # Static assets
│   └── img/
│       ├── branding/            # Logos and brand assets
│       └── product_docs/        # Product images
├── reference-docs/              # Docusaurus & MDX documentation
├── docusaurus.config.js         # Main configuration
└── package.json
```

## 🛠️ Development

### Available Commands

```bash
# Development
npm start                    # All products (slower)
npm start <product>          # Single product (faster)
npm start <product>/<version> # Specific version

# Building
npm run build               # Full site production build
npm run build:single <product> # Single product build
npm run build:single <product>/<version> # Single product/version build

# Code Quality
npm run format              # Auto-format with Prettier
npm run format:check        # Check formatting
npm run typecheck           # TypeScript checking

# Utilities
npm run clear               # Clear Docusaurus cache
npm run serve               # Serve built site locally
```

### Single Product - Start Local Server Examples

```bash
# Identity & Access Management
npm start 1secure
npm start identitymanager/6.2
npm start identitymanager/saas

# Privileged Access Management
npm start privilegesecure/4.2
npm start passwordsecure/9.2

# Endpoint & Directory Management
npm start endpointpolicymanager
npm start auditor/10.7
npm start directorymanager/11.1

# Platform Governance
npm start platgovsalesforce
npm start platgovnetsuite
```

## ⚙️ Configuration

### Product Plugin Pattern

Each product/version requires explicit configuration in `docusaurus.config.js`. You can just copy/paste one of the existing ones, and edit to match your new product or version. Here are some examples:

```javascript
// Single-version product
{
  id: 'productname',
  path: 'docs/productname',
  routeBasePath: 'docs/productname',
  sidebarPath: require.resolve('./sidebars/productname.js'),
  // ...
}

// Versioned product (dots become underscores)
{
  id: 'productname12_0',  // 12.0 → 12_0
  path: 'docs/productname/12.0',
  routeBasePath: 'docs/productname/12.0',
  sidebarPath: require.resolve('./sidebars/productname/12.0.js'),
  // ...
}
```

### Performance Features (for those curious)

- **Docusaurus Faster** enabled with:
  - SWC JS loader and minifier
  - Lightning CSS minifier
  - Rspack bundler
  - Persistent caching (2-5x faster rebuilds)
  - SSG worker threads (2x faster static generation)
  - MDX cross-compiler cache

### Theme Customization

Key CSS variables in `src/css/custom.css`:

```css
--ifm-color-primary: #2a5298 /* Netwrix blue */ --ifm-color-primary-dark: #254a89 /* Darker variant */ --ifm-font-family-base: 'Inter'
  /* Primary font */;
```

## 📝 Content Guidelines

### Frontmatter Template

```yaml
---
title: 'Page Title'
sidebar_label: 'Sidebar Label'
description: 'SEO description'
---
```

### Image Guidelines

- **Location**: `/static/img/product_docs/productname/`
- **Format**: Use `.webp` for performance
- **Paths**: Always absolute from project root

```markdown
![Description](/img/product_docs/productname/feature.webp)
```

## 🚀 Deployment

### Build Process

## Production

Production automatically builds when there is a push to the `main` branch.

## Development

The development site automatically builds when there is a push to the `dev` branch.

## Environment

- **URL**: Uses `RENDER_EXTERNAL_URL` environment variable
- **Memory**: Configured with 8GB limit for large builds
- **Cache**: Persistent caching enabled for faster rebuilds

## 🤝 Contributing

### Development Workflow

1. **Start single-product mode** for faster development:

```bash
npm start productname/version
```

Or

```bash
npm start productname
```

2. **Make changes** to documentation or components

3. **Format code** before committing:

```bash
npm run format
```

4. **Test build** before submitting:

```bash
npm run build:single productname
```

Or

```bash
npm run build:single productname/version
```

### Adding New Products

1. **Create directory structure**:

```bash
mkdir -p docs/newproduct
# or for versioned: mkdir -p docs/newproduct/1.0
```

2. **Add plugin configuration** to `docusaurus.config.js`

3. **Create sidebar configuration** in `sidebars/`

4. **Add to homepage** in `src/components/HomepageFeatures/index.js`

5. **Test with single-product mode**:

```bash
npm start product
```

Or

```bash
npm start product/version
```

## 🛠️ Troubleshooting

### Build Issues

```bash
# Clear cache and rebuild
npm run clear
npm run build

# Memory issues (already configured with 8GB)
NODE_OPTIONS=--max-old-space-size=8192 npm run build
```

### Development Performance

- **Use single-product mode**: `npm start productname`
- **Clear browser cache** if hot reload fails
- **Restart dev server** for configuration changes

## 📚 Resources

- **Docusaurus Documentation**: [docusaurus.io](https://docusaurus.io/)
- **MDX Guide**: [mdxjs.com](https://mdxjs.com/)
- **React Documentation**: [react.dev](https://react.dev/)

## 📄 License

**MIT Licensed**

This documentation is maintained by Netwrix Corporation. For licensing information, please contact [Netwrix](https://www.netwrix.com/).
