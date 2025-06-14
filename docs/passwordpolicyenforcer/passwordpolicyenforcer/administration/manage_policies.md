# Manage Policies

Netwrix Password Policy Enforcer can enforce up to 256 different password policies. You can assign policies to users directly, or indirectly through Active Directory security groups and containers (Organizational Units). See the [Assign Policies to Users & Groups](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/usersgroups.md) topic for additional information.

Open the Configuration Console:

Click __Start__ > __Netwrix Password Policy Enforcer__ > __PPE Configuration__  
or   
Double click the __PPE Configuration__ desktop shortcut.

![Configuration Console Dashboard](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/ppedashboard.webp)

The Configuration Console dashboard shows __No password policies have been set up__ when you are getting started with Password Policy Enforcer. Once you __Add a policy__, the dashboard shows the defined policies and tool links. In this example, the Default Password Policy and CIS Password Policy Guide have been added.

![Dashboard with Policies](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/ppedashboardpolicies.webp)

The policy management links are all on the Password Policies tile:

- Add a Policy.
- Set Up a Policy (click on existing policy name).
- Test Policy.
- Set Priorities.
- Export.
- Context menu (3 stacked dots) beside each defined policy Make Copy, Make Default/Remove Default, Rename and Delete .

## Add a Policy

__Step 1 –__ Click __Add policy__ from the Configuration Console.

__Step 2 –__ Enter a unique policy name. Maximum is 32 characters.

__Step 3 –__ Select a Policy template or __None__ if you are creating your own.

__Step 4 –__ Click __Create policy__.

Alternatively, you can select an existing policy and use the Context menu Make Copy option to start with the selected policy.

### Policy Templates

Password Policy Enforcer contains Out-of-the-box Policy Templates based on the requirements of the most popular regulatory frameworks.

- Center for Internet Security (CIS) Password Policy Guide – See the [CIS Password Policy Guide](https://www.cisecurity.org/insights/white-papers/cis-password-policy-guide) article for additional information.
- Center for Internet Security (CIS) Password Policy Guide MFA – See the [CIS Password Policy Guide](https://www.cisecurity.org/insights/white-papers/cis-password-policy-guide) article for additional information.
- Cybersecurity Information Sharing Act (CISA)
- Criminal Justice Information Services (CJIS) Security Policy
- Cybersecurity Maturity Model Certification (CMMC)
- Defense Federal Acquisition Regulation Supplement (DFARS)
- Gramm-Leach-Bliley Act (FedRAMP)
- Federal Information Security Management Act (FISMA)
- Health Insurance Portability and Accountability Act (HIPPA) – HIPAA Security Rule requires that organizations must implement procedures for creating, changing, and safeguarding passwords.

  - It also recommends training the workforce on ways to safeguard password information and establish guidelines to create and change passwords in a periodic cycle.
  - HIPAA doesn’t offer any specific password complexity guidelines. To comply with HIPAA, organizations are better off following NIST password guidelines.
  - Most of healthcare institutions use the NIST framework.
- International Organization for Standardization (ISO/IEC) 27002 – See the [NIST Special Publication 800-63B](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63b.pdf) article for additional information.
- North American Electric Reliability Corporation Critical Infrastructure Protection (NERC CIP) – See the [CIP-007-6 — Cyber Security – Systems Security Management](https://www.nerc.com/_layouts/15/PrintStandard.aspx?standardnumber=CIP-007-6&title=Cyber%20Security%20-%20System%20Security%20Management&Jurisdiction=United%20States) article for additional information.
- National Institute of Standards and Technology (NIST) Special Publication 800-171
- National Institute of Standards and Technology (NIST) Special Publication 800-53
- National Institute of Standards and Technology (NIST) Special Publication 800-63b – See the [NIST Special Publication 800-63B](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63b.pdf) article for additional information.
- Payment Card Industry Data Security Standard (PCI DSS) – See the [PCI Document Library](https://www.pcisecuritystandards.org/document_library?category=pcidss&document=pci_dss) web site for additional information.
- Payment Card Industry Data Security Standard (PCI DSS) (version 4)

## Set Up a Policy

Once you add a policy, it needs to be set up or reviewed if you used a template. Click on the policy name to edit the policy. For each policy:

- Set up [Rules](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/rules.md).
- [Assign Policies to Users & Groups](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/usersgroups.md).
- Enable the use of an optional [Passphrase](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/passphrases.md).
- Set up [Policy Properties](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/policy_properties.md).
- Set up [Messages](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/messages.md) for your users.

## Test Policy

Launches the Test policy tool in a separate window. You can test __By user__ and by __Password bulk test__. See the [Test Policy](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/testpolicy.md) topic for additional information.

## Set Priorities

Set priorities determines which policy to enforce if users have more than one policy. Click __Apply priorities__ to save the new order.

![Set priorities](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/policypriority.webp)

### Policy Selection Flowchart

This flowchart shows how Password Policy Enforcer determines a policy for each user. Use the [Test Policy](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/testpolicy.md) tool to quickly determine which policy Password Policy Enforcer is enforced for a particular user.

![managing_policies](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/managing_policies.jpg)

## Export

Exports your policy configuration to __C:\Program Files\Password Policy Enforcer\Report\report.html__

## Make Copy

Duplicates a policy. This context menu item is also available when you are editing a policy.

__Step 1 –__ Click the context menu next to the policy to copy.

__Step 2 –__ Select __Make copy__ from the context menu.

__Step 3 –__ Enter a unique name for the policy.

__Step 4 –__ Click __Make copy__.

## Make Default/Remove Default

Assigns the selected policy as the default, or removes the selected policy as the default. These context menu items are also available when you are editing a policy.

__Step 1 –__ Click the context menu next to the policy to set as the default.

__Step 2 –__ Select __Make default__ from the context menu. The policy is assigned to all domain users who do not have a specific policy assigned. __Default__ is indicated in the policy list. The context menu changes to __Remove Default__.

__NOTE:__ If you assign a different policy as the default you are prompted that an existing default is set.

## Rename

Renames a policy.

__Step 1 –__ Click the context menu next to the policy to rename.

__Step 2 –__ Select __Rename__ from the context menu.

__Step 3 –__ Enter a unique name for the policy.

__Step 4 –__ Click __Rename__.

## Delete

Deletes a policy. This context menu item is also available when you are editing a policy.

__Step 1 –__ Click the context menu next to the policy to delete.

__Step 2 –__ Select __Delete__ from the context menu.

__Step 3 –__ Click __Delete__. A warning confirmation is displayed if you delete the default policy.

## Exempt Users from a Password Policy

You can exempt users from having to comply with the password policy when a default policy is specified.

__Step 1 –__ Create a new policy for these users.

__Step 2 –__ Leave all the rules disabled for this policy.

__Step 3 –__ Assign this policy to the users who do not have to comply with any Password Policy Enforcer rules.

__CAUTION:__ If Password Policy Enforcer has only one policy and that policy is also the default policy, then Password Policy Enforcer enforces the policy for all users.

The Password Policy Client and Password Policy Server communicate over UDP port 1333 by default. If you need to change the default port, then type the new port number in the __Password Policy Server Port__ text box. Setting the port number to zero stops Password Policy Enforcer from accepting client requests. If you change the port number, then you must also:

- Restart all the Password Policy Server computers.
- Configure the Password Policy Client to use the new port.
