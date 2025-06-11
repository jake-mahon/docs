# Maintenance and Troubleshooting

The Add-On operations are logged into the __SyslogService.txt__ file. This file is located in the same folder as __SyslogService.exe.__

To change the add-on logging level, use the __LogLevel__ parameter in the __Settings.xml__ file.

- It is recommended that before the first run you set this parameter to ```debug```. This will facilitate operations tracking and possible problem solving.
- After that it is strongly recommended to re-set this parameter to ```error``` to prevent the uncontrolled log growth.

If you cannot see collected data in Auditor, check the following:

1. In Auditor settings, go to the __Integrations__ section and make sure the __Leverage Integration API__ is switched to __ON__. Check the communication port number – default is __9699__.
2. If you configured a dedicated monitoring plan, make sure data source monitoring is enabled.
3. Verify the parameters you provided in __Settings.xml__ and __dbparam.ini__.
