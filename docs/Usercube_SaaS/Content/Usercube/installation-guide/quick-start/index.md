---
sidebar_position: 13
title: Quick Start Guide
---

# Quick Start Guide

This guide leads the reader through the steps to quickly install Identity Manager's bootstrap version.

## Prerequisites

The installation of Identity Manager requires:

* A certificate named Usercube.pfx ([see the Microsoft tool to create a self-signed certificate](https://learn.microsoft.com/en-us/powershell/module/pki/new-selfsignedcertificate?view=windowsserver2022-ps))

  If the certificate is named something other than Usercube.pfx, remember to change the name in the Runtime/appsettings.json file too.
* [Database](../requirements/database-requirements/index "Database")-related specifications

## Install the Bootstrap Version

**Step 1 –** Go on the Netwrix Identity Manager (formerly Usercube) [portal](https://www.netwrix.com/sign_in.html?rf=my_products.html "Netwrix portal") and download the artifacts of the expected version.

![Extranet Artifacts](../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/extranet_V601.png)

**Step 2 –** Extract from SDK the folder Identity Manager Bootstrap anywhere on the computer.

**Step 3 –** Extract the content of Runtime to Identity Manager Bootstrap.

When extracting Identity Manager Bootstrap to the root of the computer, it looks like:

![Project Directory](../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/directory_V602.png)

**Step 4 –** Move or copy your certificate inside the Runtime folder.

**Step 5 –** Create a Sources folder in Identity Manager Bootstrap.

*Remember,* if you don't have the Identity Manager Bootstrap folder or if you don't create the Sources folder, the Path in the Directory connection in the Runtime/appsettings.agent.json must be adapted.
Note that you don't need to have a Directory.xlsx file at the location described by this Path for now.

**Step 6 –** Create a database named Identity Manager, using the default options.

**NOTE:** When using a database server other than Microsoft SQL Server or a different database name, remember to change the connection string accordingly, in the Runtime/appsettings.json file and in the future command lines.

**Step 7 –** Execute the Runtime/Usercube.sql file in the database.

**Step 8 –** Open a command prompt and deploy the configuration. See the [Usercube-Deploy Configuration](../../integration-guide/executables/references/deploy-configuration/index "Identity Manager-Deploy Configuration") topic for additional information.

In our example, the command would be, in the Runtime folder:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
./Usercube-Deploy-Configuration.exe -s "" -d ""
```
**Step 9 –** Launch the server. See the [Usercube-Server](../../integration-guide/executables/references/server/index "Identity Manager-Server") topic for additional information.

In our example, the command would be, still in the Runtime folder:

```
./Usercube-Server.exe
```
**Step 10 –** Open a browser and navigate to http://localhost:5000. Authenticate with administrator as a username and the password specified in the Runtime/appsettings.json file, in the Authentication section.

![Authentication Dialog](../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/authentication_V601.png)

Now you can start using the application.

## Next Steps

From there, you can start setting up Identity Manager via the **Settings** page which is accessible from the **Configuration** section of the home page.

![Home Page - Settings](../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Home_settings_V523.png)

Then, Netwrix Identity Manager (formerly Usercube) recommends following the user guide to start the configuration of your IGA project from scratch. See the [User Guide](../../user-guide/index "User Guide") topic for additional information.