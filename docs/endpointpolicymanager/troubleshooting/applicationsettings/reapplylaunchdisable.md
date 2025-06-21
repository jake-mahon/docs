# How do I turn off "Reapply on Launch" for all applications if asked by tech support?

First, install the Netwrix Endpoint Policy Manager (formerly PolicyPak) ADMX files as seen here:

[Troubleshooting with ADMX files](/docs/endpointpolicymanager/resources/video-tutorials/troubleshooting/admxfiles.md)

Then use the following Computer side Group Policy setting to "Disable Reapply on Launch for all
applications."

When this is set, this will stop applications from attempting to apply settings again, which could
increase compatibility with some antivirus and security software.

![290_1_img-1_950x551](/img/product_docs/endpointpolicymanager/endpointpolicymanager/troubleshooting/applicationsettings/290_1_img-1_950x551.webp)
