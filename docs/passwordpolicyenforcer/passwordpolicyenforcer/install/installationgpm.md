# Install with Group Policy Management

An automated installation uses Group Policy to distribute Password Policy Enforcer. This type of installation is recommended when you need to install Password Policy Enforcer on many computers. This section shows you how to install Password Policy Enforcer on domain controllers to enforce domain policies, but you can also use Group Policy to target member servers and workstations if you need to enforce local policies. See the [Domain and Local Policies](/docs/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/domain_and_local_policies.md) topic for additional information.

## Create a Distribution Point

A distribution point can either be a UNC path to a server share, or a DFS (Distributed File System) path. To create a Password Policy Enforcer distribution point:

__Step 1 –__ Log on to a server as an administrator.

__Step 2 –__ Create a shared network folder to distribute the files from.

__Step 3 –__ Give the __Domain Controllers__ security group read access to the share, and limit write access to authorized personnel only.

__Step 4 –__ Download the Netwrix Password Policy Enforcer installation package from Netwrix.

__Step 5 –__ Extract the installers from the compressed file.

__Step 6 –__ Copy the __.msi__ files to the distribution folder.

## Create a Group Policy Object

__Step 1 –__ Start the Group Policy Management Console (__gpmc.msc__).

__Step 2 –__ Expand the forest and domain items in the left pane.

__Step 3 –__ Right-click the __Domain Controllers OU__ in the left pane, and then click __Create a GPO in this domain, and Link it here...__

![GPM installation](/static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/gpm1.png)

__Step 4 –__ Enter __Password Policy Enforcer__ in the provided field, and then press __Enter__.

![GPM Install](/static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/gpm2.png)

## Edit the Group Policy Object

__Step 1 –__ Right-click the __Password Policy Enforcer GPO__, and then click the __Edit...__ button.

__Step 2 –__ Expand the __Computer Configuration__, __Policies__, and __Software Settings__ items.

__Step 3 –__ Right-click the __Software installation__ item, and then select __New__ > __Package...__

__Step 4 –__ Enter the full __UNC path__ to your __msi__ files.

__NOTE:__ You must enter a UNC path so that other computers can access this file over the network. For example: \\file server\distribution point share\Netwrix\_PPE\__version_.msi

__Step 5 –__ Click __Open__.

![installing_ppe_2](/static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/installing_ppe_2.png)

__Step 6 –__ Select __Assigned__ as the deployment method.

__Step 7 –__ Click __OK__.

__Step 8 –__ Close the Group Policy Management Editor.

## Complete the Installation

Restart each domain controller to complete the installation. Windows installs Password Policy Enforcer during startup, and then immediately restarts the computer a second time to complete the installation.

Password Policy Enforcer does not enforce a password policy until the policies are defined. Users can still change their password, and will only need to comply with the Windows password policy rules (if enabled).
