# Uploading the Script and Package

To deploy the Endpoint Protector Client, upload the ```EndpointProtector.pkg``` package along with the ```epp_change_ip.sh``` script.

__CAUTION:__ To obtain the ```epp_change_ip.sh script```, customers should submit a support ticket through the [Netwrix Customer Portal](https://www.netwrix.com/sign_in.html?rf=my_products.html).

To upload the script and package, follow these steps:

__Step 1 –__ In your Jamf account, from the main navigation bar, click __Computer__, and then from the left sidebar menu, select __Management Settings__.

__Step 2 –__ From the Computer Management section, select __Scripts__ and then, in the upper right, click __+ New__.

__Step 3 –__ On the General section, add a name for the profile, and then select the __Script tab__ and add the ```epp_change_ip.sh``` script.

__Step 4 –__ Add your Server IP to the EPP_SERVER_ADDRESS field.

__NOTE:__ You can edit the EPP_DEPARTMET CODE and EPP_SERVER_PORT fields to deploy the Endpoint Protector Client on specific departments or custom ports.

![Uploading the new Script.](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/newscript.png)

__Step 5 –__ From the Computer Management section, select __Package__ and then, in the upper right, click __+ New__.

__Step 6 –__ On the General tab, add a name and then upload the package ```EndpointProtector.pkg```.

![Uploading the new Package](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/newpackage.png)
