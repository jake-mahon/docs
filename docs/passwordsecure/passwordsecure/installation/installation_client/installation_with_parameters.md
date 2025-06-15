# Installation with parameters

## What is installation with parameters?

The installation of the Netwrix Password Secure client can also be optionally run on the command line. This method also requires the transfer of parameters. These can be combined with one another. In this case, the individual parameters are separated from one another by a blank space. The parameters listed in the following section enable you to adapt the type of client installation.

## Running on the command line with parameters

Run the installation via the command line: __MSI-FILE.msi [PARAMETER]__

__Parameter__

- __AUTOFILL_ADDON_AUTOSTART=“0”__: Deactivates launching the Autofill Add-on in Windows autostart
- __INSTALL_AUTOFILL_ADDON=“0__”: Deactivates the installation of the Autofill Add-on. In the list of the components to be installed in the setup, a check mark has not been set but this can be set again by the user
- __INSTALL_OFFLINE_ADDON=“0”__: Deactivates the installation of the Offline Add-on. In the list of the components to be installed in the setup, a check mark has not been set but this can be set again by the user
- __IGNORE_TS_SERVICES=“1”__: Deactivates the installation of the terminal server services, no matter on which system the installation is running
- __INSTALL_IDP_SERVICE="1"__
