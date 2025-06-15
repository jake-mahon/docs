# Netwrix Product Documentation

This repository contains the complete documentation site for all Netwrix products, built with
[Docusaurus](https://docusaurus.io/). The site provides comprehensive user guides, configuration
instructions, API documentation, and release notes for the entire Netwrix product suite.

## What's Included

This documentation covers the following Netwrix products:

### Security & Compliance

- **1Secure** - Cloud security posture management
- **Access Analyzer** - File access permissions and data governance
- **Auditor** - IT infrastructure auditing and compliance
- **Threat Manager/Prevention** - Security threat detection and response

### Identity & Access Management

- **UserCube** (both on-premises and SaaS) - Identity governance and administration
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
- **Group ID** - Active Directory group management
- **PolicyPak** - Group Policy management and enforcement
- **Recovery for Active Directory** - AD backup and recovery

### Additional Tools

- **Access Information Center** - Centralized access reporting
- Various configuration guides and API documentation

## Prerequisites

- **Node.js**: Version 18.0 or higher
- **npm**: Comes with Node.js

## Quick Start

1. **Install dependencies:**

    ```bash
    npm install
    ```

2. **Start development server:**

    ```bash
    npm start
    ```

    This starts a local development server and opens the site in your browser. Most changes are
    reflected live without requiring a restart.

3. **Build for production:**
    ```bash
    npm run build
    ```
    This generates static content into the `build` directory that can be served by any static
    hosting service.

## Available Scripts

- `npm start` - Start local development server
- `npm run build` - Build the site for production
- `npm run serve` - Serve the production build locally
- `npm run clear` - Clear Docusaurus cache
- `npm run typecheck` - Run TypeScript type checking
- `npm run swizzle` - Eject and customize Docusaurus components

## Project Structure

```
docs/
├── docs/                     # Documentation content
│   ├── 1secure/             # 1Secure product docs
│   ├── usercube/            # UserCube on-premises docs
│   ├── usercube_saas/       # UserCube SaaS docs
│   ├── strongpoint*/        # StrongPoint product variants
│   └── [other-products]/    # Other product documentation
├── static/                  # Static assets (images, files)
├── src/                     # Custom React components and CSS
├── sidebars/               # Navigation configuration per product
├── versioned_docs/         # Versioned documentation
├── docusaurus.config.js    # Main Docusaurus configuration
└── package.json           # Dependencies and scripts
```

## Deployment

This project uses automatic deployment via Render:

- **Production**: Automatically deploys when changes are pushed to the `main` branch
- **Development**: Automatically deploys when changes are pushed to the `dev` branch

The deployment process runs `npm run build` and serves the generated static files.

## Writing Documentation

- Documentation is written in **Markdown** with optional **MDX** support for React components
- Each product has its own folder under `docs/`
- Navigation is configured in the corresponding sidebar file in `sidebars/`
- Images and downloadable files go in the `static/` directory
- Use relative links between documentation pages

## Configuration

- **Main config**: `docusaurus.config.js`
- **Product-specific builds**: `docusaurus.config.products.js`
- **Sidebars**: Individual files in `sidebars/` directory
- **Styling**: Custom CSS in `src/css/custom.css`

## Technical Details

- **Framework**: Docusaurus 3.8.1
- **React**: 18.3.1
- **Build tool**: Built-in Docusaurus build system
- **Memory allocation**: Increased to 8GB for large documentation builds
- **Browser support**: Modern browsers (see `browserslist` in package.json)

## Homepage Maintenance Guide

The homepage features several dynamic components that can be easily customized. Here's how to maintain and update them:

### Adding New Products to the Homepage

Products are organized into categories and displayed on the homepage. To add a new product:

1. **Navigate to**: `src/components/HomepageFeatures/index.js`
2. **Find the `ProductCategories` array** (around line 39)
3. **Choose the appropriate category** or create a new one
4. **Add your product** following this structure:
   ```javascript
   {
     name: 'Product Name',
     description: 'Brief description of what the product does',
     link: '/docs/productname', // Must match your docs folder
   }
   ```

**Example - Adding a new product to Security Administration:**
```javascript
{
  name: 'New Security Tool',
  description: 'Advanced threat detection and response',
  link: '/docs/newsecuritytool',
}
```

**To create a new category:**
```javascript
{
  title: 'New Category Name',
  description: 'Category description',
  icon: '🔒', // Choose an appropriate emoji
  products: [
    // Add products here
  ],
}
```

### Customizing the Animated Title

The homepage features a typewriter effect with rotating titles. To customize:

1. **Navigate to**: `src/components/HomepageFeatures/index.js`
2. **Find the `SECTION_TITLES` array** (around line 15)
3. **Add/remove/edit titles** as needed:
   ```javascript
   const SECTION_TITLES = [
     "Your New Title Here",
     "Another Creative Title",
     "Mix Professional and Fun Titles",
   ]
   ```

**Animation settings:**
- Type speed: 60ms per character
- Backspace speed: 30ms per character  
- Pause duration: 2 seconds between titles
- Loops infinitely with a blinking cursor

### Managing Community Topics

The community carousel fetches live data from Discourse but can be customized:

#### Changing Topic Selection Criteria

1. **Navigate to**: `src/components/CommunityHighlights/index.js`
2. **Find the engagement scoring logic** (around line 110):
   ```javascript
   const scoreA = (a.like_count || 0) * 10 + (a.views || 0) * 0.1 + (a.posts_count || 0) * 2
   ```
3. **Adjust the multipliers** to change topic prioritization:
   - `likes × 10`: High weight for liked topics
   - `views × 0.1`: Low weight for view count
   - `posts × 2`: Medium weight for discussion activity

#### Adding New Product Tags

To recognize new products in community topics:

1. **Navigate to**: `src/components/CommunityHighlights/index.js`
2. **Find the `PRODUCT_TAGS` array** (around line 13)
3. **Add new tags** in lowercase, hyphenated format:
   ```javascript
   const PRODUCT_TAGS = [
     // existing tags...
     'new-product-name',
     'another-product',
   ]
   ```

#### Customizing Carousel Behavior

**Timing settings** (around line 158):
- `delay: 10000`: 10 seconds between slides
- `speed: 800`: 1.8 seconds for slide transition

**To change these:**
```javascript
const interval = setInterval(() => {
  // Change slide logic
}, 10000) // Change this number (milliseconds)
```

**Transition speed** in CSS (`src/components/CommunityHighlights/styles.module.css`):
```css
.carouselTrack {
  transition: transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### Other Customizations

#### Updating the Hero Section

1. **Navigate to**: `src/pages/index.js`
2. **Find the `HomepageHeader` function** (around line 10)
3. **Update title, subtitle, or button text**:
   ```javascript
   <h1 className={styles.heroTitle}>Your New Title</h1>
   <p className={styles.heroSubtitle}>Your new subtitle</p>
   ```

#### Styling Changes

- **Global styles**: `src/css/custom.css`
- **Component styles**: Each component has its own `.module.css` file
- **Homepage styles**: `src/pages/index.module.css`

## Contributing

1. Make changes to the appropriate documentation files
2. Test locally with `npm start`
3. Ensure the build succeeds with `npm run build`
4. Commit and push to the appropriate branch (`dev` for testing, `main` for production)

## Support

For technical issues with the documentation site, please check:

1. The Docusaurus documentation: https://docusaurus.io/docs
2. Build logs in the deployment system
3. Browser console for client-side issues

For product-specific documentation questions, refer to the respective product documentation or
contact the product teams.
