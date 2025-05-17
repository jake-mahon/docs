---
sidebar_position: 448
title: Usercube-Generate-Configuration
---

# Usercube-Generate-Configuration

Generates from a CSV file the configuration of a connector with these entities.

## Overview

Two subcommands are possible for generation.

* simpleconnector
* complexconnector

The simple connector allows you to generate the configuration for a CSV file and create the connector.
The complex connector allows you to generate the configuration for a list of CSV files and create the connector.

### 1. Simple connector

From a CSV file, generates the configuration of the entity representing the CSV file.

**The subcommand*****simpleconnector*****must precede the arguments.**

### 2. Complex connector

From a list of CSV files, generates the configuration of the entities representing each file.
The complex connector requires as an argument an xml file containing all the CSV files to be processed as well as the primary keys of these files.

Example of xml file

```
                                

```
* Path: CSV file path.
* File: Name of the files to be processed.
* PrimaryKey: Fills in the primary key of the CSV file.
* Header: Column name in the CSV file.
* EntityTypeName: Indicates the name of the entity to be created.
* Name: name of the connector to be created.

**The subcommand*****complexconnector*****must precede the arguments.**

## Examples

### Simple connector

```
./Usercube-Generate-Configuration.exe simpleconnector -g "C:/GeneratedFile/file" -f "C:/SourceFile/confFile.csv"

```
### Complex connector

```
./Usercube-Generate-Configuration.exe complexconnector -g "C:/GeneratedFile/file" "C:/SourceFile/confFile.xml"

```
## Arguments

| Argument Name | Details |
| --- | --- |
| --generated-file (-g) required | **Type**  String  **Description** Path to the generated file. |
| --csv-path (-h) optional | **Type**  String  **Description** Path to the CSV file. **Note:** used only for a simple connector. |
| --encoding (-e) optional | **Type**  String  **Description** Encoding of the CSV file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#list-of-encodings). **Note:** used only for a simple connector. |
| --csv-separator (-t) optional | **Type**  String  **Description** Column separator of the CSV file. **Note:** used only for a simple connector. |
| --generated-connector (-r) optional | **Type**  String  **Description** Name of the generated connector. **Note:** used only for a simple connector. |
| --keep-all-columns (-k) optional | **Type**  No Value  **Description** Keeps all the columns. |
| --connector-description optional | **Type**  String  **Description** XML file that describes the CSV files and their primary key columns. |

|  |  |
| --- | --- |
| --file-cert-thumbprint optional | **Type**  String  **Description** Thumbprint of the certificate when the certificate is in the store. |
| --file-cert-dn optional | **Type**  String  **Description** Subject Distinguished Name of the certificate when the certificate is in the store. |
| --file-cert-store-location optional | **Type**  String  **Description** Store location of the certificate when the certificate is in the store. |
| --file-cert-store-name optional | **Type**  String  **Description** Store name of the certificate when the certificate is in the store. |
| --file-cert-file optional | **Type**  String  **Description** File path of the certificate when the certificate is in a PFX file. |
| --file-cert-password optional | **Type**  String  **Description** Password of the certificate when the certificate is in a PFX file. |

|  |  |
| --- | --- |
| --log-level optional | **Type**  LogLevel  **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`. |