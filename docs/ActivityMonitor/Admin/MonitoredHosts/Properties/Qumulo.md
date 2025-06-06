---
id: qumulo
title: Qumulo Tab
---

# Qumulo Tab

![Qumulo Host Properties](/img/activitymonitor/admin/QumuloHostProperties.png "Qumulo Host Properties")

The configurable options are:

- Cluster name – Enter the name of the filer
- Username – Enter the user name for the Qumulo user
- Password – Enter the password for the user name
- Protocol – Select one of the following protocols from the drop-down menu:

  - Auto Detect
  - HTTPS
  - HTTPS, ignore certificate errors

- Connect – Click to connect using the selected protocol and validate the connection with Qumulo

![Trusted Server Certificate popup window](/img/activitymonitor/admin/TrustedServerCertificate.png "Trusted Server Certificate popup window")- HTTPS Options – Opens the Trusted server certificate window to customize the certificate verification during a TLS session

  - Import – Click to browse for a trusted server certificate
  - Remove – Click to remove the selected trusted server certificate
  - Enable hostname verification – Select this checkbox to ensure that the host name the product connects and matches the name in the certificate (CN name)
  - Click **OK** to close the window and save the modifications.