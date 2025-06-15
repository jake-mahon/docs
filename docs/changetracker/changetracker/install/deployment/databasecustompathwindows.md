# Windows

To change the DB location or to switch to ‘smallfiles’ operation, do the following:

__Step 1 –__ Stop the __IIS Web server__ using command line iisreset /stop or use the __IIS Management Console__, or __Windows Services Console__.

__Step 2 –__ Stop the __Mongo DB__ service using the __Windows Services Console__.

__Step 3 –__ Edit the __mongod.conf__ file located in C:\Program Files\NNT Change Tracker™ Suite\Gen7\MongoDB\conf

__Step 4 –__ Edit the parameters for ```dbpath ```to change the location for DB files. If you prefer to invoke ‘__smallfiles__’ operation then add the config line as below.

![CustomDatabasePathWindows](../../../../../static/img/product_docs/changetracker/changetracker/install/deployment/customdatabasepathwindows.webp)

5. Then start the __Mongod__ service, followed by an ```iisreset /start```.
