# PostMan: Adding Users/Groups to Linux System Inventory

PostMan: Adding Users/Groups to Linux System Inventory

# PostMan: Adding Users/Groups to Linux System Inventory

Once a Linux endpoint has been added to Privilege Secure's inventory, it sometimes becomes necessary to add additional Light AD-Bridged groups or users to an endpoints inventory.  To accomplish this, locate the unique Mongo ID for the endpoint in question using the Postman Computers > Computer List query.  Using the __?cn=<endpoint CN>__ addition, Postman will return a list of computer objects with a regex match of the specified attribute:

![Screen_Shot_2020-03-04_at_9.35.39_AM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/360044464293_screen_shot_2020-03-04_at_9.35.39_am.png)

The __\_id__ value is the __unique Mongo ID__of the endpoint to be used in the following query:

![Screen_Shot_2020-03-04_at_9.48.51_AM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/360044464293_screen_shot_2020-03-04_at_9.48.51_am.png)

Using this ID, craft the following string in the Postman __POST__ field:  __{{base\_url}}/api/v1/computers/{\_id}/admins__ (see example at the end).  You will also need to locate the Mongo ID of the group or user value in question, using the Groups/Users options.  The example below is searching for a User, Mongo ID, but the process is the same for a Group:

![Screen_Shot_2020-03-04_at_10.06.53_AM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/360044464293_screen_shot_2020-03-04_at_10.06.53_am.png)

Take the __unique Mongo ID__ of the User or Group identified above, and add this to the __\_id__ "Value" field.  Once both the __endpoint Mongo ID__ is in the Post line and the User/Group Mongo ID is in the __\_id__ "Value" field, select the blue "Send" button to submit the request.  Example full submission:

![Screen_Shot_2020-03-04_at_10.16.48_AM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/360044464293_screen_shot_2020-03-04_at_10.16.48_am.png)

Example response output in Postman:

![Screen_Shot_2020-03-04_at_10.27.26_AM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/360044464293_screen_shot_2020-03-04_at_10.27.26_am.png)

Before snapshot in the UI for this endpoint:

![Screen_Shot_2020-03-04_at_10.20.05_AM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/360044464293_screen_shot_2020-03-04_at_10.20.05_am.png)

After __Kevin__ (kgarrett) AD User account is added to the inventory:

![Screen_Shot_2020-03-04_at_10.29.34_AM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/360044464293_screen_shot_2020-03-04_at_10.29.34_am.png)

Now, the __Kevin (kgarrett)__Active Directory identity can log into Privilege Secure and request access and it will be granted to the endpoint.  Once this access is properly requested, Privilege Secure will insert the user with admin privileges into the endpoint on a time-boxed basis.  The __kevin__ user can then SSH to the endpoint, and connect with their AD credentials.
