# Global Settings Page

The Global Settings page is accessible from the Navigation pane under __Configuration__ > __System Settings__. It shows all global RDP session settings.

![globalsettingspage](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/page/globalsettingspage.png)

The right of the page shows details of the RDP file settings and has the following features:

- Edit — Click any field to edit the selected settings
- Name — Name of the selected settings
- Allowed Resolutions — Check the boxes to enable those resolutions for the RDP session
- Default Resolution — The resolution the RDP session will use when first connected
- Certificate Thumbprint — The hexadecimal certificate (or thumbprint) value. See the [Sign RDP Files to Prevent Publisher Warning](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/troubleshooting.md#Sign-RDPFiles-to-Prevent-Publisher-Warning) topic for additional information.
- WinRM HTTP Setting– This setting governs the HTTP encryption settings that will be used for WinRM connections. The following options are available:
  - Use HTTP
  - Use HTTPS if available
  - Use HTTPS only
- UI Idle Timeout Options — Users with the Administrator role can configure the idle timeout for the Privilege Secure Console. The default idle timeout is 10 minutes.
- Save button (only visible when editing) — Saves changes
- Cancel button (only visible when editing) — Discards changes
