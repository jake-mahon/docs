# Timeout Parameter for the Web Console

The Web Console is configured with a default timeout parameter of 15 minutes. This can be configured within the __WebServer.exe.config__ file in the Web folder of the Access Analyzer installation directory:

…\STEALTHbits\StealthAUDIT\Web

Follow the steps to modify the timeout parameter for the Web Console.

__Step 1 –__ Open the __WebServer.exe.config__ file with a text editor, for example Notepad.

![WebServer.exe.config file in Notepad](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/install/application/reports/webserverexeconfigtimeout.webp)

__Step 2 –__ Change the value for the ```SessionTimeout``` parameter to the desired number of minutes:

```
<add key="SessionTimeout" value="15" />
```

__Step 3 –__ Save and close the file.

The Web Console session will timeout after this many minutes of inactivity. This value will take precedence over session timeout values set within the product consoles, for example the AIC, when accessed through the Web Console.
