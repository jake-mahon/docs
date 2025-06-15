# Server Settings

A Directory Manager portal is deployed as a web application on a web server (native IIS, remote IIS,
or Docker). You can manage the following server-related settings for a portal:

- Change a portal’s name (i.e., the application name given to the portal).
- Associate identity stores with a portal.
- Update support information for the portal, i.e., the contact email address and the portal’s help
  URL.
- Specify search-related, group-related, and other advanced settings for a portal.

    NOTE: Advanced settings are available for a standard Directory Manager portal, but not for a
    Self-Service Password Reset portal.

You can also view the deployment details for all instances of a portal and do the following:

- Start or stop an instance.
- Configure Windows logging and file logging for an instance.
- Delete an instance.
- Move a portal instance under a different site in IIS.

NOTE: On changing some of these settings, the portal’s session ends and all connected users are
logged out. When accessed again, the portal runs under the new configurations.

**See Also**

- [Create a Portal](../create.md)
- [Manage General Server Settings](general.md)
- [Manage Settings for a Native IIS Deployment](nativeiis.md)
- [Manage Settings for a Remote IIS Deployment](remoteiis.md)
- [Manage Settings for a Docker Deployment](docker.md)
- [Manage Log Settings](log.md)
- [Add Support for a Portal](support.md)
- [Manage Advanced Settings](advanced.md)
