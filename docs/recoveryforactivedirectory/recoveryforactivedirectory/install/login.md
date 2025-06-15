# Log into the Recovery Console

When Recovery for Active Directory is installed, the following icon is displayed on the desktop.

![Recovery Desktop Icon](../../../../static/img/product_docs/threatprevention/threatprevention/install/desktopicon.webp)

## Access the Recovery Console Locally

Administrator and non-administrator users can access the Recovery Console on the Recovery for Active Directory server using either of the following methods:

- Click the desktop icon
- Type ```http:/localhost:3005``` in a web browser and press Enter

__NOTE:__ If the port number and web protocol was changed from default during the installation process, use the port and protocol configured from the install.

## Access the Recovery Console Remotely

To access the Recovery Console remotely, open a web browser. Enter the host name or IP address of the Recovery for Active Directory application server followed by web port number into the address bar. For example:

- http://[ServerName]:3005

__NOTE:__ If the port number and web protocol was changed from default during the installation process, use the port and protocol configured from the install.

## Sign In

On [First Launch](firstlaunch.md) of the Recovery Console, the administrator must add users who can sign into the application and use it.

Follow the steps to sign into the Recovery Console.

__Step 1 –__ Launch the Recovery Console.

__NOTE:__ The URL may need to be added to the browser's list of trusted sites.

![Recovery for Active Directory - Login page](../../../../static/img/product_docs/threatprevention/threatprevention/eperestsite/login.webp)

__Step 2 –__ Enter your credentials in the Username and Password fields. The username must be in the following format:

- Domain\Username

__Step 3 –__ Click Log in.

If you have enabled multi-factor authentication for your account, the following is displayed:

![MFA at Login](../../../../static/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/install/loginmfa.webp)

__Step 4 –__ Launch the Authenticator app on your phone to get the verification code generated for the Recovery application account.

__Step 5 –__ Enter the code in the Authentication code field and click __Verify__.

The Recovery Console opens.
