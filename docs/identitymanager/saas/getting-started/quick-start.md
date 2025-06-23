---
title: SaaS Quick Start Guide
sidebar_label: Quick Start
description: Step-by-step guide to quickly install Identity Manager SaaS bootstrap version including prerequisites and cloud-based configuration setup.
---

# Quick Start Guide

This guide leads the reader through the steps to quickly install Identity Manager's bootstrap
version.

## Prerequisites

The installation of Identity Manager requires:

- A certificate named Usercube.pfx
  ([see the Microsoft tool to create a self-signed certificate](https://learn.microsoft.com/en-us/powershell/module/pki/new-selfsignedcertificate?view=windowsserver2022-ps))

  If the certificate is named something other than Usercube.pfx, remember to change the name in
  the Runtime/appsettings.json file too.

- [Database](/docs/identitymanager/saas/getting-started/requirements.md)-related specifications

## Install the Bootstrap Version

**Step 1 –** Go on the Netwrix Identity Manager (formerly Usercube)
[portal](https://www.netwrix.com/sign_in.html?rf=my_products.html) and download the artifacts of the
expected version.

![Extranet Artifacts](/img/product_docs/identitymanager/identitymanager/installation-guide/quick-start/extranet_v601.webp)

**Step 2 –** Extract from SDK the folder Identity Manager Bootstrap anywhere on the computer.

**Step 3 –** Extract the content of Runtime to Identity Manager Bootstrap.

When extracting Identity Manager Bootstrap to the root of the computer, it looks like:

![Project Directory](/img/product_docs/identitymanager/identitymanager/installation-guide/quick-start/directory_v602.webp)

**Step 4 –** Move or copy your certificate inside the Runtime folder.

**Step 5 –** Create a Sources folder in Identity Manager Bootstrap.

_Remember,_ if you don't have the Identity Manager Bootstrap folder or if you don't create the
Sources folder, the Path in the Directory connection in the Runtime/appsettings.agent.json must be
adapted. Note that you don't need to have a Directory.xlsx file at the location described by this
Path for now.

**Step 6 –** Create a database named Identity Manager, using the default options.

**NOTE:** When using a database server other than Microsoft SQL Server or a different database name,
remember to change the connection string accordingly, in the Runtime/appsettings.json file and in
the future command lines.

**Step 7 –** Execute the Runtime/identitymanager.sql file in the database.

**Step 8 –** Open a command prompt and deploy the configuration. See
the[ Usercube-Deploy Configuration](/docs/identitymanager/saas/automation/executables/deploy-configuration.md)
topic for additional information.

In our example, the command would be, in the Runtime folder:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
./identitymanager-Deploy-Configuration.exe -s "<data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;>" -d "<C:/identitymanagerBootstrap/Conf>"
```

**Step 9 –** Launch the server. See the
[Usercube-Server ](/docs/identitymanager/saas/automation/executables/server.md) topic for
additional information.

In our example, the command would be, still in the Runtime folder:

```
./identitymanager-Server.exe
```

**Step 10 –** Open a browser and navigate to http://localhost:5000. Authenticate with administrator
as a username and the password specified in the Runtime/appsettings.json file, in the Authentication
section.

![Authentication Dialog](/img/product_docs/identitymanager/identitymanager/installation-guide/quick-start/authentication_v601.webp)

Now you can start using the application.

## Next Steps

From there, you can start setting up Identity Manager via the **Settings** page which is accessible
from the **Configuration** section of the home page.

![Home Page - Settings](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

Then, Netwrix Identity Manager (formerly Usercube) recommends following the user guide to start the
configuration of your IGA project from scratch. See the [User Guide](/docs/identitymanager/saas/identitymanager/user-guide/index.md)
topic for additional information.

# How to Start

How to start integrating Identity Manager with your own needs.

## Overview

When starting with Identity Manager, several process paths can be taken according to your strategy.
There is no option fundamentally better than the others, your decision must depend on your needs.

The **option 1** leads quickly to identity management, i.e. users' on-boarding/movement/off-boarding
without needing a periodic synchronization. See the
[ Update Identity Data ](/docs/identitymanager/saas/identity-management/index.md) topic for additional
information.

The **option 2A** takes more time as it requires the installation of an agent on your network in
order to connect Identity Manager to the system and use the AD's data, but it leads to more gain as
you can also
[Review Orphaned and Unused Accounts](/docs/identitymanager/saas/governance/access-certification.md),
[Provision](/docs/identitymanager/saas/provisioning/index.md) the AD,
[ Reconcile a Property ](/docs/identitymanager/saas/role-management/role-assignment/nonconforming-detection.md)properties,
and [ Generate Reports ](/docs/identitymanager/saas/governance/reporting/index.md), for example the list of profiles
assigned to users.

The **option 2B** takes even more time as it goes through the creation of the role model based on
the system's entitlements, but it leads to even more gain as you can also
[ Reconcile a Role ](/docs/identitymanager/saas/role-management/role-assignment/nonconforming-detection.md),
[ Perform Access Certification ](/docs/identitymanager/saas/governance/access-certification.md) and
[ Request Entitlement Assignment ](/docs/identitymanager/saas/role-management/role-assignment/index.md), and also
[ Generate Reports ](/docs/identitymanager/saas/governance/reporting/index.md), for example the list of assigned single
roles.

The options 2A and 2B are more complicated and time-consuming than the option 1, but lead to more
gain. Be aware that you can go through the process options simultaneously.

Netwrix Identity Manager (formerly Usercube) recommends the option 1 to be able to start IGA without
waiting for the installation of an agent in your network, and go through the option 2
simultaneously.

![Process Schema - How to Start with Usercube](/img/product_docs/identitymanager/identitymanager/user-guide/global-process/howto-start/globalprocess_schemastart.webp)

## Process Details

### Common starting steps

1. [ Install the Development Environment ](/docs/identitymanager/saas/installation/index.md).
2. [ Create the Workforce Repository ](/docs/identitymanager/saas/identity-management/index.md): configure
   the generation of unique properties; load workforce identities to Identity Manager; adjust the
   data model.

After these first steps, two process options are available according to your needs: either aim
directly to identity management and the opening of Identity Manager to end-users, or first connect
Identity Manager to an external system in order to enable more administration activities. Both
options can be started simultaneously.

### Option 1: Based on the workforce directory

Starting with the workforce directory does not require the installation of a local agent.

Go directly to the common final steps (step 10).

### Option 2: Based on an external system

Starting with an external system requires the installation of a local agent.

3. Connect Identity Manager to the system by creating a connector. See the
   [ Connect to a Managed System ](/docs/identitymanager/saas/connectors/how-to/index.md) topic for additional
   information.
4. [ Synchronize Data ](/docs/identitymanager/saas/synchronization/index.md)the system's data into Identity
   Manager.

   Based on this, you can [ Generate Reports ](/docs/identitymanager/saas/governance/reporting/index.md), for example
   the list of resources in the system. A few predefined reports are available from the start, you
   can generate any report from this list as soon as it makes sense according to the integration
   progress.

5. [ Categorize Resources ](/docs/identitymanager/saas/connectors/configuration/index.md) in order to classify them
   according to their intent, and correlate these resources with their owners.
6. [ Create a Provisioning Rule ](/docs/identitymanager/saas/provisioning/index.md) to write to the
   system in order to update the resources' properties directly in the system.
7. Adjust the rules by reconciling resources, i.e. analyze the differences spotted between the
   reality of resources' properties and those computed by the previously established rules.
   Especially, verify that accounts are correlated to the right owners and that their properties
   have the right values. See the
   [ Reconcile a Property ](/docs/identitymanager/saas/role-management/role-assignment/nonconforming-detection.md)
   topic for additional information.

   Either the integrator handles the customization of the rules and the review of non-conforming
   resources, or they can assign an application administrator profile to a given user to perform
   it. Assigning this profile requires profile configuration, see steps 11 and 12.

After connecting Identity Manager to an external system, two process options are available according
to your needs: either aim directly to identity management and the opening of Identity Manager to
end-users, or first build the role model in order to enable more administration activities. Both
options can be started simultaneously.

### Option 2A: Straight to identity management

Go directly to the common final steps (step 10).

### Option 2B: First build the role model

8. [ Create Roles in the Role Catalog ](/docs/identitymanager/saas/role-management/index.md) for
   applications managed by the system.
9. [ Automate Role Assignments ](/docs/identitymanager/saas/role-management/role-assignment/index.md)
   if needed: use Role Mining to create single role rules in bulk; adjust the generated rules
   individually and manually.

### Common final steps

10. Adjust HR workflows to keep the workforce directory updated (only in XML configuration).
11. Define the permissions for your user profiles. See the
    [ Configure a User Profile ](/docs/identitymanager/saas/access-control/profiles-and-permissions/index.md) topic for
    additional information.
12. Define the authentication mode by configuring `SelectUserByIdentityQueryHandlerSetting` (only in
    XML configuration), and [Assign Users a Profile](/docs/identitymanager/saas/access-control/profiles-and-permissions/create-assign-profiles.md)
    to open the application to end-users.
