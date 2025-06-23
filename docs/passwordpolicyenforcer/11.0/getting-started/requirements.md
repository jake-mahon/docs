---
title: System Requirements and Account Types
sidebar_label: Requirements
description: System requirements for Password Policy Enforcer 11 including domain and local user account considerations and deployment scenarios.
---

# Requirements

Netwrix Password Policy Enforcer 11 can be installed for both domain and local user accounts.

Domain user accounts exist in Active Directory. Information about these accounts is kept on the
domain controllers, and changes to the accounts are replicated amongst the domain controllers.

Local user accounts exist in the SAM database of workstations and servers. The workstations and
servers may be standalone, or domain members. Information about these accounts is only kept on the
host computer, and does not replicate to any other computers.

A typical Windows network has both domain and local user accounts, but you may not want to enforce
Password Policy Enforcer password policies for both account types. If your users normally logon with
a domain account, then you will most likely only use Password Policy Enforcer to enforce password
policies for the domain accounts.

Password Policy/Web is installed on a Windows server and accessed via user browsers.

## Password Policy Enforcer Server

Here are the requirements for both the full and evaluation Password Policy Enforcer installations.

- Windows Server Versions (64 bit):

- 2016
- 2019
- 2022

- Windows Workstation Versions (64 bit only)

- 10
- 11

## Password Policy Enforcer Client

Here are the requirements for both the full and evaluation Password Policy Enforcer installations.

- Windows Server Versions (64 bit):

- 2016
- 2019
- 2022

- Windows Workstation Versions (64 and 32 bit)

- 10
- 11

## Password Policy Enforcer Configuration Console

Here are the requirements for both the full and evaluation Password Policy Enforcer installations.

- Windows Server Versions (64 bit):

- 2016
- 2019
- 2022

- Windows Workstation Versions (64 and 32 bit)

- 10
- 11

- .net framework 4.7.2 or higher

## Password Policy Enforcer Web

Here are the requirements for the Password Policy Enforcer Web. Password Policy Enforcer Web can
share server resources with other applications. It can be installed on an existing, well secured web
server.

- Windows Server Versions:

  - 2016
  - 2019
  - 2022
  - Microsoft IIS
