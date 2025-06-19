# How can I use Endpoint Privilege Manager to get Sage 50 to work without admin rights?

After working with one customer, we have included the Sage 50 pre-configured XML in the guidance,
which is downloadable in the Netwrix Endpoint Policy Manager (formerly PolicyPak) Portal.

Use this video to see how to get the guidance and use the XML file we've pre-created:

[Installing applications-and-Preconfigured-Rules](/docs/endpointpolicymanager/endpointpolicymanager/video/leastprivilege/installapplications.md)

That being said the same customer reported that when opening a report, Sage will hang for several
minutes while attempting to "Look for a printer."

The customer's own remediation was to elevate the Print spooler also needs to be elevated
(c:\windows\splwow64.exe).

However, this is likely more than required, and instead, we would advise to merely attempt to change
the integrity level of the spooler using these directions:

[I elevated an application, but drag and drop between the elevated and other non-elevated applications isn't working anymore. What can I try?](/docs/endpointpolicymanager/endpointpolicymanager/leastprivilege/elevate/dragdrop.md)

Both avenues to adjust the spooler service are "use at your own risk."

We here at Endpoint Policy Manager no longer have Sage 50 to test, so this is just us passing this
information along.
