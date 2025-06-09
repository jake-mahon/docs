# Configure Partner Server

To start monitoring files and folders on Nutanix File Server, you should configure Netwrix Auditor Server as a partner server for Nutanix File Server.

This configuration procedure involves creation of API requests and assumes that you have an good understanding of REST API concept, as well as experience in working with JSON-formatted requests in some API client. To get acquainted with Nutanix REST API Explorer client, refer to [Nutanix documentation](https://portal.nutanix.com/#Nutanix-documentation)

To create a partner server for Nutanix File Server via API:

1. Open the __File Server REST API Explorer__ REST API client using the following URL:   

    ```https://<fileserver_ip>:9440/api/nutanix/v3/api_explorer/index.html#/```

   here ```<fileserver_ip>``` - IP address of the Nutanix File Server to be audited.

If you select to launch the RestAPI Explorer from the Prism menu, the __RestAPI Explorer for Prism__ server will be opened.

2. In the __username__ and __password__ fields, enter the credentials of the [Create User Account to Access Nutanix REST API](/docs/auditor/auditor/configuration/fileservers/nutanix/useraccount.md) you have created.
3. Click __Explore__.
4. Locate the POST request for __partner\_servers__ endpoint:

    ``` POST /partner_servers```

[![api_thumb_0_0](/img/product_docs/auditor/auditor/configuration/fileservers/nutanix/api_thumb_0_0.png)](/docs/auditor/resources/images/auditor/nutanix/api.png)

5. In the request body, enter the following JSON-formatted structure:

{

"spec": {

"name": "<NAME\_OF\_PARTNER\_SERVER>",

"resources": {

"usage\_type": "NOTIFICATION",

"vendor\_name": "netwrix",

"server\_info": {

"server\_type": "PRIMARY",

"address": {

"ip": "<IP\_OF\_THE\_NETWRIX\_AUDITOR>",

"port": 9898

}

}

}

},

"api\_version": "3.0",

"metadata": {

"kind": "partner\_server"

}

}

here:

_<NAME\_OF\_PARTNER\_SERVER>_ - enter the Netwrix Auditor server name

_<IP\_OF\_NETWRIX\_AUDITOR>_ - enter the Netwrix Auditor server IP address

This address must be visible from the Nutanix File Server network.

6. Send the request, clicking __Try it out__.
7. Get the response - ```Response Code``` should be _200_. In the response body, locate the ```uuid``` of the created partner server.
8. To check that a new partner server was included in the list of existing partner servers, retrieve the list of servers, sending the POST request to the following endpoint:

    ```POST /partner_servers/list```

The request body must be empty - for that, enter empty brackets as the __value__ for _get\_entities\_request_ parameter: ```{ }```

[![api_partner_server_resquest_thumb_0_0](/img/product_docs/auditor/auditor/configuration/fileservers/nutanix/api_partner_server_resquest_thumb_0_0.png)](/docs/auditor/resources/images/auditor/nutanix/api_partner_server_resquest.png)

9. The response body should contain the list of servers, including new partner server name and other settings.
