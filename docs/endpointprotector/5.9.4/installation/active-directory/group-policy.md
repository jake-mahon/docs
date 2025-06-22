# Linking the GPO to OU

Once you have created the GPOs, link them to any of your Organization Units (OU). To do so, follow
these steps:

**Step 1 –** Right-click the OU and then select Link an Existing GPO;

**Step 2 –** From the Group Policy objects, select Endpoint Protector 32 bit and then click OK;

**Step 3 –** Repeat these steps and select the Endpoint Protector 64-bit.

**NOTE:** The new policies will be applied only when the target computers are rebooted.

![Linking Group Policy Objects to Organization Units ](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/configuration/activedirectory/gpotooulinking.webp)

# Linking the WMI to GPO

To link the WMI filters to each GPO, follow these steps:

**Step 1 –** Open the Group Policy Management console, select the Endpoint Protector 32-bit policy,
and on the WMI Filtering section, select 32-bit Windows filter;

**Step 2 –** Repeat this step for Endpoint Protector 64-bit GPO.

![Linking the Windows Management Instrument filters to Group Policy Objects](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/configuration/activedirectory/wmitogpolinking.webp)
