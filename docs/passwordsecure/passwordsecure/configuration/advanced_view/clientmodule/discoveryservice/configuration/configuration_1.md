# Configuration

## The Discovery Service module

When this module is opened in Netwrix Password Secure, __there are no entries displayed in the Discovery Service__ module at the beginning. The entries need to be generated using a [System tasks](/docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/extras/system_tasks/system_tasks.md).

![discovery service entries](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/configuration/configuration_ds-1-en.webp)

Once a __System Task__ has been completed, the data discovered during the search is listed in a table:

![discovery service entries](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/configuration/configuration_ds-2-en.webp)

NOTE: The information can be grouped together using the column editor.

## Network Scan

A __Discovery Service Task__ is used to add a new [Discovery Service](/docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/discovery_service.md) and is then correspondingly configured for a __Network Scan__. Depending on the configuration of the __Network Scan__, the following types are discovered:

- Service accounts
- Active Directory users
- User accounts

## Configuration of a Discovery Service Task

To collect data for the __Discovery Service__, the __Discovery Service Task__ needs to be correspondingly configured for a __Network Scan__.

### General and overview

The following image shows a newly added __Discovery Service Task__.

![new discovery task](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/configuration/configuration_ds-3-en.webp)

1. Shows information about the __Discovery Service Task__.
2. In the __General__ section, the name of the __Discovery Service Task__ is entered (optionally with a description).
   The Status is always set to __Activated__ by default but it can also be set to __Deactivated__ in the configuration.
3. The __Overview__ shows the activities of the __Discovery Service Task__:
   Last run: shows the date it was last run.
   Next run: shows the date of the next run.

## Task settings

Password:

1. User name field: Type
2. Password field: Type
   Multiple password field —> field 1. is used.

This section is used for special entries for the __Discovery Service Task__. After it has been finished, the __Network Scan__ scans the __network__ according to these guidelines.

![task settings](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/configuration/configuration_ds-4-en.webp)

1. __Password__ and __Computer scan variants__: The required password must already have been issued and it requires corresponding rights for the domain.
   Active Directory computer: Only those computers that are in Active Directory are scanned (there is also the option of using it individually or pinging the network).
   Ping network: A network filter for the configuration of the network is displayed.
2. __Network filter__: This defines the network to be scanned: either using an IP range or an IP network address.
   Range: The start IP address and end IP address for the range on the network are entered here
   Network: The network address and corresponding subnet mask for the network are entered here
3. __Domain__: The domain to be used for the __network scan__ is entered here.
   In addition, you can select that only computers in the entered domain are scanned. A name resolution should work for this purpose.
4. __Scan configuration__:
   The Network Scan for the configuration of Active Directory is defined here. Select from either __Active Directory user of services__ or __Active Directory user__.
   The second section defines the scan configuration for the local computer. Select from either Local user of services or _Local user_.

__CAUTION:__ The system executing the scan – on which the Server Manager is installed – is not scanned!

## Interval / Executing server / Tags

This section is used to enter information about the start of the task and other additional information.

![Interval / Executing server / Tags](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/configuration/configuration_ds-5-en.webp)

1. __Interval__: The interval at which the __Discovery Service Task__ should be executed is defined here. The default setting is hourly, one year after adding the __Discovery Service Task__. The interval can be adjusted in minutes or set to be executed only once (optionally with an end date).
2. __Executing server (optional)__: Servers with an Server Manager can be entered here that will be used to execute the Discovery Service Task if the main server crashes. The Discovery Service Task is then automatically taken over and executed by the accessible servers on the list. The list is searched from top to bottom to find an accessible server.
3. __Tags__: The use of tags is described in more detail in the section [Tag manager](/docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/extras/tag_management/tag_manager.md). A special tag can be entered here for the __Discovery Service Task__.

After the __Discovery Service Task__ has been configured, a connection test is performed when the configuration is saved. The system then indicates whether the configuration is correct or faulty. Depending on the message, the __Discovery Service Task__ may need to be amended.

__CAUTION:__ The __default setting__ for the __Discovery Service Task__ after it has been saved is __Activated!__ It will __immediately actively__ scan the network for data. This data is __read__ but not amended!
