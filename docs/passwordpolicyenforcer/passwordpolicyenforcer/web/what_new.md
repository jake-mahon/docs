# What's New

User Interface

- Displays a diagnostic message if the Password Policy Enforcer does not respond to a request. This is likely to happen if a domain controller is not running Password Policy Enforcer, or if a firewall is blocking access to the PPS port.

Compatibility

- Compatible with Windows Server 2012 and 2012 R2 (as well as Windows Server 2003, 2003 R2, 2008, and 2008 R2).
- Improved Setup Wizard to ensure that PPEWeb.dll is always added to the list of Web Service Extensions on Windows 2003 and 2003 R2 64-bit editions.

Other

- Uses the Password Policy Enforcer V7.x libraries for improved compatibility with new features in recent version of Password Policy Enforcer.
- The Configuration Console prompts for elevation to ensure that user has sufficient permissions to write configuration settings.
- Imports PPE Web V6.x configuration settings. See the [Install Password Policy Enforcer Web](/docs/passwordpolicyenforcer/passwordpolicyenforcer/install/installationweb.md) topic for additional information.

__NOTE:__ PPE Web V7.11 integrates with Password Policy Enforcer V7.0 or later. Disable Password Policy Enforcer integration in the PPE Web Configuration console if you need to use PPE Web with an older version of Password Policy Enforcer.

#### New in PPE Web V6.x (Previous Version)

User Interface

- Updated HTML Templates allow customization of all user interface elements including error messages.
- The Password Policy Enforcer policy message is now shown during password changes. Earlier version of PPE Web had this message hard-coded in the HTML template.
- A Configuration console to configure system setting and instal license keys.
- The Setup Wizard installs and configures PPE Web without the manual setup steps from earlier versions.

Compatibility

- Compatible with Windows Server 2008 and 2008 R2 (as well as Windows Server 2003 and 2003 R2).
- Compatible with 64-bit and 32-bit Windows editions.

Other

- Additional validation of all user input to improve security.
- Can get user and domain names from URL parameters.
- Uses the Password Policy Enforcer V6.0 libraries for improved compatibility with new features in recent versions of Password Policy Enforcer.
- Can be used without Password Policy Enforcer if Password Policy Enforcer's additional password policy controls are not needed.

__NOTE:__ PPE Web V6.0 integrates with Password Policy Enforcer V6.0 or later.
