# Define Navigation Properties

How to define the properties that describe the
[Entity Type](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)'s
relationships to other entity types.

## Overview

Navigation properties contain scalar values like other properties, but they link to other
properties—either from the same entity type or another one.  
See the [Define Scalar Properties](/docs/identitymanager/6.2/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/index.md) topic for additional
context.

> **Example 1**: `memberOf` links a user to groups, or a group to other groups.  
> In the UI, `memberOf` behaves like a scalar property, but you can click its values to view the
> associated groups.  
> For the AD entry `ADM Vidal Pierre`:
>
> ![Navigation Property - memberOf](/img/product_docs/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_memberof_v600.webp)
>
> Clicking a group shows its properties, including the reverse side of `memberOf`, called `member`,
> which lists group members.  
> For the group `SG_APP_RAY_0_LDAP_READLDSFEDE`:
>
> ![Navigation Property - member](/img/product_docs/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_member_v600.webp)

> **Example 2**: Departments can link to managers using the `Manager` property, referencing a user’s
> identifier.  
> In the UI, `Manager` behaves like a scalar property, but clicking it opens the manager’s user
> profile:
>
> ![Navigation Property - Manager](/img/product_docs/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_manager_v600.webp)
>
> That profile includes a `Department` property, pointing back to the managed department:
>
> ![Navigation Property - Managed Department](/img/product_docs/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_managerof_v600.webp)

Navigation properties can link:

- Inside a single entity type
- Between two entity types from the same connector
- Between two entity types from different connectors

Identity Manager uses a "flip side" for each navigation link.  
For example, in AD:

- `member`: on groups, lists users
- `memberOf`: on users, lists groups

AD only stores `member` in groups; users don’t have a native `memberOf` property.  
Identity Manager synthesizes both ends to ensure full navigation mapping.

When importing data:

- `member` in AD updates `member` in Identity Manager
- Identity Manager then updates `memberOf` automatically

Usually, properties in Identity Manager are mapped to existing ones in the source system.  
If a property doesn’t exist in the source, it can still be created (e.g., for internal assignment
logic), but it won’t support read/write operations.

---

## Define the Entity Type's Navigation Properties

Follow these steps:

1. Declare the [Entity Type](/docs/identitymanager/6.2/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/index.md).
2. In the **Properties** section, open the **Navigation Properties** tab.
3. Click **Map a navigation property** to view available source columns and select the desired
   properties.
4. Fill out the configuration fields:

    ![Navigation Properties](/img/product_docs/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_navigationproperties_v602.webp)

    - The **first line** maps the source column.
    - The **second line** defines the new property linked to that column.

### Application Metadata

- `Identifier`: Must be unique, whitespace-free, and C#-compatible.  
  [See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#see-microsoft-lexical-structure)
- `Entity Type`: Always refers to the current entity type. Source property can be from any.
- `Storage Indicator`: Can be:

    - **Mono-valued** (1:1 or many:1)
    - **Multi-valued** (1:many or many:many)

    Identity Manager supports up to 25 optimized mono-valued navigation properties per entity
    type.  
     Prioritize:

    1. Properties used in forms and search
    2. Properties used in expressions and role models
    3. All others

- `Name`: Shown in the UI.  
  Use **singular** for mono-valued, **plural** for multi-valued.  
  Avoid names like `"Id"` for both identifier and display name.

### External System

- `Source`: Connection to the external system. You can select the source by:

    - Mapping from the source (auto-selects connection table)
    - Choosing from the dropdown (lists same-connector tables)
    - Using the search icon (all connectors)

- `Source Column`: The source field for data.
- `Column Content`: The field in the source used for identification.

> Example: If the column is `manager` and it stores user `dn`s, set `dn` as the column content.

> AD example navigation properties: `Entries`, `assistant`, `assistantOf`, `manager`,
> `directReports`, `memberOf`, `member`, `parentdn`, `children`

> ![AD Entity Type - Navigation Properties](/img/product_docs/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_examplead3_v603.webp)

---

5. Click the gear icon to open **Advanced Settings**:

    ![Advanced Settings](/img/product_docs/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_propertiessettings_v602.webp)

    - `Icon`: Choose from [Microsoft's icon list](https://uifabricicons.azurewebsites.net/)
    - `Source Expression`: Defines the property using a property path or
      [Expressions](/docs/identitymanager/6.2/integration-guide/toolkit/expressions/index.md)

        > Example: Create an `isUnused` scalar property based on `accountExpires` and
        > `lastLogonTimestamp`:
        >
        > ![Advanced Settings](/img/product_docs/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_sourceexpressionexample_v60.webp)

    - `Flexible Comparison Expression`: Improves search flexibility for the property.
    - `History Precision`: Sets how often the property’s value is historized.

        > Example: `lastLogonTimestamp` is frequently updated. To reduce historization noise, set
        > `History Precision` to 10080 minutes (1 week).  
        > This way, only one update per week is stored.

Clicking **Continue** closes the window but does **not save** the configuration.

---

## Reload

After saving changes, a green popup will prompt you to reload the schema.  
You can defer this, but **must reload after final changes**.

![Reload](/img/product_docs/identitymanager/saas/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

Reloading ensures the updated navigation properties appear in the UI’s left menu structure.

You can access the **Reload** button via:

- The green popup
- The connector’s dashboard

---

## Next Steps

Once the entity type is configured with scalar, key, and navigation properties, you can
[Set Resources' Display Names](/docs/identitymanager/6.2/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/index.md).
