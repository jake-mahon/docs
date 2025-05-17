---
sidebar_position: 1868
title: Create a Notification Policy
---

Filter: 

* All Files

Submit Search

# Create a Notification Policy

To monitor operations with files and folders on Nutanix File Server, you should configure a notification policy for the related events.

## Monitored Operations

The list of supported operations is provided in the table below. Your notification policy can include any of them.

| To audit... | Operation name to specify at policy creation |
| --- | --- |
| Successful *create* operations | FILE\_CREATE  DIRECTORY\_CREATE |
| Successful *read* operations | FILE\_READ |
| Successful *modify* operations | FILE\_WRITE  RENAME  SECURITY |
| Successful *delete* operations | FILE\_DELETE  DIRECTORY\_DELETE |
| Failed *read/modify/delete* attempts\* | FILE\_OPEN |

\* - Failed attempt to move/rename file are not audited.

## Configuration Procedure

Notification policy creation procedure involves API requests usage. It is assumed that you have a good understanding of REST API concepts, as well as enough experience in working with JSON-formatted requests in any API client. To get acquainted with Nutanix REST API Explorer client, refer to [Nutanix documentation](https://portal.nutanix.com/#/page/docs/details?targetId=Web-Console-Guide-Prism-v50:man-rest-api-explorer-t).

To create a notification policy for Nutanix File Server via API:

1. Open the **File Server REST API Explorer** client using the following URL:   
   `https://:9440/api/nutanix/v3/api_explorer/index.html#/`  
     
   here `` - IP address of the Nutanix File Server to be audited.

If you select to launch the RestAPI Explorer from the Prism menu, the **RestAPI Explorer for Prism** client will be opened.

2. In the **username** and **password** fields, enter the credentials of the [Create User Account to Access Nutanix REST API](UserAccount) you have created.
3. Click **Explore**.
4. In the **File Server REST API Explorer** REST API client, locate the POST request for `notification_policies` :
     
   `POST /notification_policies`
5. In the request body, enter the following JSON-formatted structure:

{

"spec": {

"name": " ",

"resources": {

"all\_mount\_targets" : true,

"protocol\_type\_list" : ["SMB"],

"file\_operation\_list" : [],

"partner\_server\_reference\_list" : [{

"kind" : "partner\_server",

"uuid" : ""

}]

},

"description": ""

},

"api\_version": "3.0",

"metadata": {

"kind": "notification\_policy"

}

}

here:

*"all\_mount\_targets" : true* - instructs to notify on changes to all shares

*"protocol\_type\_list" : ["SMB"]* - instructs to track SMB shares (the only currently supported)

** – enter the name of notification policy you want to create

** - enter the `uuid` of [Configure Partner Server](PartnerServer)

** - enter the list of operations to be audited.

6. Send the request, clicking **Try it out**.
7. Get the response - `Response Code` should be *200*. In the response body, locate the `uuid` of the created notification policy.
8. To check that a new policy was included in the list of existing policies, retrieve the list of policies, sending the POST request to the following endpoint: `POST /notification_policies/list`. The request body must be empty - for that, enter empty brackets as the **value** for *get\_entities\_request* parameter : `{ }`

## Auditing Specific Folders

If you want to audit only the certain folders on Nutanix File Server (mount targets), then do the following:

1. Retrieve the list of existing mount targets using the `mount_target POST /mount_targets/list` request with empty body, as described above.
2. In the response, locate the `uuids` of the target folders you want to audit.
3. In the notification policy creation request (described above) instead of `"all_mount_targets" : true` in the request body enter the following JSON-formatted structure:

"mount\_target\_reference\_list": [

{

"kind" : "mount\_target",

"uuid" : ""

},

{

"kind" : "mount\_target",

"uuid" : ""

},

]

here:

** – enter the uuid of target you want to audit.

## Example

The JSON-formatted structure below is an example of the request body that can be used to create a notification policy named *MOUNT\_POINT\_POLICY* to audit the mount a share on Nutanix File Server with the *uuid=378896fd-e829-4869-84a2-6c29268acfff*. The following operations will be audited:

* "FILE\_READ",
* "FILE\_CREATE",
* "FILE\_DELETE",
* "DIRECTORY\_CREATE",
* "DIRECTORY\_DELETE",
* "FILE\_WRITE",
* "RENAME",
* "SECURITY",
* "FILE\_OPEN"

JSON structure is as follows:

{

"spec": {

"name": "MOUNT\_POINT\_POLICY ",

"resources": {

"mount\_target\_reference\_list": [

{

"kind" : "mount\_target",

"uuid" : "378896fd-e829-4869-84a2-6c29268acfff”

}

],

"protocol\_type\_list" : ["SMB"],

"file\_operation\_list" :[

"FILE\_READ",

"FILE\_CREATE",

"FILE\_DELETE",

"DIRECTORY\_CREATE",

"DIRECTORY\_DELETE",

"FILE\_WRITE",

"RENAME",

"SECURITY",

"FILE\_OPEN"

],

"partner\_server\_reference\_list" : [

{

"kind" : "partner\_server",

"uuid" : " d0bfb952-924b-459e-bd32-44c8b5a62838"

}

]

},

"description": ""

},

"api\_version": "3.0",

"metadata": {

"kind": "notification\_policy"

}

}