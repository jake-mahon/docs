# Creating the Policy

Once the script and package are successfully uploaded, you need to create a new Jamf policy. To create the new policy, follow these steps:

__Step 1 –__ In your Jamf account, from the main navigation bar, click __Computer__, from the left sidebar menu, select __Policies__, and then click __+ New__.

![Creating a New Policy](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/requirements/target/config/policies.png)

__Step 2 –__ On the default General section, enter the following information:

- Display Name – enter the name to use for this policy.
- Select the __Recurring Check-in__ check-box.

![Configuring information on new policy](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/jamf/newpolicy.png)

__Step 3 –__ On the Scripts section, click __Configure__ and then enter the following information:

- Add the epp\_change\_ip.sh script.
- Priority – set priority to Before, as the script needs to be installed before the next step.

![Configuring Script under Policies](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/jamf/scripts.png)

__Step 4 –__ On the Packages section, click __Configure__ and then add the package EndpointProtector.pkg.

![Adding the Endpoint Protector package to policy](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/jamf/addingpackage.png)

__Step 5 –__ Go to the Scope tab and add the devices and users to apply the new policy.

__Step 6 –__ Click __Save__ to apply all settings to the new policy.

![Adding Devices and users to apply to the scope](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/jamf/policyscope.png)

To confirm that the Endpoint Protector Client has been successfully deployed and the Server- Client communication and policies work as expected, you can view the endpoint in the List of Computers from the Endpoint Protector UI, and the Endpoint Protector Client is displayed in the menu bar.
