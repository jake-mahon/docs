# Create a Notification Policy

To monitor operations with files and folders on Nutanix File Server, you should configure a notification policy for the related events.

## Monitored Operations

The list of supported operations is provided in the table below. Your notification policy can include any of them.

| To audit... | Operation name to specify at policy creation |
| --- | --- |
| Successful _create_ operations | FILE\_CREATE  DIRECTORY\_CREATE |
| Successful _read_ operations | FILE\_READ |
| Successful _modify_ operations | FILE\_WRITE  RENAME  SECURITY |
| Successful _delete_ operations | FILE\_DELETE  DIRECTORY\_DELETE |
| Failed _read/modify/delete_ attempts\* | FILE\_OPEN |

\* - Failed attempt to move/rename file are not audited.

## Configuration Procedure

Notification policy creation procedure involves API requests usage. It is assumed that you have a good understanding of REST API concepts, as well as enough experience in working with JSON-formatted requests in any API client. To get acquainted with Nutanix REST API Explorer client, refer to [Nutanix documentation](https://portal.nutanix.com/#Nutanix-documentation).

To create a notification policy for Nutanix File Server via API:

1. Open the __File Server REST API Explorer__ client using the following URL:   

    ```https://<fileserver_ip>:9440/api/nutanix/v3/api_explorer/index.html#/```

   here ```< fileserver_ip >``` - IP address of the Nutanix File Server to be audited.

If you select to launch the RestAPI Explorer from the Prism menu, the __RestAPI Explorer for Prism__ client will be opened.

2. In the __username__ and __password__ fields, enter the credentials of the [Create User Account to Access Nutanix REST API](/docs/product_docs/auditor/auditor/configuration/fileservers/nutanix/useraccount.md) you have created.
3. Click __Explore__.
4. In the __File Server REST API Explorer__ REST API client, locate the POST request for ```notification_policies``` :

    ```POST /notification_policies```

5. In the request body, enter the following JSON-formatted structure:

{

"spec": {

"name": "<NAME\_OF\_NOTIFICATION\_POLICY> ",

"resources": {

"all\_mount\_targets" : true,

"protocol\_type\_list" : ["SMB"],

"file\_operation\_list" : [<LIST\_OF\_FILE\_OPERATIONS>],

"partner\_server\_reference\_list" : [{

"kind" : "partner\_server",

"uuid" : "<UUID\_OF\_PARTNER\_SERVER>"

}]

},

"description": "<optional\_string>"

},

"api\_version": "3.0",

"metadata": {

"kind": "notification\_policy"

}

}

here:

_"all\_mount\_targets" : true_ - instructs to notify on changes to all shares

_"protocol\_type\_list" : ["SMB"]_ - instructs to track SMB shares (the only currently supported)

_<NAME\_OF\_NOTIFICATION\_POLICY>_ – enter the name of notification policy you want to create

_<UUID\_OF\_PARTNER\_SERVER>_ - enter the ```uuid``` of [Configure Partner Server](/docs/product_docs/auditor/auditor/configuration/fileservers/nutanix/partnerserver.md)

_<LIST\_OF\_FILE\_OPERATIONS>_ - enter the list of operations to be audited.

6. Send the request, clicking __Try it out__.
7. Get the response - ```Response Code``` should be _200_. In the response body, locate the ```uuid``` of the created notification policy.
8. To check that a new policy was included in the list of existing policies, retrieve the list of policies, sending the POST request to the following endpoint:

    ```POST /notification_policies/list```. The request body must be empty - for that, enter empty brackets as the __value__ for _get\_entities\_request_ parameter : ```{ }```

## Auditing Specific Folders

If you want to audit only the certain folders on Nutanix File Server (mount targets), then do the following:

1. Retrieve the list of existing mount targets using the ```mount_target POST /mount_targets/list``` request with empty body, as described above.
2. In the response, locate the ```uuids``` of the target folders you want to audit.
3. In the notification policy creation request (described above) instead of ```"all_mount_targets" : true``` in the request body enter the following JSON-formatted structure:

"mount\_target\_reference\_list": [

{

"kind" : "mount\_target",

"uuid" : "<UUID\_OF\_MOUNT\_TARGET1>"

},

{

"kind" : "mount\_target",

"uuid" : "<UUID\_OF\_MOUNT\_TARGET2>"

},

]

here:

_<UUID\_OF\_MOUNT\_TARGET>_ – enter the uuid of target you want to audit.

## Example

The JSON-formatted structure below is an example of the request body that can be used to create a notification policy named _MOUNT\_POINT\_POLICY_ to audit the mount a share on Nutanix File Server with the _uuid=378896fd-e829-4869-84a2-6c29268acfff_. The following operations will be audited:

- "FILE\_READ",
- "FILE\_CREATE",
- "FILE\_DELETE",
- "DIRECTORY\_CREATE",
- "DIRECTORY\_DELETE",
- "FILE\_WRITE",
- "RENAME",
- "SECURITY",
- "FILE\_OPEN"

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

"description": "<optional\_string>"

},

"api\_version": "3.0",

"metadata": {

"kind": "notification\_policy"

}

}
