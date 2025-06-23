---
title: Add Password Complexity Policy
sidebar_label: password complexity
description: Administrative configuration and management features for Privilege Secure PAM solution including user management, policies, and security settings.
---

# Add Password Complexity Policy

Follow the steps to add a password policy to the console.

**Step 1 –** Navigate to the **Policy** > **Platforms** > **Password Complexity** page.

**Step 2 –** In the Password Policy list, click the **Plus** icon.

![Add Password Complexity](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/add/add.webp)

**Step 3 –** Complete the following fields:

- Name – This is a snippet
- Description – Description of the policy
- Must start with – Enter the symbol type from which the password must start with (uppercase,
  symbol, etc.)
- Must end with – Enter the symbol type from which the password must end with (uppercase, symbol,
  etc.)
- Length – Provide the desired password length
- Max consecutive chars – Select maximum number of consecutive characters
- Characters to exclude – select characters to exclude from the password body
- Include characters – select characters type to be excluded from the password body. Possible values
  are:

  - Lowercase – Includes lower case letters
  - Uppercase – Includes upper case letters
  - Symbols – Includes the following characters: !#$%&\*@\
  - Spaces – Includes spaces
  - Numbers – Includes numbers

**Step 4 –** Click **Save** to create the new password policy.

The new password policy is added to the Password Policy list.

# Password Complexity Page

The Password Complexity page is accessible from the Navigation pane under Policy > Platforms. It
shows configured password complexity policies that can be applied to platforms.

When Privilege Secure creates a managed account on a local system or domain it also sets the user
password. The password that is generated will follow the complexity rules configured in the related
password policy associated with that platform. The Default policy is used if a password policy
cannot be determined. See the [Platforms Page](/docs/privilegesecure/4.2/administration/resources/platforms/index.md) topic for additional
information.

Password complexity requirements must adhere to any domain or local password policy applied to the
target resource. If there is a conflict between the password policy on the target resource and the
password policy set in Privilege Secure, the managed account cannot be created and the session will
fail.

Create password policies and configure the password complexity requirements on this page. The
password policy only applies to managed accounts created by Privilege Secure.

![Password Complexity Page](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/systemsettings/page.webp)

The pane on the left side of the page displays a list of the configured password complexity
policies. This pane has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Blue + button — Create a new password complexity policy. See the
  [Add Password Complexity Policy](/docs/privilegesecure/4.2/administration/credentials/password-policies/password-complexity.md) topic for additional information.
- Copy icon — Create a new password complexity policy based on the current selection. Icon appears
  when policy is hovered over.
- Trashcan icon — Deletes the password complexity policy. Icon appears when policy is hovered over.
  A confirmation window will display.

**NOTE:** The default password policy cannot be deleted.

The selected password complexity policy details display in the main pane:

- Name — Displays the name of the policy
- Description — Description of the policy
- Must Start With / Must End With — Lists cases the password complexity policy will enforce. This
  list contains the following options:

  - None
  - Lowercase
  - Uppercase
  - Numeric

- Length — The maximum number of characters the password complexity policy will enforce
- Max Consecutive Chars — The maximum number of consecutively occurring characters that the password
  complexity policy will allow
- Characters to Exclude — Custom characters the password complexity policy will exclude.
- Included Characters — Check boxes containing additional inclusive parameters for the policy:

  - Lowercase — At least one lowercase character in the password
  - Uppercase — At least one uppercase character in the password
  - Numbers — At least one number in the password

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.
