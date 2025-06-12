# Add Support for a Portal

Portals include a __Contact__ link and a __Help__ icon on their web interface. The __Contact__ link launches an email application to send an email
to a user (such as administrator) or group (such as helpdesk) for inquiries or feedback. The __Help__ icon launches the online help for the portal in a new browser window. Both links are customizable, and their
target email address or web address can be changed.

What do you want to do?

- [Update the Support Email Address](#Update-the-Support-Email-Address)
- [Change the Help URL for a Portal](#Change-the-Help-URL-for-a-Portal)
- [View the Client ID Assigned to a Portal](#View-the-Client-ID-Assigned-to-aPortal)

## Update the Support Email Address

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Click __GroupID Support__ under __Server Settings__; the __GroupID Support__ page is displayed.
4. In the __Support/GroupID Administrator's Email__ box, update the email address of the group or user responsible for responding to requests and inquiries from portal users.  
   This email address is mapped
   to the __Contact__ link in the portal.
5. Click __Save__.

## Change the Help URL for a Portal

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Click __GroupID Support__ under __Server Settings__; the __GroupID Support__ page is displayed.
4. In the __Help URL__ box, update the URL of the portal help pages, where portal users can find support content or report their problems. This URL is mapped to the __Help__ icon in the portal.
5. Enable the __Netwrix Help__ toggle button if the help URL points to the portal help published by Netwrix. For GroupID 11, this URL is as:  
   https://helpcenter.netwrix.com/bundle/GroupID\_11.0/page  
   Disable the __Netwrix Help__ toggle button if the help URL points to help pages other than Netwrix help, such as when it points to your company’s internal help pages.
6. Click __Save__.

## View the Client ID Assigned to a Portal

Every GroupID client (such as Management Shell and a GroupID portal) is registered with a unique ID in the database, known as client ID. This client ID is required while integrating a third-party single sign-on solution that support the SAML standard, into GroupID via any of its clients.

__To view the client ID for a portal:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Click __GroupID Support__ under __Server Settings__; the __GroupID Support__ page is displayed.  
   The __Client ID__ box displays the client ID assigned to the portal. It is read-only and can be copied for use.

__See Also__

- [Server Settings](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/overview.md)
