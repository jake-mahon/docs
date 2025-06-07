# Agent Service Fails to Start Due to Service Timeout

If an Agent service fails to start due to a service timeout, setting the NT Service timeout higher than the default of 30 seconds typically resolves this issue. Windows attempts to get the certification revocation list (which must time out when there is no internet access) in addition to the normal service start time that may exceed the default of 30 seconds.

Follow the steps to modify the ServicesPipeTimeout value.

__Step 1 –__ Open the Registry Editor.

- From the Windows Start menu, click __Run__.
- In the Run window's open field, type __regedit__.
- Click __OK__.

__Step 2 –__ In the Computer pane, navigate to the following registry folder:

- HKEY\_LOCAL\_MACHINE > SYSTEM > CurrentControlSet > Control

__Step 3 –__ In the right pane, select __ServicesPipeTimeout__.

__NOTE:__ If the ServicesPipeTimeout entry does not exist, you must create it. See the [Create the ServicesPipeTimeout Entry](#Create-the-ServicesPipeTimeout-Entry) topic for additional information.

__Step 4 –__ Right-click __ServicesPipeTimeout__ and click __Modify__. This opens the Edit Value window.

__Step 5 –__ Select the __Decimal__ radio button.

__Step 6 –__ In the Value data field, enter __60000__ and click __OK__. This value represents the time in milliseconds before a service times out.

__Step 7 –__ Restart the computer.

The ServicesPipeTimeout value is now modified.

## Create the ServicesPipeTimeout Entry

Follow the steps to create the ServicesPipeTimeout entry using the Registry Editor.

__Step 1 –__ In the Edit menu, click __New__ and then select __DWORD Value__.

__Step 2 –__ Type __ServicesPipeTimeout__ and press __Enter__.

The ServicesPipeTimeout entry is now added.

See the [Best Practices and Troubleshooting](/docs/product_docs/threatprevention/threatprevention/troubleshooting/overview.md) topic for additional information.
