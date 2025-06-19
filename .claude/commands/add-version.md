# Add New Version to Existing Product

This command helps you quickly add a new version to an existing product in the documentation.

## Steps to Complete

1. **Gather Information**
   - Ask user for product name (e.g., "accessanalyzer", "threatprevention")
   - Ask for new version number (e.g., "12.1", "7.6")
   - Identify the current latest version by checking existing directories

2. **Copy Documentation from Latest Version**
   ```bash
   # Find latest version
   ls -d /docs/{productname}/*/ | sort -V | tail -1
   
   # Copy to new version
   cp -r /docs/{productname}/{latest_version}/ /docs/{productname}/{new_version}/
   ```

3. **Update Frontmatter in Copied Files**
   - Update version references in all `.md` files
   - Update any version-specific content in whatsnew.md

4. **Create New Sidebar Configuration**
   ```bash
   cp /sidebars/{productname}-{latest_version}-sidebar.js /sidebars/{productname}-{new_version}-sidebar.js
   ```
   
   Update the sidebar file if it contains version-specific paths.

5. **Add to docusaurus.config.js**
   
   Add new plugin configuration after the existing versions:
   ```javascript
   [
     '@docusaurus/plugin-content-docs',
     {
       id: '{productname}{version_underscores}',  // e.g., 'accessanalyzer12_1'
       path: 'docs/{productname}/{version}',
       routeBasePath: 'docs/{productname}/{version}',
       sidebarPath: require.resolve('./sidebars/{productname}-{version}-sidebar.js'),
       editUrl: 'https://github.com/netwrix/docs/tree/main/',
       exclude: ['**/CLAUDE.md'],
       versions: {
         current: {
           label: '{version}',
         },
       },
     },
   ],
   ```

6. **Update HomepageFeatures Component**
   
   Find the product in `/src/components/HomepageFeatures/index.js` and update the link to point to the new version:
   ```javascript
   {
     title: '{Product Name}',
     link: '/docs/{productname}/{new_version}',  // Update to new version
     description: '{product description}'
   },
   ```

7. **Test the New Version**
   ```bash
   npm start {productname}/{new_version}
   ```

8. **Update What's New Page**
   - Clear the content in `/docs/{productname}/{new_version}/whatsnew.md`
   - Add placeholder for new version features

## Example

Adding version 12.1 to Access Analyzer:
1. Copy from 12.0: `cp -r docs/accessanalyzer/12.0/ docs/accessanalyzer/12.1/`
2. Create sidebar: `cp sidebars/accessanalyzer-12.0-sidebar.js sidebars/accessanalyzer-12.1-sidebar.js`
3. Add plugin with id: `accessanalyzer12_1`
4. Update HomepageFeatures link to `/docs/accessanalyzer/12.1`
5. Test: `npm start accessanalyzer/12.1`

## Important Notes

- Version numbers use dots in paths (12.1) but underscores in IDs (12_1)
- Always test the new version before committing
- Update whatsnew.md with actual changes for the new version
- Consider if any version-specific content needs updating