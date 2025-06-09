# Working with Technical Support for Enhanced Client Logging

Technical support may ask you to turn on enhanced client logging if the normal logs aren't producing enough troubleshooting information. Only enable these logs when working with technical support.

Go to ```HKLM\SOFTWARE\Policies\PolicyPak\Config\CSE\``` and create a``` REG_DWORD``` named ```ExtendedLogs``` to a value of 1. An example can be seen in Figure 96.

![troubleshooting_policypak_624x284](/img/product_docs/policypak/policypak/troubleshooting/applicationsettings/support/troubleshooting_policypak_624x284.png)

Figure 96. The creation and naming of ```REG_DWORD```.
