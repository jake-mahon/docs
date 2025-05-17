---
sidebar_position: 7329
title: Signing Key Utility
---

# Signing Key Utility

This utility was created to remediate the vulnerability described in Netwrix security advisory ADV-2025-004 (). Running this utility will cause a new customer-specific signing key to be generated and used by the application. See the [Generate a Signing Key](#generate "Generate a SigningKey") section for additional information.

Having generated the customer-specific signing key, your existing schedules will not work as their authentication mechanism will no longer be considered valid. Therefore, the authentication mechanism must be updated for schedules as well. See the [Update Schedules](#update "Update Schedules")section for additional information.

In case you are running multiple instances of Directory Manager for load balancing and high availability, using this utility you can export the newly generated signing key and then import it to other Directory Manager instances. See the following sections for information on how to export and import the signing key:

* [Export a Signing Key](#export "Export a SigningKey")
* [Import a Signing Key](#import "Import a SigningKey")

## Download the Utility

You can download the Netwrix Directory Manager (formerly GroupID) Signing Key Utility from the following URLs:

* Pre v11.1 (2.1, 2.2, 2.3, 2.4)

  
* For v11.1

  

The file is downloaded into a folder as per your browser’s download settings. Unzip the file into a folder.

## Generate a Signing Key

Using Netwrix Directory Manager (formerly GroupID) Signing Key Utility you can generate a new signing key.

RECOMMENDED: Generate the new signing key on your Directory Manager server machine.

Follow the steps to generate a new signing key.

Step 1 – At the Windows Command prompt, go to the folder where you have placed the utility.

Step 2 – Type the following command at the prompt:

```
SigningKeyUtility.exe GenerateSigningKey -u “” -s “” -d “” -i
```
Step 3 – Provide the password of SQL server for authentication.

Parameters:

* -u — provide username of the SQL server where your database exists

* -s — provide the name of the SQL server

* -d — provide database name you are using with Directory Manager

* -i — use this parameter if you are using SQL authentication.   
   If you are using Windows authentication, ignore this argument

## Update Schedules

This command will update the signing key information in all the existing schedules for each identity store, except the Microsoft Entra ID store.

```
SigningKeyUtility.exe UpdateSchedulers -u “” -s “” -d “” -i
```
Parameters

* Use the same parameters given in the Generate a SigningKey section.

## Export a Signing Key

If you are using multiple instances of Directory Manager, then you need to export the newly generated signing key to other instances of Directory Manager.
Type the following command at the Windows Command prompt to export the signing key in .pfx. encrypted format with a password:

```
SigningKeyUtility.exe ExportSigningKey -o “”
```
Parameters

* -o — provide folder location where the utility will export the signing key

This command will generate a password for the encrypted signing key. Copy it and keep it safe for later use. The encrypted signing key is saved in the specified folder.

## Import a Signing Key

Copy the newly generated signing key on the required Directory Manager instance.
Type the following command at the Windows Command prompt to import the signing key which is in .pfx encrypted format:

```
SigningKeyUtility.exe ImportSigningKey -n “” -p “” -u “” -s “” -d “” -i
```
Provide the password for SQL server authentication.

Parameters

* -n — provide folder location to import the encrypted signing key from

* -p — provide the password to decrypt the signing key

* Use the same parameters given in the [Generate a Signing Key](#generate "Generate a SigningKey") section.