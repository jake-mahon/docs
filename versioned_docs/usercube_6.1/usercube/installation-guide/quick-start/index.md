# Quick Start Guide

This guide leads the reader through the steps to quickly install Usercube's bootstrap version.

## Prerequisites

The installation of Usercube requires:

- a certificate named Usercube.pfx ([see the Microsoft tool to create a self-signed certificate](https://learn.microsoft.com/en-us/powershell/module/pki/new-selfsignedcertificate?view=windowsserver2022-ps))

  If the certificate is named something other than Usercube.pfx, remember to change the name in the Runtime/appsettings.json file too.
- [Database](/versioned_docs/usercube_6.1/usercube/installation-guide/requirements/database-requirements/index.md)-related specifications

## Install the Bootstrap Version

__Step 1 –__ Go on the [Netwrix portal](https://www.netwrix.com/sign_in.html?rf=my_products.html) and download the artifacts of the expected version.

![Extranet Artifacts](/img/versioned_docs/usercube_6.1/usercube/migration-guide/extranet_v601.png)

__Step 2 –__ Extract from SDK the folder UsercubeBootstrap anywhere on the computer.

__Step 3 –__ Extract the content of Runtime to UsercubeBootstrap.

When extracting UsercubeBootstrap to the root of the computer, it looks like:

![Project Directory](/img/versioned_docs/usercube_6.1/usercube/installation-guide/quick-start/directory_v602.png)

__Step 4 –__ Move or copy your certificate inside the Runtime folder.

__Step 5 –__ Create a Sources folder in UsercubeBootstrap.

_Remember,_ if you don't have the UsercubeBootstrap folder or if you don't create the Sources folder, the Path in the Directory connection in the Runtime/appsettings.agent.json must be adapted.
Note that you don't need to have a Directory.xlsx file at the location described by this Path for now.

__Step 6 –__ Create a database named Usercube, using the default options.

__NOTE:__ When using a database server other than Microsoft SQL Server or a different database name, remember to change the connection string accordingly, in the Runtime/appsettings.json file and in the future command lines.

__Step 7 –__ Execute the Runtime/Usercube.sql file in the database.

__Step 8 –__ Open a command prompt and deploy the configuration. See the[
Usercube-Deploy-Configuration
](/versioned_docs/usercube_6.1/usercube/integration-guide/executables/references/deploy-configuration/index.md)topic for additional information.

In our example, the command would be, in the Runtime folder:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
./Usercube-Deploy-Configuration.exe -s "<data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;>" -d "<C:/UsercubeBootstrap/Conf>"
```

__Step 9 –__ Launch the server. See the[
Usercube-Server
](/versioned_docs/usercube_6.1/usercube/integration-guide/executables/references/server/index.md)topic for additional information.

In our example, the command would be, still in the Runtime folder:

```
./Usercube-Server.exe
```

__Step 10 –__ Open a browser and navigate to http://localhost:5000. Authenticate with administrator as a username and the password specified in the Runtime/appsettings.json file, in the Authentication section.

![Authentication Dialog](/img/versioned_docs/usercube_6.1/usercube/installation-guide/quick-start/authentication_v601.png)

Now you can start using the application.

## Next Steps

From there, you can start setting up Usercube via the __Settings__ page which is accessible from the __Configuration__ section of the home page.

![Home Page - Settings](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/user-profile-configuration/home_settings_v523.png)

Then, Netwrix recommends following the user guide to start the configuration of your IGA project from scratch. See the [User Guide](/versioned_docs/usercube_6.1/usercube/user-guide/index.md) topic for additional information.
