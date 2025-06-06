---
id: nutanix
title: Nutanix Tab
---

# Nutanix Tab

![Nutanix Host Properties](/img/activitymonitor/admin/NutanixHostProp01.png "Nutanix Host Properties")

The configurable options are:

- Nutanix Filer – Enter the name of the filer
- Password – Enter the password for the user name
- Protocol – Select a protocol for the REST API access from the drop-down menu:

  - Auto Detect
  - HTTPS
  - HTTPS, ignore certificate errors
- Connect – Click to connect using the selected protocol and validate the connection with Nutanix

![Trusted Server Certificate popup window](/img/activitymonitor/admin/TrustedServerCertificate.png "Trusted Server Certificate popup window")- HTTPS Options – Opens the Trusted server certificate window to customize the certificate verification during a TLS session

  - Import – Click to browse for a trusted server certificate
  - Remove – Click to remove the selected trusted server certificate
  - Enable hostname verification – Select this checkbox to ensure that the host name the product connects and matches the name in the certificate (CN name)
  - Click **OK** to close the window and save the modifications.

**NOTE:** Nutanix Files does not report events for activity originating from a server where the Activity Monitor Agent is installed.