# Application Silent Installer Option

Follow the steps to install the Privilege Secure application from the command prompt.

__Step 1 –__ Copy the ```NPS.exe``` file to the desktop of the application server.

__Step 2 –__ Run the following command as an administrator:

nps.exe /quiet

- To add a non-default installation directory, append the following to the command where the ```[Path]``` parameter is the desired installation directory location:

  nps.exe /quiet PRODUCTDIR="[Path]"

  For example: ```nps.exe /quiet PRODUCTDIR="D:\Stealthbits\PAM"```

The Privilege Secure application installs in the background to the specified folder location.
