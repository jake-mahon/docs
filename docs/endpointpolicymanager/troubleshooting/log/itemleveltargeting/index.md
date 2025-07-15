# How do I turn on Item Level Targeting (ILT) logging if asked by Endpoint Policy Manager Tech Support?

All of Netwrix Endpoint Policy Manager (formerly PolicyPak)'s ILT evaluations use Microsoft's Group
Policy Preferences (GPPrefs) to actually perform the work.

To perform the work, the GPPrefs Registry extension is actually used in conjunction with any
Endpoint Policy Manager ILT evaluation.

If asked by tech support to turn on Group Policy Preferences ILT evaluation tracing please perform
these steps (and only do it for the Group Policy Preferences Registry extension):

Follow these steps below to turn on TRACING logs for the GPPrefs Registry extension. If you only
need to do this on one or two machines, choose Option 1. If you need to compare multiple machines'
logs then you can use Option 2.

## Option 1: Turning it on LOCALLY on one machine.

**Step 1 –** Run `GPEDIT.MSC` as Administrator on the machine where you need to enable logging. Then
expand "Computer Configuration > Policies > Administrative Templates > System > Group Policy >
Logging and tracing", then double-click on "Registry Policy Processing".

![215_1_image-20190726083343-1](/img/product_docs/endpointpolicymanager/troubleshooting/log/215_1_image-20190726083343-1.webp)

**Step 2 –** Then enable "Registry Policy Processing" and turn "Tracing" on as shown below.

![215_2_image-20190726083343-2](/img/product_docs/endpointpolicymanager/troubleshooting/log/215_2_image-20190726083343-2.webp)

**NOTE:** If "Logging and tracing" are missing then you first need to download and install the
"preferences.msi" from
[https://www.microsoft.com/en-us/download/details.aspx?id=14355](https://www.microsoft.com/en-us/download/details.aspx?id=14355)

![215_3_image-20190726083343-3](/img/product_docs/endpointpolicymanager/troubleshooting/log/215_3_image-20190726083343-3.webp)

After installing the `"preferences.msi"` copy
`"C:\Program Files (x86)\Microsoft Group Policy\Preferences\PolicyDefinitions\GroupPolicyPreferences.admx"`
to
"`C:\Windows\PolicyDefinitions" and "C:\Program Files (x86)\Microsoft Group Policy\Preferences\PolicyDefinitions\en-us\grouppolicypreferences.adml" `to
`"C:\Windows\PolicyDefinitions\en-US". `

Then close and reopen "Local Group Policy Editor (GPEDIT.MSC) and now the "Logging and tracing"
should be present.

## Option 2: Turning it on for a LOT of machines.

**Step 1 –** Using the Group Policy Management Console (GPMC) edit the Group Policy you have
assigned to the Computer OU where the computers live that you need to enable logging for, or create
a new GPO at that level specifically to enable logging.

![215_4_image-20190726083343-4](/img/product_docs/endpointpolicymanager/troubleshooting/log/215_4_image-20190726083343-4.webp)

**Step 2 –** Expand "Computer Configuration > Policies > Administrative Templates > System > Group
Policy > Logging and tracing", then double-click on "Configure Registry preference logging and
tracing"

![215_5_image-20190726083343-5](/img/product_docs/endpointpolicymanager/troubleshooting/log/215_5_image-20190726083343-5.webp)

**Step 3 –** Then enable "Configure Registry preference logging and tracing", and turn "Tracing" on
as shown below.

![215_6_image-20190726083343-6](/img/product_docs/endpointpolicymanager/troubleshooting/log/215_6_image-20190726083343-6.webp)

**NOTE:** The default location for all three log files is
`"%COMMONAPPDATA%\GroupPolicy\Preference\Trace" `however, the variable `%COMMONAPPDATA% `is not
recognized within Windows, it is only used by GPPrefs client side extensions.

To verify TRACING is enabled for the GPPrefs Registry extension, log on to a computer where the
logging policy you just created/edited is applied, then run `CMD`, then run `GPUPDATE.`

![215_7_image-20190726083343-7](/img/product_docs/endpointpolicymanager/troubleshooting/log/215_7_image-20190726083343-7.webp)

Then verify the Group Policy Preferences logs are present at:

```
"C:\ProgramData\GroupPolicy\Preference\Trace"
```

![215_8_image-20190726083343-8](/img/product_docs/endpointpolicymanager/troubleshooting/log/215_8_image-20190726083343-8.webp)

**NOTE:** You can also run "`GPRESULT /R /SCOPE COMPUTER`" to see if the Group Policy applied to the
computer.

![215_9_image-20190726083343-9](/img/product_docs/endpointpolicymanager/troubleshooting/log/215_9_image-20190726083343-9.webp)

When done you can turn it off by setting the policy setting back to "Not Configured".

![215_10_image-20190726083343-10](/img/product_docs/endpointpolicymanager/troubleshooting/log/215_10_image-20190726083343-10.webp)

