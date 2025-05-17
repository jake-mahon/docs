---
sidebar_position: 6528
title: Getting Started
---

# Getting Started

Review the [Requirements](Requirements "Requirements") and the [Domain and Local Policies](Administration/Domain and Local Policies "Review the topic") topics.

## Install Products

Password Policy Enforcer (PPE Server) is installed on every domain controller to enforce the password policy for domain user accounts, or on individual servers and workstations to enforce the password policy for local user accounts. See the [Install Password Policy Enforcer on a Server](Install/InstallationServer "Install PPE Server") or [Install with Group Policy Management](Install/InstallationGPM "Install with GPM") topics for additional information.

The Configuration Console can be installed on what ever servers are convenient for you to access. It is a selectable feature in the server installation **msi** package. See the [Install Password Policy Enforcer on a Server](Install/InstallationServer "Install PPE Server") topic for additional information.

The Mailer Service is installed on a single server in each domain. See the [Install Password Policy Enforcer on a Server](Install/InstallationServer "Install PPE Server") topic for additional information.

Password Policy Enforcer client is optional, but recommended. Users receive immediate feedback when setting up their passwords. This saves your users time and frustration when picking compliant passwords. See the [Install Password Policy Enforcer Client](Install/InstallationClient "Install Client") or [Install with Group Policy Management](Install/InstallationGPM "Install with GPM") topics for additional information.

Password Policy Enforcer Web is a separate product enabling users to change their Windows domain password from a web browser. See the [Password Policy Enforcer Web](Web/Web Overview "PPE Web") topic for additional information.

Create the **Compromised Passwords Base** prior to enabling the Compromised Password Check. See the [HIBP Updater](Administration/HIBPUpdater "Open the HIBP Updater topic") topic for additional information.

## Exclude PPE Files from AntiVirus Checks

Domain Controller

**PPE.DLL** if this file does not load, the password policy is not enforced.

Clients

**PPEClt.dll** and **APRClt.dll** if either of these files are blocked, the client does not run.

## Next Steps

You can work through the [Evaluate Password Policy Enforcer](Evaluation/Evaluation Overview "Evaluation process") or open the [Configuration Console](Administration/ConfigConsoleOverview "Configuration Console").