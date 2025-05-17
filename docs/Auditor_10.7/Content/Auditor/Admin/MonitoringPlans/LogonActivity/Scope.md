---
sidebar_position: 1756
title: Logon Activity Monitoring Scope
---

Filter: 

* All Files

Submit Search

# Logon Activity Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the Logon Activity monitoring scope.

Follow the steps to exclude data from the Logon Activity monitoring scope:

**Step 1 –** Navigate to the *%working folder%\\NLA\Settings\* folder and locate your monitoring plan GUID.

**NOTE:** If you have several monitoring plans for monitoring Logon Activity, configure omitlist for each monitoring plan separately.

**Step 2 –** Edit the Settings.cfg file based on the following guidelines:

* Each entry must be a separate line.
* A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
* Lines that start with the # sign are treated as comments and are ignored.

| Configuration String | Description | Syntax |
| --- | --- | --- |
| `` | Contains a list of DCs to be excluded from being monitored. | ```
DC_name ```
For example:   ```
 ```
|
| `` | Determines whether to enable network traffic compression for a Domain Controller or not.  If configured, overrides the Enable network traffic compression option in monitoring plan configuration. | ```
 ```
```
 ```
```
 ```
```
 ```
```
 ```
```
 ```
```
 ```
```
 ```
```
 ```
```
 ```
|
| ```
 ```
```
 ```
| Contains a list of users to be excluded from being monitored. Allows specifying a user by name. | ```
User name ```
For example:   ```
 ```
|
| `` | Contains a list of users to be excluded from being monitored. Allows specifying a user by security identifier (SID). | ```
User SID ```
For example:   ```
 ```
|

The file must be formatted in accordance with XML standard. The following symbols must be replaced with corresponding XML entities: & (ampersand), " (double quotes), ' (single quotes),  (greater than) symbols.

| Symbol | XML entity |
| --- | --- |
| &  e.g., Ally & Sons | &amp;  e.g., Ally &amp; Sons |
| "  e.g., Domain1\Users\"Stars" | &quot;  e.g., Domain1\Users\&quot;Stars&quot; |
| ' e.g., Domain1\Users\O'Hara | &apos;  e.g., Domain1\Users\O&apos;Hara |
|   e.g., ID>500 | &gt;  e.g., ID&gt;500 |