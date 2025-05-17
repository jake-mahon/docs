---
sidebar_position: 1865
title: Create User Account to Access Nutanix REST API
---

Filter: 

* All Files

Submit Search

# Create User Account to Access Nutanix REST API

To create a user account using the ncli utility:

1. Download and install the *ncli* (Nutanix command-line interface) on any server in your infrastructure, as described [here](https://portal.nutanix.com/#/page/docs/details?targetId=Command-Ref-AOS-v55:man-ncli-c).
2. Start the utility and establish a *ncli* session by the following command:

   `ncli -s management_ip_addr -u 'username' -p 'user_password'`

   here:

   * `management_ip_addr` - the IP address of any Nutanix Controller VM in the cluster
   * `username` - user name to access that VM; if not specified, *admin* (default name) will be used
   * `user_password` - password to access that VM
3. Run the `fs list` command in *ncli* to get the list of Nutanix Files servers.
4. Locate the name of Nutanix Files server you want to audit; locate and save the following server parameters to a text file:
   * **Uuid** - Nutanix Files server ID
5. Finally, create a new user and specify credentials that will be used to access this Nutanix Files server. For that, run the following command in *ncli* :

   `fs add-user uuid= user= password=`

   here:

   * `` - Nutanix Files server ID (Uuid)
   * `` - user name
   * `` - password

To create a new user account with Nutanix Prism:

1. Open Nutanix Prism web portal.
2. Select **File Server** category. In the list of servers, select the server you want to audit.
3. Click **Manage roles**.
4. In the **Manage roles** dialog locate the **REST API access user** section and click **+New user**.

   [![](../../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/Nutanix/Nutanix_User_thumb_0_0.jpg)](../../../../Resources/Images/Auditor/Nutanix/Nutanix_User.jpg)
5. Enter local user account name and password, then click **Save** next to them to save the settings.
6. Click the **Close** button to close the **Manage roles** dialog.