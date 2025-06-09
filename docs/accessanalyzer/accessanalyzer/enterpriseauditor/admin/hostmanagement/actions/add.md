# Add Hosts

The __Add Hosts__ option creates a new host list. It can be accessed through the __Host Management__ node. Follow the steps to add a new host list.

![Add Hosts option on Activities pane of the Host Management node](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/hostmanagement/actions/addhosts.png)

__Step 1 –__ Click __Add Hosts__ to open the Host List Wizard in the Results pane.

![Host List Wizard Specify Manual Host Entry page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/hostmanagement/actions/hostlistwizardhostentry.png)

__Step 2 –__ On the Manual Host Entry page, choose to either enter the hosts manually one at a time, or use the __Import__ option. When the list is completed, click __Next__.

- To enter hosts manually, type the host name in the __Host name__ textbox. Then click __Add__. The entry will appear in the __Host list__ box. Repeat the process until all hosts for this list have been entered.
- The __Import__ option opens the Import Hosts window. See the [Import Hosts Option](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/hostmanagement/actions/importhost.md) topic for additional information.
- Use __Remove__ to delete a selected host from the __Host list__ box

![Host List Wizard Specify Host List Properties page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/hostmanagement/actions/hostlistwizardproperties.png)

__Step 3 –__ On the Specify Host List Properties page, provide a unique descriptive __Host List Name__.

- There cannot be two host lists with the same name. Access Analyzer automatically appends a numeral to the end of a host list name to avoid duplicates.

__Step 4 –__  On the Specify Host List Properties page, configure when inventory fields should be refreshed for hosts in the list and set the credentials to use to conduct the host inventory.

- Refresh inventory every time when the host discovery query completes – Automates the host inventory process and is dependent on the __Settings__ > __Host Inventory__ node configuration for the age of previously inventoried records. Leaving this option deselected applies the global settings for host inventory.
- Set the credentials to use to conduct the host inventory.

  - Default credentials (credentials the application is run with) – Applies the credentials used to launch the Access Analyzer application
  - Credentials in my default connection profile – Applies the default Connection Profile configured at the global level (__Settings__ > __Connection__)
  - Credentials in this connection profile – Use the dropdown list to select a Connection Profile from those preconfigured at the global level (__Settings__ > __Connection__)

  See the [Connection](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/connection/overview.md) topic for additional information on Connection Profiles.

__Step 5 –__ Click __Finish__ to save the host list and close the Host Lost Wizard.

The new list displays at the bottom of the host lists under the __Host Management__ node in the Navigation pane. Every host added is included in the host master table at the Host Management node as well as in the newly created host list.
