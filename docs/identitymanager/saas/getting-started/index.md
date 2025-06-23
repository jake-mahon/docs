# Integration Guide

This guide is designed to provide the tools and knowledge to fully understand and configure Identity
Manager to match your project's needs.

## Target Audience

This guide is meant to be read by integrators who configure Identity Manager to match their
project's needs.

## Prior Knowledge

A basic knowledge of Identity and Access Management (IAM) and more precisely of Identity and
Governance Administration (IGA) is required to really understand, implement and use Identity
Manager's features.

Netwrix Identity Manager (formerly Usercube)strongly recommends starting from the
[Introduction Guide](/docs/identitymanager/saas/identitymanager/introduction-guide/index.md) to fully benefit from the Integration Guide's
content.

### Technical skills

As Identity Manager is a web application, some classic devops skills are needed:

- Web servers, especially IIS: declare a web site; configure an application pool.
- SQL Server: query data in the database with SQL, including with joins; insert/update data with
  SQL; for advanced use, an understanding of database indexes.
- Coding: very basic C# skills; PowerShell scripts.
- XML and JSON syntax for configuration files.
- Git or other source control tools.

The other technical skills greatly depend on the connectors needed for your projects. The most
frequent ones are:

- Excel and CSV
- LDAP and Active Directory: understanding of LDAP attributes and of group membership.
- Microsoft Entra ID (formerly Azure Active Directory)
- Exchange
- REST API programming

# Set Up

- [ Install the Development Environment ](/docs/identitymanager/saas/installation/index.md)

  How to connect to Identity Manager's SaaS environment to set up the development environment.

- [ Create the Workforce Repository ](/docs/identitymanager/saas/identity-management/index.md)

  How to initiate the repository for workforce identities by loading identities into Identity
  Manager with the right attributes.

- [ Configure Unique Property Generation ](/docs/identitymanager/saas/identity-management/index.md)

  How to configure Identity Manager to generate unique identifiers, mails and logins for any user
  who does not have them already.

- [Load Identities to Identity Manager](/docs/identitymanager/saas/identity-management/index.md)

  How to load identities into Identity Manager for the first time using a basic data model in the
  form of a template MS Excel file.

- [Template Description](/docs/identitymanager/saas/identity-management/index.md)

  Description of the MS Excel template for the creation of the identities repository.

- [ Adjust the Workforce Data Model ](/docs/identitymanager/saas/identity-management/entity-model.md)

  How to select the properties to be part of the data model for the workforce repository
  (therefore displayed in the UI), and choose their optimal displaying mode.

- [ Configure a User Profile ](/docs/identitymanager/saas/access-control/profiles-and-permissions/index.md)

  How to tweak the permissions for actions within Identity Manager, for a standard set of basic
  Identity Manager profiles.

- [ Configure Onboarding Workflows ](/docs/identitymanager/saas/configuration/index.md)

  How to adjust the parameters of onboarding workflows.

- [ Connect to a Managed System ](/docs/identitymanager/saas/connectors/how-to/index.md)

  How to create a new connector using the provided SaaS agent.

- [ Model the Data ](/docs/identitymanager/saas/connectors/configuration/index.md)

  How to choose the appropriate model for a connector's data.

- [ Create the Connector ](/docs/identitymanager/saas/connectors/how-to/create-connectors/index.md)

  How to create the technical container of a connector.

- [Create a Connection](/docs/identitymanager/saas/connectors/configuration/connections.md)

  How to create a connection inside a connector and choose the appropriate package.

- [Create an Entity Type](/docs/identitymanager/saas/identity-management/entity-model.md)

  How to create an entity type that corresponds to the connector model.

- [ Synchronize Data ](/docs/identitymanager/saas/synchronization/index.md)

  How to launch data synchronization, i.e. read managed systems' data and load it into Identity
  Manager.

- [ Categorize Resources ](/docs/identitymanager/saas/connectors/configuration/index.md)

  How to correlate managed systems' resources with identities, classifying resources into resource
  types.

- [ Create a Resource Type ](/docs/identitymanager/saas/connectors/configuration/index.md)

  How to create the container for future correlation and classification rules inside a given
  managed system.

- [ Correlate Resources ](/docs/identitymanager/saas/connectors/configuration/index.md)

  How to define correlation rules to match up resources across systems, usually accounts with
  their owner.

- [ Classify Resources ](/docs/identitymanager/saas/connectors/configuration/index.md)

  How to define classification rules in order to classify remaining uncorrelated resources,
  assigning them resource types.

- [ Create a Provisioning Rule ](/docs/identitymanager/saas/provisioning/index.md)

  How to define scalar rules, navigation rules and/or query rules to compute and provision target
  resources values from source resources values.

- [ Create Resources ](/docs/identitymanager/saas/provisioning/index.md)

  How to define resource type rules to create new (target) resources for given users, computing
  and provisioning their properties based on source resources.

- [Compute a Scalar Property](/docs/identitymanager/saas/provisioning/index.md)

  How to define scalar rules to compute and provision the values of scalar properties for target
  resources based on source resources.

- [ Compute a Navigation Property ](/docs/identitymanager/saas/provisioning/index.md)

  How to define navigation rules and/or query rules to compute and provision the values of
  navigation properties for target resources based on source resources.

- [ Create Roles in the Role Catalog ](/docs/identitymanager/saas/role-management/index.md)

  How to define single roles to model entitlements, and organize them inside the role catalog,
  basis of the role model.

- [ Create Roles in Bulk ](/docs/identitymanager/saas/role-management/index.md)

  How to create role naming rules, which create single roles using existing naming conventions
  from the managed system.

- [ Create a Category ](/docs/identitymanager/saas/role-management/index.md)

  How to structure roles into categories.

- [Create a Role Manually](/docs/identitymanager/saas/role-management/index.md)

  How to create single roles manually.

- [Assign Users a Profile](/docs/identitymanager/saas/access-control/profiles-and-permissions/create-assign-profiles.md)

  How to assign Identity Manager's access permissions to users through profiles.

- [ Manage Role Officers ](/docs/identitymanager/saas/role-management/index.md)

  How to manage role officers in order to ensure the approval for entitlement assignments.

# Optimize

- [ Modify the Identity Data Model ](/docs/identitymanager/saas/identity-management/entity-model.md)

  How to make data model properties evolve according to the organization's needs.

- [ Create an HR Connector ](/docs/identitymanager/saas/connectors/how-to/create-connectors/index.md)

  How to create a connector dedicated to the automation of identity management (creation, update,
  deletion), via the synchronization of HR data into Identity Manager and internal provisioning.

- [ Manage Risks ](/docs/identitymanager/saas/governance/risks.md)

  How to use the risk management module to identify entitlement assignments that pose a security
  risk, especially about segregation of duties and high privileges.

- [Create a Policy](/docs/identitymanager/saas/role-management/role-assignment/evaluate-policy.md)

  How to define policies to organize roles and rules.

- [Automate the Review of Non-conforming Assignments](/docs/identitymanager/saas/role-management/role-assignment/nonconforming-detection.md)

  How to automate the review of non-conforming assignments through automation rules.

- [ Automate Assignments ](/docs/identitymanager/saas/role-management/role-assignment/index.md)

  How to automate entitlement assignment.

- [ Automate Role Assignments ](/docs/identitymanager/saas/role-management/role-assignment/index.md)

  How to manually build rules to automate the assignment of roles to identities.

- [ Perform Role Mining ](/docs/identitymanager/saas/role-management/role-mining.md)

  How to use role mining to suggest role assignment rules based on existing assignments, in order
  to push the automation wall further.

- [Remove Redundant Assignments](/docs/identitymanager/saas/role-management/role-assignment/index.md)

  How to remove redundant assignments, i.e. manual assignments of roles and resource types that
  are assigned by a rule too.

- [Create a Composite Role](/docs/identitymanager/saas/role-management/index.md)

  How to define composite roles in order to create sets of single roles easy to assign.

- [Configure a Parametrized Role](/docs/identitymanager/saas/role-management/index.md)

  How to reduce the number of roles in the model by configuring roles with parameters.

- [ Perform a Simulation ](/docs/identitymanager/saas/role-management/simulation.md)

  How to assess the impact of a modification on the role model, including the role catalog, role
  assignment rules and resource correlation rules, using a dedicated policy.

# Administrate

In the Admin section you can do the following:

- [ Generate Reports ](/docs/identitymanager/saas/governance/reporting/index.md)

  How to use Identity Manager's reporting modules to produce IGA reports for auditing and
  governance purposes.

- [Review Orphaned and Unused Accounts](/docs/identitymanager/saas/governance/access-certification.md)

  How to remediate license and security issues caused by orphaned and/or unused accounts.

- [Provision](/docs/identitymanager/saas/provisioning/index.md)

  How to write to a managed system.

- [ Review Provisioning ](/docs/identitymanager/saas/provisioning/index.md)

  How to review provisioning orders before generation.

- [ Provision Manually ](/docs/identitymanager/saas/provisioning/index.md)

  How to use Identity Managerto manually write to the managed systems.

- [ Provision Automatically ](/docs/identitymanager/saas/provisioning/index.md)

  How to use Identity Manager to automatically write to the managed systems.

- [ Review Non-conforming Assignments ](/docs/identitymanager/saas/role-management/role-assignment/nonconforming-detection.md)

  How to review non-conforming assignments, i.e. approve or decline the suggestions made by
  Identity Manager after every synchronization. The aim is to handle the differences between the
  values from the managed systems and those computed by Identity Manager's role model.

- [ Reconcile a Role ](/docs/identitymanager/saas/role-management/role-assignment/nonconforming-detection.md)

  How to review non-conforming permissions, i.e. approve or decline the role suggestions made by
  Identity Manager after every synchronization. The aim is to handle the differences between the
  navigation values from the managed systems and those computed by Identity Manager according to
  the role catalog.

- [ Reconcile a Property ](/docs/identitymanager/saas/role-management/role-assignment/nonconforming-detection.md)

  How to review unreconciled properties. The aim is to handle the differences between the property
  values from the managed systems and those computed by Identity Manager according to provisioning
  rules.

- [ Review an Unauthorized Account ](/docs/identitymanager/saas/role-management/role-assignment/nonconforming-detection.md)

  How to remediate unauthorized accounts. The aim is to review the accounts whose assignments
  don't comply with the rules of the role model.

- [ Perform Access Certification ](/docs/identitymanager/saas/governance/access-certification.md)

  How to certify existing access by reviewing a specific range of assigned permissions for
  auditing purposes.

- [ Schedule a Certification Campaign ](/docs/identitymanager/saas/governance/access-certification.md)

  How to create and schedule access certification campaigns, defining their scope.

- [ Execute a Certification Campaign ](/docs/identitymanager/saas/governance/access-certification.md)

  How to execute access certification campaigns, i.e. review specific entitlement assignments and
  deprovision inappropriate access.

- [ Request Entitlement Assignment ](/docs/identitymanager/saas/role-management/role-assignment/index.md)

  How to send a manual request to add, update or remove an entitlement for an identity.

- [Review Assigned Roles](/docs/identitymanager/saas/role-management/role-assignment/index.md)

  How to review user permissions grouped by roles.

# Global Process

How do the process activities success each other.

NETWRIX recommends working with a SaaS installation and with the User Interface as long as possible,
because identity management is optimized by mastering identities inside Identity Manager.

Be aware that the integration of an IGA tool is an iterative process. There is no simple linear
process. This user guide provides the following processes that can follow one another and
intertwine.

- [ How to Start ](/docs/identitymanager/saas/getting-started/quick-start.md)

  How to start integrating Identity Manager with your own needs.

- [ How to Maintain the Workforce Directory ](/docs/identitymanager/saas/synchronization/index.md)

  How to keep the workforce directory up to date.

- [ How to Implement a New System ](/docs/identitymanager/saas/connectors/how-to/create-connectors/index.md)

  How to add a new system to the solution.

# Maintain

- [ Update Identity Data ](/docs/identitymanager/saas/identity-management/index.md)

  How to perform modifications in the identity repository, to manage onboarding, offboarding and
  position changes.

  - [ Update an Individual Identity ](/docs/identitymanager/saas/identity-management/index.md)

    How to perform changes in data for a single identity, through the UI.

  - [ Update Multiple Identities ](/docs/identitymanager/saas/identity-management/index.md)

    How to perform a same change in data for several identities simultaneously, through the UI.

  - [ Update Identities in Bulk ](/docs/identitymanager/saas/identity-management/index.md)

    How to perform a mass change in identity data, by uploading a complete or incremental
    version of the identity repository.

- [ Troubleshoot ](/docs/identitymanager/saas/monitoring/index.md)

  How to troubleshoot Identity Manager when facing technical issues.
