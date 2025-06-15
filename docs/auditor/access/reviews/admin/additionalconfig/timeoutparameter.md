# Timeout Parameter

A user session will end when the timeout parameter for inactivity has been reached, and the user will be logged out. By default this is set to 15 minutes.

The timeout parameter is configured within the ```AccessInformationCenter.Service.exe.Config``` file in the Access Reviews installation directory:

...\Netwrix\Access Reviews

Follow the steps to modify the timeout parameter.

__Step 1 –__ Open the ```AccessInformationCenter.Service.exe.Config``` file with a text editor, e.g. Notepad.

![Notepad showing the AccessInformationCenter.Service.exe.Config file](../../../../../../static/img/product_docs/auditor/access/reviews/admin/additionalconfig/timeout.webp)

__Step 2 –__ Change the value for the ```AuthSessionTimeout``` parameter to the desired number of minutes. For example:

<add key="AuthSessionTimeout" value="20"/>

__Step 3 –__ Save and close the file.

A user session times out after the number of minutes specified for inactivity, for example after 20 minutes.
