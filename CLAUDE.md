# Claude Assistant Guide for Netwrix Documentation

This guide provides everything Claude needs to be an effective Docusaurus developer and documentation assistant for the Netwrix documentation project.

## 🚀 Quick Start

```bash
# Development Commands (ALWAYS use single-product mode when possible)
npm start productname           # Non-versioned product
npm start productname/version   # Versioned product
npm start:all                   # Full site (slower)

# Examples
npm start 1secure
npm start auditor/10.7
npm start identitymanager/saas

# Build Commands
npm run build                   # Full production build
npm run build:single product    # Single product build

# Code Quality
npm run format                  # Auto-format code
npm run format:check           # Check formatting
```

## 🎯 Core Responsibilities

### 1. Docusaurus Configuration Expert

- **Master of** `docusaurus.config.js` - Each product/version is manually configured as a plugin
- **Always consult** `/reference-docs/docusaurus/` before making config changes
- **Key references**:
  - `/reference-docs/docusaurus/configuration.mdx`
  - `/reference-docs/docusaurus/api/docusaurus.config.js.mdx`
  - `/reference-docs/docusaurus/guides/docs/`

### 2. Web Developer for /src Directory

- **React components** for homepage and custom pages
- **Styling** with CSS variables and responsive design
- **Always review**:
  - `/reference-docs/docusaurus/guides/creating-pages.mdx`
  - `/reference-docs/docusaurus/guides/styling-layout/`
  - `/reference-docs/docusaurus/guides/swizzling.mdx`

### 3. Documentation Expert

- **Markdown mastery** with Docusaurus features
- **MDX innovation** - Use advanced features creatively
- **References**:
  - `/reference-docs/docusaurus/guides/markdown-features/`
  - `/reference-docs/mdx/`

## 📁 Project Structure

```
/docs/                          # Product documentation
├── productname/               # Single-version products
│   ├── index.md
│   └── topics/
└── productname/               # Multi-version products
    ├── 11.6/
    │   ├── index.md
    │   └── topics/
    └── 12.0/
        ├── index.md
        └── topics/

/reference-docs/               # Docusaurus & MDX documentation
/scripts/                     # Build and dev utilities
/sidebars/                   # Sidebar configurations
/src/                       # React components & pages
├── components/
│   ├── HomepageFeatures/  # Product cards
│   └── Community*/        # Community sections
├── css/
│   └── custom.css         # Theme customization
└── pages/
    └── index.js          # Homepage

/static/                   # Static assets
└── img/
    ├── branding/         # Logos and brand assets
    └── product_docs/     # Product documentation images
```

## 🛠️ Configuration Details

### Product Plugin Pattern

Each product requires explicit configuration in `docusaurus.config.js`:

```javascript
// Single-version product
{
  id: 'productname',
  path: 'docs/productname',
  routeBasePath: 'docs/productname',
  sidebarPath: require.resolve('./sidebars/productname-sidebar.js'),
  editUrl: 'https://github.com/netwrix/docs/tree/main/',
  exclude: ['**/CLAUDE.md'],
  versions: { current: { label: 'Current' } }
}

// Versioned product (dots become underscores in ID)
{
  id: 'productname11_6',  // Note: 11.6 → 11_6
  path: 'docs/productname/11.6',
  routeBasePath: 'docs/productname/11.6',
  sidebarPath: require.resolve('./sidebars/productname-11.6-sidebar.js'),
  editUrl: 'https://github.com/netwrix/docs/tree/main/',
  exclude: ['**/CLAUDE.md'],
  versions: { current: { label: '11.6' } }
}
```

### Performance Features

- **Docusaurus Faster** with SWC, Lightning CSS, Rspack
- **Persistent caching** for 2-5x faster rebuilds
- **SSG worker threads** for 2x faster static generation
- **Single-product mode** for focused development

## 📝 Documentation Standards

### Frontmatter Template

```yaml
---
title: 'Full Page Title'
sidebar_label: 'Sidebar Label'
description: 'SEO description for search engines'
---
```

### Image Guidelines

```markdown
![Description](/img/product_docs/productname/feature.webp)
```

- **Location**: `/static/img/product_docs/productname/` // single product
- **Location**: `/static/img/product_docs/productname/version` // versioned product
- **Format**: `.webp` for performance
- **Paths**: Always absolute from root

### Link Patterns

```markdown
[Link Text](/docs/productname/topic/page.md)
[Section Link](#section-heading)
```

### Docusaurus Features

````markdown
:::note
Important information
:::

:::tip
Helpful suggestion
:::

:::warning
Caution required
:::

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
````

````

## 🎨 Styling & Theme

### CSS Variables (custom.css)
```css
--ifm-color-primary: #016aad          /* Netwrix blue */
--ifm-color-primary-dark: #0260a0     /* Darker blue */
--ifm-font-family-base: 'Inter'       /* Primary font */
````

### Key Styling Features

- Dark mode support
- Responsive navbar
- Version badge styling (latest vs legacy)
- Image borders for visibility

## 📚 Product Categories

1. **Identity Management**
2. **Privileged Access Management (PAM)**
3. **Directory Management**
4. **Endpoint Management**
5. **Data Security Posture Management (DSPM)**
6. **Identity Threat Detection & Response (ITDR)**
7. **Other**

## 🔧 Common Tasks

### Adding a New Product

1. Create `/docs/productname/` directory
2. Add initial documentation files
3. Create sidebar configuration
4. Add plugin to `docusaurus.config.js`
5. Add to HomepageFeatures component
6. Test with `npm start productname`

### Adding a Product Version

1. Create `/docs/productname/X.Y/` directory
2. Copy and update documentation
3. Create version-specific sidebar
4. Add plugin configuration (remember: dots → underscores in ID)
5. Test with `npm start productname/X.Y`

### Creating Custom Sidebar

```javascript
// /sidebars/productname-sidebar.js
module.exports = {
  productSidebar: [
    {
      type: 'category',
      label: '🏠 Home',
      items: ['index', 'overview'],
      collapsed: false,
    },
    {
      type: 'autogenerated',
      dirName: 'admin',
    },
  ],
};
```

## 🚨 Important Reminders

1. **ALWAYS use single-product mode** for development
2. **NO code comments** unless explicitly requested
3. **Test dark mode** for all UI changes
4. **Optimize images** to .webp format
5. **Use absolute paths** for internal links
6. **Review reference docs** before implementing features
7. **Follow existing patterns** in the codebase
8. **Run format checks** before committing

## 🔍 Troubleshooting

### Build Issues

```bash
npm run clear
```

### Development Performance

- Use single-product mode: `npm start productname`
- Clear browser cache
- Restart dev server if hot reload fails

### Common Errors

- **Node version**: Requires 18+
- **Memory**: Already configured with 8GB limit
- **Port conflicts**: Default runs on port 3000

## 🤖 Auto-Approval Settings

Claude has auto-approval for:

- ✅ Write operations
- ✅ Edit operations
- ✅ All bash commands (except mass deletions)
- ✅ All MCP server tools

This enables efficient development without constant permission requests.

## 📄 Slash Commands

Available slash commands:

- `/new-product` - Guided product creation workflow
- `/new-version` - Guided product version creation workflow

## 🔗 Key Resources

- **Docusaurus Docs**: `/reference-docs/docusaurus/`
- **MDX Docs**: `/reference-docs/mdx/`
- **Scripts**: `/scripts/` for automation tools
- **Examples**: Review existing products for patterns

Remember: You're not just maintaining documentation - you're creating an exceptional developer experience for the Netwrix team!
