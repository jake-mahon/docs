# Maintenance and Troubleshooting

If you cannot see collected data in Auditor, check the following:

- Service account has sufficient rights to access Auditor.
- In Auditor settings, go to the __Integrations__ section and make sure the __Leverage Integration API__ is switched to __ON__. Check the communication port number – default is __9699__.
- If you configured a dedicated monitoring plan, make sure data source monitoring is enabled.
- Verify the parameters you provided in __settings.xml__.

Also, remember that events from the remote Syslog server (add-on installation server) are not collected.

Currently, the add-on supports only one Prism installation (Central or Element). To monitor more than one Prism Central/Element, you can copy the add-on to another folder, configure __settings.xml__ as described in this document and modify __install.ps1__ to rename the service:

__Step 1 –__ Deploy one more add-on instance to the server where the first add-on instance is already installed. Be sure to use a different installation folder.

__Step 2 –__ Open __settings.xml__ and configure the new add-on instance to work with the second Prism server.

__Step 3 –__ Open __install.ps1__ for the new add-on for edit.

__Step 4 –__ Modify the default service name:

```$name = "enter_new_name"```

__Step 5 –__ Save and then launch the updated __install.ps1__ file.
