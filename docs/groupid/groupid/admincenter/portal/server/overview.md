# Server Settings

A Directory Manager portal is deployed as a web application on a web server (native IIS, remote IIS, or Docker). You can manage the following server-related settings for a portal:

- Change a portal’s name (i.e., the application name given to the portal).
- Associate identity stores with a portal.
- Update support information for the portal, i.e., the contact email address and the portal’s help URL.
- Specify search-related, group-related, and other advanced settings for a portal.

  NOTE: Advanced settings are available for a standard Directory Manager portal, but not for a Self-Service Password Reset portal.

You can also view the deployment details for all instances of a portal and do the following:

- Start or stop an instance.
- Configure Windows logging and file logging for an instance.
- Delete an instance.
- Move a portal instance under a different site in IIS.

NOTE: On changing some of these settings, the portal’s session ends and all connected users are logged out. When accessed again, the portal runs under the new configurations.

__See Also__

- [Create a Portal](/docs/product_docs/groupid/groupid/admincenter/portal/create.md)
- [Manage General Server Settings](/docs/product_docs/groupid/groupid/admincenter/portal/server/general.md)
- [Manage Settings for a Native IIS Deployment](/docs/product_docs/groupid/groupid/admincenter/portal/server/nativeiis.md)
- [Manage Settings for a Remote IIS Deployment](/docs/product_docs/groupid/groupid/admincenter/portal/server/remoteiis.md)
- [Manage Settings for a Docker Deployment](/docs/product_docs/groupid/groupid/admincenter/portal/server/docker.md)
- [Manage Log Settings](/docs/product_docs/groupid/groupid/admincenter/portal/server/log.md)
- [Add Support for a Portal](/docs/product_docs/groupid/groupid/admincenter/portal/server/support.md)
- [Manage Advanced Settings](/docs/product_docs/groupid/groupid/admincenter/portal/server/advanced.md)
