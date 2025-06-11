# Maintenance and Troubleshooting

(Undefined variable: Add-on.Addon\_Qumulo) operations are logged into the __SyslogService.txt__ file. This file is located in the same folder as __SyslogService.exe.__

To change the add-on logging level, use the __LogLevel__ parameter in the __settings.xml__ file.

- It is recommended that before the first run you set this parameter to ```debug```. This will facilitate operations tracking and possible problem solving.
- After that it is strongly recommended to re-set this parameter to ```error``` (default value) to prevent the uncontrolled log growth.

If you cannot see collected data in Netwrix Auditor, check the following:

1. Service account has sufficient rights to access Netwrix Auditor.
2. In Netwrix Auditor settings, go to the __Integrations__ section and make sure the __Leverage Integration API__ is switched to __ON__. Check the communication port number – default is __9699__.
3. If you configured a dedicated monitoring plan, make sure data source monitoring is enabled.
4. Verify the parameters you provided in __settings.xml__.
