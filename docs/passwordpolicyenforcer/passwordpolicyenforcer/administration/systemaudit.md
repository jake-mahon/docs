# System Audit and Support

Password Policy Enforcer can run a discovery and testing of your domain controllers for an overview on PPE health, versions and logs.

Open the Configuration Console:

Click __Start__ > __Netwrix Password Policy Enforcer__ > __PPE Configuration__  
or   
Double click the __PPE Configuration__ desktop shortcut.

Click the __System Audit and Support__ tile on the Configuration Console dashboard. This feature is only available when __domain__ is selected with the [Connected To](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/configconsole.md#connected-to) configuration setting. System Audit and Support opens on the __Version Tracker__ tab.

## Version Tracker

![System Audit and Support Version Tracker tab](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/systemaudit.webp)

Click __Run test__. The audit reports the discovered domain controllers and versions.

__NOTE:__ If you do not see the __Configuration Timestamp__, contact your network administrator to set up the firewall to allow Password Policy Enforcer to communicate.

![System Audit results](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/systemauditversion.webp)

You can click the export icon to download your results. The file name is __Audit\____timestamp___.xlxs__, it is downloaded into the default __Downloads__ folder. For large domains, you can apply filters or use the Search feature to make it easier to navigate your list.

__NOTE:__ __Debug logging__ should only be enabled when you are actively debugging your system. Leaving it enabled impacts Password Policy Enforcer performance and uses free disk space to create the logs.

## Support Tools

The __Support Tools__ tab enables you to save a configuration report, export/import PPE settings, and open the property editor.

![System Audit Support Tools tab](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/systemaudittools.webp)

- __Policies Configuration Report__ saves the configuration as a text file. Browse to the folder where you want the report. The default filename is __PPEConfig.txt__.
- __PPE Settings__ export your PPE settings for a backup. You can import the settings to replicate configurations across systems.
  - __Export__ exports the PPE settings to an xml file. Browse to the folder where you want the file. The default filename is __PPEExport.xml__.
  - Import imports the settings from an exported xml PPE Settings file. Browse to the location of the __PPEExport.xml__ file. Click __Open__. A status message is displayed when complete.
- __Open Property Editor__ launches the Property Editor.

  __NOTE:__ Properties should only be changed when advised by Netwrix Support.

### Property Editor

The Property Editor enables you to edit the Password Policy Enforcer configuration. It should only be used instructed by Netwrix Support. It is accessed from the Configuration Console:

__Help__ > __Open Property Editor__

or

__System Audit and Support__ > __Support Tools__ > __Open editor__

![Property Editor](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/propertyeditor.webp)

- __Policy__: select the policy to edit.
- __Property__: select the property to change.
- __Property ID__: enter the ID supplied by Netwrix Support.
- __Value__: enter the new value supplied by Netwrix Support. Click __Set value__.
