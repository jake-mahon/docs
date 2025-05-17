---
sidebar_position: 1218
title: Set Up
---

# Set Up

* [Install the Development Environment](development-environment-installation/index "Install the Development Environment")

  How to connect to Identity Manager's SaaS environment to set up the development environment.
* [Create the Workforce Repository](initial-identities-loading/index)

  How to initiate the repository for workforce identities by loading identities into Identity Manager with the right attributes.

* [Configure Unique Property Generation](initial-identities-loading/generate-unique-properties/index)

  How to configure Identity Manager to generate unique identifiers, mails and logins for any user who does not have them already.
* [Load Identities to Identity Manager](initial-identities-loading/load-identities/index)

  How to load identities into Identity Manager for the first time using a basic data model in the form of a template MS Excel file.
* [Template Description](initial-identities-loading/template-description/index)

  Description of the MS Excel template for the creation of the identities repository.
* [Adjust the Workforce Data Model](initial-identities-loading/adjust-datamodel/index)

  How to select the properties to be part of the data model for the workforce repository (therefore displayed in the UI), and choose their optimal displaying mode.
* [Configure a User Profile](user-profile-configuration/index)

  How to tweak the permissions for actions within Identity Manager, for a standard set of basic Identity Manager profiles.

* [Configure Onboarding Workflows](configure-workflows/index)

  How to adjust the parameters of onboarding workflows.
* [Connect to a Managed System](connect-system/index)

  How to create a new connector using the provided SaaS agent.

* [Model the Data](connect-system/connector-modeling/index)

  How to choose the appropriate model for a connector's data.
* [Create the Connector](connect-system/connector-declaration/index)

  How to create the technical container of a connector.
* [Create a Connection](connect-system/connection-creation/index)

  How to create a connection inside a connector and choose the appropriate package.
* [Create an Entity Type](connect-system/entity-type-creation/index)

  How to create an entity type that corresponds to the connector model.

* [Synchronize Data](synchronization/index)

  How to launch data synchronization, i.e. read managed systems' data and load it into Identity Manager.
* [Categorize Resources](categorization/index)

  How to correlate managed systems' resources with identities, classifying resources into resource types.
* [Create a Resource Type](categorization/resource-type-creation/index)

  How to create the container for future correlation and classification rules inside a given managed system.
* [Correlate Resources](categorization/correlation/index)

  How to define correlation rules to match up resources across systems, usually accounts with their owner.
* [Classify Resources](categorization/classification/index)

  How to define classification rules in order to classify remaining uncorrelated resources, assigning them resource types.
* [Create a Provisioning Rule](provisioning-rule-creation/index)

  How to define scalar rules, navigation rules and/or query rules to compute and provision target resources values from source resources values.

* [Create Resources](provisioning-rule-creation/resource-creation/index)

  How to define resource type rules to create new (target) resources for given users, computing and provisioning their properties based on source resources.
* [Compute a Scalar Property](provisioning-rule-creation/scalar-property-computation/index)

  How to define scalar rules to compute and provision the values of scalar properties for target resources based on source resources.
* [Compute a Navigation Property](provisioning-rule-creation/navigation-property-computation/index)

  How to define navigation rules and/or query rules to compute and provision the values of navigation properties for target resources based on source resources.

* [Create Roles in the Role Catalog](single-roles-catalog-creation/index)

  How to define single roles to model entitlements, and organize them inside the role catalog, basis of the role model.

* [Create Roles in Bulk](single-roles-catalog-creation/role-naming-rule-creation/index)

  How to create role naming rules, which create single roles using existing naming conventions from the managed system.
* [Create a Category](single-roles-catalog-creation/category-creation/index)

  How to structure roles into categories.
* [Create a Role Manually](single-roles-catalog-creation/role-manual-creation/index)

  How to create single roles manually.

* [Assign Users a Profile](user-profile-assignment/index)

  How to assign Identity Manager's access permissions to users through profiles.
* [Manage Role Officers](role-officer-management/index)

  How to manage role officers in order to ensure the approval for entitlement assignments.