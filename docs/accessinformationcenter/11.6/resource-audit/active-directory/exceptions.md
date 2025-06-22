# Exceptions Report

The Exceptions report at the domain level provides a list of exceptions found on the selected
domain. This report includes a Details table.

![Exceptions report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/activedirectory/domain/domainexceptions.webp)

An exception is defined as a problem or risk to Active Directory security. Exceptions include deeply
nested groups and stale membership. This table is blank if no exceptions are found within the
targeted domain. This report is comprised of the following columns:

- Server Name – Name of the Domain
- Name – Type of exception found
- Description – Description of the exception type
- Count – Number of this type of exception found on the server

There is one table at the bottom displaying Details for the selected exception:

- Trustee Name – Name of the trustee
- DistinguishedName – Distinguished name for the trustee account

# Exceptions Report

The Exceptions report at the **Active Directory** node provides a list of exceptions that were found
across the targeted Active Directory environment. This report includes a Details table.

![Exceptions report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/activedirectory/exceptions.webp)

An exception is defined as a problem or risk to Active Directory security. Exceptions include deeply
nested groups and stale membership. This table will be blank if no exceptions were found within the
targeted Active Directory environment. This report is comprised of the following columns:

- Server Name – Name of the Domain
- Name – Type of exception found
- Description – Description of the exception type
- Count – Number of this type of exception found on the targeted domains

There is one table at the bottom displaying Details for the selected exception:

- Trustee Name – Owner of the trustee account
- DistinguishedName – Distinguished name for the trustee account

# Exceptions Node Reports

The following report is available at the **Exceptions** node:

- [Exceptions Report](/docs/accessinformationcenter/11.6/resource-audit/active-directory/exceptions.md)

The Exceptions node displays when exceptions have been identified on the selected domain. When it is
present, it can be expanded to view the exception type level reports. The following nodes may show
under the Exceptions node for a domain when that exception type has been identified:

- Circular Nesting – Groups with circular references in their effective membership
- Deeply Nested – Groups with deep levels of membership nesting
- Empty Group – Groups with no membership
- Large Groups – Groups with a large amount of effective members
- Large Token – Users with a large amount of authorization groups in their token
- Single Member Group – Groups with a single direct member
- Stale Membership – Groups with a high percentage of effective members that are stale users
- Stale Users – Users who have not logged onto the domain for an extended period of time

The Exceptions report for each exception type level displays filtered exception information. See the
[Exceptions by Type Report](/docs/accessinformationcenter/11.6/resource-audit/active-directory/exceptions.md)
topic for additional information.

# Exceptions Report

The Exceptions report at the **Exceptions** node provides a list of exceptions found on the domain.
This report includes a Details table.

![Exceptions report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/activedirectory/exceptions/exceptionsexceptions.webp)

An exception is defined as a problem or risk to Active Directory security. Exceptions include deeply
nested groups and stale membership. This report is comprised of the following columns:

- Server Name – Name of the Domain
- Name – Type of exception found
- Description – Description of the exception type
- Count – Number of this type of exception found on the server

There is one table at the bottom displaying Details for the selected exception:

- Trustee Name – Name of the trustee
- DistinguishedName – Distinguished name for the trustee account

# Exceptions by Type Report

The Exceptions report at the exception type level provides details on the selected exception type.
An exception is defined as a problem or risk to Active Directory security. Each of these reports
includes a Member Of table. Certain exception types also include a Members table.

![Exceptions report at the Exception Type level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/activedirectory/exceptions/exceptionsbytype.webp)

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Last Logon – Date and timestamp from last logon as tracked by Active Directory
- Group Type – Type and scope of the group object: Domain Local/Global/Universal,
  Distribution/Security

If the selected trustee in the top section of the report is a group, the Group Membership pane
displays the group membership, including nested groups.

There are two tables at the bottom displaying Member Of and Members for the selected trustee.

![Member Of table](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/activedirectory/exceptions/exceptionsbytypememberoftable.webp)

The Member Of table contains the following additional information for the selected trustee:

- Group Account – Account associated with the group
- Group Mail – Group’s email account as read from Active Directory, if applicable
- Group ObjectSid – Security ID of the group object
- Domain Name – Name of the domain
- Group Scope – Scope of the group object: Domain Local, Global, or Universal
- Group Target – Type of the group object: Distribution or Security
- Membership – Type of membership the trustee has to this group

  - Direct – Trustee is specifically assigned to this group
  - Nested – Trustee is a member of a group which has membership in this group

- Description – Description of this group from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- Created – Date Active Directory object was created
- Changed – Date and timestamp from last change as tracked by Active Directory (whenChanged
  attribute)
- ManagedBy Name – Name of manager for the group from Active Directory
- ManagedBy Logon – Trustee account for the group’s manager
- ManagedBy Department – Department of the group’s manager
- ManagedBy Mail – Email address for the group’s manager

![Members table](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/activedirectory/exceptions/exceptionsbytypememberstable.webp)

When the selected trustee is a group, the Members table contains additional information for the
selected trustee:

- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Domain Name – Name of the domain
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Last Logon – Date and timestamp from last logon as tracked by Active Directory
- Type – Type of membership the trustee has to this group

  - Direct – Trustee is specifically assigned to this group
  - Nested – Trustee is a member of a group which has membership in this group

- Nested Level – Count of groups nested between the audited group and the selected trustee’s direct
  membership
- Manager Name – Name of manager for this group from Active Directory
- Manager Logon – Trustee account for group manager
- Manager Department – Department of group manager
- Manager Mail – Email address for group manager
