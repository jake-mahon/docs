# Netwrix Product Documentation

This repository contains the complete documentation site for all Netwrix products, built with [Docusaurus](https://docusaurus.io/). The site provides comprehensive user guides, configuration instructions, API documentation, and release notes for the entire Netwrix product suite.

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 18.0 or higher
- **npm**: Comes with Node.js
- **Git**: For version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/netwrix/docs.git
   cd docs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```
   This opens the full documentation site at `http://localhost:3000`

## 📋 Available Scripts

### Development

| Command | Description |
|---------|-------------|
| `npm start` | Start full development server |
| `npm run start:all` | Same as above (explicit) |
| `npm run start <product>` | Start single product dev server (no versions) |
| `npm run start <product>/<version>` | Start single product dev server (with version) |

### Build

| Command | Description |
|---------|-------------|
| `npm run build` | Build full site for production |
| `npm run build:single <product>` | Build single product (no versions) |
| `npm run build:single <product>/<version>` | Build single product (with version) |

### Utilities

| Command | Description |
|---------|-------------|
| `npm run serve` | Serve production build locally |
| `npm run clear` | Clear Docusaurus cache |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## ⚡ Single Product Development (Fast Mode)

For faster development when working on individual products, use our single-product build system:

### Examples

```bash
# Products without versions
npm run start 1secure                    # -> localhost:3000 shows 1secure docs
npm run start endpointpolicymanager     # -> localhost:3000 shows EPM docs
npm run start platgovnetsuite           # -> localhost:3000 shows PlatGov NetSuite docs

# Products with versions
npm run start threatprevention/7.5       # -> localhost:3000 shows Threat Prevention 7.5
npm run start accessanalyzer/12.0       # -> localhost:3000 shows Access Analyzer 12.0
npm run start passwordsecure/9.2        # -> localhost:3000 shows Password Secure 9.2

# Special cases
npm run start identitymanager/saas      # -> localhost:3000 shows IdentityManager SaaS
```

### Benefits of Single Product Mode

- **🏃‍♂️ Faster startup** - Only processes one product's content
- **🔄 Faster rebuilds** - Only watches relevant files
- **💾 Lower memory usage** - Reduced build overhead
- **🎯 Direct access** - `localhost:3000` goes directly to your product docs
- **🧹 Clean environment** - No homepage, navbar links, or other distractions

### Supported Products

#### Products Without Versions
- `1secure`
- `endpointpolicymanager`
- `platgovnetsuite`
- `platgovsalesforce`
- `platgovnetsuiteflashlight`
- `platgovsalesforceflashlight`
- `identitymanager/saas` (special case)

#### Products With Versions
- `accessanalyzer` (11.6, 12.0)
- `activitymonitor` (7.1, 8.0)
- `auditor` (10.6, 10.7)
- `changetracker` (8.0, 8.1)
- `dataclassification` (5.6.2, 5.7)
- `directorymanager` (11.0, 11.1)
- `endpointprotector` (5.9.4, 5.9.4.2)
- `identitymanager` (6.1, 6.2)
- `passwordpolicyenforcer` (10.2, 11.0)
- `passwordreset` (3.3, 3.23)
- `passwordsecure` (9.1, 9.2)
- `privilegesecure` (4.1, 4.2)
- `recoveryforactivedirectory` (2.6)
- `threatmanager` (3.0)
- `threatprevention` (7.4, 7.5)

## 📁 Project Structure

```
docs/
├── docs/                           # Documentation content
│   ├── 1secure/                   # 1Secure product docs (no versions)
│   ├── accessanalyzer/           # Access Analyzer docs
│   │   ├── 11.6/                 # Version-specific content
│   │   └── 12.0/                 # Version-specific content
│   ├── threatprevention/          # Threat Prevention docs
│   │   ├── 7.4/                  # Version-specific content
│   │   └── 7.5/                  # Version-specific content
│   ├── identitymanager/          # IdentityManager docs
│   │   ├── 6.1/                  # On-premises version
│   │   ├── 6.2/                  # On-premises version
│   │   └── saas/                 # SaaS version (special case)
│   └── [other-products]/         # Other product documentation
├── sidebars/                      # Navigation configuration
│   ├── sidebar.js                # Default sidebar
│   ├── threatprevention-7.4-sidebar.js  # Product-specific sidebars
│   └── threatprevention-7.5-sidebar.js
├── scripts/                      # Build automation scripts
│   ├── start-wrapper.js          # Single product dev server
│   ├── build-single.js           # Single product build
│   ├── path-converter.js         # Utility scripts
│   └── rename-product.js
├── src/                          # Custom React components and CSS
│   ├── components/               # Reusable components
│   ├── pages/                    # Custom pages (homepage, etc.)
│   └── css/                      # Custom styling
├── static/                       # Static assets (images, files)
├── .github/workflows/            # CI/CD automation
├── docusaurus.config.js          # Main Docusaurus configuration
└── package.json                  # Dependencies and scripts
```

## 🏗️ What's Included

This documentation covers the following Netwrix products:

### Security & Compliance
- **1Secure** - Cloud security posture management
- **Access Analyzer** - File access permissions and data governance  
- **Auditor** - IT infrastructure auditing and compliance
- **Threat Manager/Prevention** - Security threat detection and response

### Identity & Access Management
- **IdentityManager** (on-premises and SaaS) - Identity governance and administration
- **Password Policy Enforcer** - Active Directory password policy management
- **Password Reset** - Self-service password reset solution
- **Password Secure** - Privileged access management
- **Privilege Secure** - Privileged account management

### Change Management & Governance
- **StrongPoint for NetSuite** - Change management and compliance for NetSuite
- **StrongPoint for Salesforce** - Change management for Salesforce environments
- **StrongPoint NetSuite Flashlight** - NetSuite documentation and analysis
- **StrongPoint Salesforce Flashlight** - Salesforce documentation and analysis

### IT Management
- **Activity Monitor** - Real-time activity monitoring and alerting
- **Change Tracker** - Infrastructure change tracking
- **Data Classification** - Automated data discovery and classification
- **Endpoint Protector** - Data loss prevention and device control
- **Directory Manager** - Active Directory group management
- **Endpoint Policy Manager** - Group Policy management and enforcement
- **Recovery for Active Directory** - AD backup and recovery

### Additional Tools
- **Access Information Center** - Centralized access reporting
- Various configuration guides and API documentation

## ✍️ Writing Documentation

### Content Guidelines

- **Format**: Write in Markdown with optional MDX support for React components
- **Structure**: Each product has its own folder under `docs/`
- **Navigation**: Configure in the corresponding sidebar file in `sidebars/`
- **Assets**: Place images and downloadable files in the `static/` directory
- **Links**: Use relative links between documentation pages

### File Organization

```markdown
docs/
├── productname/                    # Product without versions
│   ├── index.md                   # Product landing page
│   ├── installation.md           # Installation guide
│   ├── configuration/             # Feature-specific docs
│   │   ├── basic-setup.md
│   │   └── advanced-config.md
│   └── troubleshooting.md

docs/
├── productname/                    # Product with versions
│   ├── 1.0/                      # Version-specific folder
│   │   ├── index.md
│   │   ├── installation.md
│   │   └── features/
│   └── 2.0/                      # Another version
│       ├── index.md
│       ├── installation.md
│       └── features/
```

### Markdown Frontmatter

Add metadata to the top of each Markdown file:

```markdown
---
title: Page Title
description: Brief description for SEO
keywords: [keyword1, keyword2, keyword3]
slug: custom-url-slug
sidebar_position: 1
---

# Page Content Starts Here
```

### Docusaurus Features

Use these MDX features for better documentation:

```markdown
:::note
This is a note admonition
:::

:::warning
This is a warning
:::

:::tip Pro Tip
This is a tip with a custom title
:::

```javascript title="example.js"
// Code block with title and syntax highlighting
console.log('Hello World');
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows">
    Windows-specific instructions
  </TabItem>
  <TabItem value="linux" label="Linux">
    Linux-specific instructions
  </TabItem>
</Tabs>
```

## 🔧 Configuration

### Main Configuration

**File**: `docusaurus.config.js`

This file contains:
- Site metadata (title, description, URL)
- Plugin configurations for each product
- Theme settings and navbar
- Build optimizations
- Performance settings

### Adding New Products

1. **Create documentation folder:**
   ```bash
   mkdir docs/newproduct
   # or for versioned products:
   mkdir docs/newproduct/1.0
   ```

2. **Add plugin configuration to `docusaurus.config.js`:**
   ```javascript
   [
     '@docusaurus/plugin-content-docs',
     {
       id: 'newproduct',
       path: 'docs/newproduct',
       routeBasePath: 'docs/newproduct',
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

3. **Update scripts for single-product builds:**
   - Add to `versionlessProducts` array in `scripts/start-wrapper.js` (if no versions)
   - No changes needed for versioned products (auto-detected)

4. **Create or update sidebar:**
   ```javascript
   // sidebars/sidebar.js
   module.exports = {
     newproductSidebar: [
       'index',
       'installation',
       {
         type: 'category',
         label: 'Configuration',
         items: ['config/basic', 'config/advanced'],
       },
     ],
   };
   ```

### Sidebar Configuration

Sidebars define the navigation structure for each product:

```javascript
// sidebars/sidebar.js
module.exports = {
  productSidebar: [
    'index',                          // Direct page reference
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'installation',
        'quickstart',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsed: false,               // Expanded by default
      items: [
        'advanced/configuration',
        'advanced/troubleshooting',
      ],
    },
    {
      type: 'link',
      label: 'External Link',
      href: 'https://example.com',
    },
  ],
};
```

## 🚀 Deployment

### Automatic Deployment

This project uses automatic deployment:

- **Production**: Auto-deploys when changes are pushed to `main` branch
- **Development**: Auto-deploys when changes are pushed to `dev` branch
- **Platform**: Render.com

### Manual Deployment

If you need to deploy manually:

```bash
# Build the site
npm run build

# The build/ directory contains static files ready for hosting
# Upload the contents to your static hosting service
```

### Environment Variables

Set these in your deployment environment:

- `RENDER_EXTERNAL_URL`: Production URL (automatically set by Render)
- `NODE_OPTIONS`: Set to `--max-old-space-size=8192` for large builds

## 🤖 AI-Powered Code Review

This repository includes automated PR reviews using Claude:

**File**: `.github/workflows/agent-docusarus-dev.yml`

The AI reviewer focuses on:
- **Code Quality**: Docusaurus configuration, React components, build performance
- **Technical Writing**: Clarity, accuracy, consistent terminology
- **Markdown/MDX**: Proper use of Docusaurus features, frontmatter, links
- **Documentation Standards**: Style guide adherence, appropriate technical level

Reviews are automatically triggered on pull requests.

## 🛠️ Technical Details

### Technology Stack

- **Framework**: Docusaurus 3.8.1
- **React**: 18.3.1
- **Node.js**: 18.0+ required
- **Build Tool**: Rspack (via Docusaurus Faster)
- **Styling**: CSS Modules + Custom CSS
- **Deployment**: Static site generation

### Performance Optimizations

- **Memory**: 8GB allocation for large documentation builds
- **Rspack**: Faster bundling with persistent caching
- **SWC**: Fast JavaScript/TypeScript compilation
- **Worker Threads**: Parallel static site generation
- **Tree Shaking**: Removes unused code from bundles

### Build System Features

- **Single Product Builds**: Isolated builds for faster development
- **Version Management**: Support for product versioning
- **Hot Reload**: Live updates during development
- **Static Generation**: Fast, SEO-friendly static sites
- **Code Splitting**: Optimized loading performance

## 🤝 Contributing

### Development Workflow

1. **Create a branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes:**
   - Edit documentation in the appropriate `docs/` folder
   - Update sidebars if adding new pages
   - Add any necessary static assets

3. **Test locally:**
   ```bash
   # Test full site
   npm start
   
   # Or test single product (faster)
   npm run start yourproduct
   ```

4. **Verify build:**
   ```bash
   npm run build
   ```

5. **Format code:**
   ```bash
   npm run format
   ```

6. **Create pull request:**
   - Push to your branch
   - Open PR against `dev` branch
   - AI review will run automatically

### Best Practices

#### Content
- **Write for your audience**: Match technical level to user expertise
- **Use clear headings**: Create scannable document structure
- **Include examples**: Show, don't just tell
- **Test instructions**: Verify all steps work as written
- **Use consistent terminology**: Follow established product naming

#### Code
- **Follow existing patterns**: Match the established code style
- **Test thoroughly**: Verify changes work in both single and full builds
- **Document changes**: Update README if adding new features
- **Optimize performance**: Consider build time and bundle size impact

#### Git
- **Descriptive commits**: Use clear, specific commit messages
- **Small changes**: Break large features into smaller, reviewable chunks
- **Target correct branch**: Use `dev` for testing, `main` for production

### Troubleshooting

#### Build Issues

```bash
# Clear cache and node_modules
npm run clear
rm -rf node_modules package-lock.json
npm install

# Check memory allocation
export NODE_OPTIONS="--max-old-space-size=8192"
npm run build
```

#### Development Server Issues

```bash
# Kill existing processes
pkill -f "docusaurus start"

# Restart development server
npm start
```

#### Single Product Build Issues

```bash
# Verify product exists in config
grep -r "id: 'yourproduct'" docusaurus.config.js

# Check for typos in product/version names
ls docs/yourproduct/
```

## 📞 Support

### Documentation Issues

1. **Build Problems**: Check Docusaurus documentation at https://docusaurus.io/docs
2. **Deployment Issues**: Review build logs in Render dashboard
3. **Browser Issues**: Check browser console for client-side errors
4. **Content Issues**: Review Markdown syntax and frontmatter

### Getting Help

- **Technical Issues**: Create an issue in this repository
- **Product Questions**: Contact the respective product teams
- **Site Feedback**: Use the community discussion forums
- **Urgent Issues**: Contact the documentation team directly

### Useful Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [React Documentation](https://react.dev/)

---

## 📄 License

This documentation is proprietary to Netwrix Corporation. All rights reserved.

For questions about licensing or usage rights, contact Netwrix legal team.