---
sidebar_position: 6601
title: PPE Tool
---

# PPE Tool

The PPE Tool is designed to configure local and domain instances of Password Policy Enforcer and produce reports pertaining to the configuration of Password Policy Enforcer. The PPE Tool is designed to perform the following functions:

* Export the configuration from the existing instance of Password Policy Enforcer, regardless if the server is local or domain.
* Import existing PPE configurations on another PPE server instance.
* Generate user-friendly reports that contain configuration values and descriptions.
* Create HTML reports with configuration values and descriptions of the PPE server instance.

This topic will cover how to install the PPE Tool, customize and run reports, and configuration options in the PPE Tool.

## Using the PPE Tool

The PPE Tool installs with the default installation of Password Policy Enforcer under the `C:\Program Files (x86)\Password Policy Enforcer\ppetool` folder. Once installed, the PPE Tool allows users to perform a number of operations related to Password Policy Enforcer functionality which are described in the table below.

**NOTE:** All PPE Tool operations can be executed from the Command Prompt, if run with administrator rights.

### PPE Tool Operations

***RECOMMENDED:*** PPE Tool operations should only be executed one at a time. For example, you should not execute the /e (Export) and /i (Import) operations simultaneously; you should not run /e (Export) and /r (Report) operations simultaneously.

Common PPE Tool Operations

| Operation | Operation Name | Operation Description |
| --- | --- | --- |
| /? | help | * Displays Help and exits the application. All other options are ignored. |
| /m | minimal | * Configures the PPE Tool to operate in Minimal mode. * This operation strips away all extraneous information (e.g., policy messages, license information, etc.) while importing or exporting to the PPE Tool. * By default, the PPE Tool imports and exports all information available (e.g., policy messages, license information, etc.). |
| /d | domain [in controller] | * Configures the PPE Tool to operate in Domain mode. * The default controller is localhost. * This operation will make PPE Tool work with the LDAP Password Policy Enforcer instance. PPE Tool imports or exports configurations from the local registry. * To use this operation , you must run PPE Tool as a domain administrator user. However, this operation can be used on both the domain controller and on any member. If an invalid domain controller is provided as an argument, then the PPE Tool will fail at the import / export stage. * This operation is ignored when used to create reports from the file source (present with the /c (Config [in file name]) option). When the PPE Tool starts in a domain environment without the /d (Domain [in controller]) operation, a warning message will appear. However, this will not prevent the PPE Tool from operating on a local environment. |
| /c | config [in file name] | * Uses a config file instead of Password Policy Enforcer export when exporting reports (in the case of /i (Import), /h (Human [out file name]), and /r (Report [out file name]). * The default file is `config.xml`. * This operation defines the input file for the i/ (Import) operation, and thus is necessary for importing files to the PPE Tool. An error message will appear if the /c (Config [in file name]) option is omitted. * By default, the /h (Human [out file name]) and /r (Report [out file name]) operations use the Password Policy Enforcer instance as the reporting source. The /c (Config [in file name]) operation should provide the source configuration file as an argument to create reports. If an invalid file name is provided as an argument in this operation, the PPE Tool will display the appropriate error message and will fail. |

Operations PPE Tool options are as follows:

| Task | Task Name | Task Description |
| --- | --- | --- |
| /e | export [out file name] | * Exports config data (default) from the Password Policy Enforcer instance to the file. * This operations is enabled by default. * This operation can not be used with /c (Config [in file name]) or i/ (Import) operations, but can be combined with /h (Human [out file name]). |
| /i | import | * Imports the config file. * Imports existing configuration using the input configuration file defined by the /d (Domain [in controller]) . If the /c (Config [in file name]) operation is omitted, the PPE Tool will display an error message and exit the application. * When i/ (Import) is used with the /h (Human [out file name]) or /r (Report [out file name]) operations, the latter will be ignored. * /d (Domain [in controller]) and /m (Minimal) operations my affect the result of the import. |
| /h | human [out file name] | * Converts the config file to a human-readable format and produces a human-readable report based on the current Password Policy Enforcer instance configuration or the configuration provided by the /d (Domain [in controller]). * If no custom file name is provided, the default file name will be `config_human_readable.xml`. |
| /r | report [out file name] | * Converts the config file to HTML and produces an HTML report file based on the current Password Policy Enforcer instance configuration or the configuration provided by the /d (Domain [in controller]). * Generates the HTML report into `C:\Program Files (x86)\Password Policy Enforcer\Report` alongside the .css file. * The default files name is `report.html`. |

### PPE Usage Samples

This section covers some sample operations usable in either the PPE Tool or in the Command console (with administrator rights). Each operation can be executed after the following commands have been executed:

C:\Windows/system32>cd..

`C:\`[location of PPE Tool]`>`[operation]

Once this location has been accessed in the Command console, enter one of the following commands in the [operation] variable above to execute a PPE Tool operation in the Command console.

| Action | Operation | Message |
| --- | --- | --- |
| Simple Config export operation | * ppetool | Warning: PPETool started in domain environment without /d option. Using local source. Hope you know what are you doing.  Config successfully exported. |
| Simple Config export in domain environment with DC %Full computer name of Domain Controller% | * ppetool /d localhost  * ppetool /d %Full computer name of Domain Controller% | Config successfully exported. |
| Export local config into local.xml and create it from the HR.xml and report.html reports | * ppetool /e local.xml /h HR.xml /r Report.html | Warning: PPETool started in domain environment without /d option. Using local source. Hope you know what are you doing.  Config successfully exported.  Human readable config representation successfully exported.  HTML config representation exported successfully. |
| Import Config from config.xml | * ppetool /c config.xml /i | Warning: PPETool started in domain environment without /d option. Using local source. Hope you know what are you doing.  Config import successful. |

### Generating Reports with Custom Descriptions

The PPE Tool generates user-friendly reports by processing configuration tags (i.e., ). For example, the PPE Tool will search for the file tagname.xml (or, ppe.xml in this case). This file has root elements which name match each file name. Each root tag contains child tags (e.g., ). Each tag has the following attributes:

* name — Contains the original tag name from the input configuration file. If this attribute is missed, then the original tag and its value will be absent in the human-readable report.
* DisplayName — Contains the user-friendly description for the original tag. If this attribute is missed, then the original tag and its value will be presented in the report without a description.

The  tag can also contain the child  tag. This tag can have an optional attribute 'mode' and this attribute can have the following values:

* value (default) — With the default value, the report will only contain tag descriptions for the child  tag. The 'value' attribute matches the child  tag with the value of the original tag.
* combined — With the combined value, the report will contain the child  tags which contain values that are bitwise or are the result of the original values.

#### Example of 'value' mode

Original configuration

1

Transform configuration















Transformation result





True

False

False





#### Example of 'combined' mode

Original configuration

25

Transformation configuration























Result human-readable report





False

True

True

False

False

True

False





### Customize HTML Report

The PPE Tool comes with a pre-defined template.css file in the configuration folder, found here: `C:\Program Files (x86)\Password Policy Enforcer\config`. The template.css defines the visual design (formatting, colors, fonts etc.) of HTML report. See the [XSLT - Transformation](https://www.w3schools.com/xml/xsl_transformation.asp "XSLT - Transformation") article for additional information of transforming .xml to .xhtml.