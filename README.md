# Netwrix Product Documentation

A centralized documentation site for all Netwrix security products, built with [Docusaurus v3.8.1](https://docusaurus.io/) and a simple prouct configuration for easy maintenance.

## 🎯 Overview

This documentation site serves all Netwrix product documentation.

- **19+ Security Products** across 6 categories:
  - Identity Management
  - Privileged Access Management (PAM)
  - Directory Management
  - Endpoint Management
  - Data Security Posture Management (DSPM)
  - Identity Threat Detection & Response (ITDR)
- **Multi-version Support** with version management
- **Centralized Configuration** - single source of truth for all product docs
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

# Single product mode (recommended for development)
npm start 1secure
npm start accessanalyzer/12.0
```

## 📁 Project Structure

```
├── src/
│   ├── config/
│   │   └── products.js           # CENTRALIZED CONFIGURATION
│   ├── components/
│   │   ├── HomepageFeatures/     # Dynamic product grid homepage (auto-generated)
│   │   ├── ProductMetaTags/      # Search meta tags (auto-generated)
│   │   ├── CommunityHighlights/  # Community section
│   │   └── CommunityShowcase/    # Community section
│   ├── css/
│   │   └── custom.css           # Theme customization
│   └── pages/
│       └── index.js             # Homepage with dynamic links
├── docs/                        # Product documentation
│   ├── 1secure/                 # SaaS/single-version products
│   ├── accessanalyzer/          # Multi-version products
│   │   ├── 11.6/
│   │   └── 12.0/
│   ├── identitymanager/
│   │   ├── 6.1/
│   │   ├── 6.2/
│   │   └── saas/
│   └── [other product docs]/
├── sidebars/                    # Sidebar configurations (referenced by products.js)
│   ├── 1secure.js
│   ├── accessanalyzer/
│   │   ├── 11.6.js
│   │   └── 12.0.js
│   └── [other product sidebars]/
├── scripts/                     # Development utilities
│   ├── start-wrapper.js         # Single-product dev mode
│   └── build-single.js          # Single-product builds
├── static/                      # Static assets
│   └── img/
│       ├── branding/            # Logos and brand assets
│       └── product_docs/        # Product images
├── docusaurus.config.js         # Main config
└── package.json
```

## 🛠️ Development

### Available Commands

```bash
# Development
npm run start                     # All products (slower, loads everything)
npm run start [product]           # start a solo product docs only
npm run start [product]/[version] # start a versioned product docs only

# Building & Testing
npm run build                     # Full production build
npm run build [product]           # Full production build
npm run build [product]/[version] # Full production build
npm run format:check              # Check code formatting
npm run format                    # Auto-format with Prettier
# Utilities
npm run clear                     # Clear Docusaurus cache
npm run serve                     # Serve production build after `npm run build`
```

### Development Workflow

The new centralized system makes development much simpler:

1. **Start development server**: `npm start`
2. **Make changes** to documentation or configuration
3. **Hot reload** automatically updates the site
4. **All products and versions** work seamlessly

### Single Product Development (Legacy Script Support)

For backward compatibility, single-product scripts still work:

```bash
# Examples (optional - full site starts quickly now)
npm start 1secure
npm start accessanalyzer/12.0
npm start identitymanager/saas
```

## ⚙️ Centralized Configuration System

### Global Product Config: `src/config/products.js`

All product configuration for _building the site_ (e.g. naming) is managed in a single file. Here's how it works:

```javascript
// Define a product once
{
  id: 'accessanalyzer',
  name: 'Access Analyzer',
  description: 'Analyze and audit file system permissions',
  path: 'docs/accessanalyzer',
  category: 'Data Security Posture Management (DSPM)',
  icon: '🔍',
  versions: [
    {
      version: '12.0',
      label: '12.0',
      isLatest: true,
      sidebarFile: './sidebars/accessanalyzer/12.0.js'
    },
    {
      version: '11.6',
      label: '11.6',
      isLatest: false,
      sidebarFile: './sidebars/accessanalyzer/11.6.js'
    }
  ]
}
```

**Automatically generates**:

- ✅ Docusaurus plugin configurations
- ✅ Homepage product grid
- ✅ SEO meta tags
- ✅ URL routing
- ✅ Version management

### Configuration Schema

```typescript
interface Product {
  id: string; // Unique identifier
  name: string; // Display name
  description: string; // Homepage description
  path: string; // Documentation path
  category: string; // Product category
  icon?: string; // Emoji icon
  versions: ProductVersion[]; // Version configurations
  defaultVersion?: string; // Override default version
}

interface ProductVersion {
  version: string; // Version identifier (e.g., '12.0', 'current')
  label: string; // Display label
  isLatest: boolean; // Is this the latest version?
  sidebarFile: string; // Path to sidebar configuration
}
```

### Theme Customization

Key CSS variables in `src/css/custom.css`:

```css
--ifm-color-primary: #2a5298; /* Netwrix blue */
--ifm-color-primary-dark: #254a89; /* Darker variant */
--ifm-font-family-base: 'Inter'; /* Primary font */
```

## 📊 Adding New Products & Versions

### 🆕 Adding a New Product

The centralized system makes adding products incredibly simple:

**1. Add to `src/config/products.js`:**

```javascript
{
  id: 'newproduct',
  name: 'New Product Name',
  description: 'Brief product description',
  path: 'docs/newproduct',
  category: 'Product Category', // Must match existing category
  icon: '🔧',
  versions: [
    {
      version: 'current',
      label: 'Current',
      isLatest: true,
      sidebarFile: './sidebars/newproduct.js'
    }
  ]
}
```

**2. Create documentation structure:**

```bash
mkdir docs/[newproduct]
```

**3. Create sidebar configuration:**

```bash
echo "// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const [newproduct]sidebar = {
  sidebar: [
    {
      type: 'autogenerated',
      dirName: '.',
    },
  ],
};

export default sidebars;
" > sidebars/[newproduct].js
```

**That's it!** The new product automatically appears on the homepage with proper routing.

### 📈 Adding a New Version

**1. Update the product in `src/config/products.js`:**

```javascript
// Add to existing product's versions array
versions: [
  {
    version: '[newversion]', // New version
    label: '[newversion]',
    isLatest: true, // Mark new version as latest
    sidebarFile: './sidebars/[productname]/[newversion].js',
  },
  {
    version: '1.0',
    label: '1.0',
    isLatest: false, // Update previous version latest to false
    sidebarFile: './sidebars/[productname]/1.0.js',
  },
];
```

**2. Create version documentation:**

```bash
mkdir docs/productname/[newversion]
```

**3. Create version sidebar:**

```bash
echo "// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const [newproduct]sidebar = {
  sidebar: [
    {
      type: 'autogenerated',
      dirName: '.',
    },
  ],
};

export default sidebars;
" > sidebars/[newproduct].js
```

### 🏷️ Adding Product Categories

Add to the `PRODUCT_CATEGORIES` in `src/config/products.js` for the product category it belongs to:

```javascript
{
  id: 'new-category',
  title: 'New Category Name',
  description: 'Category description',
  icon: '🎯'
}
```

## 📝 Content Guidelines

### Example Documentation Structure

```
docs/productname/
├── index.md              # Product overview
├── getting-started/      # Quick start guides
├── user-guide/          # End user documentation
├── administration/      # Admin guides
├── api-reference/       # API documentation
└── troubleshooting/     # Common issues
```

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

### Automatic Deployment

- **Production**: Auto-deploys from `main` branch
- **Development**: Auto-deploys from `dev` branch

### Environment Configuration

- **URL**: Uses `RENDER_EXTERNAL_URL` environment variable
- **Memory**: 8GB limit for large builds
- **Analytics**: Google Analytics with tracking ID `G-FZPWSDMTEX`
- **Search**: Algolia search with app ID `KPMSCF6G6J`

## 🤝 Contributing

### Simplified Development Workflow

Thanks to the centralized configuration system, contributing is now much easier:

1. **Start development server**:

```bash
npm start
```

2. **Make changes** to documentation or configuration

3. **Format code** before committing:

```bash
npm run format
```

4. **Test build**:

```bash
npm run build
```

5. **Submit pull request**

### Adding New Products (3-Step Process)

1. **Add product to `src/config/products.js`**
2. **Create documentation folder and files**
3. **Create sidebar configuration**

That's it! No more editing multiple files or complex configurations.

### Code Style Guidelines

- **Format with Prettier**: `npm run format`
- **TypeScript validation**: `npm run typecheck`
- **Follow existing naming conventions**
- **Add JSDoc comments for complex functions**
- **Keep components focused and reusable**

## 🔍 Testing & Quality Assurance

### Pre-Deployment Checklist

Before submitting changes:

```bash
# 1. Code formatting
npm run format:check

# 2. TypeScript validation
npm run typecheck

# 3. Build validation
npm run build

# 4. Manual testing
npm start
# Test navigation, search, and product pages
```

### Common Testing Scenarios

- ✅ **Homepage loads** with all product categories
- ✅ **Product pages accessible** from homepage links
- ✅ **Version badges work** for multi-version products
- ✅ **Search functionality** finds relevant content
- ✅ **Mobile responsive** design works
- ✅ **Dark mode toggle** functions properly

## 🛠️ Troubleshooting

### Build Issues

```bash
# Clear cache and rebuild
npm run clear
npm run build

# Check for configuration errors
npm run typecheck
```

### Common Problems

**"Cannot find module" errors**

- Verify sidebar file paths in `src/config/products.js`
- Check that referenced sidebar files exist

**Products missing from homepage**

- Ensure product category matches exactly with `PRODUCT_CATEGORIES`
- Verify `generateProductCategories()` import

**Routing problems**

- Check `path` and version configurations in `products.js`
- Look for conflicting route definitions

### Performance Issues

- Use `npm run clear` to clear cache
- Restart development server for configuration changes
- Check browser developer tools for specific errors

## 🔄 Migration Guide

### From Old Architecture

If you're familiar with the previous setup:

- **Product configs** moved from `docusaurus.config.js` → `src/config/products.js`
- **Homepage products** moved from `HomepageFeatures/index.js` → `src/config/products.js`
- **Meta tag mappings** moved from `ProductMetaTags/index.js` → `src/config/products.js`

### Benefits of New System

- ✅ **80% fewer lines** of configuration code
- ✅ **Single source of truth** for all product data
- ✅ **Automatic consistency** across components
- ✅ **Faster development** and easier maintenance
- ✅ **Nearly impossible** to create configuration errors

## 📚 Resources

- **Docusaurus Documentation**: [docusaurus.io](https://docusaurus.io/)
- **MDX Guide**: [mdxjs.com](https://mdxjs.com/)
- **React Documentation**: [react.dev](https://react.dev/)
- **Netwrix Products**: [netwrix.com](https://www.netwrix.com/)

## 📞 Support & Community

- **Documentation Issues**: Create an issue in this repository
- **Product Support**: [Netwrix Support Portal](https://www.netwrix.com/support.html)
- **Community**: [Netwrix Community](https://community.netwrix.com)
- **GitHub**: [github.com/netwrix](https://github.com/netwrix)

## 📄 License

This documentation site is maintained by Netwrix Corporation.

For licensing information and product inquiries, visit [netwrix.com](https://www.netwrix.com/).

---

**Built with ❤️ using [Docusaurus](https://docusaurus.io/) and powered by the revolutionary centralized configuration system.**
