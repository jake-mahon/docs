# Hub

__NOTE:__ Ensure the Hub's requirements are met and that the server has had any OS updates applied and has been restarted. See the [Hub Installation for Windows](../requirements/windowsserver.md) topic for additional information.

A crucial decision to make before installing Change Tracker is how to have Change Tracker store it's data. Change Tracker uses the MongoDB database to store all of it's event data and configuration. The most common approach (and the default) is to run the installer and allow it to install the version of MongoDB that is shipped with it. This will be the latest patch to the latest Long Term Support (LTS) version of the community edition of MongoDB. This edition of MongoDB lacks many of the features available in the Enterprise edition as described in MongoDB's [Upgrade MongoDB Community to MongoDB Enterprise](https://www.mongodb.com/docs/manual/administration/upgrade-community-to-enterprise/) article.

Change Tracker can also be configured to use and existing instance of MongoDB instead of the bundled community edition. This is useful if any of the following are required or desirable:

- MongoDB Enterprise Edition
- A clustered install of MongoDB
- Full control of the MongoDB installation

__CAUTION:__ No matter the edition of MongoDB or where it is installed, regular patching and backups must be planned and managed.

## Installation

The installer can be downloaded from the customer portal. The installer employes a wizard to enable configuration of the installation. Running a later version of the installer on a server that already has a Change Tracker Hub installed will update the installation.

![eula](../../../../static/img/product_docs/activitymonitor/activitymonitor/install/eula.webp)

__Step 1 –__ Accept the End User License Agreement to start the installation.

![ports](../../../../static/img/product_docs/changetracker/changetracker/install/ports.webp)

__Step 2 –__ Enter the web server ports.

![sslcertificate](../../../../static/img/product_docs/changetracker/changetracker/install/sslcertificate.webp)

__Step 3 –__ Enter a password for the SSL certificate's private key.

![mongodb](../../../../static/img/product_docs/changetracker/changetracker/install/mongodb.webp)

__Step 4 –__ Define an existing MongoDB instance to use or leave the MongoDB server field as localhost to have the installer deploy it's built-in version of MongoDB Community edition.

![mongodblogpath](../../../../static/img/product_docs/changetracker/changetracker/install/mongodblogpath.webp)

__Step 5 –__ Define the path to store the MongoDB log.

![redis](../../../../static/img/product_docs/changetracker/changetracker/install/redis.webp)

__Step 6 –__ Most installations can leave this blank, but if a clustered installation is planned, enter the address of the required Redis server.

![installationpath](../../../../static/img/product_docs/changetracker/changetracker/install/installationpath.webp)

__Step 7 –__ Select the installation path for Change Tracker.

__CAUTION:__ Changing this is only recommended for advanced installations.

![adminuserpassword](../../../../static/img/product_docs/changetracker/changetracker/install/adminuserpassword.webp)

__Step 8 –__ Once the installation is complete set a strong password for the Admin user.

It should now be possible to log into the console from a browser.
