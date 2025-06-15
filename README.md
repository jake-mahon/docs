# Netwrix Product Documentation

This repository contains the complete documentation site for all Netwrix products, built with [Docusaurus](https://docusaurus.io/). The site provides comprehensive user guides, configuration instructions, API documentation, and release notes for the entire Netwrix product suite.

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
   This starts a local development server and opens the site in your browser. Most changes are reflected live without requiring a restart.

3. **Build for production:**
   ```bash
   npm run build
   ```
   This generates static content into the `build` directory that can be served by any static hosting service.

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

For product-specific documentation questions, refer to the respective product documentation or contact the product teams.