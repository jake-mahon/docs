# I unlicensed my machine by removing a universal license, my machine still appears licensed. Why is this?

Modern versions of the Netwrix Endpoint Policy Manager (formerly PolicyPak) CSE will cache licenses
for 24 hours, even if rebooted. This is to compensate for errors by admins, or if something was to
manipulate the storage location of licenses before new licenses were put in place.

As such you will still see licenses in place when running `PPUPDATE` command.

![826_1_img-01](/img/product_docs/endpointpolicymanager/endpointpolicymanager/troubleshooting/license/826_1_img-01.webp)
