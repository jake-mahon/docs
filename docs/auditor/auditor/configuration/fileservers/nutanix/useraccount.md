# Create User Account to Access Nutanix REST API

To create a user account using the ncli utility:

1. Download and install the _ncli_ (Nutanix command-line interface) on any server in your infrastructure, as described [here](https://portal.nutanix.com/#here).
2. Start the utility and establish a _ncli_ session by the following command:

    ```ncli -s management_ip_addr -u 'username' -p 'user_password'```

   here:

   - ```management_ip_addr``` - the IP address of any Nutanix Controller VM in the cluster
   - ```username``` - user name to access that VM; if not specified, _admin_ (default name) will be used
   - ```user_password``` - password to access that VM
3. Run the ```fs list``` command in _ncli_ to get the list of Nutanix Files servers.
4. Locate the name of Nutanix Files server you want to audit; locate and save the following server parameters to a text file:
   - __Uuid__ - Nutanix Files server ID
5. Finally, create a new user and specify credentials that will be used to access this Nutanix Files server. For that, run the following command in _ncli_ :

    ```fs add-user uuid=<fs_uuid> user=<username> password=<password>```

   here:

   - ```<fs_uuid>``` - Nutanix Files server ID (Uuid)
   - ```<username>``` - user name
   - ```<password>``` - password

To create a new user account with Nutanix Prism:

1. Open Nutanix Prism web portal.
2. Select __File Server__ category. In the list of servers, select the server you want to audit.
3. Click __Manage roles__.
4. In the __Manage roles__ dialog locate the __REST API access user__ section and click __+New user__.

   ![nutanix_user_thumb_0_0](/img/product_docs/auditor/auditor/configuration/fileservers/nutanix/nutanix_user_thumb_0_0.jpg)
5. Enter local user account name and password, then click __Save__ next to them to save the settings.
6. Click the __Close__ button to close the __Manage roles__ dialog.
