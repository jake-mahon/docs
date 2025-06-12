# Delete a Service

You can delete a Mobile service or an instance of a service. On deleting a service, all its instances are deleted with it.

What do you want to do?

- [Delete a Deployment Instance for a Service](#delete-a-deployment-instance-for-a-service)
- [Delete a Service](#delete-a-service)

## Delete a Deployment Instance for a Service

A service can have multiple deployment instances. When you delete an instance, the following is removed:

- __For an instance in native IIS:__

  - The service directory under the following location on the GroupID server:  
    X:\Program Files\Imanami\GroupID 11.0\GroupIDMobileService\Inetpub\  
    (X represents the GroupID installation drive)
  - The service directory in the IIS site

- __For an instance in remote IIS:__

  - The service's directory in the remote IIS site
  - The service's physical directory under the folder mapped to the remote IIS site

- __For an instance in Docker:__

  The container created in Docker Engine for the service

__To delete a deployment instance:__

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Mobile Service__ tab, click the ellipsis button for a service and select __Settings__.
3. Select __Deployments__ under __Server Settings__ in the left pane.  
   The __Deployment Settings__ page has varying tabs, depending on the deployment instances of the service.

   - The __IIS__ tab is available when one or more service instances are deployed in native IIS.
   - The __Remote IIS__ tab is available when one or more service instances are deployed in remote IIS.
   - The __Docker__ tab is available when one or more service instances are deployed in Docker.

   Select a tab to delete a service instance deployed in the respective web server.
4. The __Select Application Deployment__ drop-down list displays the service instances deployed on the selected web server. Select an instance and click __Delete__.

## Delete a Service

Deleting a Mobile service removes all its deployments and configurations from GroupID.

__To delete a service:__

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Mobile Service__ tab, click the ellipsis button for a service and select __Delete__.
