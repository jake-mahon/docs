# Claude Assistant Guide for Netwrix Documentation

This guide provides everything Claude needs to effectively work with the Netwrix documentation project built on Docusaurus v3.

## Project Overview

This is a multi-product documentation site for Netwrix products, built with Docusaurus v3. The site hosts documentation for multiple products, each potentially having multiple versions.

### Key Technologies

- **Docusaurus v3.8.1** with experimental faster features
- **React 18** for custom components
- **MDX** support for advanced documentation features
- **Node.js 18+** required

## Core Responsibilities

### 1. Docusaurus Development

When working with Docusaurus configuration:

- **Always review** `/reference-docs/docusaurus/` documentation before making changes
- **Key reference files**:
  - `/reference-docs/docusaurus/configuration.mdx` - General configuration guide
  - `/reference-docs/docusaurus/api/docusaurus.config.js.mdx` - Config API reference
  - `/reference-docs/docusaurus/guides/docs/` - Documentation guides
- **Config location**: `docusaurus.config.js` - Manually configured products (each product/version is explicitly defined as a plugin)

### 2. Web Development for Custom Pages

When working in `/src/`:

- **Review Docusaurus docs** for:
  - Pages: `/reference-docs/docusaurus/guides/creating-pages.mdx`
  - Styling: `/reference-docs/docusaurus/guides/styling-layout/`
  - Swizzling: `/reference-docs/docusaurus/guides/swizzling.mdx`
  - Static Assets: `/reference-docs/docusaurus/guides/static-assets.mdx`
  - SEO: `/reference-docs/docusaurus/guides/seo.mdx`
- **Current components**:
  - `HomepageFeatures` - Product cards
  - `CommunityHighlights` - Community section
  - `CommunityShowcase` - Showcase section

### 3. Markdown Documentation

When working with `.md` files:

- **Always review** Docusaurus markdown features:
  - `/reference-docs/docusaurus/guides/markdown-features/*.mdx`
  - `/reference-docs/mdx/` for MDX capabilities
- **Use MDX features** creatively - always check `/reference-docs/mdx/` for advanced possibilities

## Project Structure

```
/docs/                    # Product documentation
  ├── productname/       # Non-versioned products
  └── productname/       # Versioned products
      ├── 11.6/         # Version directories
      └── 12.0/
/reference-docs/         # Docusaurus & MDX reference
/scripts/               # Build and dev scripts
/sidebars/             # Custom sidebar configs
/src/                  # React components & pages
/static/               # Static assets
  └── img/
      └── product_docs/ # Product images
```

## Development Commands

### Essential Commands

```bash
# Single-product development (FASTER!)
npm start productname          # For non-versioned products
npm start productname/version  # For versioned products

# Examples:
npm start 1secure
npm start auditor/10.7
npm start identitymanager/saas

<<<<<<< HEAD
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
=======
# Full site development
npm start:all

# Production build
npm run build                  # Full site
npm run build:single product   # Single product

# Code formatting
npm run format                 # Format all files
npm run format:check          # Check formatting
```

### Available Scripts in `/scripts/`

- `start-wrapper.js` - Enables single-product dev mode
- `build-single.js` - Build single product
- `rename-product.js` - Rename products
- `path-converter.js` - Convert paths in markdown

## Documentation Standards

### Frontmatter Pattern

```yaml
---
id: unique-identifier
title: 'Page Title'
sidebar_label: 'Sidebar Label'
sidebar_position: 100
description: 'SEO description'
pagination_label: 'Navigation Label'
>>>>>>> dev
---
```

### Image Guidelines

<<<<<<< HEAD

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

`````markdown
:::note
Important information
:::

:::tip
Helpful suggestion
:::

:::warning
Caution required
:::

=======

- **Location**: `/static/img/product_docs/productname/`
- **Format**: Use `.webp` for better performance
- **Reference**: `![Alt text](/img/product_docs/product/image.webp)`
- **Always use** absolute paths from site root

### Link Guidelines

- **Internal links**: `/docs/product/section/page.md`
- **Anchors**: `#section-name`
- **Always use** absolute paths for reliability

### Docusaurus Features to Utilize

- **Admonitions**: `:::note`, `:::tip`, `:::warning`, `:::danger`, `:::info`, `:::caution`
- **Code blocks**: With syntax highlighting and titles
- **DocCardList**: For automatic navigation cards

````mdx
> > > > > > > dev

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
````
`````

<<<<<<< HEAD

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
4. # Add plugin configuration (remember: dots → underscores in ID)

```

### MDX Capabilities
When appropriate, use MDX features:
- Import React components
- Use JSX in documentation
- Create interactive examples
- Reference: `/reference-docs/mdx/`

## Product Organization

### Versioned Products
Products with multiple versions use this structure:
```

/docs/productname/
├── 11.6/
│ ├── index.md
│ └── topics/
└── 12.0/
├── index.md
└── topics/

```

### Non-versioned Products
Single version products:
```

/docs/productname/
├── index.md
└── topics/

````

### Special Cases
- `identitymanager/saas` - Treated as special case
- Platform governance products - No versioning

## Configuration Details

### Manual Product Configuration
The `docusaurus.config.js` explicitly defines each product and version as a separate docs plugin instance. Each product/version combination requires:
- Unique plugin ID (e.g., `accessanalyzer12_0`)
- Specific path and routeBasePath
- Sidebar configuration (most use shared `./sidebars/sidebar.js`)
- Version label configuration

### Performance Optimizations
- Docusaurus Faster enabled with:
  - SWC JS loader and minifier
  - Lightning CSS minifier
  - Rspack bundler
  - SSG worker threads
  - Persistent caching

### Excluded Files
- `CLAUDE.md` files are excluded from all doc instances

## Development Workflow

### Before Making Changes
1. Use single-product mode for faster development
2. Review relevant Docusaurus docs in `/reference-docs/`
3. Check existing patterns in similar files

### Code Style
- **NO COMMENTS** in code unless specifically requested
- Follow existing code conventions
- Use Prettier formatting (automatic on commit)

### Testing Changes
1. Preview in development mode
2. Check responsive design
3. Verify dark mode appearance
4. Test navigation and links
5. **ALWAYS** use Puppeteer MCP server for automated testing:
   - Navigate to pages with `mcp__puppeteer__puppeteer_navigate`
   - Take screenshots with `mcp__puppeteer__puppeteer_screenshot`
   - Verify elements exist with `mcp__puppeteer__puppeteer_evaluate`
   - Test interactions with `mcp__puppeteer__puppeteer_click`

### Git Workflow
- Prettier runs automatically on commit
- Format checks run in GitHub Actions
- Claude reviews PRs automatically

## Styling Guidelines

### Custom CSS
- Location: `/src/css/custom.css`
- Uses CSS variables for theming
- Inter font family
- Netwrix brand colors

### Key CSS Variables
```css
--ifm-color-primary: #016aad
--ifm-color-primary-dark: #0260a0
--ifm-font-family-base: 'Inter', system-ui
````

## Best Practices

### When Adding Documentation

1. Check if similar docs exist
2. Follow established patterns
3. Use appropriate Docusaurus features
4. Consider MDX for advanced features
5. Optimize images to `.webp`

### When Modifying Configuration

1. Always back up current config
2. Test with single product first
3. Verify all products still work
4. Check build performance

### Performance Considerations

1. Use single-product mode during development
2. Optimize images before adding
3. Minimize custom JavaScript
4. Leverage Docusaurus caching

## Common Tasks

### Adding a New Product

1. Create directory in `/docs/productname/`
2. Add `index.md` with proper frontmatter
3. Add plugin configuration to `docusaurus.config.js`:
   ```javascript
   [
     '@docusaurus/plugin-content-docs',
     {
       id: 'productname',
       path: 'docs/productname',
       routeBasePath: 'docs/productname',
       sidebarPath: require.resolve('./sidebars/sidebar.js'),
       editUrl: 'https://github.com/netwrix/docs/tree/main/',
       exclude: ['**/CLAUDE.md'],
       versions: {
         current: {
           label: 'Current',
         },
       },
     },
   ],
   ```
4. Test with `npm start productname`

### Adding a Product Version

1. Create version directory `/docs/productname/X.Y/`
2. Copy docs from previous version
3. Add new plugin configuration to `docusaurus.config.js`:
   ```javascript
   [
     '@docusaurus/plugin-content-docs',
     {
       id: 'productnameX_Y',  // Replace dots with underscores
       path: 'docs/productname/X.Y',
       routeBasePath: 'docs/productname/X.Y',
       sidebarPath: require.resolve('./sidebars/sidebar.js'),
       editUrl: 'https://github.com/netwrix/docs/tree/main/',
       exclude: ['**/CLAUDE.md'],
       versions: {
         current: {
           label: 'X.Y',
         },
       },
     },
   ],
   ```
4. Update content as needed
   > > > > > > > dev
5. Test with `npm start productname/X.Y`

### Creating Custom Sidebar

<<<<<<< HEAD

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

# Remember: You're not just maintaining documentation - you're creating an exceptional developer experience for the Netwrix team!

1. Create `/sidebars/productname-sidebar.js`
2. Export sidebar configuration
3. Reference in product config
4. Use icons and categories for organization

## Troubleshooting

### Build Failures

- Check Node.js version (18+ required)
- Clear cache: `rm -rf .docusaurus`
- Increase memory: Already configured in package.json

### Slow Development

- Use single-product mode
- Clear browser cache
- Restart dev server

### Formatting Issues

- Run `npm run format`
- Check `.prettierrc` settings
- Ensure files aren't in `.prettierignore`

## Reference Documentation Locations

Always consult these before making changes:

- **Docusaurus Config**: `/reference-docs/docusaurus/configuration.mdx`
- **Markdown Features**: `/reference-docs/docusaurus/guides/markdown-features/`
- **MDX Guide**: `/reference-docs/mdx/`
- **API Reference**: `/reference-docs/docusaurus/api/`
- **Styling Guide**: `/reference-docs/docusaurus/guides/styling-layout/`
- **SEO Guide**: `/reference-docs/docusaurus/guides/seo.mdx`

## Important Reminders

1. **Always use single-product mode** for development when possible
2. **Review reference docs** before implementing features
3. **Follow existing patterns** in the codebase
4. **Test dark mode** for all changes
5. **Optimize images** to `.webp` format
6. **Use absolute paths** for all internal links
7. **No code comments** unless requested
8. **Check formatting** before committing
   > > > > > > > dev
