# Automated Installation (Advanced Setup)

An automated installation uses Group Policy to distribute Password Policy Enforcer. This type of installation is recommended when you need to install Password Policy Enforcer on many computers. This section shows you how to install Password Policy Enforcer on domain controllers to enforce domain policies, but you can also use Group Policy to target member servers and workstations if you need to enforce local policies. See the [Domain and Local Policies](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/domain_and_local_policies.md) topic for additional information.

## Create a Distribution Point

A distribution point can either be a UNC path to a server share, or a DFS (Distributed File System) path. To create a Password Policy Enforcer distribution point:

__Step 1 –__ Log on to a server as an administrator.

__Step 2 –__ Create a shared network folder to distribute the files from.

__Step 3 –__ Give the __Domain Controllers__ security group read access to the share, and limit write access to authorized personnel only.

### Copy PPE10.1.msi into the Distribution Point

__Step 1 –__ Start the Password Policy Enforcer installer (PPE10.1.exe).

__Step 2 –__ Read the license agreement, and then click __Yes__ if you accept all the license terms and conditions.

__Step 3 –__ Select the __Advanced__ option, and then click __Next__.

__Step 4 –__ Right-click the __PPE10.1.msi__ icon, click __Copy__, and then paste the file into the distribution point.

![installing_ppe](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/installing_ppe.png)

__Step 5 –__ Give the __Domain Controllers__ security group read access to the PPE10.1.msi file in the distribution point.

__Step 6 –__ Click __Finish__.

## Create a Group Policy Object

__Step 1 –__ Start the Group Policy Management Console (gpmc.msc).

__Step 2 –__ Expand the forest and domain items in the left pane.

__Step 3 –__ Right-click the __Domain Controllers OU__ in the left pane, and then click __Create a GPO in this domain, and Link it here...__

![installing_ppe_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/installing_ppe_1.png)

__Step 4 –__ Enter __Password Policy Enforcer__ in the provided field, and then press __Enter__.

## Edit the Group Policy Object

__Step 1 –__ Right-click the __Password Policy Enforcer GPO__, and then click the __Edit...__ button.

__Step 2 –__ Expand the __Computer Configuration__, __Policies__, and __Software Settings__ items.

__Step 3 –__ Right-click the __Software installation__ item, and then select __New__ > __Package...__

__Step 4 –__ Enter the full __UNC path to PPE10.1.msi__ in the Open dialog box.

__NOTE:__ You must enter a UNC path so that other computers can access this file over the network. For example: \\file server\distribution point share\PPE10.1.msi

__Step 5 –__ Click __Open__.

![installing_ppe_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/installing_ppe_2.png)

__Step 6 –__ Select the __Assigned deployment method__, and then click __OK__.

__Step 7 –__ Close the Group Policy Management Editor.

## Complete the Installation

Restart each domain controller to complete the installation. Windows installs Password Policy Enforcer during startup, and then immediately restarts the computer a second time to complete the installation.

Password Policy Enforcer will not enforce a password policy at this time because no policies are defined. Users can still change their password, and will only need to comply with the Windows password policy rules (if enabled).
