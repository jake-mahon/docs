---
sidebar_position: 6174
title: CommandLineUtility Data Collector
---

# CommandLineUtility Data Collector

The CommandLineUtility Data Collector provides the ability to remotely spawn, execute, and extract data provided by a Microsoft native or third-party command line utility. It allows users to easily execute a command line utility and capture its output as Access Analyzer data. This data collector is a core component of Access Analyzer and is available with all Access Analyzer licenses.

Protocols

* Remote Registry
* RPC

Ports

* TCP 135-139
* Randomly allocated high TCP ports

Permissions

* Member of the local Administrators group

## CommandLineUtility Query Configuration

The CommandLineUtility Data Collector executes a command line utility and captures the output. It is configured through the Command Line Utility Data Collector Wizard, which contains the following pages:

* Welcome
* [CLU: Profile Type](ProfileType "CLU: Profile Type")
* [CLU: Profile Parameters](ProfileParameters "CLU: Profile Parameters")
* [CLU: Execution Options](ExecutionOptions "CLU: Execution Options")
* [CLU: Define Fields](DefineFields "CLU: Define Fields")
* [CLU: Script Editor](ScriptEditor "CLU: Script Editor")
* [CLU: Results](Results "CLU: Results")
* [CLU: Summary](Summary "CLU: Summary")

![Command Line Utility Data Collector Wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/CommandLineUtility/Welcome.png "Command Line Utility Data Collector Wizard Welcome page")

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox when the wizard is open and configuration settings are saved.