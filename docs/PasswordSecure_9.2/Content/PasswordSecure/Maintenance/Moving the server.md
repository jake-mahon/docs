---
sidebar_position: 6286
title: Moving the server
---

# Moving the server

## Preparations

It is necessary to make some preparations so that the move can be completed without any problems.

#### 1. Installing the SQL server

If the SQL server and the application server are on the same machine, the SQL server should be installed on the new machine first. It is necessary to observe the [MSSQL Server](../Installation/Requirements/MSSQL Server "MSSQL Server") for this process.

#### 2. Installing the server

The Netwrix Password Secure application server is installed next (see [Application server](../Installation/Requirements/Application server "Application server")). The installation itself is described under [Installation Server Manager](../Installation/Installation Server Manager/Installation Server Manager "Installation AdminClient").

#### 3. Basic configuration

After the server has been installed, the [Basic configuration](../Configuration/Server Manager/BaseConfiguration/Basic configuration "Basic configuration") is completed. A new configuration database will be created on the SQL server as a result. If you want to retain the old SQL server, it is necessary to give the configuration database a new name.

#### 4. Deactivating the old server

The license first needs to be deactivated before it can be activated on the new server (see options under [License settings](../Configuration/Server Manager/Main menu/License settings "License settings"). Now stop the server so that nothing more can be changed in the database.

## Backing up the data

After making these preparations, the data from the old server can be backed up.

#### 1. Backing up the system

If using a virtual machine, a backup of it should be created. The old version of the server can then be restored in the event of problems.

#### 2. Backing up the database

In order to transfer the data to the new server, a backup of the database should be created. Although this is also possible via the Server Manager, we recommend carrying out the backup at the SQL level: right click on the database, then on Tasks and Backup. The desired target folder is selected in the following window.

![insert backup](../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/sql-backup-en.png "insert backup")

#### 3. Backing up the server certificate

It is essential that the all available [Certificates](../Configuration/Server Manager/Certificates/Certificates "Certificates") are backed up. Depending on the installation, a different number of certificates are required here.

## Configuring the new server

After the backed up data (database and certificate) has been transferred to the new server, it still needs to be integrated.

#### 1. Integrating the database at the SQL level

Firstly, a new database is created on the SQL server. This option can be found in the SQL Management Studio after right clicking on Databases. It is usually sufficient to simply enter the database names.

![integrate the database](../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/sql-new-db-en.png "integrate the database")

As soon as the database has been created, the option Restore (under Tasks) can be selected by right clicking on the server. The Database is thus selected here. The backup now needs to be selected. It is also essential to check whether the correct database has been selected in the field "Target".

![restore db](../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/sql-restore-en.png "restore db")

NOTE: This method can be also used to import backups that were directly created from the Server Manager.

#### 2. Setting up the server

After the backup has been installed on the new database, you can be start the Server Manager and run the setup wizard. The [Setup wizard](../Configuration/Server Manager/SetupWizard/Setup wizard "Setup wizard") is used for (amongst other things) reactivating the license. It is now possible to enter all of the desired configurations for the server.

#### 3. Importing the certificates

The backed up certificates are imported via the certificate manager.

#### 4. Integrating the database

Finally, the database is integrated onto the server via the database wizard.

## Modifications on the client

If the IP and/or host name for the server has changed, it is necessary to create/roll out new database profiles from the client.