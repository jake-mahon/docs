# Delete a Portal

You can delete a portal or a deployment instance of a portal. On deleting a portal, all its instances are deleted with it.

What do you want to do?

- [Delete a Deployment Instance for a Portal](#Delete-a-Deployment-Instance-for-a-Portal)
- [Delete a Portal](#Delete-a-Portal)

## Delete a Deployment Instance for a Portal

A portal can have multiple deployment instances. When you delete an instance, the following is removed:

- __For an instance in native IIS:__

  - The portal directory under the following location on the Directory Manager server:  
    X:\Program Files\Imanami\GroupID 11.0\GroupIDPortal\Inetpub\  
    (X represents the Directory Manager installation drive)
  - The portal’s directory in the IIS site
- __For an instance in remote IIS:__

  - The portal’s directory in the remote IIS site
  - The portal's physical directory under the folder mapped to the remote IIS site
- __For an instance in Docker:__

  The container created in Docker Engine for the portal

__To delete an instance:__

1. In Admin Center, select __Applications__ in the left pane.
2. On the __GroupID Portal__ tab, click the ellipsis button for a portal and select __Settings__.
3. Select __Deployments__ under __Server Settings__ in the left pane.  
   The __Deployment Settings__ page has varying tabs, depending on the deployment instances of the portal.

   - The __IIS__ tab is available when one or more portal instances are deployed in native IIS.
   - The __Remote IIS__ tab is available when one or more portal instances are deployed in remote IIS.
   - The __Docker__ tab is available when one or more portal instances are deployed in Docker.

   Select a tab to delete a portal instance deployed in the respective web server.
4. The __Select Application Deployment__ drop-down list displays the portal instances deployed on the selected web server. Select an instance and click __Delete__.

## Delete a Portal

Deleting a portal removes all its deployments and configurations from Directory Manager.

__To delete a portal:__

1. In Admin Center, select __Applications__ in the left pane.
2. On the __GroupID Portal__ tab, click the ellipsis button for a portal and select __Delete__.

__See Also__

- [Directory Manage Applications](/docs/product_docs/groupid/groupid/admincenter/portal/applications.md)
- [ Directory Manager Portal](/docs/product_docs/groupid/groupid/admincenter/portal/overview.md)
