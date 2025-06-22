# Configuration Details

This part gathers information about connector configuration.

Netwrix Identity Manager (formerly Usercube) recommends creating and configuring a connector via the
UI. See the [ Connect to a Managed System ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

- [Connections](/docs/identitymanager/6.2/integration/connectors/connector-basics/connections.md)
- [Credential Protection](/docs/identitymanager/6.2/integration/connectors/connector-basics/credential-protection.md)

# Register for Microsoft Entra ID

This guide shows how to
[register](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)
Identity Manager as an application, i.e. grant Identity Manager a service account, with Microsoft
Identity Platform to authenticate to a Microsoft Entra ID (formerly Azure Active Directory), and how
to grant Identity Manager the
[directory permissions](https://docs.microsoft.com/en-us/graph/permissions-reference) for reading
the data to be exported via the
[Microsoft Graph API](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-graph-api).

## Create a New Registration

Create a new registration for Identity Manager with Microsoft Identity Platform by proceeding as
follows:

1. Go to [the Microsoft portal](https://portal.azure.com/).
2. Log in using the organization's credentials.
3. Find the **Microsoft Entra ID** menu on the left panel.
4. Go to **App Registrations** in the left panel.
5. Click the **+ New Registration** button in the top menu.

   ![Azure AD Export - Add New Registration](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportregistration.webp)

   A new registration form is displayed:

   - Name: display name of your application for the currently created registration. It is used to
     identify this registration within Microsoft Entra ID. In the case at hand, it won't be
     displayed to the end-user since Identity Manager doesn't access the Microsoft Entra ID using
     end-user identity but [its own](https://docs.microsoft.com/en-us/graph/auth-v2-service).

     Netwrix Identity Manager (formerly Usercube) recommends using a mnemonic name resembling
     Identity Manager Organization in order to remember it as the registration of Identity
     Manager within the target Microsoft Entra ID, for example Identity Manager Contoso.

   - [Supported account types](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-supported-account-types):
     select **Accounts in this organizational directory only (... - Single tenant)**.

     Identity Manager uses its own identity to access the API. It doesn't access the data on
     behalf of a user. To authenticate, it uses credentials of a service account granted by this
     registration, in the form of an **ApplicationId** and a secret Client Secret.

     See how to get **ApplicationId** and **ApplicationKey**.

     This service account is stored in the organizational directory, and hence using the
     [Principle of Least Privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege),
     only **Accounts in this organizational directory** are supported for authentication within
     this registration scope.

   - Redirect URI:

     - The left combo box represents the type of application. It influences the authorization
       protocol exchanges. Identity Manager is of type Web.
     - The right line edit isn't applicable to our case and should be left blank. It is used for
       end-user authentication, but doesn't apply to Identity Manager.

6. Confirm the registration with the **Register** button at the bottom of the page.

### Get the application's identifier

**ApplicationId** is available in the registration overview. Get it by proceeding as follows:

1. Go to **App Registrations** in the left panel.
2. Select **Owned applications** > **Identity Manager**.
3. Go to **Overview** in the left panel.

   The **Essentials** top panel displays the **Application (client) ID** required by the Identity
   Manager Agent. The same page also displays the **Directory (tenant) ID** that will also be
   needed by the Identity Manager Agent.

   ![Azure AD Export - New ApplicationId](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportapplicationid.webp)

### Get the application's secret key

A **Client Secret** key needs to be generated. Get it by proceeding as follows:

1. Go to **App Registrations** in the left panel.
2. Select **Owned applications** > **Identity Manager**.
3. Go to **Certificate & Secrets** in the left panel.
4. Click the **+ New client secret** button in the bottom panel **Client Secrets**.
5. Input a mnemonic name such as Identity Manager Organization Secret.
6. It is recommended to use a short **expiration period** such as 1 year.
7. Confirm the creation with the **Add** button.

   The Client Secret is now listed in the bottom panel **Client Secrets**. The Client Secret value
   is needed by the Identity Manager Agent settings file.

   ![Azure AD Export - New Client Secret](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportsecret.webp)

   The **Client Secret** value is only displayed in the UI in plain text at first. After a while,
   it is only displayed as `**************`. It should hence be stored in the
   appsettings.agent.json file or an environment variable as soon as it is created, to be used
   subsequently by Identity Manager. If the key is lost, a new key can be created to replace the
   lost one.

## Grant Directory Permissions

Grant Identity Manager directory permissions by proceeding as follows:

1. Go to **App Registrations** in the left panel.
2. Select **Owned applications** > **Identity Manager**.
3. Go to **API Permissions** in the left panel.
4. Click on the **+ Add a permission** button.

   ![Azure AD Export - Add Permission](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportpermissions.webp)

5. Go to **Microsoft graph** > **Application permissions**.
6. Search and open the **Directory** category.
7. Check the **Directory.Read.All** permission.

   If you plan on configuring fulfillment too, you must only check the **Directory.ReadWrite.All**
   permission.

   ![Azure AD Export - Directory Permission](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportdirectorypermission.webp)

8. Confirm with the **Add permissions** button at the bottom of the page.

   You now see the Directory.Read.All or Directory.ReadWrite.All permission in the **Configured
   permissions** list with a **⚠ Not granted for ...** status.

9. Grant admin consent by clicking on **√ Grant admin consent for** name of the organization.

   ![Azure AD Export - Grant Admin Consent](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportadminconsent.webp)

   You should now see the status displayed as **√ Granted for** name of the organization.

# Configure Secured Options

This guide shows how to configure secured options to ensure data security in a connection's
parameters.

## Overview

A connection's parameters fall into two categories: regular or secured options.

The particularity of secured options is that, once set, they will never again be shown to users.
Hence, extra care should be taken while specifying them.

There are several types of secured options: a simple field or multiple key-value fields.

## Configure a Secured Option

Configure a secured option by proceeding as follows:

1. Among a connection's parameters, identify the secured option:

   - for a simple field:

     ![AD creation](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/configure-secured-options/securedoptions_adlogin_v603.webp)

   - for multiple key-value fields:

     ![SQL connection string](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/configure-secured-options/securedoptions_keyvalue_v603.webp)

     Contrary to simple fields, multiple-key-value secured options are not restricted to a given
     property. They are arbitrary and can be set to anything.

2. Fill the field(s) and, if needed, click on the eye icon to make the content visible.

   ![Eye Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/iconeye_v600.svg)

   > For example, for a simple field in an AD connection, the **Login** and **Password** are by
   > default hidden with ??????:
   >
   > ![Login Secured Options Hidden](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/configure-secured-options/securedoptions_adexample_v603.webp)
   >
   > ![Login Secured Options Revealed](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/configure-secured-options/securedoptions_adexamplevisible_v603.webp)

   > For example, for multiple key-value fields in an SQL connection, some elements of the
   > connection string might be sensitive and need to be hidden:
   >
   > ![SQL connection string](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/configure-secured-options/securedoptions_sqlexample1_v603.webp)
   >
   > In this example, the database name and the minimal pool size are secured options:
   >
   > ![SQL Secured option filled](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/configure-secured-options/securedoptions_sqlexample2_v603.webp)

   > Another example of multiple key-value fields in a Powershell connection:
   >
   > ![Powershell Secured option hidden](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/configure-secured-options/securedoptions_powershellexample_v603.webp)

3. Once saved, any secured option's value can no longer be seen. However, it can still be modified
   by deleting the value and re-specifying it.

# For Microsoft Entra ID

See the[ Microsoft Entra ID](/docs/identitymanager/6.2/integration/connectors/connector-catalog/azure-ad.md) topic for
additional information about creating a connector.

## Prerequisites

The following are prerequisites for the connector creation.

Configure the external system

See the [Register for Microsoft Entra ID](/docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md) topic for additional
information on how to register Identity Manager.

Configure Identity Manager

See the [ Microsoft Entra ID](/docs/identitymanager/6.2/integration/connectors/connector-catalog/azure-ad.md) topic for
additional information on the connection.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

[Copy](<javascript:void(0);>)

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<MicrosoftEntraIDContosoNYExport>": {
      "ApplicationId": "<contosoAzure897>",
      "ApplicationKey": "<25d408a1925d4c081925b\d40819>",
      "TenantId": "<25d40819-f23f-4837-9d50-a9a52da50b8c>",
      "MicrosoftGraphPathApi": "<https://graph.microsoft.com/v1.0/>",
    }
  }
}
```

## Build the Connector

See the [ Connect to a Managed System ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information on how to build a connector via the UI, with its connections,
entity types and mappings.

This example declares the Entra ID connector on the Local agent:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/AzureAD/AzureAD Connector.xml
<?xml version="1.0" encoding="utf-8"?>
<ConfigurationFile xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="urn:schemas-usercube-com:configuration">
    ...
    <Connector Identifier="AzureAD" DisplayName_L1="AzureAD" Agent="Local" />
    ...
</ConfigurationFile>

```

### Entity model

The entity model should match as closely as possible the structure of the relevant Microsoft Entra
ID data, and be aligned with Identity Manager's repository. See the
[Entity Model](/docs/identitymanager/6.2/reference/entity-model.md)topic for additional information.

For example, Microsoft Entra ID's Users and Groups can be described by entity types, and group
memberships by entity associations.

The following example defines an entity type named AzureAD_DirectoryObject to match the attributes
selected for extraction from the Microsoft Entra ID instance:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/AzureAD/AzureAD Connector.xml
...
<EntityType Identifier="AzureAD_DirectoryObject" DisplayName_L1="AzureAD - Object">
    <Property Identifier="accountEnabled" DisplayName_L1="accountEnabled" TargetColumnIndex="17" Type="String" />
    <Property Identifier="city" DisplayName_L1="city" TargetColumnIndex="47" Type="String" />
    <Property Identifier="companyName" DisplayName_L1="companyName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="country" DisplayName_L1="country" TargetColumnIndex="7" Type="String" />
    <Property Identifier="createdDateTime" DisplayName_L1="createdDateTime" TargetColumnIndex="8" Type="String" />
    <Property Identifier="dataType" DisplayName_L1="dataType" TargetColumnIndex="5" Type="String" />
    <Property Identifier="department" DisplayName_L1="department" TargetColumnIndex="10" Type="String" />
    <Property Identifier="displayName" DisplayName_L1="displayName" TargetColumnIndex="11" Type="String" IsKey="true" />
    <Property Identifier="employeeId" DisplayName_L1="employeeId" TargetColumnIndex="12" Type="String" />
    <Property Identifier="externalUserState" DisplayName_L1="externalUserState" TargetColumnIndex="13" Type="String" />
    <Property Identifier="externalUserStateChangeDateTime" DisplayName_L1="externalUserStateChangeDateTime" TargetColumnIndex="14" Type="String" />
    <Property Identifier="givenName" DisplayName_L1="givenName" TargetColumnIndex="15" Type="String" />
    <Property Identifier="objectid" DisplayName_L1="id" TargetColumnIndex="4" Type="String" IsKey=&> quot;true" />
    <Property Identifier="isResourceAccount" DisplayName_L1="isResourceAccount" TargetColumnIndex="18" Type="String" />
    <Property Identifier="jobTitle" DisplayName_L1="jobTitle" TargetColumnIndex="19" Type="String" />
    <Property Identifier="mail" DisplayName_L1="mail" TargetColumnIndex="20" Type="String" />
    <Property Identifier="mailNickname" DisplayName_L1="mailNickname" TargetColumnIndex="21" Type="String" />
    <Property Identifier="mobilePhone" DisplayName_L1="mobilePhone" TargetColumnIndex="22" Type="String" />
    <Property Identifier="officeLocation" DisplayName_L1="officeLocation" TargetColumnIndex="23" Type="String" />
    <Property Identifier="onPremisesDistinguishedName" DisplayName_L1="onPremisesDistinguishedName" TargetColumnIndex="24" Type="String" />
    <Property Identifier="onPremisesDomainName" DisplayName_L1="onPremisesDomainName" TargetColumnIndex="25" Type="String" />
    <Property Identifier="onPremisesImmutableId" DisplayName_L1="onPremisesImmutableId" TargetColumnIndex="26" Type="String" />
    <Property Identifier="onPremisesLastSyncDateTime" DisplayName_L1="onPremisesLastSyncDateTime" TargetColumnIndex="27" Type="String" />
    <Property Identifier="onPremisesSamAccountName" DisplayName_L1="onPremisesSamAccountName" TargetColumnIndex="28" Type="String" />
    <Property Identifier="onPremisesSecurityIdentifier" DisplayName_L1="onPremisesSecurityIdentifier" TargetColumnIndex="29" Type="String" />
    <Property Identifier="onPremisesSyncEnabled" DisplayName_L1="onPremisesSyncEnabled" TargetColumnIndex="30" Type="String" />
    <Property Identifier="onPremisesUserPrincipalName" DisplayName_L1="onPremisesUserPrincipalName" TargetColumnIndex="31" Type="String" />
    <Property Identifier="preferredLanguage" DisplayName_L1="preferredLanguage" TargetColumnIndex="32" Type="String" />
    <Property Identifier="proxyAddresses" DisplayName_L1="proxyAddresses" TargetColumnIndex="33" Type="String" />
    <Property Identifier="showInAddressList" DisplayName_L1="showInAddressList" TargetColumnIndex="34" Type="String" />
    <Property Identifier="state" DisplayName_L1="state" TargetColumnIndex="35" Type="String" />
    <Property Identifier="streetAddress" DisplayName_L1="streetAddress" TargetColumnIndex="36" Type="String" />
    <Property Identifier="surname" DisplayName_L1="surname" TargetColumnIndex="37" Type="String" />
    <Property Identifier="usageLocation" DisplayName_L1="usageLocation" TargetColumnIndex="38" Type="String" />
    <Property Identifier="userPrincipalName" DisplayName_L1="userPrincipalName" TargetColumnIndex="39" Type="String" />
    <Property Identifier="userType" DisplayName_L1="userType" TargetColumnIndex="40" Type="String" />
    <Property Identifier="allowExternalSenders" DisplayName_L1="allowExternalSenders" TargetColumnIndex="41" Type="String" />
    <Property Identifier="description" DisplayName_L1="description" TargetColumnIndex="42" Type="String" />
    <Property Identifier="expirationDateTime" DisplayName_L1="expirationDateTime" TargetColumnIndex="43" Type="String" />
    <Property Identifier="groupTypes" DisplayName_L1="groupTypes" TargetColumnIndex="44" Type="String" />
    <Property Identifier="securityEnabled" DisplayName_L1="securityEnabled" TargetColumnIndex="45" Type="String" />
    <Property Identifier="visibility" DisplayName_L1="visibility" TargetColumnIndex="46" Type="String" />
    <Property Identifier="members" DisplayName_L1="members" Type="ForeignKey" />
    <Property Identifier="memberOf" DisplayName_L1="memberOf" Type="ForeignKey" />
    <Property Identifier="SharePointObject" DisplayName_L1="SharePointObject" Type="ForeignKey" />
</EntityType>
...

```

Notice the omitted TargetColumnIndex attribute for the members and memberOf properties. This means
that these properties are navigation properties.

The following example declares an n-n association between two AzureAD_DirectoryObjects, where:

- memberOf is a collection of Groups IDs of which this AzureAD_DirectoryObject is a member;
- members from a Group is a collection of AzureAD_DirectoryObjects IDs which are members of this
  Group.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/AzureAD/AzureAD Connector.xml
...
<EntityAssociation Identifier="AzureAD_DirectoryObject_members" DisplayName_L1="members" IsProperty1Collection="true" IsProperty2Collection="true" Property1="AzureAD_DirectoryObject:members" Property2="AzureAD_DirectoryObject:memberOf" />
...

```

Notice the format of the Property1 and Property2 XML attributes: the name of the entity type is
followed by a colon (:) and the name of an entity property. It is a binding describing in one
expression, the target entity type and property. See
the[ Binding ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for additional
information.

Entity mapping

Each property of the entity type must be mapped to an attribute among those exported from Microsoft
Entra ID.

So each element of an entity type mapping is meant to link a property from the CSV file containing
the exported Microsoft Entra ID attributes to a property from the entity type.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/AzureAD/AzureAD Connector.xml
...
<EntityTypeMapping Identifier="AzureAD_DirectoryObject" Connector="AzureAD" ConnectionTable="AzureADContosoNYExport_directoryobjects">
    <Property Identifier="accountEnabled" ConnectionColumn="accountEnabled" />
    <Property Identifier="city" ConnectionColumn="city" />
    <Property Identifier="companyName" ConnectionColumn="companyName" />
    <Property Identifier="country" ConnectionColumn="country" />
    <Property Identifier="createdDateTime" ConnectionColumn="createdDateTime" />
    <Property Identifier="dataType" ConnectionColumn="@odata.type" />
    <Property Identifier="department" ConnectionColumn="department" />
    <Property Identifier="displayName" ConnectionColumn="displayName" />
    <Property Identifier="employeeId" ConnectionColumn="employeeId" />
    <Property Identifier="externalUserState" ConnectionColumn="externalUserState" />
    <Property Identifier="externalUserStateChangeDateTime" ConnectionColumn="externalUserStateChangeDateTime" />
    <Property Identifier="givenName" ConnectionColumn="givenName" />
    <Property Identifier="objectid" ConnectionColumn="id" IsPrimaryKey="true" />
    <Property Identifier="isResourceAccount" ConnectionColumn="isResourceAccount" />
    <Property Identifier="jobTitle" ConnectionColumn="jobTitle" />
    <Property Identifier="mail" ConnectionColumn="mail" />
    <Property Identifier="mailNickname" ConnectionColumn="mailNickname" />
    <Property Identifier="mobilePhone" ConnectionColumn="mobilePhone" />
    <Property Identifier="officeLocation" ConnectionColumn="officeLocation" />
    <Property Identifier="onPremisesDistinguishedName" ConnectionColumn="onPremisesDistinguishedName" />
    <Property Identifier="onPremisesDomainName" ConnectionColumn="onPremisesDomainName" />
    <Property Identifier="onPremisesImmutableId" ConnectionColumn="onPremisesImmutableId" />
    <Property Identifier="onPremisesLastSyncDateTime" ConnectionColumn="onPremisesLastSyncDateTime" />
    <Property Identifier="onPremisesSamAccountName" ConnectionColumn="onPremisesSamAccountName" />
    <Property Identifier="onPremisesSecurityIdentifier" ConnectionColumn="onPremisesSecurityIdentifier" />
    <Property Identifier="onPremisesSyncEnabled" ConnectionColumn="onPremisesSyncEnabled" />
    <Property Identifier="onPremisesUserPrincipalName" ConnectionColumn="onPremisesUserPrincipalName" />
    <Property Identifier="preferredLanguage" ConnectionColumn="preferredLanguage" />
    <Property Identifier="proxyAddresses" ConnectionColumn="proxyAddresses" />
    <Property Identifier="showInAddressList" ConnectionColumn="showInAddressList" />
    <Property Identifier="state" ConnectionColumn="state" />
    <Property Identifier="streetAddress" ConnectionColumn="streetAddress" />
    <Property Identifier="surname" ConnectionColumn="surname" />
    <Property Identifier="usageLocation" ConnectionColumn="usageLocation" />
    <Property Identifier="userPrincipalName" ConnectionColumn="userPrincipalName" />
    <Property Identifier="userType" ConnectionColumn="userType" />
    <Property Identifier="allowExternalSenders" ConnectionColumn="allowExternalSenders" />
    <Property Identifier="description" ConnectionColumn="description" />
    <Property Identifier="expirationDateTime" ConnectionColumn="expirationDateTime" />
    <Property Identifier="groupTypes" ConnectionColumn="groupTypes" />
    <Property Identifier="securityEnabled" ConnectionColumn="securityEnabled" />
    <Property Identifier="visibility" ConnectionColumn="visibility" />
  </EntityTypeMapping>
...
```

As a result, synchronization updates Identity Manager's UR_Resource table based on the data of the
exported CSV files. Considering that AzureAD_DirectoryObject has never been synchronized, the
UR_Resource table receives a new line for which the 47th column (City) is filled in with the city
column from the `C:/UsercubeDemo/Temp/ExportOutput/AzureADContosoNYExport_directoryobjects.csv`
file.

An association mapping is the equivalent of an entity type mapping, but for the properties of an
entity association instead of an entity type.

The following example describes the "actual group/member" associations between
AzureAD_DirectoryObjects.

These associations are exported from the Microsoft Entra ID system into the
`C:/UsercubeDemo/Temp/ExportOutput/AzureADContosoNYExport_members_group.csv` file, containing, for
each group, a list of members in the following format, with id being the id of an Microsoft Entra ID
object and groupId the matching Group's id to which the object belongs:

| Id  | GroupId |
| --- | ------- |
| 12  | 454     |
| 3   | 454     |
| 4   | 454     |
| 5   | 333     |
| 2   | 333     |

The following entity association mapping maps the properties from the
AzureAD_DirectoryObject_members entity association:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/AzureAD/AzureAD Connector.xml
...
<EntityAssociation Identifier="AzureAD_DirectoryObject_members" DisplayName_L1="members" IsProperty1Collection="true" IsProperty2Collection="true" Property1="AzureAD_DirectoryObject:members" Property2="AzureAD_DirectoryObject:memberOf" />
<EntityAssociationMapping Identifier="AzureAD_DirectoryObject_members" Column1="groupId" Column2="id" ConnectionTable="AzureADContosoNYExport_members_group" EntityPropertyMapping1="AzureAD_DirectoryObject:objectid" EntityPropertyMapping2="AzureAD_DirectoryObject:objectid" Connector="AzureAD" />
...

```

Here the members property of the AzureAD_DirectoryObject entity (written to the Property1 attribute
of the AzureAD_DirectoryObject_members entity association) is filled in by values from the groupId
column (written to the Column1 attribute of the AzureAD_DirectoryObject_members entity association
mapping) of the CSV file.

And the membersOf property of the AzureAD_DirectoryObject entity (written to the Property2 attribute
of the AzureAD_DirectoryObject_members entity association) is filled in by values from the Id column
(written to the Column2 attribute of the AzureAD_DirectoryObject_members entity association mapping)
of the CSV file.

## Display the Connector in the UI

This is how the connectors are displayed on the UI.

Menu items

Each connector should be configured with a menu item, which is created automatically when working
via the UI.

![Menu Item - Azure AD Connector](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/create-connector/azuread/howtos_azure_menuitem_v603.webp)

In XML, it should look like this:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/AzureAD/AzureAD Nav.xml
<MenuItem Identifier="Nav_Connectors_AzureAD_DirectoryObject" DisplayName_L1="AzureAD Objects" EntityType="AzureAD_DirectoryObject" ParentMenuItem="Nav_Connectors" />
```

Displayed resources

See the
[ Organize Resources' Datasheets ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information on how to set the display properties via the UI.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/AzureAD/AzureAD UI.xml
<DisplayEntityType Identifier="AzureAD_DirectoryObject">
    <Property OutputType="BasicCollection" Identifier="members" />
    <Property OutputType="BasicCollection" Identifier="groups" />
</DisplayEntityType>

```

![Navigation Properties - Azure AD Connector](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/create-connector/azuread/howtos_azure_navproperties_v603.webp)

Microsoft Entra ID's resources are listed in a table.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/AzureAD/AzureAD UI.xml
<DisplayTable Identifier="AzureAD_DirectoryObject" EntityType="AzureAD_DirectoryObject" DisplayTableDesignElement="resourcetable" IsEntityTypeDefault="true">
    <Column DefaultSortPriority="1" DisplayBinding="displayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" />
    <Column DisplayBinding="mail" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
    <Column DisplayBinding="dataType" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
</DisplayTable>

```

![Display Table - Azure AD Connector](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/create-connector/azuread/howtos_azure_table_v603.webp)

This is how the resources are displayed on the UI.

Resources' display names

See the
[ Set Resources' Display Names ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information on how to set resources' display names via the UI.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/AzureAD/AzureAD UI.xml
<EntityPropertyExpression Identifier="AzureAD_DirectoryObject_InternalDisplayName" Expression="C#:resource:return resource.userPrincipalName ?? resource.mail ?? resource.displayName ?? resource.Id.ToString();" EntityType="AzureAD_DirectoryObject" Property="InternalDisplayName" />
```

Permissions

In order to access the connector, any user must have the right permissions.

The following example sets the permissions to access the Microsoft Entra ID connector and resources
for the Administrator profile.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Conf/AzureAD/AzureAD Profile Administrator.xml
<AccessControlRule Profile="Administrator" EntityType="ResourceType" Identifier="Administrator_ResourceTypeSelector_resourceType_AzureAD" DisplayName_L1="Administrator_ResourceTypeSelector_resourceType_AzureAD">
    <Entry Permission="/Custom/Resources/AzureAD_DirectoryObject/View" CanExecute="true" />
    <Entry Permission="/Custom/Resources/AzureAD_DirectoryObject/ResetPassword" CanExecute="true" />
</AccessControlRule>
<AccessControlRule Profile="Administrator" EntityType="Category" Identifier="Administrator_ResourceTypeSelector_category_AzureAD" DisplayName_L1="Administrator_ResourceTypeSelector_category_AzureAD">
    <Entry Permission="/Custom/Resources/AzureAD_DirectoryObject/View" CanExecute="true" />
</AccessControlRule>

```

# Create a Connector

How to implement a [ Connector ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
via XML to connect Identity Manager to an external system.

See an example on how to [For Microsoft Entra ID](/docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md).

Netwrix Identity Manager (formerly Usercube)strongly recommends configuring as much as possible via
the UI instead of XML files. See the
[ Connect to a Managed System ](/docs/identitymanager/6.2/reference/index.md) topic to
learn how to create a connector via the UI.

## Prerequisites

### Configure the external system

Some systems need additional configuration for Identity Manager to connect.

### Configure Identity Manager

Identity Manager's agent must be set up to access the system's data via the related connector.

Netwrix Identity Manager (formerly Usercube) recommends performing the configuration via Identity
Manager's configuration files like `appsettings.json` and `appsettings.agent.json`. However, these
settings can also be input through environment variables. See the
[Network Configuration](/docs/identitymanager/6.2/administration/index.md) topic for additional information.

This process is configured through a
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

                    ```

                        appsettings.agent.json

{ ... "Connections": { ... "<ConnectionIdentifier>": { ... } } }

````


The identifier of the connection and thus the name of the subsection must:

- Be unique.

- Not begin with a digit.

- Not contain ```<```, ```>```, ```:```, ```"```, ```/```, ```\```, ```|```, ```?```, ```*``` and ```_```.

Netwrix Identity Manager (formerly Usercube) recommends completing this guide without credential protection, and once the configuration works switch to a more secure way of storing credentials.

See the [
Microsoft Entra ID](/docs/identitymanager/6.2/integration/connectors/connector-catalog/azure-ad.md) topic to learn how to protect Microsoft Entra ID's credentials.

## Build the Connector

See the [
Connect to a Managed System
](/docs/identitymanager/6.2/reference/index.md) topic to learn how to build a connector via the UI, with its connections, entity types and mappings.

When exporting the configuration, a `connectorName` connector should be found in the ```Conf/connectorName/connectorName Connector.xml``` file.

All XML files must start with the ```<?xml>``` and ```<ConfigurationFile>``` elements.

### Entity model

The [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md) of the connector defines how the exported data will be written to Identity Manager's repository. It should match as closely as possible the structure of the relevant data from the external system, and be aligned with Identity Manager's repository.

The entity model is configured by [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md) and [
Entity Association
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) containing scalar and navigation [
Entity Type
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

The entity model can be refined later in the project.

### Entity mapping

Each property of the entity type must be mapped to an attribute from among those exported from the system.

Entity mapping is configured through [
Entity Type Mapping
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) and [
Entity Association Mapping
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

So each element of an entity type mapping is meant to link a property from the result of the CSV export file containing the exported attributes to a property from the entity type.

In the mapping, the CSV file is identified by the ```ConnectionTable``` and the entity type by the ```Identifier```.

An association mapping is the equivalent of an entity type mapping, but for the properties of an entity association instead of an entity type.

## Display the Connector in the UI

### Menu items

Identity Manager provides a menu item to list all connectors in the dashboard's left menu.

![Menu Item - Connectors](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/home_entitytypes_v602.webp)

> It is usually written like this:
>
>                         ```
>
>                             Runtime/Bootstrap/Nav.xml
>
> <MenuItem Identifier="Nav_Connectors" DisplayName_L1="Connectors" ParentMenuItem="Nav" />
>
> ```

Then each connector should be configured with a menu item, which is created automatically when working via the UI.

### Displayed resources

See the [
Organize Resources' Datasheets
](/docs/identitymanager/6.2/reference/index.md) to learn more on how to set the display properties via the UI.

In the XML configuration, scalar properties are automatically displayed in the datasheets of the connector's resources. But navigation properties must be declared explicitly.

The properties to be displayed are configured through [Display Entity Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

Microsoft Entra ID's resources are listed in a table.

The resources are displayed in a table configurable through a [Display Table](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

### Resources' display names

See the [
Set Resources' Display Names
](/docs/identitymanager/6.2/reference/index.md) to learn how to set resources' display names via the UI.

Each resource is displayed in the UI with a display name.

Resources' display names are customizable through [
Entity Type
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

### Permissions

In order to access the connector, a user must have the right permissions.

Permissions within Identity Manager are configured through [Access Control Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).
````

# Run the Banking Demo Application

This guide shows how to set up and run the Banking demo application.

## Banking Application Description

The Banking application is a demo application that represents a web based external system. The
Banking application contains:

- A main page
- A list of users, accessible by clicking on **Users** at the top of the page. It is possible to add
  a user by clicking on **Create New User**

  ![Users list](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/demoapp-banking/demoapps_banking_userslist.webp)

- A list of groups, accessible by clicking on **Groups** at the top of the page. Clicking on
  **Details** on a group shows the users belonging to that group
- A user's details page for each user, accessible by clicking on **Details** on a user in the users
  list

  ![User details](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/demoapp-banking/demoapps_banking_userdetails.webp)

The most interesting part of the Banking application is a user's page. On a user's page, it is
possible to:

- Edit the user's information
- Delete the user
- Add the user to a group
- Remove the user from a group
- Set the user's password

The Banking application uses a database named BankingSystem as a data source. The changes made to a
user are applied to the database, and will be saved.

The Banking application exposes an API that complies with SCIM 2.0 (RFC 7643 & RFC 7644) standards.
This API provides:

- Token retrieval in two different ways — Login/Password and Client Credentials. This is not real
  authentication so you can input any values, as the system only verifies if the fields are empty.
- A schema endpoint (/Schemas) that returns metadata describing SCIM resource types. This includes
  attributes, types, mutability, and required fields for Users and Groups, following SCIM 2.0
  specifications.
- Operations on users, including: Get list, Get by ID, Create, Update, and Delete (CRUD)
- Operations on groups, limited to Get list only

**NOTE:** In the Banking Demo Application appsettings two parameters are available:

- `RequireAuthorization` (default: true) — When enabled, the system checks whether a token is
  present in the request headers
- `RequireSecureHeader` (default: false) — When enabled, the system verifies that the
  SecureHeaderparameter is included in the request headers

_Remember,_ a Postman collection is provided in the same folder as the executable (.exe) to
facilitate API testing.

## Running the Banking Application

The Banking Application is part of the Netwrix Identity Manager (formerly Usercube) SDK, and comes
with prefilled sources. To run the Banking application:

**Step 1 –** Download the SDK.

**Step 2 –** Download the Runtime.

**Step 3 –** Create a database named BankingSystem.

**Step 4 –** Go to the Runtime folder.

**Step 5 –** Run **./identitymanager-FillBankingDatabase.exe** --connection-string \{connection string\}
--sources-path \{sources path\} --banking-sql-path \{banking sql path\}, replacing \{connection
string\} with the BankingSystem database connection string, \{sources path\} with the path to
SDK/DemoApps/Sources, and \{banking sql path\} with the path to SDK/DemoApps/Banking.

**Step 6 –** Go to the **SDK/DemoApps/Banking** folder.

**Step 7 –** Run **./Banking.exe** in a command prompt

**Step 8 –** In a web browser, enter the URL localhost:5000.

The Banking application is running, and the web browser is on the Banking home page.

To set the Banking application to another port, run /Banking.exe --urls http://localhost:\{port
number\}. To access the application, enter the URL localhost:\{port number\} in a web browser.

Some ports are not recognized by web browsers, or may already be used. Choose a port wisely.

# Run the HR Demo Application

This guide shows how to set up and run the HR demo application.

## HR Application Description

The HR application is a demo application that represents a web based external system. The HR
application contains an employee list.

![Users list](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/demoapp-hr/demoapps_hr_userslist.webp)

Each employee also has their own page, with the possibility to edit their profile or delete them. It
is also possible to add a new employee.

![User details](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/demoapp-hr/demoapps_hr_userdetails.webp)

The HR application uses csv files as data sources. When a user is added, deleted, or edited, the csv
file will be modified, and the changes will be saved.

## Running the HR Application

The HR Application is part of the Identity Manager SDK, and comes with prefilled sources. To run the
HR application:

- Download the Identity Manager SDK.
- Go to SDK/DemoApps/HR.
- Modify **appsettings.json** > **CSVPath** to "..\\Sources".
- Run **./HR.exe** in a command prompt.
- In a web browser, enter the URL **localhost:5000**.

The HR application is running, and the web browser is on the HR application employee list.

To set the HR application to another port, run ./HR.exe --urls http://localhost:\{port number\}. To
access the application, enter the URL localhost:\{port number\} in a web browser.

Some ports are not recognized by web browsers, or may already be used. Choose a port wisely.

# Interact with a GUI Application via Robot Framework

This guide shows how to write a Robot Framework script which interacts with an external application.

## Example: Interacting with an application via a GUI

Consider an external system that is accessible through a GUI program, and that does not offer an
API. In this situation, we can either interact manually with the external system , or with a Robot
Framework connection.

## Prerequisites

This guide will focus only on how to interact with a GUI application. The guide on how to write a
Robot Framework script explains the basics of Robot Framework. The basic prerequisites can be found
on the Robot Framework connector page. See the
[ Write a Robot Framework Script ](/docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md) and
[ Robot Framework ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md) topics for additional
information.

The requirements specific to the Robot Framework FlaUI library are as follows:

- Python 3.7 or 3.8. For Python 3.9, using `pip install wheel` in the command prompt may solve
  installation errors.
- Robot Framework FlaUI library: use `pip install --upgrade robotframework-flaui` in the command
  prompt.
- The application with the GUI.

Other Robot Framework libraries can interact with applications. The [desktop part of the zoomba
library] can also interact with a program, but requires an appium server.

While not strictly required, it is highly recommended that the
[Robot Framework FlaUI library documentation](https://gdatasoftwareag.github.io/robotframework-flaui/keywords/1.6.6.html)
be consulted.

## Inspecting tools

Most FlaUI keywords require an XPath locator. These XPaths can be found using the FlaUI inspection
tool. Download the
[FlaUI inspection tool zip archive](https://github.com/FlaUI/FlaUInspect/releases), then extract the
files to a folder. The inspection tool can be launched simply by running `FlaUIInspect.exe`.

This tool lets you choose the UIA (UI Automation) version. Picking UIA3 should work in most use
cases.

The FlaUI inspection tool shows each window that is open on the computer. To find the element the
script is supposed to interact with, it is possible to manually search through the windows, and
through the elements. However, the easiest way is to use the Hover Mode, which is accessible in the
tool bar by clicking on **Mode** > **Hover Mode (use Ctrl)**. To see the XPath, click on **Mode** >
**Show XPath**.

![Show XPath](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/interact-gui-robotframework/robotframeworkflaui_flauishowxpath.webp)

To see the XPath of an element, hover over the element, and press control. A red box should appear
around the element, and the FlaUI inspection tool should show the element's information. The XPath
should be at the bottom left of the FlaUI element.

![Highlight Element](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/interact-gui-robotframework/robotframeworkflaui_flauixpathexample.webp)

As an example, imagine an application showing a list of files and folders. Targeting a specific file
would produce an XPath in the shape of `/Window/Pane[3]/Pane/Pane[2]/List/Group[1]/ListItem[1]`. The
important parts of this path are the beginning and the end. The beginning of the XPath specifies the
window. The middle part of the XPath, in most cases, is irrelevant.

The last part of the XPath however, `/Group[1]/ListItem[1]`, is what should be modified to find the
right file. `Group[1]` means the element is in the first file group. `ListItem[1]` means the element
is the first file of the group. Depending on the file explorer view mode, the XPath may end with
`Edit[1]`, which means the targeted element is the name section of the file.

As the Window's number may change, it should be specified by name. For the Downloads folder,
`Window[@Name='Downloads']` specifies the window. The file may not always be at the same position,
so it should also be specified. If the file is `FlaUInspect.exe`, it can be specified with
`ListItem[@Name='FlaUInspect.exe']`. The Group may also change. It is not easy to find the right
group, so the best method is to remove the groups, by right clicking, then selecting **Group by** >
**(None)**.

## Use Case: Set a file to read-only

Consider an HR system that creates a file for each employee. When an employee retires, it may be
interesting to set the file to read-only, so that it is not modified by accident. It is possible to
set the file to read-only by provisioning it with the Robot Framework.

### Define settings

As with every other Robot Framework script, the Identity Manager Robot Framework resource needs to
be imported to launch the provisioning. The FlaUI library also needs to be imported to use its
keywords.

```

*** Settings ***
Resource C:/UsercubeDemo/Runtime/UsercubeRobotFramework.resource
Library FlaUILibrary

```

### Define variables

The `Variables` section contains variables that are used in the rest of the script. As the section
is at the start of the script, the variables are easy to update. In this case, the folder's name and
path are important variables that may be changed.

```

*** Variables ***
${FOLDERNAME}  RobotFrameworkIdentity
${FOLDERPATH}  C:/UsercubeDemo/${FOLDERNAME}

```

### Define custom keywords

To modify a file's properties, the script needs custom keywords that allow the desired actions to be
accomplished. In this case, to navigate through the explorer program. These keywords were written
with the Windows 10 File Explorer in mind.

| Keyword               | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Open Explorer         | Opens and attaches the explorer program to FlaUI. A program can be attached to FlaUI by its name or by its `Pid`, which stands for process identifier. The `Launch Application` keyword returns a `Pid`, however the program may launch multiple processes. In the case of the explorer, it is almost always running, even if no explorer windows are open. The `Pid` returned may not be the correct one. Attaching by the program name seems to work in this case. |
| Open Folder           | Opens the folder specified in the `Variables` section. Accessing the address bar is not trivial, as it is not a text field until it is clicked. However, clicking on most elements of the address bar does not open the text field. In this keyword, the icon in the address bar is clicked, which opens the text field.                                                                                                                                             |
| Get File Name         | Returns the file's name. This allows the computation of the file's name through a keyword instead of an expression, which can make syntax easier.                                                                                                                                                                                                                                                                                                                    |
| Set File To Read Only | Sets the file corresponding to the user to read only. This keyword calls the other keywords in the right order, and is used to simplify the readability of the script.                                                                                                                                                                                                                                                                                               |
| Open File Properties  | Right clicks on a file, then opens the file's properties. The right click is on the file's image, but it could be changed to any of the file's fields. Note that changing the folder's view mode or ordering may alter the file's XPath.                                                                                                                                                                                                                             |
| Select Read Only      | Selects the read only option. This keyword simply clicks on the radio button, then clicks on the `Ok` button. If the radio button is already ticked, the file will no longer be in read only mode. The script clicks on the `Ok` button as it automatically closes the properties window, unlike the `Apply` button.                                                                                                                                                 |
| Close Explorer        | Clicks on the cross to close the explorer window. It is also possible to close the program with the `Close Application` keyword, however that also closes the background explorer process, so closing only the window is better.                                                                                                                                                                                                                                     |

```

Open Explorer
    Launch Application explorer
    Attach Application By Name explorer
    Open Folder

Open Folder
    Click  /Window[@Name='File Explorer']/Pane[2]/Pane[3]/ProgressBar/Pane/ToolBar/SplitButton
    Set Text To Textbox  /Window[@Name='File Explorer']/Pane[2]/Pane[3]/ProgressBar/ComboBox/Edit[@Name='Address']  ${FOLDERPATH}
    Press Key s'ENTER'

Get File Name
    [Arguments]  ${order}
    [return]  ${order['Changes']['Identifier']}.txt

Set File To Read Only
    [Arguments]  ${order}
    ${FileName}=  Get File Name  ${order}
    Open File Properties  ${FileName}
    Select ReadOnly  ${FileName}

Open File Properties
    [Arguments]  ${filename}
    Right Click  /Window[@Name='${FOLDERNAME}']/Pane[3]/Pane/Pane[2]/List/ListItem[@Name='${filename}']/Image
    Click  /Menu[@Name='Context']/MenuItem[@Name='Properties']

Select Read Only
    [Arguments]  ${filename}
    Click  /Window[@Name='${filename} Properties']/CheckBox[@Name='Read-only']
    Click  /Window[@Name='${filename} Properties']/Button[@Name='OK']

Close Explorer
    Click  /Window[@Name='${FOLDERNAME}']/TitleBar/Button[@Name='Close']

```

### Define mandatory keywords

To provision the system, the script must contain the three mandatory keywords: `ExecuteAdd`,
`ExecuteDelete`, and `ExecuteModify`. In this case, only ExecuteDelete is implemented. (It is
considered, perhaps foolishly, that employees will not come out of retirement!)

```

*** Keywords ***
ExecuteAdd
    [Arguments]  ${order}
    Log To Console ExecuteAdd is not implemented

ExecuteDelete
    [Arguments]  ${order}
    Set File To Read Only  ${order}

ExecuteModify
    [Arguments]  ${order}
    Log To Console ExecuteModify is not implemented

```

### Define test cases

Although the Robot Framework is used for provisioning in Identity Manager, it is most often used for
testing, which is why the `Test Cases` section defines what should happen when Identity
Manager starts the Robot Framework task. The `Launch Provisioning` keyword is the one that will
fetch the provisioning orders.

```

*** Test Cases ***
Run Provisioning
    Open Explorer
    Launch Provisioning
    Close Explorer

```

### Read the full script

The full script is as follows:

```

*** Settings ***
Resource C:/UsercubeDemo/Runtime/UsercubeRobotFramework.resource
Library FlaUILibrary

*** Variables ***
${FOLDERNAME}  RobotFrameworkIdentity
${FOLDERPATH}  C:/UsercubeDemo/${FOLDERNAME}

*** Keywords ***
ExecuteAdd
    [Arguments]  ${order}
    Log To Console ExecuteAdd is not implemented

ExecuteDelete
    [Arguments]  ${order}
    Set File To Read Only  ${order}

ExecuteModify
    [Arguments]  ${order}
    Log To Console ExecuteModify is not implemented

Open Explorer
    Launch Application explorer
    Attach Application By Name explorer
    Open Folder

Open Folder
    Click  /Window[@Name='File Explorer']/Pane[2]/Pane[3]/ProgressBar/Pane/ToolBar/SplitButton
    Set Text To Textbox  /Window[@Name='File Explorer']/Pane[2]/Pane[3]/ProgressBar/ComboBox/Edit[@Name='Address']  ${FOLDERPATH}
    Press Key s'ENTER'

Get File Name
    [Arguments]  ${order}
    [return]  ${order['Changes']['Identifier']}.txt

Set File To Read Only
    [Arguments]  ${order}
    ${FileName}=  Get File Name  ${order}
    Open File Properties  ${FileName}
    Select ReadOnly  ${FileName}

Open File Properties
    [Arguments]  ${filename}
    Right Click  /Window[@Name='${FOLDERNAME}']/Pane[3]/Pane/Pane[2]/List/ListItem[@Name='${filename}']/Image
    Click  /Menu[@Name='Context']/MenuItem[@Name='Properties']

Select Read Only
    [Arguments]  ${filename}
    Click  /Window[@Name='${filename} Properties']/CheckBox[@Name='Read-only']
    Click  /Window[@Name='${filename} Properties']/Button[@Name='OK']

Close Explorer
    Click  /Window[@Name='${FOLDERNAME}']/TitleBar/Button[@Name='Close']

*** Test Cases ***
Run Provisioning
    Open Explorer
    Launch Provisioning
    Close Explorer

```

# Interact with a Web Page via Robot Framework

This guide explains how to write a Robot Framework script that interacts with a web based external
system.

## Example: Interacting with a web-based application

Consider an external system that is accessible through a web interface, and that does not offer an
API. In this situation, we can either interact manually with the external system , or with a Robot
Framework connection.

## Prerequisites

This guide will focus only on how to interact with a web-based application. The guide on how to
write a Robot Framework script explains the basics of Robot Framework. The basic prerequisites can
be found on the Robot Framework connector page. See the
[ Write a Robot Framework Script ](/docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md) and
[ Robot Framework ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md) topics for additional
information.

The prerequisites are explained in detail at the
[Robot Framework selenium pypi](https://pypi.org/project/robotframework-seleniumlibrary/) page.

The requirements specific to the Robot Framework Selenium library are as follows:

- Robot Framework selenium library: use `pip install --upgrade robotframework-seleniumlibrary` in
  the command prompt.
- A web browser.
- A web driver that corresponds to the web browser and its version. Webdrivers can be found in
  the[ Selenium website](https://www.selenium.dev/selenium/docs/api/py/index.html#selenium-website).
  This web driver should be in your path. To check that the web driver is in your path, use
  `gcm {webdriver_name}`. As an example for Edge, use `gcm MicrosoftWebDriver`.

The web driver for Edge is called `msedgedriver.exe`, but the Robot Framework may expect it to be
called `MicrosoftWebDriver.exe` depending on the python version. Renaming the web driver from
`msedgedriver.exe` to `MicrosoftWebDriver.exe` should fix this issue.

If the browser is updated, the web driver should also be updated.

While not strictly required, it is highly reccomended to look at the
[Robot Framework selenium library documentation](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html).

## Selenium basics

Selenium is a web browser automation tool. Selenium can automatically perform scripted actions in a
web browser. Selenium is not easy to use on its own, and it is easier to use Selenium via the Robot
Framework. However, the basics are still the same.

The basic structure of a web page is defined with HTML. It is accessible with the inspect tool,
which can be opened by pressing the F12 key on most browsers. For Selenium, we want to find
information on specific parts of the page. Inspecting an element can be done by right clicking the
element, and clicking **Inspect**.

![Inspect Tool](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/interact-web-page-robotframework/robotframeworkselenium_inspecttool.webp)

Suppose the goal of the script is to copy the content of the code block, and paste it to a file, to
ensure that the file is up to date with the documentation. To do this, the Robot Framework has to
click on the **copy to clipboard** button with the keyword
[`Click Element`](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#click-element).

## Locating elements

As stated in the Robot Framework SeleniumLibrary documentation, the keyword `Click Element` requires
an element locator. The element locator identifies which element the Robot Framework should click.
To ensure the right element is clicked, the element locator should only match the one element which
should be clicked.

In the HTML, the button has a class `class="copy-to-clipboard"`. The element locator
`class:copy-to-clipboard` matches the button. However, there are other buttons with the same class
on the page. The easiest way to click the right button is with an XPath element locator.

### XPath element locators

Each element on the web page has an XPath, and each XPath uniquely identifies an element. This means
that we can always use an XPath locator. To get the XPath of an element, inspect the element, then
right click it in the HTML, and click on **Copy** > **Full XPath**.

![Copy Full XPath](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/interact-web-page-robotframework/robotframeworkselenium_copyfullxpath.webp)

For the `copy to clipboard` button, the XPath is
`/html/body/section/div[2]/div[3]/div[1]/pre[4]/span`.

XPaths change as the page is updated. Using a location strategy other than the XPath strategy should
reduce the maintenance needs of the script.

### Hypertext references and API calls

Some elements have links to other websites or pages of the same website. In the HTML inspection,
these elements are likely to have a `href` attribute containing the link. `Href` stands for
hypertext reference. By going directly to the linked URL instead of clicking the link, the script
does not need to specify an element locator for the link.

In some cases, an API can be called simply by going to the right URL. This URL may be used as a
shortcut to avoid having to fill in text fields. The `href` attributes may show the format of the
API calls.

## Use Case: Fulfill groups in a Banking system

The Banking system is a Identity Manager demo application that represents an external system. The
Banking system stores basic information on its users such as their names, mail addresses� The most
interesting part of the Banking system is the groups functionality, as users can belong to multiple
groups, and groups can have multiple users.

The goal of this use case is to extract the existing associations between groups and users from the
Banking system into Identity Manager, then provide a way to add users to a group and remove users
from a group. To showcase the password generation, the script will generate a password for the
provisioned users' accounts.

### Connector configuration

As stated in the previous part, the Banking connector is supposed to link the users and their
groups. This means that the connector has a user entity type, and a group entity type, with an
entity association between them.

The Banking connector has to be able to extract the data, and fulfill the Banking system. The
fulfillment of the Banking system can only be done through its web application, which means the
Robot Framework Selenium library will be used. The extraction of the data will be performed through
an SQL connection.

For simplicity's sake, only the user's `Login` is kept.

```

	<Connector Identifier="Banking" DisplayName_L1="Banking" Agent="Local"/>	<Category Policy="Default" Identifier="Banking" DisplayName_L1="Banking" />	<Connection Connector="Banking" DisplayName_L1="Banking Extract Database" Identifier="BankingExtractDatabase" Package="Usercube.SQL.SQLServer@0000001"/>	<Connection Connector="Banking" DisplayName_L1="Banking Fulfillment" Identifier="BankingFulfillment" Package="Usercube.RobotFramework@0000001"/>	<EntityType Identifier="Banking_Group" DisplayName_L1="Banking - Group" DisplayName_L2="Banking - Groupe">		<Property Identifier="name" DisplayName_L1="Group Name" IsKey="true" TargetColumnIndex="1" Type="String" />		<Property Identifier="users" DisplayName_L1="Users" Type="ForeignKey" />	</EntityType>	<EntityType Identifier="Banking_User" DisplayName_L1="Banking - User" DisplayName_L2="Banking - Utilisateur">		<Property Identifier="login" DisplayName_L1="Login" IsKey="true" TargetColumnIndex="1" Type="String" />		<Property Identifier="groups" DisplayName_L1="Groups" Type="ForeignKey" />	</EntityType>	<EntityTypeMapping Identifier="Banking_Group" Connector="Banking" ConnectionTable="BankingExtractDatabase_&quot;dbo&quot;.&quot;um_groups&quot;">		<Property Identifier="name" ConnectionColumn="name" IsPrimaryKey="true" />	</EntityTypeMapping>	<EntityTypeMapping Identifier="Banking_User" Connector="Banking" ConnectionTable="BankingExtractDatabase_&quot;dbo&quot;.&quot;um_users&quot;">		<Property Identifier="login" ConnectionColumn="login" IsPrimaryKey="true" />	</EntityTypeMapping>
	<EntityAssociation Identifier="Banking_Users_Groups" DisplayName_L1="User" IsProperty1Collection="true" IsProperty2Collection="true" Property1="Banking_Group:users" Property2="Banking_User:groups" />	<EntityAssociationMapping Identifier="Banking_Users_Groups" Column1="group" Column2="user" ConnectionTable="BankingExtractDatabase_&quot;dbo&quot;.&quot;um_usersgroups&quot;" EntityPropertyMapping1="Banking_Group:name" EntityPropertyMapping2="Banking_User:login" Connector="Banking" />	<ViewTargetResourceTemplate EntityType="Banking_Group" Profile="Administrator" />	<ViewTargetResourceTemplate EntityType="Banking_User" Profile="Administrator" />

```

The notion of groups in the Banking system is replaced by the notion of single roles in Identity
Manager. A user belonging to the accountant group in the Banking system has the accountant single
role in Identity Manager. To automate the correspondance, the connector's configuration requires a
rule between the group resource and the single role. This can be done with a navigation rule for
each single role and corresponding group.

For simplicity's sake, only three roles are kept.

```

	<SingleRole Identifier="BAGR09" DisplayName_L1="Banking role: all transactions" DisplayName_L2="M�tiers : op�rations toutes r�gions" Category="Banking" EntityType="Directory_User" Policy="Default" />	<SingleRole Identifier="BAG002" DisplayName_L1="Banking role: agency" DisplayName_L2="M�tiers : agence" Category="Banking" EntityType="Directory_User" Policy="Default" />	<SingleRole Identifier="BAG003" DisplayName_L1="Banking role: employees agency" DisplayName_L2="M�tiers : agence personnel" Category="Banking" EntityType="Directory_User" Policy="Default" />	<ResourceType Identifier="Banking_NominativeUser" DisplayName_L1="Banking User (nominative)" Policy="Default" TargetEntityType="Banking_User" Category="Banking" SourceEntityType="Directory_User" BlockProvisioning="false">		<ScalarRule Property="login" Expression="C#:person:return person.Login;" />		<NavigationRule Property="groups" Resource="Business role: all transactions" SingleRole="BAGR09" />		<NavigationRule Property="groups" Resource="Business role: agency" SingleRole="BAG002" />		<NavigationRule Property="groups" Resource="Business role: employees agency" SingleRole="BAG003" />	</ResourceType>	<ResourceTypeMapping Identifier="Banking_NominativeUser" Connection="BankingFulfillment" />	<ResourceCorrelationRule ResourceType="Banking_NominativeUser" TargetBinding="login" Policy="Default" SourceMatchedConfidenceLevel="100" SourceExpression="C#:person:return &quot;U&quot; + person.EmployeeId;" />

```

### Define settings

As with every other Robot Framework script, the resource needs to be imported to launch the
provisioning. The SeleniumLibrary also needs to be imported to use its keywords.

```

*** Settings ***
Resource  C:/UsercubeDemo/Runtime/UsercubeRobotFramework.resource
Library  SeleniumLibrary

```

### Define variables

The variables in the `Variables` section can serve two purposes.

- Values that should be modified easily: The browser and the Banking web application URL change with
  the provisioning environment.
- Values that are used multiple times: The Banking web application URL is used three times in the
  script. This avoids editing mistakes that happen when only one of the instances is modified.

```

*** Variables ***
${BROWSER}  edge
${BANKINGURL}  http://localhost:5011

```

### Define custom keywords

The script defines several custom keywords. As the element locators may not be easily
understandable, it is important that the keywords are not long, and have descriptive names.

| Keyword                   | Details                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Modify User               | Sets a password for the user, then applies the provisioning order. This keyword does everything the `Execute Modify` keyword should do, so that it can be used for error handling. As the provisioned resource type may not have password reset settings, the password generation could fail, which is why it is called by the `Try Keyword` keyword.                                                               |
| Restart Banking And Fail  | Restarts the Banking Application, then fails the keyword execution. This keyword should be used when the Banking application is in an unknown state.                                                                                                                                                                                                                                                                |
| Launch Banking App        | Launches the Banking web application. To check that the web browser is on the right page, the title of the page is verified with the `Title Should Be` keyword.                                                                                                                                                                                                                                                     |
| Set Password              | Generates a password for the provisioned user, sets their Banking password to that password, then sends a notification. This keyword attempts to send the notification as soon as the password is set. First, this ensures that the notification is sent even if the rest of the script would crash. Second, this keeps the password in memory for the least amount of time possible, which reduces security risks. |
| Add Group To User         | Selects the group that should be added, and clicks the **Save** button. This keyword also verifies that the web browser has the expected title. The `Click Element At Coordinates` keyword is used to reset the state of the page, as selecting the group hides the **Save** button.                                                                                                                                |
| Search User And Add Group | Goes to the page to add groups to the right user, and calls `Add Group To User`. This keyword also verifies that the web page has the expected title.                                                                                                                                                                                                                                                               |
| Add Groups                | Calls `Search User And Add Group` for each group in the provisioning order.                                                                                                                                                                                                                                                                                                                                         |
| Add All Groups            | Computes the number of groups to add, and if there is at least one, calls `Add Groups`. The only way to find the number of groups to add is in the **Changes** > **groups_add** section of the provisioning order. This section does not exist if there are no groups to add, so the `Run Keyword And Ignore Error` is called to avoid propagating the error.                                                       |
| Remove Group From User    | Goes to the URL corresponding to the API call to remove the group from the user.                                                                                                                                                                                                                                                                                                                                    |
| Remove Groups             | Calls `Remove Group From User` for each group in the provisioning order.                                                                                                                                                                                                                                                                                                                                            |
| Remove All Groups         | Computes the number of groups to remove, and if there is at least one, calls `Remove Groups`. The only way to find the number of groups to remove is in the **Changes** > **groups_remove** section of the provisioning order. This section does not exist if there are no groups to remove, so the `Run Keyword And Ignore Error` is called to avoid propagating the error.                                        |

```

*** Keywords ***
Modify User
    [Arguments]  ${order}
    Try Keyword  Set Password  ${order}
    Catch Keyword  Go To  ${BANKINGURL}/User
    Title Should Be  All Users - Banking System
    Add All Groups  ${order}
    Remove All Groups  ${order}

Restart Banking And Fail
    Close Browser
    Launch Banking App
    Fail  ${Provisioning failed, restarting the browser}

Launch Banking App
    Open Browser  ${BANKINGURL}  ${BROWSER}
    Title Should Be  Home Page - Banking System

Set Password
    [Arguments]  ${order}
    Go To  ${BANKINGURL}/User/SetPassword/${login}
    Title Should Be  Edit ${login} - Banking System
    ${password}=  Generate Password
    Input Text  id:Password  ${password}
    Click Element  xpath:/html/body/div/main/div[1]/div/form/div[2]/input
    Send Password Notification

Add Group To User
    [Arguments]  ${groupName}
    Select From List By Value  name:group  ${groupName}
    Click Element at Coordinates  name:group  250  0
    Click Element  xpath:/html/body/div/main/div[1]/div/form/div[2]/input
    Title Should Be  All Users - Banking System

Search User And Add Group
    [Arguments]  ${login}  ${groupName}
    Go To  ${BANKINGURL}/User/AddGroup/${login}
    Title Should Be  Add Group to ${login} - Banking System
    Add Group To User  ${groupName}

Add Groups
    [Arguments]  ${order}  ${length}
    FOR  ${i}  IN RANGE  ${length}
        Search User And Add Group  ${order['Resource']['login']}  ${order['Changes']['groups_add'][${i}]['name']}
    END

Add All Groups
    [Arguments]  ${order}
    ${status}  ${length}=  Run Keyword And Ignore Error  Get Length  ${order['Changes']['groups_add']}
    Run Keyword If  '${status}' == 'PASS'  Add Groups  ${order}  ${length}

Remove Group From User
    [Arguments]  ${login}  ${groupName}
    Go To  ${BANKINGURL}/User/RemoveGroup/${login}?groupId=${groupName}

Remove Groups
    [Arguments]  ${order}  ${length}
    FOR  ${i}  IN RANGE  ${length}
        Remove Group From User  ${order['Resource']['login']}  ${order['Changes']['groups_remove'][${i}]['name']}
    END

Remove All Groups
    [Arguments]  ${order}
    ${status}  ${length}=  Run Keyword And Ignore Error  Get Length  ${order['Changes']['groups_remove']}
    Run Keyword If  '${status}' == 'PASS'  Remove Groups  ${order}  ${length}

```

### Define mandatory keywords

To be able to provision the system, the script must contain the `ExecuteAdd`, `ExecuteDelete`, and
`ExecuteModify` keyword. As the Banking system is only able to modify existing accounts, only the
`Execute Modify` keyword is implemented.

To simplify error handling, the `Execute Modify` keyword only calls the `Modify User` keyword. As
only a single keyword is needed, it can be called within the `Try Keyword` keyword. This means that
the error handling can be handled with the `Catch Keyword` keyword.

```

*** Keywords ***
ExecuteAdd
    [Arguments]  ${order}
    Log To Console  ExecuteAdd is not implemented

ExecuteDelete
    [Arguments]  ${order}
    Log To Console  ExecuteDelete is not implemented

ExecuteModify
    [Arguments]  ${order}
    Try Keyword  Modify User  ${order}
    Catch Keyword  Restart Banking And Fail

```

### Define test cases

Although the Robot Framework is used for provisioning in Identity Manager, it is most often used for
testing, which is why the `Test Cases` section defines what should happen when Identity
Manager starts the Robot Framework task. Note that the `Launch Provisioning` keyword is mandatory
for the provisioning to happen.

As the browser should always be closed after the tests, a teardown is used to ensure that regardless
of the script's execution state, the browser is closed.

```

*** Test Cases ***
Run Provisioning
    Launch Banking App
    Launch Provisioning
    [Teardown]  Close Browser

```

### Read the full script

The full script is as follows:

```

*** Settings ***
Resource  C:/UsercubeDemo/Runtime/UsercubeRobotFramework.resource
Library  SeleniumLibrary

*** Variables ***
${BROWSER}  edge
${BANKINGURL}  http://localhost:5011

*** Keywords ***
ExecuteAdd
    [Arguments]  ${order}
    Log To Console  ExecuteAdd is not implemented

ExecuteDelete
    [Arguments]  ${order}
    Log To Console  ExecuteDelete is not implemented

ExecuteModify
    [Arguments]  ${order}
    Try Keyword  Modify User  ${order}
    Catch Keyword  Restart Banking And Fail

Modify User
    [Arguments]  ${order}
    Try Keyword  Set Password  ${order}
    Catch Keyword  Go To  ${BANKINGURL}/User
    Title Should Be  All Users - Banking System
    Add All Groups  ${order}
    Remove All Groups  ${order}

Restart Banking And Fail
    Close Browser
    Launch Banking App
    Fail  ${Provisioning failed, restarting the browser}

Launch Banking App
    Open Browser  ${BANKINGURL}  ${BROWSER}
    Title Should Be  Home Page - Banking System

Set Password
    [Arguments]  ${order}
    Go To  ${BANKINGURL}/User/SetPassword/${login}
    Title Should Be  Edit ${login} - Banking System
    ${password}=  Generate Password
    Input Text  id:Password  ${password}
    Click Element  xpath:/html/body/div/main/div[1]/div/form/div[2]/input
    Send Password Notification

Add Group To User
    [Arguments]  ${groupName}
    Select From List By Value  name:group  ${groupName}
    Click Element at Coordinates  name:group  250  0
    Click Element  xpath:/html/body/div/main/div[1]/div/form/div[2]/input
    Title Should Be  All Users - Banking System

Search User And Add Group
    [Arguments]  ${login}  ${groupName}
    Go To  ${BANKINGURL}/User/AddGroup/${login}
    Title Should Be  Add Group to ${login} - Banking System
    Add Group To User  ${groupName}

Add Groups
    [Arguments]  ${order}  ${length}
    FOR  ${i}  IN RANGE  ${length}
        Search User And Add Group  ${order['Resource']['login']}  ${order['Changes']['groups_add'][${i}]['name']}
    END

Add All Groups
    [Arguments]  ${order}
    ${status}  ${length}=  Run Keyword And Ignore Error  Get Length  ${order['Changes']['groups_add']}
    Run Keyword If  '${status}' == 'PASS'  Add Groups  ${order}  ${length}

Remove Group From User
    [Arguments]  ${login}  ${groupName}
    Go To  ${BANKINGURL}/User/RemoveGroup/${login}?groupId=${groupName}

Remove Groups
    [Arguments]  ${order}  ${length}
    FOR  ${i}  IN RANGE  ${length}
        Remove Group From User  ${order['Resource']['login']}  ${order['Changes']['groups_remove'][${i}]['name']}
    END

Remove All Groups
    [Arguments]  ${order}
    ${status}  ${length}=  Run Keyword And Ignore Error  Get Length  ${order['Changes']['groups_remove']}
    Run Keyword If  '${status}' == 'PASS'  Remove Groups  ${order}  ${length}

*** Test Cases ***
Run Provisioning
    Launch Banking App
    Launch Provisioning
    [Teardown]  Close Browser

```

# Fulfill Microsoft Exchange via PowerShell

This guide shows how to set up a
[ PowerShellProv ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md) connector to fulfill data in
Microsoft Exchange Server. It will focus on registering Identity Manager within the target Microsoft
Exchange instance, configuring the connector, and building the job to perform a regularly scheduled
fulfillment. Of course, any other system compatible with PowerShell can be chosen.

## Prerequisites

### External System Configuration

Check the following prerequisites:

- [ PowerShellProv ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md)
- [ Microsoft Exchange ](/docs/identitymanager/6.2/reference/index.md)
- [Active Directory](/docs/identitymanager/6.2/integration/connectors/connector-catalog/active-directory.md)

Let's consider a simplified system, including three parts:

1. Identity Manager
2. Microsoft Exchange Server
3. Active Directory

For more details on the complete system, see
[Exchange architecture](https://docs.microsoft.com/en-us/exchange/network-configuration/architecture?view=exchserver-2016).

Identity Manager can:

- export and fulfill AD entries independently of Microsoft Exchange.
- export mailboxes from Microsoft Exchange independently of AD.
- fulfill a mailbox but Identity Manager needs first to fulfill an AD entry and then, launch the
  Microsoft Exchange Fulfill.

### Identity Manager Configuration

This step sets up the Identity Manager Agent to use the Active Directory and PowerShell connectors
in order to fulfill the Microsoft Exchange mailboxes.

The settings must be entered in `appsettings.agent.json > Connections`. For more details, see the
[Active Directory](/docs/identitymanager/6.2/integration/connectors/connector-catalog/active-directory.md) and
[ PowerShellProv ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md) sections.

#### Add Sections

As explained previously, the simplified system consists of Identity Manager and two other systems.
It means that settings are required in `appsettings.agent.json` to connect with the systems. See the
[ Microsoft Exchange ](/docs/identitymanager/6.2/reference/index.md),
[ PowerShellProv ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md),
and[Active Directory](/docs/identitymanager/6.2/integration/connectors/connector-catalog/active-directory.md) topics for additional
information.

> This example contains export and fulfillment settings for the Active Directory and for Microsoft
> Exchange:
>
> ```
> appsettings.agent.json
> {
>     "Connections": {
>     ...
>     "ADFulfillment": {
>       "Servers": [
>         {
>           "Server": "...",
>           "BaseDN": "..."
>         },
>         {
>           "Server": "paris.contoso.com",
>           "BaseDN": "DC=defense,DC=paris,DC=com"
>         }
>       ],
>       "AuthType": "Basic",
>       "Login": "...",
>       "Password": "...",
>       "Filter": "(objectclass=*)",
>       "EnableSSL": true,
>     }
>     "MicrosoftExchangeExportFulfillment": {
>       // Export Microsoft Exchange settings
>       ...
>       // Fulfillment Microsoft Exchange settings
>       "PowerShellScriptPath": "C:/UsercubeDemo/Scripts/Fulfill-Exchange.ps1",
>       "Options": {
>         "AuthType": "Basic",
>         "Server": "http://ex-server1/powershell",
>         "Login": "PIXELABS\\Administrateur",
>         "Password": "Secret123"
>       }
>     },
>   }
> }
> ```

As this guide focuses on the fulfillment of an external system, export settings will be omitted.

The Fulfill-PowerShell needs a script whose path is defined by the attribute
**PowerShellScriptPath**. Identity Manager provides a script in the SDK in
`Usercube.Demo/Scripts/Fulfill-Exchange.ps1`.See the
[ Write a PowerShell Script for Provisioning ](/docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md) topic
for more details on how to write a customized script.

To define and apply additional settings when authenticating to an external system, we can set the
attribute [ PowerShellProv ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md) and add required
parameters for authentication.

In the example above, the `Basic` AuthType was chosen to show how to fill the credentials, but it
isn't mandatory to use this
[ Microsoft Exchange ](/docs/identitymanager/6.2/reference/index.md).

For pedagogical reasons, this guide focuses on the simplest way to set up the fulfillment, but it's
not the most secure. Hence, it is strongly recommended to use Kerberos AuthType or
[ PowerShellProv ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md) via Azure Key Vault or
CyberArk in a production environment.  
Netwrix Identity Manager (formerly Usercube) recommends completing this guide once, testing the
configuration, and only then, switching to a more secure way of storing credentials.

## Build the Connector

To be used for export tasks, a connector must be declared in
the[Toolkit for XML Configuration](/docs/identitymanager/6.2/development/configuration-toolkit/index.md) and linked to an Agent.

It is strongly recommended that the applicative configuration be stored in the working directory
Conf folder as a set of xml files organized by connector. To follow this structure, create a
MicrosoftExchange directory in the Conf folder.

### Declare a Connector

In the `MicrosoftExchange` directory, create a `MicrosoftExchange Connector.xml` file. This file
contains the declaration of the connector and the associated
[Entity Model](/docs/identitymanager/6.2/reference/entity-model.md).

> This example declares the
> `MicrosoftExchange`[connector](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
> on the `Local` agent, and the
> [connection](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) linked to the
> previously defined `MicrosoftExchangeExportFulfillment` JSON section (see the [example](#example)
> above):
>
> ```
> Conf/MicrosoftExchange/MicrosoftExchange Connector.xml
> <?xml version="1.0" encoding="utf-8"?><ConfigurationFile xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="urn:schemas-usercube-com:configuration">    ...
>     <Connector Identifier="MicrosoftExchange" DisplayName_L1="Microsoft Exchange" Agent="Local" />    <Connection Connector="MicrosoftExchange" DisplayName_L1="Connection Microsoft Exchange" Identifier="MicrosoftExchangeExportFulfillment" Package="Usercube.MicrosoftExchange@0000001"/>    <Category Policy="Default" Identifier="MicrosoftExchange" DisplayName_L1="Microsoft Exchange"/>    ...
> </ConfigurationFile>
>
> ```

### Write Entity Types

The [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md) should match as closely as possible the structure
of the Microsoft Exchange data relevant for Identity Manager. It is designed by analyzing the
Microsoft Exchange data structure, and describing said data with
[Entity Model](/docs/identitymanager/6.2/reference/entity-model.md) and
[ Entity Association ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

Eventually, it is up to the integration team to design the
[Entity Model](/docs/identitymanager/6.2/reference/entity-model.md) that best serves the
[ Assignment Policy ](/docs/identitymanager/6.2/access-governance/role-management/role-rules.md) needs. It will most likely be
refined iteratively throughout the project integration.

A good starting point for the Entity Model is to mirror the shape of the Microsoft Exchange
mailboxes and databases.

##### Example

This example defines the entity types named MicrosoftExchange_Database and
MicrosoftExchange_Mailbox.

Notice the omitted **TargetColumnIndex** attribute and the presence of Type="ForeignKey" for the
Mailboxes and Database properties. If omitted, this attribute indicates that the properties are
navigation properties.

```
Conf/MicrosoftExchange/MicrosoftExchange Connector.xml
...
<EntityType Identifier="MicrosoftExchange_Database" DisplayName_L1="Microsoft Exchange - Database">  <Property Identifier="Name" DisplayName_L1="Name" TargetColumnIndex="4" Type="String" />  <Property Identifier="Server" DisplayName_L1="Server" TargetColumnIndex="5" Type="String" />  <Property Identifier="Mounted" DisplayName_L1="Mounted" TargetColumnIndex="7" Type="String" />  <Property Identifier="ObjectCategory" DisplayName_L1="ObjectCategory" TargetColumnIndex="1" Type="String" />  <Property Identifier="Guid" DisplayName_L1="Guid" IsKey="true" TargetColumnIndex="0" Type="String" />  <Property Identifier="WhenChangedUTC" DisplayName_L1="WhenChangedUTC" TargetColumnIndex="2" Type="String" />  <Property Identifier="WhenCreatedUTC" DisplayName_L1="WhenCreatedUTC" TargetColumnIndex="3" Type="String" />  <Property Identifier="ObjectState" DisplayName_L1="ObjectState" TargetColumnIndex="6" Type="String" />  <Property Identifier="Mailboxes" DisplayName_L1="Mailboxes" Type="ForeignKey" /></EntityType><EntityType Identifier="MicrosoftExchange_Mailbox" DisplayName_L1="Microsoft Exchange - Mailbox">  <Property Identifier="EmailAddresses" DisplayName_L1="EmailAddresses" TargetColumnIndex="8" Type="String" />  <Property Identifier="UseDatabaseRetentionDefaults" DisplayName_L1="UseDatabaseRetentionDefaults" TargetColumnIndex="34" Type="String" />  <Property Identifier="RetainDeletedItemsUntilBackup" DisplayName_L1="RetainDeletedItemsUntilBackup" TargetColumnIndex="27" Type="String" />  <Property Identifier="DeliverToMailboxAndForward" DisplayName_L1="DeliverToMailboxAndForward" TargetColumnIndex="28" Type="String" />  <Property Identifier="ExchangeGuid" DisplayName_L1="ExchangeGuid" TargetColumnIndex="5" Type="String" />  <Property Identifier="ExchangeUserAccountControl" DisplayName_L1="ExchangeUserAccountControl" TargetColumnIndex="35" Type="String" />  <Property Identifier="ForwardingAddress" DisplayName_L1="ForwardingAddress" TargetColumnIndex="40" Type="String" />  <Property Identifier="ForwardingSmtpAddress" DisplayName_L1="ForwardingSmtpAddress" TargetColumnIndex="41" Type="String" />  <Property Identifier="IsMailboxEnabled" DisplayName_L1="IsMailboxEnabled" TargetColumnIndex="36" Type="String" />  <Property Identifier="ProhibitSendQuota" DisplayName_L1="ProhibitSendQuota" TargetColumnIndex="19" Type="String" />  <Property Identifier="ProhibitSendReceiveQuota" DisplayName_L1="ProhibitSendReceiveQuota" TargetColumnIndex="20" Type="String" />  <Property Identifier="RecoverableItemsQuota" DisplayName_L1="RecoverableItemsQuota" TargetColumnIndex="9" Type="String" />  <Property Identifier="RecoverableItemsWarningQuota" DisplayName_L1="RecoverableItemsWarningQuota" TargetColumnIndex="10" Type="String" />  <Property Identifier="CalendarLoggingQuota" DisplayName_L1="CalendarLoggingQuota" TargetColumnIndex="11" Type="String" />  <Property Identifier="IsResource" DisplayName_L1="IsResource" TargetColumnIndex="29" Type="String" />  <Property Identifier="IsLinked" DisplayName_L1="IsLinked" TargetColumnIndex="30" Type="String" />  <Property Identifier="IsShared" DisplayName_L1="IsShared" TargetColumnIndex="31" Type="String" />  <Property Identifier="SamAccountName" DisplayName_L1="SamAccountName" TargetColumnIndex="21" Type="String" />  <Property Identifier="AntispamBypassEnabled" DisplayName_L1="AntispamBypassEnabled" TargetColumnIndex="32" Type="String" />  <Property Identifier="ServerName" DisplayName_L1="ServerName" TargetColumnIndex="26" Type="String" />  <Property Identifier="UseDatabaseQuotaDefaults" DisplayName_L1="UseDatabaseQuotaDefaults" TargetColumnIndex="37" Type="String" />  <Property Identifier="UserPrincipalName" DisplayName_L1="UserPrincipalName" TargetColumnIndex="7" Type="String" />  <Property Identifier="WhenMailboxCreated" DisplayName_L1="WhenMailboxCreated" TargetColumnIndex="14" Type="String" />  <Property Identifier="IsInactiveMailbox" DisplayName_L1="IsInactiveMailbox" TargetColumnIndex="33" Type="String" />  <Property Identifier="AccountDisabledIsDirSynced" DisplayName_L1="AccountDisabledIsDirSynced" TargetColumnIndex="42" Type="String" />  <Property Identifier="Alias" DisplayName_L1="Alias" TargetColumnIndex="22" Type="String" />  <Property Identifier="OrganizationalUnit" DisplayName_L1="OrganizationalUnit" TargetColumnIndex="3" Type="String" />  <Property Identifier="DisplayName" DisplayName_L1="DisplayName" TargetColumnIndex="12" Type="String" />  <Property Identifier="MaxSendSize" DisplayName_L1="MaxSendSize" TargetColumnIndex="23" Type="String" />  <Property Identifier="MaxReceiveSize" DisplayName_L1="MaxReceiveSize" TargetColumnIndex="24" Type="String" />  <Property Identifier="PrimarySmtpAddress" DisplayName_L1="PrimarySmtpAddress" TargetColumnIndex="6" Type="String" />  <Property Identifier="RecipientType" DisplayName_L1="RecipientType" TargetColumnIndex="17" Type="String" />  <Property Identifier="RecipientTypeDetails" DisplayName_L1="RecipientTypeDetails" TargetColumnIndex="18" Type="String" />  <Property Identifier="Identity" DisplayName_L1="Identity" TargetColumnIndex="2" Type="String" />  <Property Identifier="IsValid" DisplayName_L1="IsValid" TargetColumnIndex="38" Type="String" />  <Property Identifier="Name" DisplayName_L1="Name" TargetColumnIndex="13" Type="String" />  <Property Identifier="DistinguishedName" DisplayName_L1="DistinguishedName" TargetColumnIndex="1" Type="String" />  <Property Identifier="Guid" DisplayName_L1="Guid" IsKey="true" TargetColumnIndex="0" Type="String" />  <Property Identifier="ObjectCategory" DisplayName_L1="ObjectCategory" TargetColumnIndex="4" Type="String" />  <Property Identifier="WhenChangedUTC" DisplayName_L1="WhenChangedUTC" TargetColumnIndex="15" Type="String" />  <Property Identifier="WhenCreatedUTC" DisplayName_L1="WhenCreatedUTC" TargetColumnIndex="16" Type="String" />  <Property Identifier="ObjectState" DisplayName_L1="ObjectState" TargetColumnIndex="25" Type="String" />  <Property Identifier="Database" DisplayName_L1="Database" Type="ForeignKey" TargetColumnIndex="128" /></EntityType>...

```

### Write the Entity Type Mapping

The entity type must be mapped, on a property by property basis, to the exported attributes of
Microsoft Exchange mailboxes and databases (namely, the columns of the CSV source files generated by
the export). The
[ Entity Type Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
element maps scalar properties from a CSV source file to an EntityType.

##### Example

In this example, the CSV source files are microsoftexchange_databases.csv and
microsoftexchange_mailboxes.csv located in the
[Application Settings](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
folder.

```
Conf/MicrosoftExchange/MicrosoftExchange Connector.xml
...
<EntityTypeMapping Identifier="MicrosoftExchange_Database" Connector="MicrosoftExchange" ConnectionTable="microsoftexchange_databases">  <Property Identifier="Name" ConnectionColumn="Name" IsUniqueKey="true" />  <Property Identifier="Server" ConnectionColumn="Server" />  <Property Identifier="Mounted" ConnectionColumn="Mounted" />  <Property Identifier="ObjectCategory" ConnectionColumn="ObjectCategory" />  <Property Identifier="Guid" ConnectionColumn="Guid" IsPrimaryKey="true" />  <Property Identifier="WhenChangedUTC" ConnectionColumn="WhenChangedUTC" />  <Property Identifier="WhenCreatedUTC" ConnectionColumn="WhenCreatedUTC" />  <Property Identifier="ObjectState" ConnectionColumn="ObjectState" /></EntityTypeMapping><EntityTypeMapping Identifier="MicrosoftExchange_Mailbox" Connector="MicrosoftExchange" ConnectionTable="microsoftexchange_mailboxes">  <Property Identifier="EmailAddresses" ConnectionColumn="EmailAddresses" />  <Property Identifier="UseDatabaseRetentionDefaults" ConnectionColumn="UseDatabaseRetentionDefaults" />  <Property Identifier="RetainDeletedItemsUntilBackup" ConnectionColumn="RetainDeletedItemsUntilBackup" />  <Property Identifier="DeliverToMailboxAndForward" ConnectionColumn="DeliverToMailboxAndForward" />  <Property Identifier="ExchangeGuid" ConnectionColumn="ExchangeGuid" />  <Property Identifier="ExchangeUserAccountControl" ConnectionColumn="ExchangeUserAccountControl" />  <Property Identifier="ForwardingAddress" ConnectionColumn="ForwardingAddress" />  <Property Identifier="ForwardingSmtpAddress" ConnectionColumn="ForwardingSmtpAddress" />  <Property Identifier="IsMailboxEnabled" ConnectionColumn="IsMailboxEnabled" />  <Property Identifier="ProhibitSendQuota" ConnectionColumn="ProhibitSendQuota" />  <Property Identifier="ProhibitSendReceiveQuota" ConnectionColumn="ProhibitSendReceiveQuota" />  <Property Identifier="RecoverableItemsQuota" ConnectionColumn="RecoverableItemsQuota" />  <Property Identifier="RecoverableItemsWarningQuota" ConnectionColumn="RecoverableItemsWarningQuota" />  <Property Identifier="CalendarLoggingQuota" ConnectionColumn="CalendarLoggingQuota" />  <Property Identifier="IsResource" ConnectionColumn="IsResource" />  <Property Identifier="IsLinked" ConnectionColumn="IsLinked" />  <Property Identifier="IsShared" ConnectionColumn="IsShared" />  <Property Identifier="SamAccountName" ConnectionColumn="SamAccountName" />  <Property Identifier="AntispamBypassEnabled" ConnectionColumn="AntispamBypassEnabled" />  <Property Identifier="ServerName" ConnectionColumn="ServerName" />  <Property Identifier="UseDatabaseQuotaDefaults" ConnectionColumn="UseDatabaseQuotaDefaults" />  <Property Identifier="UserPrincipalName" ConnectionColumn="UserPrincipalName" />  <Property Identifier="WhenMailboxCreated" ConnectionColumn="WhenMailboxCreated" />  <Property Identifier="IsInactiveMailbox" ConnectionColumn="IsInactiveMailbox" />  <Property Identifier="AccountDisabledIsDirSynced" ConnectionColumn="AccountDisabledIsDirSynced" />  <Property Identifier="Alias" ConnectionColumn="Alias" />  <Property Identifier="OrganizationalUnit" ConnectionColumn="OrganizationalUnit" />  <Property Identifier="DisplayName" ConnectionColumn="DisplayName" />  <Property Identifier="MaxSendSize" ConnectionColumn="MaxSendSize" />  <Property Identifier="MaxReceiveSize" ConnectionColumn="MaxReceiveSize" />  <Property Identifier="PrimarySmtpAddress" ConnectionColumn="PrimarySmtpAddress" />  <Property Identifier="RecipientType" ConnectionColumn="RecipientType" />  <Property Identifier="RecipientTypeDetails" ConnectionColumn="RecipientTypeDetails" />  <Property Identifier="Identity" ConnectionColumn="Identity" />  <Property Identifier="IsValid" ConnectionColumn="IsValid" />  <Property Identifier="Name" ConnectionColumn="Name" />  <Property Identifier="DistinguishedName" ConnectionColumn="DistinguishedName" />  <Property Identifier="Guid" ConnectionColumn="Guid" IsPrimaryKey="true" />  <Property Identifier="ObjectCategory" ConnectionColumn="ObjectCategory" />  <Property Identifier="WhenChangedUTC" ConnectionColumn="WhenChangedUTC" />  <Property Identifier="WhenCreatedUTC" ConnectionColumn="WhenCreatedUTC" />  <Property Identifier="ObjectState" ConnectionColumn="ObjectState" /></EntityTypeMapping>...

```

### Write Entity Associations

Entity types are associated through their navigation properties with
[ Entity Association ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
elements.

##### Example

The following example declares a `1:n` (`'one-to-many'`) association. One
`MicrosoftExchange_Database` may be referenced by any number of `MicrosoftExchange_Mailbox`_(es)_,
but each `MicrosoftExchange_Mailbox` can only reference one `MicrosoftExchange_Database`.

The properties used for the association must be `Primary` or `Unique` keys.

```
Conf/MicrosoftExchange/MicrosoftExchange Connector.xml
...
<EntityAssociation Identifier="MicrosoftExchange_Mailbox_Database" DisplayName_L1="Database" IsProperty1Collection="true" Property1="MicrosoftExchange_Database:Mailboxes" Property2="MicrosoftExchange_Mailbox:Database" />...

```

### Write the Entity Association Mapping

The
[ Entity Association Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
element maps column values from a CSV source file to an EntityType navigation property.

##### Example

This example describes the mailbox/database associations between MicrosoftExchange_Mailbox and
MicrosoftExchange_Database. Thanks to the **Export** Microsoft Exchange job, the file
microsoftexchange_mailboxes.csv is generated. This file looks like:

```

Command;Property_1;Property_2;...;Property_N
Add;value1;value2;...;valueN

```

Each line of the CSV file corresponds to a `MicrosoftExchange_Mailbox`. The properties used in the
association are:

- `Guid`: the Guid of the `MicrosoftExchange_Mailbox`.
- `Name`: the name of the `MicrosoftExchange_Database` referencing the `MicrosoftExchange_Mailbox`
  (name is unique among the databases).

The following table can be extracted from the CSV file:

| Guid                                 | Name                        |
| ------------------------------------ | --------------------------- |
| 4ecbdba7-e984-409a-a9ac-6027ac81fa42 | Mailbox Database 1882404652 |
| 1d3e67a2-7d44-46f1-a300-afa73ae120f4 | DB1                         |
| aab57e15-847b-4e16-96f1-82ebc54c01e2 | DB1                         |
| ea513604-3758-463f-9b72-6c42ea949260 | DB2                         |

It means that the MicrosoftExchange_Mailbox with Guid ? 4ecbdba7-e984-409a-a9ac-6027ac81fa42 is
contained in the MicrosoftExchange_Database with Name ? Mailbox Database 1882404652. This
association is created for every line in the CSV file, and therefore also for every line in the
table above.

This can be enabled with an **EntityAssociationMapping** like in the following XML:

```
Conf/MicrosoftExchange/MicrosoftExchange Connector.xml
...
<EntityAssociationMapping Identifier="MicrosoftExchange_Mailbox_Database" Column1="Database" Column2="Guid" Connector="MicrosoftExchange" ConnectionTable="microsoftexchange_mailboxes" EntityPropertyMapping1="MicrosoftExchange_Database:Name" EntityPropertyMapping2="MicrosoftExchange_Mailbox:Guid" />...

```

The CSV file `microsoftexchange_mailboxes.csv` must be exported to the
[Application Settings](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
folder.

## Build the Role Model

A
[ Entitlement Management ](/docs/identitymanager/6.2/reference/index.md)
must be created with the following elements:

- `ResourceType`
- `ResourceTypeMapping`
- `ResourceCorrelationRule`
- `SingleRole` (optional)

### Resource Type

A [Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) is a
conceptual model of an information system object, here a mailbox.

The resource type contains several rules:

- [Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) which
  assigns a resource to a user
- [Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) which
  specifies the value to be set to an assigned resource scalar property
- [Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) which
  specifies a value to be set to an assigned resource multi-valued navigation property

#### Example

```
Conf/MicrosoftExchange/Directory User Role Model MicrosoftExchange.xml"
...
<ResourceType Identifier="MicrosoftExchange_Mailbox_NominativeUser" DisplayName_L1="Microsoft Exchange Mailbox (nominative)" DisplayName_L2="Bo�te Microsoft Exchange (nominative)" Policy="Default" TargetEntityType="MicrosoftExchange_Mailbox" Category="MicrosoftExchange" SourceEntityType="Directory_User" ApprovalWorkflowType="One" MaximumUpdatePercent="100" MaximumInsertPercent="100">  <ScalarRule Property="SamAccountName" Binding="Login" />  <ScalarRule Property="PrimarySmtpAddress" Binding="Mail" />  <ScalarRule Property="EmailAddresses" Expression="C#:person:return String.IsNullOrEmpty(person.ProxyAddress) ? &quot;SMTP:&quot; + person.Mail : &quot;smtp:&quot; + person.ProxyAddress + &quot; SMTP:&quot; + person.Mail;" />  <NavigationRule Property="Database" Resource="24679385-b2dd-461d-aebf-42a77e0c620e" SingleRole="Mailbox Database 1882404652" />  <NavigationRule Property="Database" Resource="9c512155-d912-4fcb-9448-0755fbaf1b96" SingleRole="DB1" />  <NavigationRule Property="Database" Resource="d1d81888-3ad3-4256-a621-2273aba7c48f" SingleRole="DB2" /></ResourceType>...

```

The TargetEntityType is MicrosoftExchange_Mailbox and the SourceEntityType is Directory_User.

This Resource Type allows Identity Manager to compute the values used when fulfilling the external
system.

Finally, the Navigation Rule sets the property Database of the entity MicrosoftExchange_Mailbox. See
the [ Fulfill Microsoft Exchange via PowerShell ](/docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md) topic for additional information.

### Resource Type Mapping

A
[Resource Type Mappings](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
element contains all the resource types (sharing the same Identifier) that can be provisioned into
targeted platforms, applications, and systems.

#### Example

```
Conf/MicrosoftExchange/Directory User Role Model MicrosoftExchange.xml"
...
<ResourceTypeMapping Identifier="MicrosoftExchange_Mailbox_NominativeUser" Connection="MicrosoftExchangeExportFulfillment" />...

```

In this example, `Fulfill-PowerShell` requires only a simple `ResourceTypeMapping` (including only
one `Identifier` and one `Connection`):

- The **Identifier** attribute is `MicrosoftExchange_Mailbox_NominativeUser` which corresponds to
  the identifier of the resource type defined earlier.
- The **Connection** attribute is `MicrosoftExchangeExportFulfillment` which corresponds to the
  section in `appsettings.agent.json` containing the parameters used to provision the external
  system.

### Resource Correlation Rule

A
[ Resource Correlation Rule ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
is used to correlate the resource `MicrosoftExchange_Mailbox_NominativeUser` with the
`Directory_User`.

#### Example

```
Conf/MicrosoftExchange/NotImplementInAutoTest/Directory User Role Model MicrosoftExchange.xml"
...
<ResourceCorrelationRule ResourceType="MicrosoftExchange_Mailbox_NominativeUser" TargetBinding="SamAccountName" Policy="Default" SourceMatchedConfidenceLevel="100" SourceBinding="Login" />...

```

This rule means if the `SamAccountName` (`MicrosoftExchange_Mailbox`) is equal to the `Login`
(`Directory_User`) then, the `ResourceType` can be linked to the `User` with a confidence rate of
100%.

### Single Role (optional)

A [ Single Role ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) encapsulates
system entitlements.

#### Example

```
Conf/MicrosoftExchange/Directory User Role Model MicrosoftExchange.xml"
...
<SingleRole Identifier="Mailbox Database 1882404652" DisplayName_L1="Mailbox Database 1882404652" DisplayName_L2="Base de donn�e pour bo�te mail 1882404652" Category="MicrosoftExchange" ApprovalWorkflowType="One" EntityType="Directory_User" Policy="Default" /><SingleRole Identifier="DB1" DisplayName_L1="DB1" DisplayName_L2="DB1" Category="MicrosoftExchange" ApprovalWorkflowType="One" EntityType="Directory_User" Policy="Default" /><SingleRole Identifier="DB2" DisplayName_L1="DB2" DisplayName_L2="DB2" Category="MicrosoftExchange" ApprovalWorkflowType="One" EntityType="Directory_User" Policy="Default" />...

```

This single role was previously used in one of the navigation rules defined in the `ResourceType`.

```
Conf/MicrosoftExchange/Directory User Role Model MicrosoftExchange.xml"
...
<NavigationRule Property="Database" Resource="24679385-b2dd-461d-aebf-42a77e0c620e" SingleRole="Mailbox Database 1882404652" /><NavigationRule Property="Database" Resource="9c512155-d912-4fcb-9448-0755fbaf1b96" SingleRole="DB1" /><NavigationRule Property="Database" Resource="d1d81888-3ad3-4256-a621-2273aba7c48f" SingleRole="DB2" />...

```

If a `Directory_User` is assigned the SingleRole `DB1` then, the `NavigationRule` indicates that the
property `Database` (in `MicrosoftExchange_Mailbox`) will have the value
`9c512155-d912-4fcb-9448-0755fbaf1b96` (unique id of a `MicrosoftExchange_Database`).

## Display

This step focuses on configuring a nice display for the synchronized list of resources in the UI.

### Navigation

A [ Menu Item ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) can be added to
include a link to the resources list in the left menu on the UI home screen.

It is strongly recommended that you gather synchronized resources menu items under parent menu
items. This is usually declared in the `Nav.xml` file in the configuration root folder.

NETWRIX also advises to use a new `MicrosoftExchange Nav.xml` file in the `MicrosoftExchange`
connector's folder to add a `mailboxes` and `databases` menu item.

#### Example

```
Conf/MicrosoftExchange/MicrosoftExchange Nav.xml
...
<MenuItem Identifier="Nav_Connectors_MicrosoftExchange" DisplayName_L1="Microsoft Exchange" DisplayName_L2="Microsoft Exchange" ParentMenuItem="Nav_Connectors">  <MenuItem Identifier="Nav_Connectors_ADMicrosoftExchange_Entry" DisplayName_L1="AD Entries" DisplayName_L2="Entr�es AD" EntityType="ADMicrosoftExchange_Entry" />  <MenuItem Identifier="Nav_Connectors_MicrosoftExchange_Database" DisplayName_L1="Databases" DisplayName_L2="Bases de donn�es" EntityType="MicrosoftExchange_Database" />  <MenuItem Identifier="Nav_Connectors_MicrosoftExchange_Mailbox" DisplayName_L1="Mailboxes" DisplayName_L2="Boites mails" EntityType="MicrosoftExchange_Mailbox" /></MenuItem>...

```

This example adds a new menu item under the `Nav_Connectors` menu item declared in the root
`Conf/Nav.xml` file. This new menu item gives access to the list of synchronized Microsoft Exchange
entities.

![Microsoft Exchange Menu Items](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/powershell-fulfill/microsoftexchange_fulfill_menu_item_5.1.7.webp)

### Configuration

It is strongly recommended that the display configuration be written to a new
`MicrosoftExchange UI.xml` file in the `MicrosoftExchange` connector's folder.

#### All-in-One Scaffolding

The
[ View Target Resource Template ](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md)
generates all the required elements to be seen by the user.

##### Example

The documentation explains what is generated by the following scaffolding:

```
Conf/MicrosoftExchange/MicrosoftExchange UI.xml
...
<ViewTargetResourceTemplate EntityType="MicrosoftExchange_Database" Profile="Administrator" /><ViewTargetResourceTemplate EntityType="MicrosoftExchange_Mailbox" Profile="Administrator" />...

```

The following sections show how to override the elements generated by this scaffolding in order to
provide a more precise display.

#### Display Entity Type

The
[Display Entity Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
describes how a single resource should be displayed.

##### Example

```
Conf/MicrosoftExchange/MicrosoftExchange UI.xml
...
<DisplayEntityType Identifier="MicrosoftExchange_Database">  <Property OutputType="BasicCollection" Identifier="Mailboxes" /></DisplayEntityType>...

```

This example configures the following display for
[wolfgang.abendroth@acme.com](mailto:wolfgang.abendroth@acme.com).

![Microsoft Exchange Display Entity Type](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/powershell-fulfill/microsoftexchange_fulfill_display_entity_type_5.1.7.webp)

The scalar properties require no configuration: they are automatically displayed. The only
information that the
[DisplayEntityType](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
adds here, is that the property `BasicCollection` is a navigation property. An eye icon will be
displayed to take you directly to the matching page.

#### Display Table

The [Display Table](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
elements describe how a list of resources should be displayed.

The
[](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)[Display Table](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
contains a list of
[Display Table](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) columns
elements that identify which properties should be included in the list display.

##### Example

```
Conf/MicrosoftExchange/MicrosoftExchange UI.xml
...
<DisplayTable Identifier="MicrosoftExchange_Database" EntityType="MicrosoftExchange_Database" DisplayTableDesignElement="table" IsEntityTypeDefault="true">  <Column DefaultSortPriority="1" DisplayBinding="Guid" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="1" />  <Column DisplayBinding="Name" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />  <Column DisplayBinding="Server" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" /></DisplayTable><DisplayTable Identifier="MicrosoftExchange_Mailbox" EntityType="MicrosoftExchange_Mailbox" DisplayTableDesignElement="resourcetable" IsEntityTypeDefault="true">  <Column DefaultSortPriority="1" DisplayBinding="Guid" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="1" />  <Column DisplayBinding="ServerName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />  <Column DisplayBinding="UserPrincipalName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" /></DisplayTable>...

```

This example configures the following list display:

![Microsoft Exchange Display Table](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/powershell-fulfill/microsoftexchange_fulfill_display_table_5.1.7.webp)

#### Internal Display Name

An `InternalDisplayName` can also be declared as an
[ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md). The
`InternalDisplayName` is used in several UI screens to identify a resource for the user.

With no custom `InternalDisplayName`, a default value is used (instead of the first property of the
identity) containing the string **name**. If no such property is found, the first declared property
of the entity type is used.

##### Example

```
Conf/MicrosoftExchange/MicrosoftExchange UI.xml
...
<EntityPropertyExpression Identifier="MicrosoftExchange_Database_InternalDisplayName" Expression="C#:item:return item.Name;" EntityType="MicrosoftExchange_Database" Property="InternalDisplayName" /><EntityPropertyExpression Identifier="MicrosoftExchange_Mailbox_InternalDisplayName" Expression="C#:item:return item.Name;" EntityType="MicrosoftExchange_Mailbox" Property="InternalDisplayName" />...

```

This example adds the `InternalDisplayName` to the `MicrosoftExchange_Mailbox` entity type to be
used by the UI.

### Permissions

This step focuses on setting up permissions for Identity Manager's end-users granting them access to
the connector.

The
[Access Control Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
and
[Access Control Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
elements define
[ AccessControlPermission ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
permissions for end-user profiles to read and write the connector's data (such as resources of a
given entity type). It is used by the UI when displaying data such as resources and available roles.

It is strongly recommended that permissions be written to a new file. For example, the administrator
profile permissions can be written to the `MicrosoftExchange Profile Administrator.xml` file.

#### Example

```
Conf/MicrosoftExchange/MicrosoftExchange Profile Administrator.xml
...
<ViewAccessControlRules Profile="Administrator" EntityType="MicrosoftExchange_Database"/><ViewAccessControlRules Profile="Administrator" EntityType="MicrosoftExchange_Mailbox"/>...

```

This example sets permissions for the `Administrator` profile.

It entitles an administrator to display Microsoft Exchange resources (`mailboxes` and `databases`)
and role categories from the UI.

## Jobs

### Construction

This step focuses on writing a Complete Synchronization Job.

Netwrix Identity Manager (formerly Usercube)recommends writing Jobs associated with the
MicrosoftExchange connector to the Conf/MicrosoftExchange/MicrosoftExchange Jobs.xml file.

#### Example

```
Conf/MicrosoftExchange/MicrosoftExchange Jobs.xml
...
<CreateConnectorSynchroComplete Connector="MicrosoftExchange" DisplayName_L1="01: Microsoft Exchange - Synchronization Complete (scaffolding)" JobIdentifier="MicrosoftExchange_Synchronize_Complete_Scaffolding">  <OpenIdIdentifier Identifier="Job"/>  <NoSynchronization/></CreateConnectorSynchroComplete>...

```

This job will be executed on Microsoft Exchange's
connector[ Fulfill Microsoft Exchange via PowerShell ](/docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md).

Notice the **Identifier** attribute with the value `Job` in the `OpenIdIdentifier` tag. It refers to
the `ClientId` written to the
[appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
technical configuration. The Tasks will authenticate with the profile associated with this
`ClientId` in the `<OpenIdClient>` xml configuration element.

There is also the tag `<NoSynchronization/>` which means that the export will not be executed.
Removing the tag will launch export-related tasks before fulfillment-related tasks. Export tasks
need the same XML configuration and additional settings
in[ Fulfill Microsoft Exchange via PowerShell ](/docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md).

All the job steps generated by the scaffolding can be found in the
[Create Connector Synchro Complete](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md)
scaffolding.

Check
[Create Connector Synchro Incremental](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md)
for incremental synchronization.

### Permissions

The execution of a Job entails the execution of Tasks, reading/writing to the Database and sending
files over to the Server. These operations are protected by an authorization mechanism.

A [ Profile ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) is required and
must have the proper permissions for the associated Job or Task to perform.

Here, jobs use the default `OpenId`.

### Job Launch

Scheduling the job execution can rely either on Identity Manager's scheduler or an external
scheduler.

#### With Scheduler

Use the [ Job ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Cron Tab Expression attribute.

#### With an external scheduler

An external scheduler would rely on the
[ Usercube-Invoke-Job ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md) tool.

## Validation

### Deploy Configuration

The configuration is written to the database using the
[ Deploy Configuration Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
tool.

### Test

#### ADMicrosoftExchange Prerequisites

An Active Directory configuration is required for Microsoft Exchange to work. Fill
the[ Fulfill Microsoft Exchange via PowerShell ](/docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md) settings in accordance with the
configuration.

To reset the password, if **AuthType** is `Basic`, then **EnableSSL** must be `true`.  
Otherwise, if **AuthType** is `Kerberos`, then **EnableSSL** is not required.

#### Mailbox Creation

To create a new mailbox, apply the following procedure:

1. Select a user and validate both resource types `ADMicrosoftExchange_Entry_NominativeUser` and
   `MicrosoftExchange_Mailbox_NominativeUser`.
2. In the Provisioning Review, confirm both resource types.
3. First, launch the job AD Microsoft Exchange Synchronization.
4. Then, launch the job Microsoft Exchange Synchronization.

In fact, an `ADMicrosoftExchange_Entry` is required to create a mailbox. To update or delete an
existing mailbox, the Active Directory part can be skipped.

#### Interface display

The Synchronization job should be found in the UI, under the **Job Execution** menu, with the name
input in the Job's **DisplayName_Li** attribute.

![Microsoft Exchange Jobs](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/powershell-fulfill/microsoftexchange_jobs_5.1.7.webp)

From there, the Synchronization job can be launched and debugged (if needed).

After execution, Microsoft Exchange resources and databases should be in the `UR_Resources` table of
the SQL Server database.

The results can also be viewed on the UI:

![Microsoft Exchange Menu Items](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/powershell-fulfill/microsoftexchange_fulfill_menu_item_5.1.7.webp)

![Microsoft Exchange Display Entity Type](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/powershell-fulfill/microsoftexchange_fulfill_display_entity_type_5.1.7.webp)

![Microsoft Exchange Display Table](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/powershell-fulfill/microsoftexchange_fulfill_display_table_5.1.7.webp)

# Export CyberArk Data via SCIM

This guide shows how to set up a [SCIM](/docs/identitymanager/6.2/integration/connectors/connector-catalog/scim.md) connector to
extract data from your CyberArk instance into CSV source files that will in turn be fed to the
[ Upward Data Synchronization ](/docs/identitymanager/6.2/identity-management/synchronization/sync-configuration.md) task and to your
Identity Manager resource repository. It will focus on registering Identity Manager within the
target CyberArk instance, configuring the connector, and building the job to perform regularly
scheduled synchronization.

## Prerequisites

### External system configuration

Usually CyberArk provides the environment to use AAM (_Application Access Manager_) and SCIM
(_System for Cross-domain Identity Management_). For example, PrivateArk Server, PrivateArk and
other tools can be found on a VM-based environment.

It is strongly recommended that you follow the official **CyberArk SCIM Server Implementation
Guide** (the CyberArk team can provide this document) in order to set up the environment. When
you've completed the installation or if CyberArk has already installed it, you can verify the
installation:

1. Log into **PrivateArk Client**, locate and open the **SCIM Config** safe.
2. Check the presence of the following objects:

   - `Encryption-key`: The SCIM Server uses a local cache to store objects retrieved from the
     Vault. Although no credentials (other than the ones in the SCIM Config safe, which are not
     stored on the cache) are retrieved, we encrypt the cache with this encryption key. The key is
     randomly generated, and not exposed by the installer, but can be changed if desired.
   - `GlobalConfig.yml`: This is the configuration file for the overall SCIM server settings. It is
     responsible for the setting of performance parameters and additional added features.
   - `Usercube-account`: This is a privileged account to allow Identity Manager to authenticate its
     REST API requests to the SCIM Server. The password for this account must be the same as the
     Identity Manager-user (Identity Manager can be replaced by any other name like Client).
   - `SCIM-account`: This is a privileged account, managed by the Central Policy Manager (CPM is
     the module of the PAM tool that is responsible for managing the passwords and any
     policies/exceptions configured), which allows the SCIM server to retrieve the password for
     SCIM-user through an Application Identity Manager (AIM) Credential Provider call.

3. Verify that the following **Users** were created in the PrivateArk Client:

   - Go to **Tools** > **Administrative Tools**.
   - Select **Users and Groups**.
   - Ensure the following users have been created:

     - `SCIM-user`: This is a CyberArk user with full privileges for creating and managing Safes,
       Accounts, Permissions, and Users. This user is required by the CyberArk's Command Line
       Interface (PACLI, used to perform quick Vault-level functions without logging in to the
       PrivateArk client) on the SCIM server for logging into the Vault and managing objects on
       behalf of client applications such as Identity Manager.
     - `Client-user`: This is a CyberArk user for authenticating requests made to the SCIM server
       using the REST API. (The name Client-user' can change and be replaced by Identity
       Manager-user' for example.)

   Now we can consider that the installation is correct, the login is `Usercube-user` and the
   password `CyberArk1`.

### Identity Manager configuration

This step sets up the Identity Manager Agent to use the SCIM connector and access the CyberArk data.

The settings must be entered in the appsettings.agent > Connections section. See the
[SCIM](/docs/identitymanager/6.2/integration/connectors/connector-catalog/scim.md) topic for additional information.

#### Connect to the target CyberArk instance

In the `Connections` section, add one new subsection that will contain the credentials for the
target CyberArk. Use a meaningful name to remember which CyberArk is accessed via this section.

> This example connects via the `SCIMCyberArkExport` connection to the CyberArk system:
>
>                         ```
>
>                             appsettings.agent.json
>
> { ... "Connections": { ... "SCIMCyberArkExport": { ... } } }
>
> ```
>
> ```

#### Input credentials

In the newly created subsection, fill in:

- The **Server** attribute with the CyberArk's address. It has the form:
  `https://host:port/CyberArk/scim`.
- The **Login** attribute with the User's login value (in our example, `Usercube-user`).
- The **Password** attribute with the User's login value (in our example, `Cyberark1`).

> For example:
>
>                         ```
>
>                             appsettings.agent.json
>
> { ... "Connections": { ... "SCIMCyberArkExport": { "Server": "https://host:port/CyberArk/scim",
> "Login": "Usercube-user", "Password": "Cyberark1" } } }
>
> ```
>
> ```

For pedagogical reasons, this guide focuses on the simplest way to set up the export, but it's not
the most secure. Hence it is strongly recommended that you protect credentials using Azure Key Vault
or CyberArk in a production environment.  
Netwrix Identity Manager (formerly Usercube)recommends completing this guide once, testing the
configuration, and only then, switching to a more secure way of storing credentials.

#### Set exported objects, exported attributes and export files

This step focuses on choosing and setting up the list of SCIM objects and attributes to be exported.

The **Filter** attribute defines what is exported. It is located in the
`appsettings.agent > Connections > SCIMCyberArkExport` subsection previously created.

##### Choose objects to export

The list of objects to export depends on the Role Model requirements. The list will evolve
iteratively as the project's needs become clearer.

The SCIM entities available in a CyberArk implementation are:

- **Users**: CyberArk Users.
- **Containers**: Containers/CyberArk Safes.
- **ContainerPermissions**: Permissions on CyberArk Safes.
- **Privileged Data**: Privileged Data/CyberArk Accounts.
- **Groups**: CyberArk Groups.

Filters are defined in the next part.

##### Filtering

An exhaustive list of entities and attributes provided by CyberArk is available in their
[technical documentation](https://docs.cyberark.com/Product-Doc/OnlineHelp/Idaptive/Latest/en/Content/Applications/AppsOvw/SCIM-Provisioning.htm)
or the SCIM `Swagger UI`.

The `Filter` and `FilterGroup` setting syntax is detailed in the
[SCIM](/docs/identitymanager/6.2/integration/connectors/connector-catalog/scim.md) optional attributes.

`SCIMSyntax` must also be set to `CyberArk` because the CyberArk system doesn't strictly follow all
the SCIM rules at the moment.

##### Example

The following example sets up the **Users**, **ContainerPermissions**, **Containers** and **Groups**
for export.

For **Users**, we give an example for each type of attribute:

- **userName** is an attribute of the base schema.
- **ldapFullDN** is an attribute of the `urn:ietf:params:scim:schemas:cyberark:1.0:User` schema
  because it is separated by `:`.
- **givenName** is a sub-attribute of the attribute `name` because it is separated by `:`.

Notice the `*` that separates the entities.

                    ```

                        appsettings.agent.json

{ ... "Connections": { ... "SCIMCyberArkExport": { "Server": "https://host:port/CyberArk/scim",
"Login": "Usercube-user", "Password": "Cyberark1", "Filter":
"Users;urn:ietf:params:scim:schemas:cyberark:1.0:User:ldapFullDN|ldapDirectory id userName active
name:givenName|middleName|familyName emails:value phoneNumbers:value title profileUrl source
nativeIdentifier*ContainerPermissions;id user:value group:value container:value rights*Containers;id
displayName type name", "FilterGroup": "Groups;id displayName", "SCIMSyntax": "CyberArk" } } }

````


##### Set up export files

The export generates CSV source files that will be fed to the [
Upward Data Synchronization
](/docs/identitymanager/6.2/identity-management/synchronization/sync-configuration.md) task.

The SCIM connector generates one file per entity, the name is generated as: ```EntryFile``` + ```'_'``` + ```FilterEntity``` or ```MembersFile``` + ```'_'``` + ```FilterGroupEntity```.

Moreover, ```SyncCookiesFile``` can be specified to indicate the location of the cookie file for an incremental export.

See the [SCIM](/docs/identitymanager/6.2/integration/connectors/connector-catalog/scim.md)topic for additional information.

The target directory and file name are chosen freely. However, Netwrix Identity Manager (formerly Usercube) strongly recommends using the [
Create a Working Directory
](/docs/identitymanager/6.2/installation/pre-installation/working-directory-setup.md) ```Temp/ExportOutput``` folder and choosing file names that start with the ```CyberArk_``` prefix.

##### Example

With the following example, the resulting files are:

- ```C:/UsercubeDemo/Temp/ExportOutput/CyberArk_Users.csv```
- ```C:/UsercubeDemo/Temp/ExportOutput/CyberArk_ContainerPermissions.csv```
- ```C:/UsercubeDemo/Temp/ExportOutput/CyberArk_Containers.csv```
- ```C:/UsercubeDemo/Temp/ExportOutput/CyberArk_members_Groups.csv```

````

appsettings.agent.json { ... "Connections": { ... "SCIMCyberArkExport": { "Server":
"https://host:port/CyberArk/scim", "Login": "Usercube-user", "Password": "Cyberark1", "Filter":
"Users;urn:ietf:params:scim:schemas:cyberark:1.0:User:ldapFullDN|ldapDirectory id userName active
name:givenName|middleName|familyName emails:value phoneNumbers:value title profileUrl source
nativeIdentifier*ContainerPermissions;id user:value group:value container:value rights*Containers;id
displayName type name", "FilterGroup": "Groups;id displayName", "EntryFile":
"C:/UsercubeDemo/Temp/ExportOutput/CyberArk", "MembersFile":
"C:/UsercubeDemo/Temp/ExportOutput/CyberArk_members", "SCIMSyntax": "CyberArk" } } }

````


Every file contains the data as CSV, with one column per attribute.

## Build the Connector

### Declare a connector

To be used for export tasks, a connector must be declared in the [Toolkit for XML Configuration](/docs/identitymanager/6.2/development/configuration-toolkit/index.md) and linked to an Agent.

It is strongly recommended that the applicative configuration be stored the [
Create a Working Directory
](/docs/identitymanager/6.2/installation/pre-installation/working-directory-setup.md) ```Conf``` folder as a set of ```xml``` files organized by connector.

- In the ```Conf``` folder, create a ```SCIMCyberArk``` directory.
- In the ```SCIMCyberArk``` directory create a ```CyberArk Connector.xml``` file.

  This file contains the declaration of the connector and the associated Entity Model.
- Use the [
  Connector
  ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) element to declare the connector with the following attributes:

  - __Identifier__ identifies this connector in the [Toolkit for XML Configuration](/docs/identitymanager/6.2/development/configuration-toolkit/index.md). We recommend using a meaningful name such as ```CyberArk```. If several connections to several CyberArk targets are possible, only one CyberArk Connector per Agent is used.
  - __DisplayName_Li, i ? [1..16]__ are used in the UI.
  - __Agent__ is the identifier of the Agent that will run this connector's export task. The Agent's identifier can be found in the agent's [appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md) \> OpenId \> AgentIdentifier.
- Don't forget the ```<?xml>``` and ```<ConfigurationFile>``` elements (see example below).

> This example declares the ```CyberArk``` connector on the ```Local``` agent:
>
>```
>
>Conf/SCIMCyberArk/CyberArk Connector.xml
>
> <?xml version="1.0" encoding="utf-8"?><ConfigurationFile xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="urn:schemas-usercube-com:configuration">    ...
>     <Connector Identifier="CyberArk" DisplayName_L1="CyberArk" Agent="Local" />    <Connection Identifier="SCIMCyberArkExport" Connector="CyberArk" DisplayName_L1="CyberArk" Package="Usercube.SCIM.CyberArk@0000001" />    ...
> </ConfigurationFile>
> ```

### Build the entity model

The exported data to be written to the [Identity Management](/docs/identitymanager/6.2/identity-management/index.md) must be aligned with the [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md).

The [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md) should match as closely as possible the structure of the CyberArk data relevant for Identity Manager. It is designed by analyzing the CyberArk data structure, and describing said data with the [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md) and [Entity Association](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md). Eventually, it is up to the integration team to design the [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md) that best serves the [Assignment Policy](/docs/identitymanager/6.2/access-governance/role-management/role-rules.md) needs. It will most likely be refined iteratively throughout the project integration.

A good starting point for the Entity Model is to mirror the shape of the exported CyberArk SCIM objects. This guide provides a few examples that can serve this purpose. Thus, CyberArk SCIM objects such as __Users__ and __Groups__ can be described by [Assignment Policy](/docs/identitymanager/6.2/access-governance/role-management/role-rules.md), and group membership by [Entity Association](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

The [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md) for the CyberArk connector is written in the [Toolkit for XML Configuration](/docs/identitymanager/6.2/development/configuration-toolkit/index.md). It is strongly recommended to write the entity model to the newly created ```Conf/SCIMCyberArk/CyberArk Connector.xml``` file.

#### Write entity types

Declaring an [Assignment Policy](/docs/identitymanager/6.2/access-governance/role-management/role-rules.md) is achieved with the ```<EntityType>``` tag and the following attributes:

- __Identifier__ is the entity type's name. It must be unique among the entity types. It is strongly recommended to prefix this name with the connector's name. An example for CyberArk is ```CyberArk_User```.
- __DisplayName_Li, i ? [1..16]__ are used in the UI to identify this [Assignment Policy](/docs/identitymanager/6.2/access-governance/role-management/role-rules.md) for the end-user. __DisplayName_L1__ is the name of the entity type in _language number one_. If this language is _English_, a good example value would be ```CyberArk - User```.

##### Example

````

Conf/SCIMCyberArk/CyberArk Connector.xml ...
<EntityType Identifier="CyberArk_User" DisplayName_L1="CyberArk - User"> ... </EntityType>...

````


The CyberArk SCIM objects attributes are modeled by [Assignment Policy](/docs/identitymanager/6.2/access-governance/role-management/role-rules.md)properties, with the ```<Property>``` tags declared as children of the ```<EntityType>```.

Remember that there are several kinds of by [Assignment Policy](/docs/identitymanager/6.2/access-governance/role-management/role-rules.md) (determined by the ```TargetColumnIndex```): scalar and navigation.

- Scalar properties can be defined to represent scalar attributes such as ```userName```, ```active``` or ```givenName```.
- Navigation properties represent associations such as group memberships.

Finally, the main attributes of the ```<Property>``` tag are the following:

- __Identifier__ identifies the property with a mandatory unique name. It must be unique among the entity properties for this entity type.
- __DisplayName_Li, i ? [1..16]__ are used in the UI.
- __Type__ defines the type of property. A scalar property type can be: ```String```, ```Bytes```, ```Int16```, ```Int32```, ```Int64```, ```DateTime```, ```Bool```, ```Guid```, ```Double```, ```Binary```, ```Byte```, or ```Option```. The navigation property type is ```ForeignKey```.
- __TargetColumnIndex__ defines in which column of the resource table the property is stored. See more details at [Entity Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

##### Example

This example defines an entity type named ```CyberArk_User``` to match the attributes selected for extraction from CyberArk in the previous example.

Notice the omitted __TargetColumnIndex__ attribute and the presence of ```Type="ForeignKey"``` for the ```groups``` and ```containers``` properties. If omitted, this attribute indicates that the properties are navigation properties.

````

Conf/SCIMCyberArk/CyberArk Connector.xml ...
<EntityType Identifier="CyberArk_User" DisplayName_L1="CyberArk User" DisplayName_L2="Compte CyberArk">
<Property Identifier="CyberArk_id" DisplayName_L1="Id" IsKey="true" TargetColumnIndex="0" Type="String" />
<Property Identifier="userName" DisplayName_L1="User Name" TargetColumnIndex="6" Type="String" />
<Property Identifier="active" DisplayName_L1="Active" TargetColumnIndex="7" Type="String" />
<Property Identifier="givenName" DisplayName_L1="First Name" TargetColumnIndex="8" Type="String" />
<Property Identifier="middleName" DisplayName_L1="Middle Name" TargetColumnIndex="9" Type="String" />
<Property Identifier="familyName" DisplayName_L1="Last Name" TargetColumnIndex="10" Type="String" />
<Property Identifier="emails" DisplayName_L1="Emails" TargetColumnIndex="11" Type="String" />
<Property Identifier="phoneNumbers" DisplayName_L1="Phone Numbers" TargetColumnIndex="12" Type="String" />
<Property Identifier="title" DisplayName_L1="Title" TargetColumnIndex="13" Type="String" />
<Property Identifier="profileUrl" DisplayName_L1="Profile Url" TargetColumnIndex="14" Type="String" />
<Property Identifier="dn" DisplayName_L1="DN" TargetColumnIndex="15" Type="String" />
<Property Identifier="source" DisplayName_L1="Source" TargetColumnIndex="16" Type="String" />
<Property Identifier="ldapFullDN" DisplayName_L1="LdapFullDN" TargetColumnIndex="17" Type="String" />
<Property Identifier="ldapDirectory" DisplayName_L1="LdapDirectory" TargetColumnIndex="18" Type="String" />
<Property Identifier="groups" DisplayName_L1="Groups" Type="ForeignKey" />
<Property Identifier="containers" DisplayName_L1="containers" Type="ForeignKey" /></EntityType>...

````


#### Write entity associations

[Assignment Policy](/docs/identitymanager/6.2/access-governance/role-management/role-rules.md) are associated through their navigation properties with [Entity Association](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) elements.

##### Example

The following example declares an ```n-n``` association between a ```CyberArk_User``` and ```CyberArk_Group```.

The ```groups``` property of a ```CyberArk_User``` is a collection of __Group__ IDs (modeled as an ```CyberArk_Group``` EntityType) of which this ```CyberArk_User``` is a member.

The ```Users``` property of a ```CyberArk_Group``` is a collection of ```CyberArk_User```IDs which are members of this __Group__.

````

Conf/SCIMCyberArk/CyberArk Connector.xml ...
<EntityAssociation Identifier="CyberArk_Group_Members" DisplayName_L1="Group Members" IsProperty1Collection="true" Property1="CyberArk_Group:Users" IsProperty2Collection="true" Property2="CyberArk_User:groups" />...

````


The exact nature of the IDs are described by the associated [Entity Association Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

Notice the format of the __Property1__ and __Property2__ xml attributes: the name of the entity type followed by ```:``` and the name of an entity property. It is a [Binding](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) that describes in one expression both the target entity type and property.

### Create mapping

The entity type must be mapped property by property to the exported attributes of CyberArk SCIM objects (namely, the columns of the CSV source files generated by the export).

The [Entity Type Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), [Entity Association Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), and Entity Property Mapping elements serve this purpose.

#### Write the entity type mapping

The [Entity Type Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) element maps scalar properties from the CSV source file to an entity type.

The CSV source file path is written to the __ConnectionTable__ xml attribute. The target entity type name is written to the __Identifier__ xml attribute.

````

Conf/SCIMCyberArk/CyberArk Connector.xml ...
<EntityTypeMapping Identifier="CyberArk_User" Connector="CyberArk" ConnectionTable="SCIMCyberArkExport_Users" >
... </EntityTypeMapping>...

````


To do so, the entity type mapping uses the [Entity Type Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) element with the ```<Property>``` tag. This maps the CSV column from ```ConnectionColumn``` to the target EntityType property which is written to the __Identifier__ attribute.

##### Example

````

Conf/SCIMCyberArk/CyberArk Connector.xml ...
<EntityTypeMapping Identifier="CyberArk_User" Connector="CyberArk" ConnectionTable="SCIMCyberArkExport_Users" >
<Property Identifier="CyberArk_id" ConnectionColumn="id" IsPrimaryKey="true" />
<Property Identifier="userName" ConnectionColumn="userName" />
<Property Identifier="active" ConnectionColumn="active" />
<Property Identifier="givenName" ConnectionColumn="name:givenName" />
<Property Identifier="middleName" ConnectionColumn="name:middleName" />
<Property Identifier="familyName" ConnectionColumn="name:familyName" />
<Property Identifier="emails" ConnectionColumn="emails:value" IsMultiValuedProperty="true" />
<Property Identifier="phoneNumbers" ConnectionColumn="phoneNumbers:value" IsMultiValuedProperty="true" />
<Property Identifier="title" ConnectionColumn="title" />
<Property Identifier="profileUrl" ConnectionColumn="profileUrl" />
<Property Identifier="ldapDirectory" ConnectionColumn="ldapDirectory" />
<Property Identifier="ldapFullDN" ConnectionColumn="ldapFullDN" />
<Property Identifier="source" ConnectionColumn="source" ScimSchema="urn:ietf:params:scim:schemas:pam:1.0:LinkedObject"/>
<Property Identifier="dn" ConnectionColumn="nativeIdentifier" ScimSchema="urn:ietf:params:scim:schemas:pam:1.0:LinkedObject" />
</EntityTypeMapping>...

````


As a result, after synchronization, the ```UR_Resource``` table will be updated from the CSV source files data.

Let's take the example of a new ```CyberArk_User``` which has never been synchronized. The ```UR_Resource``` table receives a new line for which the _6th_ column (```userName```) is filled in with the ```userName``` column from the ```C:/UsercubeDemo/Temp/ExportOutput/CyberArk_Users.csv``` file.

#### Write the entity association mapping

The [Entity Association Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) element maps navigation properties, used in [Entity Association](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

An [](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)[Entity Association Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) element refers to an [Entity Association](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) written to the __Identifier__ xml attribute. Then, just as the [Entity Type Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) element, it maps columns values from a CSV source file to an EntityType property.

##### Example

The following example describes the actual user/group associations between ```CyberArk_User``` and ```CyberArk_Group```.
These associations are exported from the CyberArk system into the ```C:/UsercubeDemo/Temp/ExportOutput/CyberArk_members_Groups.csv``` file. Each line of the file associates a value (property ```CyberArk_id``` from ```CyberArk_Group```) and a MemberId (property ```CyberArk_id``` from ```CyberArk_User```).

| value | MemberId |
| --- | --- |
| 1 | 100 |
| 1 | 101 |
| 2 | 102 |
| 2 | 103 |
| 3 | 104 |

The following [](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)[Entity Association Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) describes the mapping for the ```CyberArk_Group_Members``` EntityAssociation:

````

Conf/SCIMCyberArk/CyberArk Connector.xml ...
<EntityAssociation Identifier="CyberArk_Group_Members" DisplayName_L1="Group Members" IsProperty1Collection="true" Property1="CyberArk_Group:Users" IsProperty2Collection="true" Property2="CyberArk_User:groups" /><EntityAssociationMapping Identifier="CyberArk_Group_Members" Column1="value" EntityPropertyMapping1="CyberArk_Group:CyberArk_id" Column2="MemberId" EntityPropertyMapping2="CyberArk_User:CyberArk_id" Connector="CyberArk" ConnectionTable="SCIMCyberArkExport_members_Groups" />...

````


Here are a few explanations:

###### Users_CyberArk_Group_

The ```Users``` property in the ```CyberArk_Group``` entity:

- is written to the __Property1__ attribute of the ```CyberArk_Group_Members``` [Entity Association](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) element.
- is filled in by values from the ```MemberId``` column (written to the __Column2__ attribute of the ```CyberArk_Group_Members``` [](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)[Entity Association Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) element) in the ```C:/UsercubeDemo/Temp/ExportOutput/CyberArk_members_Groups.csv``` file.

These values identify resources of type ```CyberArk_User``` by their ```CyberArk_id``` property (written to the __EntityPropertyMapping2__ attribute of the [](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)[Entity Association Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) element.

###### Groups_CyberArk_User_

The ```Groups``` property in the ```CyberArk_User``` entity:

- is written to the __Property2__ attribute of the ```CyberArk_Group_Members``` [Entity Association](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) element).
- is filled in by values from the _value_ column (written to the __Column1__ attribute of the ```CyberArk_Group_Members``` [Entity Association Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) element) in the ```C:/UsercubeDemo/Temp/ExportOutput/CyberArk_members_Groups.csv``` file.

These values identify resources of type ```CyberArk_Group``` by their ```CyberArk_id``` property (written to the __EntityPropertyMapping1__ attribute of the [Entity Association Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) element).

## Display

This step focuses on configuring a nice display for the synchronized list of resources in the UI.

### Navigation

A [Menu Item](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) can be added to include a link to the resources list in the left menu in the UI home screen.

#### Parent menu item

It strongly recommended to gather synchronized resources menu items under parent menu items. This is usually declared in the configuration root folder ```Nav.xml``` file.

##### Example

````

Conf/Nav.xml ...

<MenuItem Identifier="Nav_Connectors" DisplayName_L1="Connectors" DisplayName_L2="Connecteurs" ParentMenuItem="Nav" />...

````


#### Child menu item

It is strongly recommended to use a new ```CyberArk Nav.xml``` file in the ```SCIMCyberArk``` connector's folder in order to add the CyberArk SCIM objects menu item.

##### Example

````

Conf/SCIMCyberArk/CyberArk Nav.xml ...

<MenuItem Identifier="Nav_Connectors_CyberArk" DisplayName_L1="CyberArk" DisplayName_L2="CyberArk" ParentMenuItem="Nav_Connectors">  <MenuItem Identifier="Nav_Connectors_CyberArk_User" DisplayName_L1="CyberArk Users" DisplayName_L2="Comptes CyberArk" EntityType="CyberArk_User" />  <MenuItem Identifier="Nav_Connectors_CyberArk_Group" DisplayName_L1="CyberArk Groups" DisplayName_L2="Groupes CyberArk" EntityType="CyberArk_Group" />  <MenuItem Identifier="Nav_Connectors_CyberArk_Container" DisplayName_L1="CyberArk Safes" DisplayName_L2="Safes CyberArk" EntityType="CyberArk_Container" /></MenuItem>...

````


Adds a new menu item under the ```Nav_Connectors``` menu item declared in the root ```Nav.xml``` file. This new menu item gives access to the list of synchronized CyberArk SCIM objects.

![SCIM CyberArk Menu Items](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/scim-cyberark-export/scim_cyberark_export_menu_item_5.1.6.webp)

### Configuration

It is strongly recommended that the display configuration be written to a new ```CyberArk UI.xml``` file in the ```SCIMCyberArk``` connector's folder.

#### Display entity type

The [Display EntityType](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) describes how a single resource should be displayed.

##### Example

````

Conf/SCIMCyberArk/CyberArk UI.xml ... <DisplayEntityType Identifier="CyberArk_User">
<Property OutputType="BasicCollection" Identifier="groups" />
<Property OutputType="BasicCollection" Identifier="containers" /></DisplayEntityType>...

````


This configuration configures that display for [christian.adam@acme.com](mailto:christian.adam@acme.com):

![SCIM CyberArk Display Entity Type](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/scim-cyberark-export/scim_cyberark_export_display_entity_type_5.1.6.webp)

The scalar properties don't need to be configured: they are automatically displayed. The only information that the [DisplayEntityType](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) adds here, is that the property ```BasicCollection``` is a navigation property. An eye icon will be displayed to take you directly to the matching page.

#### Display table

The [DisplayTable](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) elements describe how a list of resources should be displayed.

The [DisplayTable](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) contains a list of [DisplayTableColumn](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md#child-element-column) elements that identify which properties should be included in the list display.

##### Example

````

Conf/SCIMCyberArk/CyberArk UI.xml ...
<DisplayTable Identifier="CyberArk_User" EntityType="CyberArk_User" DisplayTableDesignElement="resourcetable" IsEntityTypeDefault="true">
<Column DefaultSortPriority="1" DisplayBinding="userName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
<Column DisplayBinding="givenName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
<Column DisplayBinding="familyName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
<Column DisplayBinding="ldapDirectory" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
<Column DisplayBinding="ldapFullDN" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
<Column DisplayBinding="title" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
<Column DisplayBinding="active" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" /></DisplayTable>...

````


configures the following list display:

![SCIM CyberArk Display Table](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/scim-cyberark-export/scim_cyberark_export_display_table_5.1.6.webp)

#### Internal display name

An ```InternalDisplayName``` can also be declared as an [
Entity Type
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md). The ```InternalDisplayName``` is used in several UI screens to identify a resource for the user.

With no custom ```InternalDisplayName```, a default value is used (instead of the first property of the identity) containing the string _"name"_. If no such property is found, the first declared property of the entity type is used.

##### Example

````

Conf/SCIMCyberArk/CyberArk UI.xml ...
<EntityPropertyExpression Identifier="CyberArk_User_InternalDisplayName" Expression="C#:resource:return resource.userPrincipalName ?? resource.mail ?? resource.displayName ?? resource.Id.ToString();" EntityType="CyberArk_User" Property="InternalDisplayName" />...

````


adds the ```InternalDisplayName``` to the CyberArk_User entity type to be used by the UI.

### Permissions

This step focuses on setting up permissions for Identity Manager's end-users granting them access to the connector.

The [Access Control Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) and [Access Control Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) elements define [AccessControlPermission](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) for end-user profiles to read and write the connector's data (such as resources of a given entity type). It used by the UI when displaying data such as resources and available roles.

It is strongly recommended that permissions be written to a new file. For example, the administrator profile permissions can be written to the ```CyberArk Profile Administrator.xml``` file.

#### Example

The following example sets permissions for the ```Administrator``` profile.

It entitles an administrator to display ```CyberArk SCIM``` resource and role categories from the UI.

````

Conf/AzureAD/AzureAD Profile Administrator.xml ...
<AccessControlRule Profile="Administrator" EntityType="ResourceType" Identifier="Administrator_ResourceTypeSelector_resourceType_CyberArk" DisplayName_L1="Administrator_ResourceTypeSelector_resourceType_CyberArk">
<Entry Permission="/Custom/Resources/CyberArk_User/View" CanExecute="true" />
<Entry Permission="/Custom/Resources/CyberArk_Group/View" CanExecute="true" />
<Entry Permission="/Custom/Resources/CyberArk_Container/View" CanExecute="true" /></AccessControlRule><AccessControlRule Profile="Administrator" EntityType="Category" Identifier="Administrator_ResourceTypeSelector_category_CyberArk" DisplayName_L1="Administrator_ResourceTypeSelector_category_CyberArk">
<Entry Permission="/Custom/Resources/CyberArk_User/View" CanExecute="true" />
<Entry Permission="/Custom/Resources/CyberArk_Group/View" CanExecute="true" />
<Entry Permission="/Custom/Resources/CyberArk_Container/View" CanExecute="true" /></AccessControlRule>...

````


## Jobs

### Construction

This step focuses on writing a ```Complete``` Synchronization job.

It is strongly recommended to write Jobs associated with the ```CyberArk``` connector to the ```Conf/SCIMCyberArk/SCIM CyberArk Jobs.xml``` file.

### Components

All the job steps can be found in the [Create Connector Synchro Complete](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md) scaffolding.

#### Example

````

Conf/SCIMCyberArk/SCIM CyberArk Jobs.xml ...
<CreateConnectorSynchroComplete Connector="CyberArk" DisplayName_L1="01: CyberArk - Synchronization Complete (scaffolding)" JobIdentifier="CyberArk_Synchronize_Complete_Scaffolding">
<OpenIdIdentifier Identifier="Job"/></CreateConnectorSynchroComplete>...

````


This job will be executed on CyberArk's connector agent.

Notice the __Identifier__ attribute with the value ```Job``` in the ```OpenIdIdentifier``` tag. It refers to the ```ClientId``` written to the [appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md) technical configuration. The Tasks will authenticate with the profile associated with this ```ClientId``` in the ```<OpenIdClient>``` xml configuration element.

Incremental synchronization can be configured with the following [Create Connector Synchro Incremental](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md).

### Permissions

The execution of a Job entails execution of Tasks, reading/writing to the Database and sending files over to the Server. These operations are protected by an authorization mechanism.

To complete a Job, the Agent, via the [Usercube-Invoke-Job](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md) uses:

- A [Profile](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) associated with the Job itself to read/write:
  - ```UJ_Jobs``` and ```UJ_Tasks``` tables in a list of tasks
  - ```UJ_JobInstances``` tables in the progress report
- a Profile for each Task, to read/write ```UJ_TaskInstances``` tables (Progress Report) and perform other operations such as sending export files over to the Server.

Each Profile must be assigned the right permissions for the associated Job or Task to perform.

Every request from Agent to Server within the execution of a Job needs to be authenticated with an [OpenIdClient](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Connect /Secret pair, linked to a Profile.

#### Create a profile

Here, we focus on creating one profile, used by the Job and every Task of the Job.

````

Conf/Profile AgentJob.xml ...
<Profile Identifier="AgentSynchro" DisplayName_L1="Agent Synchro" />...

````


As the Principle of Least Privilege states, Netwrix Identity Manager (formerly Usercube)strongly recommends that you create a [Profile](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) to be used during the Synchronization jobs which will be different from the one used during the Provisioning job. This contributes to separating access rights. The same principle applied even more rigorously would make Identity Manager create one profile per Task. It isn't necessary as most Synchronization tasks require the same permissions.

#### Grant synchronization access rights to the profile

For an Agent to launch server-side Tasks from the Job via the [Usercube-Invoke-Job](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md), the profile linked to these tasks and used by the tool should be authorized to execute said tasks.

Server-side Tasks for a simple Synchronization job usually are:

- Prepare-Synchronization
- Synchronization

Required permissions are:

__View Tasks__

- ```/Jobs/Task/Query```

__Progress Report__

- ```/Jobs/JobInstance/Query```
- ```/Jobs/JobInstance/Update```
- ```/Jobs/TaskInstance/Query```
- ```/Jobs/TaskInstance/update```

__Synchronization and Prepare-Synchronization__

- ```/Connectors/Connector/Query```
- ```/Connectors/SynchronizeSession```

Granting access can be done via the [Synchronization Access Control Rules](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md) scaffolding and the[Job View Access Control Rules](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md) scaffolding.

The following examples (or similar) should be written to ```Conf/Profile AgentSychro.xml```.

> This example entitles the administrator profile to run any synchronization job:
>
> ```
>
> Conf/Profile AgentSychro.xml
> ...
> <SynchronizationAccessControlRules Profile="AgentSynchro"/><JobViewAccessControlRules Profile="AgentSynchro"/>...
>
> ```

#### Grant end-users permissions to run jobs from the UI

In addition, for end-users to be able to launch a job from the UI, they must be assigned a profile with the following access rights:

- ```/Jobs/RunJob/Launch```

This can be done via the[Job Execution Access Control Rules](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md) scaffolding.

##### Example

````

Conf/Profile AgentSychro.xml ...
<JobExecutionAccessControlRules Profile="AgentProfileForSynchro"/>...

````


#### Declare usable ClientId/Secret pairs in the configuration

An Agent's [Profile](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) is associated with a ```ClientId/Secret``` pair used by the Agent to authenticate to the Server.

Usable ```ClientId/Secret``` pairs are written to the database from the xml configuration using the [OpenIdClient](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) xml element.

It is strongly recommended that you write the ```<OpenIdClient>``` xml element to a new or existing ```OpenIdClients.xml``` file in the configuration root folder.

The ```ClientId/Secret``` pair hence created must be associated with the profile created or updated in the previous step, via the __Profile__ attribute.

##### __Example__

The following example creates a ```ClientId/Secret``` pair to be used by the Agent to authenticate to the Server and complete Jobs. The secret is hashed with the [
Usercube-New-OpenIDSecret
](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md) tool.

````

Conf/OpenIdClients.xml ...
<OpenIdClient Identifier="Job" HashedSecret="K7gNU3sdo+Op8wNhqoVWhr5v6s1xYv72ol/pe/Unols=" DisplayName_L1="ClientId for Jobs" DisplayName_L2="ClientId pour les jobs" Profile="Administrator" />
...

````


#### Set up the Agent to use ClientId/Secret pairs

The ```ClientId/Secret``` pairs that the Agent may use are written to the Agent's [appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md) technical configuration set.

The ```ClientId``` of such ```ClientId/Secret``` pairs can then be used as a value in a Task __OpenIdClient__ attribute.

Pairs written in the ```OpenIdClient``` section may be used by Tasks.

The Job itself uses the ```DefaultOpenIdClient``` value.

> This example sets the "Job/secret" pair to be used by tasks and jobs:
>
> ```
> appsettings.agent.json
>  {
>     ...
>     "OpenId":{
>         "OpenIdClients": {
>             "Job": "secret"
>          },
>          "DefaultOpenIdClient": "Job"
>     }
>  }
>
> ```

### Job launch

Scheduling the job execution can rely either on Identity Manager's scheduler or an external scheduler.

#### With Identity Manager's scheduler

Use the Job [Job](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) attribute.

> This example uses Identity Manager's scheduler to execute the ```CyberArk_Synchronize_Complete_Manually``` job every fifteen minutes:
>
> ```
> Conf/SCIMCyberArk/SCIM CyberArk Jobs.xml
> <Job Identifier="CyberArk_Synchronize_Complete_Manually" CronTabExpression="*/15 * * * *" DisplayName_L1="01: CyberArk - Synchronization Complete (manually)" DisplayName_L2="00: CyberArk - Synchronisation Complete (manuelle)" Agent="Local">  ...
> </Job>
>
> ```

For more details about checking Crontab expressions, see the [crontab.guru](https://crontab.guru/every-15-minutes) website.

#### With an external scheduler

An external scheduler would rely on the [Usercube-Invoke-Job](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md) tool.

##### Example

The following command can be scheduled. It executes the ```CyberArk_Synchronize_Complete_Manually``` using the "Job/secret" authentication pair to connect to the Identity Manager Server at ```http://usercube.contoso.com```.

````

./identitymanager-Invoke-Job.exe -j "CyberArk_Synchronize_Complete_Manually" --api-secret secret
--api-client-id Job --api-url "http://usercube.contoso.com"

````


## Validation

### Deploy configuration

The configuration is written to the database using the [Deploy Configuration Task](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

### Test

The Synchronization job should be found in the UI, under the __Job Execution__ menu, with the name input in the Job's __DisplayName_Li__ attribute.

From there, it can be launched and debugged (if needed).

After execution, CyberArk SCIM Objects resources should be in the ```UR_Resources``` table of the SQL Server database.
````

# Provision Salesforce Users' Profiles via SCIM

This guide shows how to provision a user's account profile in a Salesforce system with the SCIM
connector.

## Prerequisites

This guide supposes that you already have a working synchronization for Salesforce users' accounts,
entitlements and links between accounts and entitlements.

## Context

In Salesforce, both `profiles` and `permission sets` are in the `Entitlements` entity, whereas they
are not managed the same way: a user account must have a profile and only one, while it can have
zero to several permission sets.

This implies a difference of treatment based on the entitlement's `type`.

## Configuration

In order to handle this special case, Identity Manager expects, for now, a very precise
configuration. A generic configuration element will come soon to be able to customize and apply this
special treatment in other cases.

For now, for your `EntityType` representing Salesforce's `Entitlements` entity type, you need to
have an entity property with exactly `type` as identifier:

```

    <Property Identifier="type" DisplayName_L1="Type" TargetColumnIndex="13" Type="String" />

```

And to map it in the `Entitlements` entity type mapping:

```

    <Property Identifier="type" ConnectionColumn="type" />

```

That is all you need to do. With the next synchronization, all the entitlements will have their
`type` and then the special treatment can be done for those with the `Profile` type when
provisioning users' entitlements.

# For Microsoft Entra ID

This example is about implementing incremental synchronization for an
[ Microsoft Entra ID](/docs/identitymanager/6.2/integration/connectors/connector-catalog/azure-ad.md) connector (formerly
Microsoft Azure AD).

## Build the Incremental Synchronization Job

Identity Manager provides a full-written job to perform incremental synchronization through the UI.

See how to launch incremental
[ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md)via the UI.

> For example:
>
>                         ```
>
>                             Conf/AzureAD/AzureAD Jobs.xml
>
> <Job Identifier="AzureAD_Synchronization_Delta" DisplayName_L1="10: AzureAD - Synchronization (delta)" Agent="Local">
> ... </Job>
>
> ```
>
> ```

### Components

Identity Manager provides a
[Create Connector Synchro Incremental](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md)
scaffolding that generates the configuration for these steps.

> For example:
>
>                         ```
>
>                             Conf/AzureAD/AzureAD Jobs.xml
>
> <CreateConnectorSynchroIncremental Connector="AzureAD" DisplayName_L1="AzureAD Synchronization (delta)">
> <OpenIdIdentifier Identifier="Job"/></CreateConnectorSynchroIncremental>
>
> ````
>
>
> Note that the ```Job``` value in ```OpenIdIdentifier``` refers to the ```ClientId``` written to the [](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md#)[appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md) file. Each task will authenticate with the profile associated with this ClientId.
> ````

### Permissions for the agent

This part is not specific to a connector type, see the
[ Set Up Incremental Synchronization ](/docs/identitymanager/6.2/identity-management/synchronization/index.md) topic for additional information.

### Agent's authentication to the server

This part is not specific to a connector type, see the
[ Set Up Incremental Synchronization ](/docs/identitymanager/6.2/identity-management/synchronization/index.md) topic for additional information.

### Permissions for users

This part is not specific to a connector type, see the
[ Set Up Incremental Synchronization ](/docs/identitymanager/6.2/identity-management/synchronization/index.md) topic for additional information.

## Schedule the Job

Scheduling the job execution can rely either on Identity Manager's scheduler or on an external
scheduler.

### Using scheduler

> The following example uses Identity Manager's scheduler to execute the
> `AzureAD_Synchronization_Delta` job every fifteen minutes:
>
>                         ```
>
>                             Conf/AzureAD/AzureAD Jobs.xml
>
> <Job Identifier="AzureAD_Synchronization_Delta" CronTabExpression="*/15 * * * *" DisplayName_L1="10: AzureAD - Synchronization (delta)" Agent="Local">
> ... </Job>
>
> ```
>
> ```

### Using an external scheduler

An external scheduler relies on
the[ Usercube-Invoke-Job ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md).exe.

> The following command can be scheduled. It executes the `AzureAD_Synchronization_Delta` job using
> the `Job/secret` authentication pair to connect to the Identity Manager Server at
> `http://usercube.contoso.com`:
>
>                         ```
>
> ./identitymanager-Invoke-Job.exe -j "AzureAD_Synchronization_Delta" --api-secret secret --api-client-id
> Job --api-url "http://usercube.contoso.com"
>
> ```
>
> ```

## Validate the Job

Validate the job's execution by proceeding as follows:

1. Deploy the XML configuration to the database, by using the
   [ Deploy Configuration Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).
2. In the UI, access the **Job Execution** page from the dashboard's **Administration** section.
3. Find the job named with the string input in the job's `DisplayName_Li` property, and launch it.
4. Once the job is completed, Microsoft Entra ID objects should be synchronized to the database's
   `UR_Resources` table.

# Set up SharePoint's Export and Synchronization

This guide shows how to set up a [SharePoint](/docs/identitymanager/6.2/reference/index.md)
connector to extract data from your SharePoint instance into CSV source files that will be fed to
the Synchronization task and to your Identity Manager resource repository. It will focus on
registering Identity Manager within the target SharePoint, configuring the connector, and building
the job to perform a regularly scheduled synchronization.

## Prerequisites

### External system configuration

This step is designed to grant Identity Manager a service account to authenticate with the target
SharePoint sites. It includes the following substeps:

- Create a service account for Identity Manager in your Microsoft Entra ID (formerly Microsoft Azure
  AD).
- Go the SharePoint sites which need to be scanned.
- Log in using the organization credentials.
- Go to the **Members List** in the right corner.
- Click on the **Add members** button.
- Enter the name of the Identity Manager service account or its email address.

![SharePoint Export Add Member](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/sharepoint-export/sharepoint_export_add_member.webp)

The service account is now a member of the site. However, to scan the site, the service account
needs to be owner of the site.

- Go to the **Members List** in the right corner.
- Under the name of the Identity Manager service account, click on the arrow.
- Choose **Owner**.

![SharePoint Export Role Owner](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/how-tos/sharepoint-export/sharepoint_export_role_owner.webp)

### Configuration

This step sets up the Identity Manager Agent in order to use the SharePoint connector and access the
SharePoint data.

This guide focuses on the[ Architecture ](/docs/identitymanager/6.2/getting-started/architecture-overview.md) method. Remember that
settings can also be input through [ Architecture ](/docs/identitymanager/6.2/getting-started/architecture-overview.md).

#### Connect to the SharePoint instance

In this `Connections` section, add one new subsection that will contain the credentials for the
target SharePoint.

> This example connects via the `SharePointExportContoso` connection to the Contoso SharePoint site:
>
>                         ```
>
>                             appsettings.agent.json
>
> { ... "Connections": { ... "SharePointExportContoso": { ... } } }
>
> ```
>
> ```

#### Input credentials

In the newly created subsection, fill in:

- The **Server** attribute with the address of the root SharePoint site to scan.
- The **Login** attribute with the login of the service account created.
- The **Password** attribute with the password of the service account created.

> For example:
>
>                         ```
>
>                             appsettings.agent.json
>
> { ... "Connections": { ... "SharePointExportContoso": { "Server":
> "https://contoso.sharepoint.com/", "Login": "usercube.service@contoso.com", "Password":
> "19f23f48379d50a9a50b8c" } } }
>
> ```
>
> ```

For pedagogical reasons, this guide focuses on the simplest way to set up the export, but it's not
the most secure. Hence it is strongly recommended that you protect credentials using Azure Key Vault
or Cyber Ark in a production environment.  
Netwrix Identity Manager (formerly Usercube) recommends completing this guide once, testing the
configuration, and only then, switching to a more secure way of storing credentials.

##### Set up export files

The export generates CSV source files that will be fed to the
[ Upward Data Synchronization ](/docs/identitymanager/6.2/identity-management/synchronization/sync-configuration.md) task.

The target path for these files can be set up using the following settings:

- `appsetings.agent > Connections > SharePointExportContoso > OutputDir`
- `appsetings.agent > Connections > SharePointExportContoso > FileNamePrefix`

###### Example

                    ```

                        appsettings.agent.json

{ ... "Connections": { ... "SharePointExportContoso": { "Server": "https://contoso.sharepoint.com/",
"Login": "usercube.service@contoso.com", "Password": "19f23f48379d50a9a50b8c" } } }

````


### SharePoint sites

Different kinds of SharePoint sites exist. We will describe here the different cases that the integration team might encounter and how to handle them.

#### Root site with subsites

A root site has a URL like ```https://contoso.sharepoint.com``` and can have subsites. For example, the subsite ```Finance``` has a URL like ```https://contoso.sharepoint.com/Finance```. Subsites can also have subsites.
To scan the root site and the subsite tree, the root site must be specified in the __Server__ attribute.
Retrieved users can be assigned to/removed from all groups found, but cannot be created. To create a user account, you need to create it in the associated Microsoft Entra ID: it will automatically create a SharePoint user account.

#### Multiple sites

A SharePoint can also have other sites which are not subsites of the root site. For example, the site ProjectTeam has a URL like ```https://contoso.sharepoint.com/sites/ProjectTeam```.
These sites can't be scanned from the root site by using the __Server__ attribute.

To scan these sites, you have to export their URL from SharePoint in a CSV file and use the __CsvUrls__ attribute in the settings.

###### Example

                    ```

                        appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "SharePointExportContoso": {
      "Server": "https://contoso.sharepoint.com/",
      "Login": "usercube.service@contoso.com",
      "Password": "19f23f48379d50a9a50b8c"
      "CsvUrls": "C:/identitymanager/Temp/ExportOutput/SP_otherSites.csv�URL�,"
    }
  }
}
````

In this example, `C:/identitymanager/Temp/ExportOutput/SP_otherSites.csv` is the path of the exported CSV
file, `URL` is the column name of the URLs, and `,` is the separator used in the file. The character
`�` is used to separate the three data items.

The CSV file containing the URLS can be generated with two methods:

- Go to `https://contoso-admin.sharepoint.com` of your SharePoint site, in the menu **Sites** >
  **Active sites** and click on the **Export** button above the table.
- Use a script with the
  [SharePointOnlinePowerShell commands](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/?view=sharepoint-ps),
  specifically
  [Get-SPO Site](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/get-sposite?view=sharepoint-ps).

These sites are not synchronized with the root site. Users present in a site are not necessarily
present in the others. You can only assign users to a SharePoint group, on condition that they are
already members of this site. You can't use the SharePoint connector to make a user a member of this
kind of site. Depending on the system you are working on, you could achieve this by using the
associated Microsoft Entra ID or the system generating these SharePoint sites (for example,
Microsoft Teams can create an associated SharePoint site for each Teams Group).

## Build the Connector

### Declare a connector

To be used for export and fulfill tasks, a connector has to be declared in the applicative
configuration and linked to an Agent. See the
[Toolkit for XML Configuration](/docs/identitymanager/6.2/development/configuration-toolkit/index.md) topic for additional information.

It is strongly recommended that the applicative configuration be stored in the working directory
`Conf` folder as a set of `xml` files organized by connector. See
the[ Create a Working Directory ](/docs/identitymanager/6.2/installation/pre-installation/working-directory-setup.md)
topic for additional information.

- In the `Conf` folder, create a `SharePoint` directory.
- In the `SharePoint` directory, create a `SharePoint Connector.xml` file.

  This file should contain the declaration of the connector and the associated
  [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md).

- Use the [ Connector ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)element to
  declare the connector with the following attributes:

  - **Identifier** identifies this connector in the applicative configuration. See the
    [Toolkit for XML Configuration](/docs/identitymanager/6.2/development/configuration-toolkit/index.md) topic for additional information.
    It is strongly recommended to use a meaningful name such as `SharePoint`. If several
    connections to several SharePoint targets are possible, only one SharePoint Connector per
    Agent is used.
  - **DisplayName_Li, i ? [1..16]** are used in the UI.
  - **Agent** is the identifier of the Agent that runs this connector's export task. The Agent's
    identifier can be found in the agent's
    [appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
    configuration set > OpenId > AgentIdentifier setting attribute.

- Don't forget the `<?xml>` and `<ConfigurationFile>` elements (see example below).

> This example declares the `SharePoint` connector on the `Local` agent:
>
>                         ```
>
>                             Conf/SharePoint/SharePoint Connector.xml
>
> <?xml version="1.0" encoding="utf-8"?><ConfigurationFile xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="urn:schemas-usercube-com:configuration">    ...
>
>     <Connector Identifier="SharePoint" DisplayName_L1="SharePoint" Agent="Local"/>    <Connection Identifier="SharePointExportContoso" Connector="SharePoint" DisplayName_L1="SharePoint" Package="Usercube.SharePoint@0000001" />    ...
>
> </ConfigurationFile>
>
> ```
>
> ```

### Build the entity model

The exported data to be written to the resource repository must be aligned with the
[Entity Model](/docs/identitymanager/6.2/reference/entity-model.md). See
the[ Identity Management ](/docs/identitymanager/6.2/identity-management/index.md)topic
for additional information.

The [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md) should match as closely as possible the structure
of the SharePoint data relevant for Identity Manager. It is designed by analyzing the SharePoint
data structure, and describing said data with [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md)and
[ Entity Association ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

Eventually, it is up to the integration team to design the
[Entity Model](/docs/identitymanager/6.2/reference/entity-model.md) that best serves the
[ Assignment Policy ](/docs/identitymanager/6.2/access-governance/role-management/role-rules.md)needs. It will be refined
iteratively throughout the project phase.

A good starting point for the Entity Model is to mirror the shape of the exported SharePoint
objects. This guide provides a few examples that can serve this purpose.

#### Write the entity model

The [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md) for the SharePoint connector is written in the
applicative configuration. See the [Toolkit for XML Configuration](/docs/identitymanager/6.2/development/configuration-toolkit/index.md) topic
for additional information. It is strongly recommended to write the connector to the newly created
`Conf/SharePoint/SharePoint Connector.xml` file.

#### Write entity types

Declaring an [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md) is achieved with the `<EntityType>` tag
and the following attributes:

- **Identifier** is the entity type's name. It must be unique among the entity types. It is strongly
  recommended to prefix this name with the connector's name. An example for SharePoint is
  `SharePoint_directoryObject`.
- **DisplayName_Li, i ? [1..16]** are used in the UI to identify this
  [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md)for the end-user. **DisplayName_L1** is the name of
  the entity type in _language number one_. If this language is _English_, a good example of value
  is `SharePoint - Object`.

##### Example

                    ```

                        Conf/SharePoint/SharePoint Connector.xml

... <EntityType Identifier="SharePoint_Entity" DisplayName_L1="SharePoint_Entity"></EntityType>...

````


The SharePoint object attributes are modeled by [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md), with the ```<Property>``` tags declared as children of the ```<EntityType>```.

Remember that there are several kinds of properties: scalar and navigation. Scalar properties can be defined to represent scalar attributes such as ```city```, ```country``` or ```companyName```. represent associations such as group memberships. See the [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md) topic for additional information.

The main attributes of the ```<Property>``` tag are the following:

- __Identifier__ identifies the property with a mandatory unique name. It must be unique among the entity properties for this entity type.
- __DisplayName_Li, i ? [1..16]__ are used in the UI.
- __Type__ defines the type of the property. A scalar property type is chosen among ```String```, ```Bytes```, ```Int16```, ```Int32```, ```Int64```, ```DateTime```, ```Bool```, ```Guid```, ```Double```, ```Binary```, ```Byte```, and ```Option```. The navigation property type is ```ForeignKey```.
- __TargetColumnIndex__ defines in which column of the resource table the property is stored. See more details about Target Column Index. See the [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md) topic for additional information.

##### Example

                    ```

                        Conf/SharePoint/SharePoint Connector.xml
...
  <EntityType Identifier="SharePoint_Entity" DisplayName_L1="SharePoint - Entity">    <Property Identifier="Collection" DisplayName_L1="Collection" TargetColumnIndex="9" Type="String" />    <Property Identifier="EntityId" DisplayName_L1="Id" IsKey="true" TargetColumnIndex="0" Type="String" />    <Property Identifier="SharePointId" DisplayName_L1="SharePointId" TargetColumnIndex="10" Type="Int64" />    <Property Identifier="Name" DisplayName_L1="Name" TargetColumnIndex="1" Type="String" />    <Property Identifier="Description" DisplayName_L1="Description" TargetColumnIndex="8" Type="String" />    <Property Identifier="PrincipalType" DisplayName_L1="PrincipalType" TargetColumnIndex="2" Type="String" />    <Property Identifier="Email" DisplayName_L1="Email" TargetColumnIndex="7" Type="String" />    <Property Identifier="IsEmailAuthenticationGuestUser" DisplayName_L1="IsEmailAuthenticationGuestUser" TargetColumnIndex="3" Type="String" />    <Property Identifier="IsSiteAdmin" DisplayName_L1="IsSiteAdmin" TargetColumnIndex="4" Type="String" />    <Property Identifier="IsShareByEmailGuestUser" DisplayName_L1="IsShareByEmailGuestUser" TargetColumnIndex="5" Type="String" />    <Property Identifier="Member" DisplayName_L1="Group Members" Type="ForeignKey" />    <Property Identifier="Group" DisplayName_L1="Groups" Type="ForeignKey" />    <Property Identifier="RoleAssignment" DisplayName_L1="Role Assignement" Type="ForeignKey" />  </EntityType>  <EntityType Identifier="SharePoint_Role" DisplayName_L1="SharePoint - Role">    <Property Identifier="Collection" DisplayName_L1="Collection" TargetColumnIndex="3" Type="String" />    <Property Identifier="RoleId" DisplayName_L1="Id" IsKey="true" TargetColumnIndex="5" Type="String" />    <Property Identifier="Name" DisplayName_L1="Name" TargetColumnIndex="4" Type="String" />    <Property Identifier="Description" DisplayName_L1="Description" TargetColumnIndex="1" Type="String" />    <Property Identifier="Permissions" DisplayName_L1="Permissions list" TargetColumnIndex="2" Type="String" />    <Property Identifier="RoleAssignment" DisplayName_L1="Role Assignement" Type="ForeignKey" />  </EntityType>  <EntityType Identifier="SharePoint_Object" DisplayName_L1="SharePoint - Securable Object">    <Property Identifier="Key" DisplayName_L1="Key" IsKey="true" TargetColumnIndex="1" Type="String" />    <Property Identifier="Collection" DisplayName_L1="Collection" TargetColumnIndex="3" Type="String" />    <Property Identifier="Level" DisplayName_L1="Level" TargetColumnIndex="4" Type="String" />    <Property Identifier="Label" DisplayName_L1="Label" TargetColumnIndex="2" Type="String" />    <Property Identifier="ParentKey" DisplayName_L1="Parent" TargetColumnIndex="129" Type="ForeignKey" />    <Property Identifier="Objects" DisplayName_L1="Children" Type="ForeignKey" />    <Property Identifier="ScanStatus" DisplayName_L1="ScanStatus" TargetColumnIndex="5" Type="String" />    <Property Identifier="HasUniqueRoleAssignments" DisplayName_L1="HasUniqueRoleAssignments" TargetColumnIndex="6" Type="String" />    <Property Identifier="RoleAssignment" DisplayName_L1="Role Assignement" Type="ForeignKey" />    <Property Identifier="Inheritance" DisplayName_L1="Inherits entitlements from" Type="ForeignKey" TargetColumnIndex="128" />    <Property Identifier="GiveRights" DisplayName_L1="Gives entitlements to" Type="ForeignKey" />  </EntityType>  <EntityType Identifier="SharePoint_RoleAssignment" DisplayName_L1="SharePoint - Role Assignement">    <Property Identifier="Collection" DisplayName_L1="Collection" TargetColumnIndex="3" Type="String" />    <Property Identifier="Key" DisplayName_L1="Key" IsKey="true" TargetColumnIndex="5" Type="String" />    <Property Identifier="Entity" DisplayName_L1="Entity" Type="ForeignKey" TargetColumnIndex="128"  />    <Property Identifier="Role" DisplayName_L1="Role" Type="ForeignKey" TargetColumnIndex="129" />    <Property Identifier="Object" DisplayName_L1="Object" Type="ForeignKey" TargetColumnIndex="130" />  </EntityType>  ...

````

In this example, we have created four entity types, each one corresponding to a notion in
SharePoint.

#### Write entity associations

[Entity Model](/docs/identitymanager/6.2/reference/entity-model.md) types are associated through their navigation
properties with
[ Entity Association ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
elements.

##### Example

                    ```

                        Conf/SharePoint/SharePoint Connector.xml

...
<EntityAssociation Identifier="SharePoint_Object_Parent" DisplayName_L1="Parent object" IsProperty1Collection="true" Property1="SharePoint_Object:Objects" Property2="SharePoint_Object:ParentKey" />
<EntityAssociation Identifier="SharePoint_Group_Entity_Id" DisplayName_L1="Entity_Id" IsProperty1Collection="true" IsProperty2Collection="true" Property1="SharePoint_Entity:Member" Property2="SharePoint_Entity:Group" />
<EntityAssociation Identifier="SharePoint_Inheritance_Object" DisplayName_L1="Inheritance_Object" IsProperty1Collection="true" IsProperty2Collection="false" Property1="SharePoint_Object:GiveRights" Property2="SharePoint_Object:Inheritance" />
<EntityAssociation Identifier="SharePoint_Entity_RoleAssignment" DisplayName_L1="SharePoint_RoleAssignment" IsProperty1Collection="false" IsProperty2Collection="true"  Property1="SharePoint_RoleAssignment:Entity" Property2="SharePoint_Entity:RoleAssignment"/>
<EntityAssociation Identifier="SharePoint_Role_RoleAssignment" DisplayName_L1="SharePoint_RoleAssignment" IsProperty1Collection="false" IsProperty2Collection="true" Property1="SharePoint_RoleAssignment:Role" Property2="SharePoint_Role:RoleAssignment" />
<EntityAssociation Identifier="SharePoint_Object_RoleAssignment" DisplayName_L1="SharePoint_RoleAssignment" IsProperty1Collection="false" IsProperty2Collection="true" Property1="SharePoint_RoleAssignment:Object" Property2="SharePoint_Object:RoleAssignment" />
...

````


The exact nature of the IDs are described by the associated [
Entity Association Mapping
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

Notice the format of the __Property1__ and __Property2__ xml attributes: the name of the entity type is followed by ```:``` and the name of an entity property. It is a [
Binding
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) describing in one expression, the target entity type and property.

### Create mapping

The entity type must be mapped property by property to the exported attributes of SharePoint objects (namely, the columns of the CSV source files generated by the export).

The [
Entity Type Mapping
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), [
Entity Association Mapping
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), and [
Entity Type Mapping
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) elements serve this purpose.

#### Entity type mapping

The [
Entity Type Mapping
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) element maps the scalar properties from the CSV source file to an entity type.

The CSV source file path is written to the ```ConnectionTable``` xml attribute. The target entity type name is written to the ```Identifier``` xml attribute.

                    ```

                        Conf/SharePoint/SharePoint Connector.xml
  ...
  <EntityTypeMapping Identifier="SharePointObject" Connector="SharePoint" ConnectionTable="SharePointExportContoso_Entity">    ...
  </EntityTypeMapping>  ...

````

To do so, the entity type mapping element uses the
[ Entity Type Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
element with the `<Property>` tag. This maps the CSV column from `ConnectionColumn` to the target
EntityType property which is written to the **Identifier** attribute.

##### Example

                    ```

                        Conf/SharePoint/SharePoint Connector.xml

...
<EntityTypeMapping Identifier="SharePoint_Entity" Connector="SharePoint" ConnectionTable="SharePointExportContoso_Entity">
<Property Identifier="Collection" ConnectionColumn="Collection" />
<Property Identifier="EntityId" ConnectionColumn="Id" IsPrimaryKey="true" />
<Property Identifier="SharePointId" ConnectionColumn="SharePointId" />
<Property Identifier="Name" ConnectionColumn="Name" />
<Property Identifier="Description" ConnectionColumn="Description" />
<Property Identifier="PrincipalType" ConnectionColumn="PrincipalType" />
<Property Identifier="Email" ConnectionColumn="Email" />
<Property Identifier="IsEmailAuthenticationGuestUser" ConnectionColumn="IsEmailAuthenticationGuestUser" />
<Property Identifier="IsSiteAdmin" ConnectionColumn="IsSiteAdmin" />
<Property Identifier="IsShareByEmailGuestUser" ConnectionColumn="IsShareByEmailGuestUser" />
</EntityTypeMapping>
<EntityTypeMapping Identifier="SharePoint_Role" Connector="SharePoint" ConnectionTable="SharePointExportContoso_Role" >
<Property Identifier="Collection" ConnectionColumn="Collection" />
<Property Identifier="RoleId" ConnectionColumn="Id" IsPrimaryKey="true" />
<Property Identifier="Name" ConnectionColumn="Name" />
<Property Identifier="Description" ConnectionColumn="Description" />
<Property Identifier="Permissions" ConnectionColumn="Permissions" IsMultiValuedProperty="true"/>
</EntityTypeMapping>
<EntityTypeMapping Identifier="SharePoint_Object" Connector="SharePoint" ConnectionTable="SharePointExportContoso_SecurableObject" >
<Property Identifier="Key" ConnectionColumn="Key" IsPrimaryKey="true"/>
<Property Identifier="Collection" ConnectionColumn="Collection" />
<Property Identifier="Level" ConnectionColumn="Level" />
<Property Identifier="Label" ConnectionColumn="Label" />
<Property Identifier="ScanStatus" ConnectionColumn="ScanStatus" />
<Property Identifier="HasUniqueRoleAssignments" ConnectionColumn="HasUniqueRoleAssignments" />
</EntityTypeMapping>
<EntityTypeMapping Identifier="SharePoint_RoleAssignment" Connector="SharePoint" ConnectionTable="SharePointExportContoso_RoleAssignment" >
<Property Identifier="Key" ConnectionColumn="Key" IsPrimaryKey="true"/>
<Property Identifier="Collection" ConnectionColumn="Collection" /> </EntityTypeMapping> ...

````


As a result, after synchronization, the ```UR_Resource``` table will be updated from the CSV source file data.

#### Entity association mapping

The [
Entity Association Mapping
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) element maps the navigation properties used in [
Entity Association
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

An [
Entity Association Mapping
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) element refers to an [
Entity Association
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)written to the ```Identifier``` xml attribute. Then, like [
Entity Type Mapping
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), it maps column values from a CSV source file to an EntityType property.

##### Example

                    ```

                        Conf/SharePoint/SharePoint Connector.xml
  ...
  <EntityAssociationMapping Identifier="SharePoint_Object_Parent" Column1="ParentKey" Column2="Key" Connector="SharePoint" ConnectionTable="SharePointExportContoso_SecurableObject" EntityPropertyMapping1="SharePoint_Object:Key" EntityPropertyMapping2="SharePoint_Object:Key" />  <EntityAssociationMapping Identifier="SharePoint_Group_Entity_Id" Column1="Group_Id" Column2="Entity_Id" Connector="SharePoint" ConnectionTable="SharePointExportContoso_GroupMember" EntityPropertyMapping1="SharePoint_Entity:EntityId" EntityPropertyMapping2="SharePoint_Entity:EntityId" />  <EntityAssociationMapping Identifier="SharePoint_Inheritance_Object" Column1="Inheritance_Key" Column2="SecurableObject_Key" Connector="SharePoint" ConnectionTable="SharePointExportContoso_SecurableObjectRightInheritance" EntityPropertyMapping1="SharePoint_Object:Key" EntityPropertyMapping2="SharePoint_Object:Key" />  <EntityAssociationMapping Identifier="SharePoint_Entity_RoleAssignment" Column1="Key" Column2="Entity_Id" Connector="SharePoint" ConnectionTable="SharePointExportContoso_RoleAssignment"  EntityPropertyMapping1="SharePoint_RoleAssignment:Key" EntityPropertyMapping2="SharePoint_Entity:EntityId" />  <EntityAssociationMapping Identifier="SharePoint_Role_RoleAssignment" Column1="Key" Column2="Role_Id" Connector="SharePoint" ConnectionTable="SharePointExportContoso_RoleAssignment" EntityPropertyMapping1="SharePoint_RoleAssignment:Key" EntityPropertyMapping2="SharePoint_Role:RoleId" />  <EntityAssociationMapping Identifier="SharePoint_Object_RoleAssignment" Column1="Key" Column2="SecurableObject_Key" Connector="SharePoint" ConnectionTable="SharePointExportContoso_RoleAssignment" EntityPropertyMapping1="SharePoint_RoleAssignment:Key" EntityPropertyMapping2="SharePoint_Object:Key" />  ...

````

## Display

This step focuses on configuring a nice display for the synchronized list of resources in the UI.

### Nav

A [ Menu Item ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) can be added to
include a link to the resources list in the left menu on the UI home screen.

#### Parent menu item

It is strongly recommended that you gather synchronized resources menu items under parent menu
items. This is usually declared in the `Nav.xml` file in the configuration root folder.

##### Example

                    ```

                        Conf/Nav.xml

...

<MenuItem Identifier="Nav_Connectors" DisplayName_L1="Connectors" DisplayName_L2="Connecteurs" ParentMenuItem="Nav" />...

````


#### Child menu item

It is strongly recommended to use a new ```SharePoint Nav.xml``` file in the ```SharePoint``` connector's folder to add the SharePoint objects menu item.

##### Example

                    ```

                        Conf/SharePoint/SharePoint Nav.xml
...
<MenuItem Identifier="Nav_Connectors_SharePoint_Entity" DisplayName_L1="SharePoint Entities" DisplayName_L2="Entit�s Sharepoint" EntityType="SharePoint_Entity" ParentMenuItem="Nav_Connectors" />...

````

This example adds a new menu item under the `Nav_Connectors` menu item declared in the root
`Nav.xml` file. This new menu item gives access to the list of synchronized SharePoint entities.

### Display

It is strongly recommended that the display configuration be written to a new `SharePoint UI.xml`
file in the `SharePoint` connector's folder.

#### Display entity type

The
[Display Entity Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
describes how a single resource should be displayed.

##### Example

                    ```

                        Conf/SharePoint/SharePoint UI.xml

... <DisplayEntityType Identifier="SharePoint_Entity">
<Property OutputType="BasicCollection" Identifier="Member" />
<Property OutputType="BasicCollection" Identifier="Group" />
<Property OutputType="BasicCollection" Identifier="RoleAssignment" /></DisplayEntityType><DisplayEntityType Identifier="SharePoint_Role">
<Property OutputType="BasicCollection" Identifier="RoleAssignment" /></DisplayEntityType><DisplayEntityType Identifier="SharePoint_Object">
<Property OutputType="BasicCollection" Identifier="ParentKey" />
<Property OutputType="BasicCollection" Identifier="Objects" />
<Property OutputType="BasicCollection" Identifier="RoleAssignment" />
<Property OutputType="BasicCollection" Identifier="Inheritance" />
<Property OutputType="BasicCollection" Identifier="GiveRights" /></DisplayEntityType><DisplayEntityType Identifier="SharePoint_RoleAssignment">
<Property OutputType="BasicCollection" Identifier="Entity" />
<Property OutputType="BasicCollection" Identifier="Role" />
<Property OutputType="BasicCollection" Identifier="Object" /></DisplayEntityType>...

````


The scalar properties require no configuration: they are automatically displayed. The only information that the [Display Entity Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) adds here, is that the property ```BasicCollection``` is a navigation property. An eye icon will be displayed to take you directly to the matching page.

#### Display table

[Display Table](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) elements describe how a list of resources should be displayed.

The [Display Table](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) contains a list of display table column elements that identify which properties should be included in the list display.

##### Example

                    ```

                        Conf/SharePoint/SharePoint UI.xml
...
<DisplayTable Identifier="SharePoint_Entity" EntityType="SharePoint_Entity" DisplayTableDesignElement="resourcetable" IsEntityTypeDefault="true">    <Column DefaultSortPriority="1" DisplayBinding="Name" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" />    <Column DisplayBinding="Email" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="PrincipalType" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" /></DisplayTable>...

````

#### Internal display name

An `InternalDisplayName` can also be declared as an [Entity Model](/docs/identitymanager/6.2/reference/entity-model.md).
The `InternalDisplayName` is used in several UI screens to identify a resource for the user.

With no custom `InternalDisplayName`, a default value is used (instead of the first property of the
identity) containing the string _"name"_. If no such property is found, the first declared property
of the entity type is used.

##### Example

                    ```

                        Conf/SharePoint/SharePoint Connector.xml

...
<EntityPropertyExpression Identifier="SharePointObject_Entity_InternalDisplayName" Expression="C#:resource:return resource.Name ?? resource.Email ?? resource.Id.ToString();" EntityType="SharePoint_Entity" Property="InternalDisplayName" />
<EntityPropertyExpression Identifier="SharePointObject_Role_InternalDisplayName" Expression="C#:resource:return resource.Name ?? resource.RoleId.ToString();" EntityType="SharePoint_Role" Property="InternalDisplayName" />
<EntityPropertyExpression Identifier="SharePointObject_Object_InternalDisplayName" Expression="C#:resource:return resource.Label ?? resource.Key.ToString();" EntityType="SharePoint_Object" Property="InternalDisplayName" />
<EntityPropertyExpression Identifier="SharePointObject_RoleAssignment_InternalDisplayName"
Expression="C#:resource:return resource.Role.Name + " - " + resource.Entity.Name + " - " +
resource.Object.Label ?? resource.Key.ToString();" EntityType="SharePoint_RoleAssignment"
Property="InternalDisplayName" /> ...

````


This example adds the ```InternalDisplayName``` to the ```SharePoint_Entity```, ```SharePoint_Role```, ```SharePoint_Object``` and ```SharePoint_RoleAssignment``` entity types to be used by the UI.

### Permissions

This step focuses on setting up permissions for Identity Manager's end-users granting them access to the connector.

The [Access Control Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) and [Access Control Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) elements define [
AccessControlPermission
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) for end-user profiles to read and write the connector's data (such as resources of a given entity type). It is used by the UI when displaying data such as resources and available roles.

It is strongly recommended that permissions be written to a new file. For example, the administrator profile permissions can be written to the ```SharePoint Profile Administrator.xml``` file.

#### Example

                    ```

                        Conf/SharePoint/SharePoint Profile Administrator.xml
...
<AccessControlRule Profile="Administrator" EntityType="ResourceType" Identifier="Administrator_ResourceTypeSelector_resourceType_SharePoint" DisplayName_L1="Administrator_ResourceTypeSelector_resourceType_SharePoint">    <Entry Permission="/Custom/Resources/SharePoint_Entity/View" CanExecute="true" />    <Entry Permission="/Custom/Resources/SharePoint_Entity/ResetPassword" CanExecute="true" />  </AccessControlRule>  <AccessControlRule Profile="Administrator" EntityType="Category" Identifier="Administrator_ResourceTypeSelector_category_SharePoint" DisplayName_L1="Administrator_ResourceTypeSelector_category_SharePoint">    <Entry Permission="/Custom/Resources/SharePoint_Entity/View" CanExecute="true" /></AccessControlRule>...

````

This example sets permissions for the `Administrator` profile.

It entitles an administrator to display `SharePoint_Entity` resource and role categories from the
UI.

## Jobs

### Construction

It is strongly recommended to write Jobs associated with the `SharePoint` connector to the
`Conf/SharePoint/SharePoint Jobs.xml` file.

A job is declared with the `<Job>` xml element. It contains Tasks that perform the main steps and
other related operations.

#### Example

                    ```

                        Conf/SharePoint/SharePoint Jobs.xml

...
<Job Identifier="SharePoint_Synchronization_Delta" DisplayName_L1="10: SharePoint- Synchronization (delta)" DisplayName_L2="10: SharePoint - Synchronisation (delta)" Agent="Local">
... </Job>...

````


Notice the __Agent__ attribute that contains the name of the Agent which executes the Job. This attribute is mandatory for a Job containing Tasks executed agent-side, even if a unique local Agent exists. See the [appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md) topic for additional information.

### Components

The[
Upward Data Synchronization
](/docs/identitymanager/6.2/identity-management/synchronization/sync-configuration.md)job includes three steps:

- Export
- Prepare-Synchro
- Synchro

These three steps are all contained in a which allows the generation of the Incremental Synchronization configuration. See the [Create Connector Synchro Incremental](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md) topic for additional information.

#### Example

                    ```

                        Conf/SharePoint/SharePoint Jobs.xml
...
<CreateConnectorSynchroIncremental Connector="SharePoint" DisplayName_L1="SharePoint Synchronization (delta)" DisplayName_L2="Synchronisation SharePoint (delta)">    <OpenIdIdentifier Identifier="Job"/>  </CreateConnectorSynchroIncremental>...

````

### Permissions

The execution of a Job entails execution of Tasks, reading/writing to the Database and sending files
over to the Server. These operations are protected by an authorization mechanism.

To complete a Job, the Agent, via
the[ Usercube-Invoke-Job ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md) uses:

- a [ Profile ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) associated with
  the Job itself, to read/write:
  - `UJ_Jobs` and `UJ_Tasks` tables in a list of tasks
  - `UJ_JobInstances` tables in the progress report
- a Profile for each Task, to read/write `UJ_TaskInstances` tables (Progress Report) and perform
  other operations such as sending export files over to the Server.

Each Profile must be assigned the right permissions for the associated Job or Task to perform.

Every request from Agent to Server within the execution of a Job needs to be authenticated with an
[ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Connect
ClientId/Secret pair, linked to a Profile.

#### Create a profile

Here, we focus on creating one profile, used by the Job and every Task of the Job.

                    ```

                        Conf/Profile AgentJob.xml

... <Profile Identifier="AgentSynchro" DisplayName_L1="Agent Synchro" />...

````


As the Principle of Least Privilege states, Netwrix Identity Manager (formerly Usercube)strongly recommends that you create a[
Profile
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) to be used during the Synchronization jobs which will be different from the one used during the Provisioning job. This contributes to separating access rights.
The same principle applied even more rigorously would make Identity Manager create one profile per Task. It isn't necessary as most Synchronization tasks require the same permissions.

#### Grant synchronization access rights to the profile

For an Agent to launch server-side Tasks from the Job via the[
Usercube-Invoke-Job
](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md) tool, the profile linked to these tasks and used by the tool should be authorized to execute said tasks.

Server-side Tasks for a simple Synchronization job usually are:

- Prepare-Synchronization
- Synchronization

Required permissions are:

__View Tasks__

- ```/Jobs/Task/Query```

__Progress Report__

- ```/Jobs/JobInstance/Query```
- ```/Jobs/JobInstance/Update```
- ```/Jobs/TaskInstance/Query```
- ```/Jobs/TaskInstance/Update```

__Synchronization and Prepare-Synchronization__

- ```/Connectors/Connector/Query```
- ```/Connectors/SynchronizeSession```

Granting access can be done via the [
Synchronization Access Control Rules
](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md) and the [
Job View Access Control Rules
](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md).

The following examples should be written to ```Conf/Profile AgentSychro.xml```.

##### Example

The following example entitles the administrator to run any Synchronization job:

                    ```

````

#### Grant end-users permissions to run jobs from the UI

In addition, for end-users to be able to launch a job from the UI, they must be assigned a profile
with the following access rights:

- `/Jobs/RunJob/Launch`

This can be done via
the[ Job Execution Access Control Rules ](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md)
scaffolding.

##### Example

                    ```

````


#### Declare usable ClientId/Secret pairs in the configuration

An Agent's a[
Profile
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)is associated with a ```ClientId/Secret``` pair used by the Agent to authenticate to the Server.

Usable ```ClientId/Secret``` pairs are written to the database from the xml configuration using the[
OpenIdClient
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) xml element.

It is strongly recommended to write the ```<OpenIdClient>``` xml element to a new or existing ```OpenIdClients.xml``` file in the configuration root folder.

The ```ClientId/Secret``` pair hence created must be associated with the profile created or updated in the previous step, via the __Profile__ attribute.

##### __Example__

The following example creates a ```ClientId/Secret``` pair to be used by the Agent to authenticate to the Server and complete Jobs. The secret is hashed with the[
Usercube-New-OpenIDSecret
](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)tool.

                    ```

                        Conf/OpenIdClients.xml
...
 <OpenIdClient Identifier="Job" HashedSecret="K7gNU3sdo+Op8wNhqoVWhr5v6s1xYv72ol/pe/Unols=" DisplayName_L1="ClientId for Jobs" DisplayName_L2="ClientId pour les jobs" Profile="Administrator" />
...

````

                    ```

                        Conf/OpenIdClients.xml

...
<OpenIdClient Identifier="Job" HashedSecret="K7gNU3sdo+Op8wNhqoVWhr5v6s1xYv72ol/pe/Unols=" DisplayName_L1="ClientId for Jobs" DisplayName_L2="ClientId pour les jobs" Profile="Administrator" />
...

````


#### Set up the Agent to use ClientId/Secret pairs

The ```ClientId/Secret``` pairs that the Agent may use are written to the Agent's [appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md) technical configuration set.

The ```ClientId``` of such ```ClientId/Secret``` pairs can then be used as a value in a Task __OpenIdClient__ attribute.

Pairs written in the ```OpenIdClient``` section may be used by Tasks.

The Job itself uses the ```DefaultOpenIdClient``` value.

> This example sets the "Job/secret" pair to be used by tasks and jobs:
>
>                         ```
>
>                             appsettings.agent.json
>  {
>     ...
>     "OpenId":{
>         "OpenIdClients": {
>             "Job": "secret"
>          },
>          "DefaultOpenIdClient": "Job"
>     }
>  }
>
> ```

### Job launch

Scheduling the job execution can rely either on Identity Manager's scheduler or an external scheduler.

#### With Scheduler

Use the Job [
Job
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) attribute.

> This example uses Identity Manager's scheduler to execute the ```SharePoint_Synchronization_Delta``` job every fifteen minutes:
>
>                         ```
>
>                             Conf/SharePoint/SharePoint Jobs.xml
> <Job Identifier="SharePoint_Synchronization_Delta" CronTabExpression="*/15 * * * *quot; DisplayName_L1="10: SharePoint - Synchronization (delta)" DisplayName_L2="10: SharePoint - Synchronisation (delta)" Agent="Local">   ...
> </Job>
>
> ```

For more details about checking Crontab expressions, see the [crontab.guru](https://crontab.guru/every-15-minutes) website.

#### With an external scheduler

An external scheduler would rely on the[
Usercube-Invoke-Job
](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md) tool.

##### Example

The following command can be scheduled. It executes the ```SharePoint_Synchronization_Delta``` job using the "Job/Secret" authentication pair to connect to the Identity Manager Server at ```http://usercube.contoso.com```.

                    ```

./identitymanager-Invoke-Job.exe -j "SharePoint_Synchronization_Delta" --api-secret secret --api-client-id Job --api-url "http://usercube.contoso.com"

````

## Validation

### Deploy configuration

The configuration is written to the database using the
[ Deploy Configuration Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

### Test

The Synchronization job should be found in the UI, under the **Job Execution** menu, with the name
input in the Job's **DisplayName_Li** attribute.

From there, it can be launched and debugged (if needed).

After execution, SharePoint Objects resources should be in the `UR_Resources` table of the SQL
Server database.

# Write a PowerShell Script for Provisioning

This guide shows how to write a PowerShell script used by the
[ PowerShellProv ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md) connector.

## Structure of a PowerShell Script

The goal of the script is to append, for each provisioning order, a line in a CSV file.

Let's consider the following `ResourceType`:

```

...
<ResourceType Identifier="PowerShellCsv_User_NominativeUser" DisplayName_L1="PowerShell CSV User (nominative)" DisplayName_L2="Utilisateur PowerShell CSV (nominatif)" Policy="Default" TargetEntityType="PowerShellCsv_User" Category="PowerShellCsv" SourceEntityType="Directory_User" RemoveOrphans="true" AllowAdd="true" AllowRemove="true">  <ScalarRule Property="identifier" Binding="EmployeeId"/>  <ScalarRule Property="firstName" Binding="FirstName"/>  <ScalarRule Property="lastName" Binding="LastName"/></ResourceType>...

```

The end of the CSV file must look like:

```

command;identifier;firstName;lastName
...
insert;007;James;Bond
...

```

### Define the common part of every script

The goal of the common part is to get all required variables needed by the script.

Two parameters are required at the top of the script:

```

param(
  [Parameter(Mandatory = $true)][string]$resultsFilePath,
  [Parameter(Mandatory = $true)][string]$ordersPath
)

```

- `resultsFilePath` is the agent-side path of the result file containing the summary of the executed
  and errored orders.
- `ordersPath` is the agent-side folder path containing the JSON provisioning orders.

It is important for these settings to be defined at the top of the script and keep these names
because they are filled by the `Fulfill-PowerShell` connector.

The `Fulfill-CSV.ps1` script must be placed in the script folder of Identity Manager containing the
`Environment.ps1` script. Thanks to this, environment variables (such as `$runtimePath`) are loaded
and can be used in the script:

```

. (Join-Path -Path $PSScriptRoot -ChildPath "Environment.ps1")
. (Join-Path -Path $runtimePath -ChildPath "Usercube-Visit-Orders.ps1")

```

### Define the specific function

A function which is called for each provisioning order must be defined.

#### Define the header

The header is always the same. Only the name of the function can change:

```

function Fulfill-CSV {
  param ([parameter(Mandatory = $true)] $order)

```

The previous parameter `$order` is an object corresponding to the following provisioning order
(JSON):

```

{
    "ProvisioningOrdersList": [
        {
            "AssignedResourceTypeId": "3930001",
            "ChangeType": "Added",
            "WorkflowInstanceId": "81",
            "Owner": {
                "Id": "21511",
                "InternalDisplayName": "007 - Bond James",
                "Identifier": "007",
                "EmployeeId": "007",
                "PhotoTag": -3065,
                "MainFirstName": "James",
                "MainLastName": "Bond",
                ...
            },
            "ResourceType": {
                "Id": "-41",
                "SourceEntityType": {
                    "Id": "51",
                    "Identifier": "Directory_User"
                },
                "TargetEntityType": {
                    "Id": "70",
                    "Identifier": "PowerShellCsv_User"
                },
                "Identifier": "PowerShellCsv_User_NominativeUser"
            },
            "Changes": {
                "identifier": "007",
                "firstName": "James",
                "lastName": "Bond"
            }
        }
    ]
}
```

There can be more sections and attributes.

#### Define mandatory parameters

The `ChangeType` parameter (`Added`, `Deleted` or `Modified`) is always mandatory and must be
checked.

Depending on the function requirements, other parameters should be checked. For example, the
function below always needs an identifier to work properly, therefore you should check its presence.

```

  $changeType = $order.ChangeType
  # if the change type is not recognized, we throw an error
  if ($changeType -ne 'Added' -and $changeType -ne 'Deleted' -and $changeType -ne 'Modified') {
    $artId = $order.AssignedResourceTypeId
    throw "Order ChangeType: $changeType not recognized in AssignedResourceTypeId: '$artId'"
  }

  # if the section is Changes, we want to create/update the identifier
  $identifier = $order.Changes.identifier
  if(!$identifier){
    # if the section is Resources, we want to keep the same identifier
    $identifier = $order.Resource.identifier
    if(!$identifier){
      throw "identifier is the primary key and must not be null."
    }
  }

```

#### Define order processing

This is the last part of the function:

- Parameters from the provisioning order are stored in variables.
- A specific treatment is applied if `ChangeType` is `Added`, `Deleted` or `Modified`.

```

  # firstName and lastName are the two other properties of the ResourceType
  $firstName = $order.Changes.firstName
  $lastName = $order.Changes.lastName

  # change type defines what is written in the 'command' column
  if ($changeType -eq 'Added') {
    $command = "Insert"
  }
  elseif ($changeType -eq 'Deleted') {
    $command = "Delete"
  }
  elseif ($changeType -eq 'Modified') {
    $command = "Update"
  }

  # CSV columns are command, identifier, firstName and lastName
  $script:powershellResults += New-Object -TypeName psobject -Property @{Command = "$command"; identifier = "$identifier"; firstName = "$firstName"; lastName = "$lastName" }
}

```

Define how to send logs to Identity Manager

The three methods to log in Identity Manager are:

- **Write-Host**: writes Information in the log.
- **Throw**: raises an exception (which stops the script), and writes the Error in the log (the
  provisioning order will be errored too).
- **Write-Error**: writes Error in the log (the provisioning order will be errored too). It is not
  recommended because the script continues its execution.

Now that the function has been defined, the main code of the script can be written.

### Write the main code of the script

Read the options parameter from the standard input

The [ PowerShellProv ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md) isn't mandatory in the
JSON file. If it isn't provided, don't perform this step.

```

# Just to show how to read the options in the script
$options = [System.Console]::ReadLine()
$options = ConvertFrom-Json $options
$options.Message # -> Hello

```

Rest of the main script

In general, this part contains the code to connect to the external system and executes the
`Usercube-Visit-Orders` script.

```

# The goal of the script is to write the users in the following CSV file
$powershellResultFilePath = Join-Path -Path "$demoPath" -ChildPath "Temp/ExportOutput/powershellcsv_users.csv"

# powershellResults has a larger scope and is used in the last line of the Fulfill-CSV function
$powershellResults = @()

# Usercube-Visit-Orders is provided by Usercube, it must not be modified
# It loops on the provisioning orders and calls Fulfill-CSV on each of them
Usercube-Visit-Orders $resultsFilePath $ordersPath Fulfill-CSV

# We write the results in $powershellResultFilePath
if ($powershellResults.Length -gt 0){
  $powershellResults | ConvertTo-Csv -Delimiter ";" -NoTypeInformation | & (Join-Path -Path "$runtimePath" -ChildPath "Usercube-Encrypt-File.exe") -o $powershellResultFilePath
}

```

Never modify `Usercube-Visit-Orders.ps1`.

## Synthesis

### Skeleton

To sum up the previous part, the script can be written as follows:

```

# Common part

# Specific function
  # Header of the function
  # Check mandatory parameters
  # Order processing (treatment for Added, Deleted or Modified)

# Main script
  # Read standard input (Optional)
  # Rest of the main script (Connection, Usercube-Visit-Order...)

```

### Full script

The full script is as follows:

```

# Common part

param(
  [Parameter(Mandatory = $true)][string]$resultsFilePath,
  [Parameter(Mandatory = $true)][string]$ordersPath
)

. (Join-Path -Path $PSScriptRoot -ChildPath "Environment.ps1")
. (Join-Path -Path $runtimePath -ChildPath "Usercube-Visit-Orders.ps1")

# Specific function

function Fulfill-CSV {
  param ([parameter(Mandatory = $true)] $order)

  $changeType = $order.ChangeType
  # if the change type is not recognized, we throw an error
  if ($changeType -ne 'Added' -and $changeType -ne 'Deleted' -and $changeType -ne 'Modified') {
    $artId = $order.AssignedResourceTypeId
    throw "Order ChangeType: $changeType not recognized in AssignedResourceTypeId: '$artId'"
  }

  # if the section is Changes, we want to create/update the identifier
  $identifier = $order.Changes.identifier
  if(!$identifier){
    # if the section is Resources, we want to keep the same identifier
    $identifier = $order.Resource.identifier
    if(!$identifier){
      throw "identifier is the primary key and must not be null."
    }
  }

  # firstName and lastName are the two other properties of the ResourceType
  $firstName = $order.Changes.firstName
  $lastName = $order.Changes.lastName

  # change type defines what is written in the 'command' column
  if ($changeType -eq 'Added') {
    $command = "Insert"
  }
  elseif ($changeType -eq 'Deleted') {
    $command = "Delete"
  }
  elseif ($changeType -eq 'Modified') {
    $command = "Update"
  }

  # CSV columns are command, identifier, firstName and lastName
  $script:powershellResults += New-Object -TypeName psobject -Property @{Command = "$command"; identifier = "$identifier"; firstName = "$firstName"; lastName = "$lastName" }
}

# Main script

# Just to show how to read the options in the script
$options = [System.Console]::ReadLine()
$options = ConvertFrom-Json $options
$options.Message # -> Hello

# The goal of the script is to write the users in the following CSV file
$powershellResultFilePath = Join-Path -Path "$demoPath" -ChildPath "Temp/ExportOutput/powershellcsv_users.csv"

# powershellResults has a larger scope and is used in the last line of the Fulfill-CSV function
$powershellResults = @()

# Usercube-Visit-Orders is provided by Usercube, it must not be modified
# It loops on the provisioning orders and calls Fulfill-CSV on each of them
Usercube-Visit-Orders $resultsFilePath $ordersPath Fulfill-CSV

# We write the results in $powershellResultFilePath
if ($powershellResults.Length -gt 0){
  $powershellResults | ConvertTo-Csv -Delimiter ";" -NoTypeInformation | & (Join-Path -Path "$runtimePath" -ChildPath "Usercube-Encrypt-File.exe") -o $powershellResultFilePath
}

```

# Write a Robot Framework Script

This guide shows how to write a Robot Framework script that will be used by
[ Robot Framework ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md).

## Structure of a Robot Framework Script

### Build the skeleton

A Robot Framework script is divided into four main parts:

1. **Settings**: contains the instructions to import library or external resource files.
2. **Variables**: contains the global variables shared by all the functions in the script.
3. **Keywords**: contains all the functions defined by the user.
4. **Test Cases**: contains the functions which will be run when the script is launched.

#### Example

```

*** Settings ***
Library  Telnet

*** Variables ***
${IPADDRESS}  192.168.1.22

*** Keywords ***
Open Telnet Connection
    Open Connection  ${IPADDRESS}  prompt=$

*** Test Cases ***
Run Provisioning
    Open Telnet Connection

```

Let's analyze the four parts of this example:

- **Settings**: we import here the Telnet library to use the functions defined in it.
- **Variables**: we define the variable `IPADDRESS` to use it later.
- **Keywords**: we define a custom function called `Open Telnet Connection`. It will use a function
  defined in the Telnet library (called `Open Connection`) and the variable `IPADDRESS` which has
  been defined before in the `Variables` section.
- **Test Cases**: we define here the main function which we choose to call `Run Provisioning` (it
  can be named anything), and which will be run when launching the script. It will use the function
  `Open Telnet Connection`.

Robot Framework needs two spaces between two different instructions to parse them correctly.  
For example, `Open Connection` consists of only one instruction. Only one space is thus needed
between the two words. But, `Open Connection ${IPADDRESS}` consists of two instructions, the
function and the parameter. Two spaces are then required to separate `Connection` from
`${IPADDRESS}`.  
To read your script more easily, you could also use the pipe character (`|`) between instructions,
like this: `Open Connection | ${IPADDRESS}`.

See the [Robot Framework Libraries](https://robotframework.org/#robot-framework-libraries) for
additional information.

### Define specific functions

To use a Robot Framework script for provisioning external systems with Identity Manager, the
following elements are required in the script:

- The import of a resource file written by Identity Manager called
  `UsercubeRobotFramework.resource`.
- The definition of three functions which will be called by Identity Manager to perform three
  required actions: `ExecuteAdd`, `ExecuteDelete` and `ExecuteModify`. These functions are where you
  will write the actions to perform on the external system.
- The use of one function to start the provisioning called `Launch Provisioning`.

Never modify the resource file `UsercubeRobotFramework.resource`.

#### Example

The resource file defined at the beginning of the script is located in Identity Manager's `Runtime`
folder. Therefore, you will have to change the path accordingly.

```

*** Settings ***
Resource  C:/UsercubeContoso/Runtime/UsercubeRobotFramework.resource

*** Keywords ***
ExecuteAdd
    [Arguments]  ${order}
    ...

ExecuteDelete
    [Arguments]  ${order}
    ...

ExecuteModify
    [Arguments]  ${order}
    ...

...

*** Test Cases ***
Run Provisioning
    ...
    Launch Provisioning
    ...

```

The parameter `${order}` is mandatory only for the three functions: `ExecuteAdd`, `ExecuteDelete`
and `ExecuteModify`. It is an object corresponding to the following sample provisioning order
(JSON):

```

{
    "AssignedResourceTypeId": "3930001",
    "ChangeType": "Added",
    "WorkflowInstanceId": "81",
    "Owner": {
        "Id": "21511",
        "InternalDisplayName": "007 - Bond James",
        "Identifier": "007",
        "EmployeeId": "007",
        "PhotoTag": -3065,
        "MainFirstName": "James",
        "MainLastName": "Bond",
        ...
    },
    "ResourceType": {
        "Id": "-41",
        "SourceEntityType": {
            "Id": "51",
            "Identifier": "Directory_User"
        },
        "TargetEntityType": {
            "Id": "70",
            "Identifier": "RobotFramework_User"
        },
        "Identifier": "RobotFramework_User_NominativeUser"
    },
    "Changes": {
        "identifier": "007",
        "firstName": "James",
        "lastName": "Bond"
    }
}
```

The elements of `${order}`can be accessed like this: `${order['Changes']['identifier']}`.

See the
[Robot Framework User Guide](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html)
for additional information.

## Keywords

| Keyword                    | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------- |
| Catch Keyword              | **Arguments** `Keyword`: Keyword `*args` **Description** Launches `Keyword` with the given arguments `*args` if the keyword launched by `Try Keyword` failed. If `Try Keyword` was not called, this keyword will not do anything. `Catch Keyword` should always be called right after `Try Keyword`. **Example** Try to connect to `Usercube.com`. If the connection fails, restart the browser and try to connect to `Usercube.com`: `Connect to URL    Try Keyword Go To Usercube.com    Catch Keyword Restart Browser At URL Usercube.com`                                                                                                                                                                                       |
| Generate Password          | **Description** Generates a password based on the [ Password Reset Settings ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) associated to the [Resource Type Mappings](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) being provisioned `Send Password Notification` should always be called after `Generate Password`, preferably right after the password is used. If `Send Password Notification` is not called before the provisioning of the resource is over, it will automatically be called. If multiple passwords should be generated, `Send Password Notification` should be called after each password generation. **Returns** `Password`: string |
| Get Secure Data            | **Arguments** `Attribute`: string `Erase Data`: boolean **Description** Retrieves the secured option `Attribute` from the connector configuration. If `Erase Data` is set to true, the secured option is deleted once it is read. **Example** Get Login option and erase it: ```Get Secure Data                                                                                                                                                                                                                                                                                                                                                                                                                                     | Login | True``` |
| Launch Provisioning        | **Description** Launches the provisioning defined by the provisioning orders. This keyword is required for any provisioning to happen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Log Debug                  | **Arguments** `Message`: string **Description** Logs `Message` at the `Debug` log level. **Example** Log a keyword failure message: `Log Debug The keyword has failed`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Log Error                  | **Arguments** `Message`: string **Description** Logs `Message` at the `Error` log level. **Example** Log a keyword failure message: `Log Error The keyword has failed`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Send Password Notification | **Description** Sends a notification containing the last password generated. If `Generate Password` is called and `Send Password Notification` is not called before the provisioning of the resource is over, `Send Password Notification` will automatically be called.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Try Keyword                | **Arguments** `Keyword`: Keyword `*args` **Description** Launches `Keyword` with the given arguments `*args`, and ignores its errors. If `Keyword` fails, the keyword sent to `Catch Keyword` will run. `Try Keyword` should always be called right before `Catch Keyword`. **Example** Try to connect to `Usercube.com`. If the connection fails, restart the browser and try to connect to `Usercube.com`: `Connect to URL    Try Keyword Go To Usercube.com    Catch Keyword Restart Browser At URL Usercube.com`                                                                                                                                                                                                                |

## Error handling

Consider a web application that contains user information. Suppose a user is missing from the web
application. When the script attempts to reach the user's information page, it will reach an error
page, and fail. The next user's provisioning starts, but the web browser is still on the error page,
so the script keeps failing.

In this example, if a user's provisioning fails, each subsequent provisioning will fail. This
failure issue can be solved with the error handling custom keywords.

Consider the following example using the Robot Framework Selenium library:

```

Open Usercube Website
    Open Browser
    Connect To Usercube
    [Teardown]  Close Browser

Restart Browser
    [Arguments]  ${url}
    Log Debug  An error has occured, restarting the browser
    Close Browser
    Open Browser  ${url}

Connect To Usercube
    Try Keyword  Go To  Usercube.com
    Catch Keyword  Restart Browser  Usercube.com
    Page Should Contain  Usercube

```

In this example, the keyword `Open Usercube Website` opens a browser, then calls
`Connect To Usercube`. To ensure that the browser is closed regardless of the script's success, the
`Close Browser` keyword is used in a teardown. A keyword in a teardown is always executed regardless
of what happens in the script or in the teardown.

The `Restart Browser` keyword logs a debug message before restarting the browser to help debug the
script. The `Connect To Usercube` tries to use the `Go To` keyword to connect to the `Usercube.com`
web page. As `Go To` is used with `Try Keyword`, if the execution fails, `Restart Browser` is called
by `Catch Keyword`. This means that if the browser fails to load `Usercube.com`, the browser
restarts. Last, `Connect To Usercube` verifies that the page contains the word `Usercube`.

### Error Handling for ExecuteAdd, ExecuteDelete, and ExecuteModify

The `ExecuteAdd`, `ExecuteDelete`, and `ExecuteModify` methods are harder to interact with. First,
it is not possible to get their execution status within the script. Second, if the execution failed,
it should be kept as a failure in order to log the failure.

To simplify error handling, consider the following structure:

```

Execute Add
    [Arguments]  ${order}
    Try Keyword  Add User  ${order}
    Catch Keyword  Restart Program And Fail  Add User failed.

Add User
    [Arguments]  ${order}
    Click New User
    Fill In Information  ${order}
    Click Add User

Restart Program And Fail
    [Arguments]  ${failmessage}
    Close Program
    Start Program
    Fail  ${failmessage}

```

In this example, `ExecuteAdd` does not call the custom keywords to add a new user directly, and only
calls `Add User` instead. This means that it is possible to call `Add User` from the `Try Keyword`
keyword. If `Add User` fails, then `Execute Add` fails. Therefore it is possible to catch a failure
with this structure.

Note that `Restart Program And Fail` fails. This failure is necessary as the provisioning order
would be counted as a success otherwise.

## Testing a RobotFramework script

In order to write a RobotFramework script, we need to test that it works. It is possible to test the
script by running a fulfillment job from the Identity Manager interface. While this kind of test
proves that everything works as expected, it can take a long time. There is a faster method to check
that the script runs.

Suppose the RobotFramework script's path is `RobotFramework/script.robot`.

We need the following elements :

- A provisioning order, in folder `RobotFrameworkScript/Order`. The provisioning order can be
  encrypted or unencrypted. The script will write the encrypted results to
  `RobotFrameworkScript/Order/results.csv`.
- The path to the `Runtime` folder. In our example, we will consider this path as
  `C:/UsercubeDemo/Runtime`.

The `RobotFramework/script.robot` script may be run from the command prompt.

```
cd RobotFramework

robot --variable ORDERPATH:./Order --variable RUNTIMEPATH:C:/UsercubeDemo/Runtime --variable RESULTPATH:./Order/results.csv ./script.robot
```

This command will generate an output file, a log file, and a report file in the `RobotFramework`
folder. This command will also write information to the command prompt.

For most testing cases, we only care about the command prompt information and the log file, written
at `RobotFramework/log.html`. The other outputs can be removed.

```
cd RobotFramework

robot --loglevel NONE --report NONE --variable ORDERPATH:./Order --variable RUNTIMEPATH:C:/UsercubeDemo/Runtime --variable RESULTPATH:./Order/results.csv ./script.robot
```

### `Get Secure Data` and `Generate Password`

Most keywords are not different when a script is launched manually. The keywords `Get Secure Data`
and `Generate Password` are exceptions.

- `Get Secure Data`: This keyword expects the Robot Framework process to receive a json list of
  attributes in the stdin stream. This can be provided manually by writing the data in the command
  prompt. As an example, if the script requires a `Login` and `Password` attribute :
  `{"Login":"login","Password":"password"}`
- `Generate Password`: This keyword expects a file that contains the
  [ Password Reset Settings ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
  associated to the provisioned
  [Resource Type Mappings](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).
  The easiest way to enable the `Generate Password` keyword is as follow:
  - Launch the Robot Framework fulfillment through the Identity Manager web application with a
    blank script.
  - Copy the `PasswordResetSettings` folder generated in the most recent subfolder of
    `Work/FulfillRobotFramework`.
  - Paste the folder in the same folder as the provisioning order.

## Use Case: Write a Script to Fulfill a CSV File

The goal of the script is to append, for each provisioning order, a line in a CSV file located on an
external system which we will access through a Telnet connection.

Let's consider the following `ResourceType`:

```

...
<ResourceType Identifier="RobotFramework_User_NominativeUser" DisplayName_L1="Robot Framework User (nominative)" Policy="Default" TargetEntityType="RobotFramework_User" Category="RobotFramework" SourceEntityType="Directory_User" ApprovalWorkflowType="One">  <ScalarRule Property="identifier" Binding="EmployeeId"/>  <ScalarRule Property="firstName" Binding="FirstName"/>  <ScalarRule Property="lastName" Binding="LastName"/></ResourceType>...

```

The end of the CSV file must look like:

```

command;identifier;firstName;lastName
...
Insert;007;James;Bond
...

```

### Define settings

In every Robot Framework script, we need to import the resource file
`UsercubeRobotFramework.resource`. In this example, we also need to import the Telnet library to use
its functions.

```

*** Settings ***
Resource  C:/UsercubeContoso/Runtime/UsercubeRobotFramework.resource
Library  Telnet

```

### Define variables

To connect to the external system through Telnet, we need an IP address corresponding to the
external system. We will store the IP address in the global variable `${IPADDRESS}`. We also use the
global variable `${CSVFILEPATH}` to define the CSV file where the data will be written in the
external system.

```

*** Variables ***
${CSVFILEPATH}  /home/contoso/robotframework_users.csv
${IPADDRESS}  192.168.1.22

```

### Define custom keywords

We define all the custom functions which we will use to provision the external system:

- `Delete CSV File`: removes a possible pre-existing CSV file.
- `Write In CSV`: executes a command to write the line in the CSV file in the external system.
- `Write Data`: formats the line to write in the CSV and calls `Write In CSV` to write it.
- `Write Header`: defines the header to write in the CSV and calls `Write Data` to write it.
- `Open Telnet Connection`: opens the Telnet connection to the external system using the login and
  the password defined in the
  [ Robot Framework ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md) attribute in
  `appsettings.agent.json`, as well as the IP address defined in the `Variables` section.

```

*** Keywords ***
Delete CSV File
    Execute Command  rm ${CSVFILEPATH}

Write In CSV
    [Arguments]  ${line}
    Execute Command  echo ${line} >> ${CSVFILEPATH}

Write Data
    [Arguments]  ${command}  ${identifier}  ${firstName}  ${lastName}
    Write In CSV  '"${command}","${identifier}","${firstName}","${lastName}"'

Write Header
    Write Data  Command  identifier  firstName  lastName

Open Telnet Connection
    Open Connection  ${IPADDRESS}  prompt=$
    Read Until  login
    ${LOGIN}=  Get Secure Data  Login  False
    Write  ${LOGIN}
    Read Until  Password
    ${PASSWORD}=  Get Secure Data  Password  True
    Write  ${PASSWORD}

```

The method `Get Secure Data` will retrieve the value of the attributes filled in the
[ Robot Framework ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md) in
`appsettings.agent.json`. This is the method strongly recommended by Identity Manager. However, you
could also enter the value directly into the script (example: `${LOGIN}= UserName`). This may be
easier for initial testing purposes.

### Define mandatory keywords

To be able to provision the external system, we need the three required functions: `ExecuteAdd`,
`ExecuteDelete` and `ExecuteModify`. These methods are called by the connector depending on the
action to perform on the external system.

```

*** Keywords ***
ExecuteAdd
    [Arguments]  ${order}
    Write Data  Insert  ${order['Changes']['identifier']}  ${order['Changes']['firstName']}  ${order['Changes']['lastName']}

ExecuteDelete
    [Arguments]  ${order}
    Write Data  Delete  ${order['Changes']['identifier']}  ${order['Changes']['firstName']}  ${order['Changes']['lastName']}

ExecuteModify
    [Arguments]  ${order}
    Write Data  Update  ${order['Changes']['identifier']}  ${order['Changes']['firstName']}  ${order['Changes']['lastName']}

```

Here, for each action, we use the function `Write Data` defined in the previous section to write the
changes to the CSV file with a corresponding word `Insert`, `Delete` or `Update`.

### Define test cases

The function launched by the Robot Framework script will be written in the section `Test Cases` and
will be called `Run Provisioning`.

```

*** Test Cases ***
Run Provisioning
    Open Telnet Connection
    Delete CSV File
    Write Header
    Launch Provisioning
    Close All Connections

```

In our test case, we will perform the following operations in `Run Provisioning`:

- Open the Telnet connection with the external system.
- Remove a possible pre-existing CSV file.
- Write the header to the new CSV file.
- Launch the Identity Manager provisioning. The method `Launch Provisioning` is mandatory when using
  the Robot Framework connector.
- Close the Telnet connection with the external system.

### Read the full script

The full script is as follows:

```

*** Settings ***
Resource  C:/UsercubeContoso/Runtime/UsercubeRobotFramework.resource
Library  Telnet

*** Variables ***
${CSVFILEPATH}  /home/contoso/robotframework_users.csv
${IPADDRESS}  192.168.1.22

*** Keywords ***
ExecuteAdd
    [Arguments]  ${order}
    Write Data  Insert  ${order['Changes']['identifier']}  ${order['Changes']['firstName']}  ${order['Changes']['lastName']}

ExecuteDelete
    [Arguments]  ${order}
    Write Data  Delete  ${order['Changes']['identifier']}  ${order['Changes']['firstName']}  ${order['Changes']['lastName']}

ExecuteModify
    [Arguments]  ${order}
    Write Data  Update  ${order['Changes']['identifier']}  ${order['Changes']['firstName']}  ${order['Changes']['lastName']}

Delete CSV File
    Execute Command  rm ${CSVFILEPATH}

Write In CSV
    [Arguments]  ${line}
    Execute Command  echo ${line} >> ${CSVFILEPATH}

Write Data
    [Arguments]  ${command}  ${identifier}  ${firstName}  ${lastName}
    Write In CSV  '"${command}","${identifier}","${firstName}","${lastName}"'

Write Header
    Write Data  Command  identifier  firstName  lastName

Open Telnet Connection
    Open Connection  ${IPADDRESS}  prompt=$
    Read Until  login
    ${LOGIN}=  Get Secure Data  Login  False
    Write  ${LOGIN}
    Read Until  Password
    ${PASSWORD}=  Get Secure Data  Password  True
    Write  ${PASSWORD}

*** Test Cases ***
Run Provisioning
    Open Telnet Connection
    Delete CSV File
    Write Header
    Launch Provisioning
    Close All Connections

```

# Write a PowerShell Script for Synchronization

This guide shows how to write a PowerShell script used by the
[ PowerShellSync ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md) connector.

The documentation is not yet available for this page and will be completed in the near future.

# Write a Template for a Ticket Connector

This guide shows how to write a template that will be used by a Ticket connector to complete the
title and the description of the ticket. The information which will be written in the ticket will
come from the generated provisioning order and from literal strings written in the template.

## Attributes

| Name                         | Details                                                                                                         |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Username                     | **Type** String **Description** Is the name of the user for which the ticket is created.                        |
| ResourceType                 | **Type** String **Description** Is the identifier or the resource type.                                         |
| UsercubeProfileLink          | **Type** String **Description** Is the link allowing to access the user profile.                                |
| AddedLinkedEntities          | **Type** List **Description** Is the list of links to add in the system.                                        |
| RemovedLinkedEntities        | **Type** List **Description** Is the list of links to remove in the system.                                     |
| DisplayAdd                   | **Type** Boolean **Description** True if there are any links to add.                                            |
| DisplayRemove                | **Type** Boolean **Description** True if there are any links to remove.                                         |
| Entity                       | **Type** Dictionary **Description** Is the list of values to assign to the resource.                            |
| ProvisioningOrder.ChangeType | **Type** String **Description** Corresponds to the action of the provisioning order (Added, Deleted, Modified). |
| ProvisioningOrder.Changes    | **Type** Dictionary **Description** Is the list of changes.                                                     |
| ProvisioningOrder.Resource   | **Type** Dictionary **Description** Is the current state of the resource.                                       |
| ProvisioningOrder.Owner      | **Type** Dictionary **Description** Is the owner of the resource.                                               |

## Operations

The template uses the [Mustache](https://mustache.github.io/mustache.5.html) syntax. Several
operations are already provided, but you can find more on this
[page](https://handlebarsjs.com/guide/builtin-helpers.html).

Identity Manager also provides a way of using conditions with Mustache for the following operations:

- `>`: superior to
- `<`: inferior to
- `==`: equal to
- `!=`: different from

### Example

```

{{#each ProvisioningOrder.Changes}}
    {{#ifCond this '==' 'INTERNAL'}}
        This account is for an internal employee.
    {{else}}
        This account is for an external employee.
    {{/ifCond}}
{{/each}}

```

This template goes through all the changes provided by the provisioning order. If any one of them
meets the condition for an internal employee, we display the internal employee message. Several
messages can be shown if several changes meet the condition.

## Template example

```

Please create a resource "{{ResourceType}}" for user {{Username}}.

For more information on the user, see: {{UsercubeProfileLink}}

{{#ifCond ProvisioningOrder.ChangeType '==' 'Deleted'}}
  To delete the account, please contact the IT team.
{{/ifCond}}

{{#each ProvisioningOrder.Changes}}
  This is a change: {{this}}
{{/each}}

The resource must have the following values:
{{#Entity.GetEnumerator}}
	- {{Key}}: {{Value}}
{{/Entity.GetEnumerator}}

{{#DisplayAdd}}
Add the following links:
{{/DisplayAdd}}
{{#AddedLinkedEntities}}
	- {{Name}}
{{#Values.GetEnumerator}}
		- {{Value}}: {{Key}}
{{/Values.GetEnumerator}}
{{/AddedLinkedEntities}}

```
