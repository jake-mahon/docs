---
sidebar_position: 1866
title: Configure Partner Server
---

Filter: 

* All Files

Submit Search

# Configure Partner Server

To start monitoring files and folders on Nutanix File Server, you should configure Netwrix Auditor Server as a partner server for Nutanix File Server.

This configuration procedure involves creation of API requests and assumes that you have an good understanding of REST API concept, as well as experience in working with JSON-formatted requests in some API client. To get acquainted with Nutanix REST API Explorer client, refer to [Nutanix documentation](https://portal.nutanix.com/#/page/docs/details?targetId=Web-Console-Guide-Prism-v50:man-rest-api-explorer-t)

To create a partner server for Nutanix File Server via API:

1. Open the **File Server REST API Explorer** REST API client using the following URL:   
   `https://:9440/api/nutanix/v3/api_explorer/index.html#/`  
     
   here `` - IP address of the Nutanix File Server to be audited.

If you select to launch the RestAPI Explorer from the Prism menu, the **RestAPI Explorer for Prism** server will be opened.

2. In the **username** and **password** fields, enter the credentials of the [Create User Account to Access Nutanix REST API](UserAccount) you have created.
3. Click **Explore**.
4. Locate the POST request for **partner\_servers** endpoint:
     
    `POST /partner_servers`

[![](../../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/Nutanix/API_thumb_0_0.png)](../../../../Resources/Images/Auditor/Nutanix/API.png)

5. In the request body, enter the following JSON-formatted structure:

{

"spec": {

"name": "",

"resources": {

"usage\_type": "NOTIFICATION",

"vendor\_name": "netwrix",

"server\_info": {

"server\_type": "PRIMARY",

"address": {

"ip": "",

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

** - enter the Netwrix Auditor server name

** - enter the Netwrix Auditor server IP address

This address must be visible from the Nutanix File Server network.

6. Send the request, clicking **Try it out**.
7. Get the response - `Response Code` should be *200*. In the response body, locate the `uuid` of the created partner server.
8. To check that a new partner server was included in the list of existing partner servers, retrieve the list of servers, sending the POST request to the following endpoint: `POST /partner_servers/list`

The request body must be empty - for that, enter empty brackets as the **value** for *get\_entities\_request* parameter: `{ }`

[![](../../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/Nutanix/API_partner_server_resquest_thumb_0_0.png)](../../../../Resources/Images/Auditor/Nutanix/API_partner_server_resquest.png)

9. The response body should contain the list of servers, including new partner server name and other settings.