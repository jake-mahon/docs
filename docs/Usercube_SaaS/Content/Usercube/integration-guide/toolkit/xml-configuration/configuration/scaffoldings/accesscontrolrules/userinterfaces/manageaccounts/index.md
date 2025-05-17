---
sidebar_position: 278
title: Manage Accounts
---

# Manage Accounts

Gives access to the **Manage Accounts** buttons for the users of a given entity type.

![ManageAccounts Button](../../../../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/AccessControl_ManageAccounts_V603.png)

:::note
The scaffolding gives access to the button, but you need to get the permissions on said accounts in order to see anything once you click on the button.
:::

## Examples

The following example gives the `Administrator` profile access to the **Manage Accounts** button for users from `Directory_User`.

```


In order to see AD accounts once clicking on the button:
          

```
## Properties

| Property | Details |
| --- | --- |
| EntityType required | **Type**  String  **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required | **Type**  String  **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```
  

```