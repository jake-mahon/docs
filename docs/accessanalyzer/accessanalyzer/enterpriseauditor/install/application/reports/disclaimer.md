# Configuring Login Page Disclaimer

Users can add a disclaimer message to the logon screen by adding a custom ```Disclaimer.txt``` file in the Web folder in the Access Analyzer directory and configuring the ```WebServer.exe.config``` file. Follow the steps to configure the optional disclaimer message:

__Step 1 –__ Navigate to the Web folder of the installation directory: ``` …\STEALTHbits\StealthAUDIT\Web```.

![Disclaimer.txt file added to the Web folder](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/disclaimertxt.png)

__Step 2 –__ Create a ```Disclaimer.txt``` file in the Web folder. Write a custom disclaimer that displays on the login page for the Web Console.

- The text file must be named ```Disclaimer.txt```. The disclaimer message option is not configured properly if using a text file with a different name.

![File Explorer WebServer.exe.config](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/webserverexeconfigfile.png)

__Step 3 –__ Locate the ```WebServer.exe.config``` file and open it.

![WebServer.exe.config file in Notepad](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/webserverexeconfigdisclaimer.png)

__Step 4 –__ Find the following line in the text:

```
<add key="ShowDisclaimerMessage" value="false"/>
```

__Step 5 –__ Replace the value with ```true``` so that the line now reads as:

```
<add key="ShowDisclaimerMessage" value="true"/>
```

__Step 6 –__ Save the changes to enable the disclaimer message on the Web Console login page.

![Web Console login page with disclaimer message](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/webconsolelogindisclaimer.png)

__Step 7 –__ To check if the disclaimer message was configured correctly, open the Web Console to access the login page.

- If the disclaimer is configured correctly, the custom disclaimer message displays at the bottom of the login page.

The disclaimer message displays on the Web Console login page.
