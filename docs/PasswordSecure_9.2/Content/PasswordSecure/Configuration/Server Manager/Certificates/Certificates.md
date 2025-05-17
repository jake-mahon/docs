---
sidebar_position: 6348
title: Certificates
---

# Certificates

Various different certificates are used to guarantee the security of Netwrix Password Secure. The certificates are essential for the smooth operation of Netwrix Password Secure. It is thus important that they are carefully backed up.

## What certificates are used?

The individual certificates are described in the following sections:

* [SSL connection certificates](SSL connection certificates "SSL connection certificates")
* [Database certificates](Database certificates "Database certificates")
* [Master Key certificates](Master Key certificates "Master Key certificates")
* [Discovery service certificates](Discovery service certificates "Discovery service certificates")s
* [Password Reset certificates](Password Reset certificates "Password Reset certificates")

## Calling up the certificate manager

There are two ways to open the certificate manager. The certificates for each specific database can be managed via the ribbon:

![](../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/PasswordSecure_Documentation_without_existing_chapters/Installation with parameters_196_647x73.png)

In the **Main menu**, it is also possible to start the certificate manager for all databases via the **basic configuration:**

![base configuration](../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/Installation_with_parameters_197-en.png "base configuration")

NOTE: Operation of the certificate manager is always the same. The only difference is whether the certificates are displayed for each database or for all databases.

#### Checking existing certificates

After opening the certificate manager, all certificates specific to Netwrix Password Secure will be displayed. Clicking on the certificate will display further information.

![](../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/PasswordSecure_Documentation_without_existing_chapters/Installation with parameters_198.png)

Double clicking on a certificate will open the Windows Certificate Manger to provide more detailed information.

![](../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/PasswordSecure_Documentation_without_existing_chapters/Installation with parameters_199_423x396.png)

#### Required certificates / deleting no longer required certificates

The overview will initially only display those certificates that are being used and are thus required. Clicking on **All** will also display the no longer required certificates. For example, it is possible that outdated certificates exist on the machine due to a test installation. These certificates can be easily deleted via the corresponding button in the ribbon.

![](../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/certificates-ac-4-en.png)

#### Importing certificates

Previously backed up certificates can be integrated into the installation via the Import button. This merely requires you to enter the desired .pfx file and its password.

#### Exporting certificates

The relevant certificates will be backed up by clicking on export. A password firstly needs to be issued here. If a storage location has not yet been entered via the settings, you are firstly asked to enter it.

NOTE: SSL connection certificates are not included in this process and are also not backed up. These certificates can be recreated if necessary.

#### Settings

You can define whether every certificate should be saved to its own file in the **settings**. If this option has not been activated, all relevant certificates will be backed up in one file. In addition, the storage location is defined in the settings.

![](../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/PasswordSecure_Documentation_without_existing_chapters/Installation with parameters_201_826x310.png)

#### Backing up certificates

If you want to automatically back up the certificates on a cyclical basis, this can be done via the backup system. Further information can be found in the section Backup management.