# Configure Unique Property Generation

How to configure Identity Manager to generate unique identifiers, mails and logins for any user who does not have them already.

## Overview

All users need to:

- be uniquely identifiable through an identifier, for example in order to link all accounts to their owners;
- have a reserved unique email address, even if they do not need a mailbox;
- have a unique login that can be used as a seed for all users' accounts.

For each unique property, Identity Manager provides a set of generation rules. You are free to choose the most adequate method regarding your actual approach.

An identifier/email/login suffix can be specified later according to users' contract types, when loading identities through an Excel template.
See the [Load Identities to Identity Manager](../load-identities/index.md) topic for additional information.  
For example, contractors can get ```-ext``` added automatically to their email addresses.  
The unicity checks performed for identifiers/emails/logins do not consider prefixes nor suffixes.
  
For example, ```john.doe@acme.com``` and ```john.doe-ext@acme.com``` cannot exist simultaneously.

## Participants and Artifacts

Integrators may need the help of the HR department to understand the actual approach of the organization to compute these unique properties.

| Input | Output |
| --- | --- |
| IdentityManagerServer (required) | Generation rules for unique properties |

See the [
Install the Development Environment
](../../development-environment-installation/index.md) topic for additional information.

## Configure Unique Property Generation

Configure the generation of unique properties by proceeding as follows:

1. On the home page, click on __Settings__ in the __Configuration__ section.

   ![Home Page - Configuration](../../../../../../../static/img/product_docs/usercube/usercube/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)
2. On the __Workforce__ > __Identifiers, Mails & Logins__ page, you can follow Identity Manager's instructions to configure the generation of a unique identifier for new workers (if needed), based on one of the available options.

   ![Unique Identifier Generation](../../../../../../../static/img/product_docs/usercube/usercube/user-guide/set-up/initial-identities-loading/generate-unique-properties/initialload_uniqueidentifier_v602.webp)

   - ```Based on Full Name```: replaces all diacritics by the non-accentuated variants; removes all special characters; can add a separator between the first name and the last name if needed (such as ```.``` most often); in case of homonyms, appends a sequence number to the full name.
   - ```Based on Last Name```: uses the first letter of the first name; in case of homonyms, uses more letters of the first name up to the whole first name; in case of homonyms still, appends a sequence number to the full name.
   - ```Random Number```: uses a random number with a default prefix which is used when no specific prefix is specified on the user's contract type.

     Netwrix Identity Manager (formerly Usercube) recommends using random numbers, as they have the advantage of not containing any personal information nor giving any hint about the users' seniority.
   - ```Sequence```: uses a sequence with a default prefix which is used when no specific prefix is configured on the user's contract type.
3. Follow Identity Manager's instructions to configure the generation of a unique email address for all users (who do not have one), based on one of the available options.

   ![Unique Email Generation](../../../../../../../static/img/product_docs/usercube/usercube/user-guide/set-up/initial-identities-loading/generate-unique-properties/initialload_uniqueemail_v602.webp)

   - ```Based on Full Name```: replaces all diacritics by the non-accentuated variants; removes all special characters; can add a separator between the first name and the last name if needed (such as ```.``` most often); in case of homonyms, appends a sequence number to the full name.
   - ```Based on Last Name```: uses the first letter of the first name; in case of homonyms, uses more letters of the first name up to the whole first name; in case of homonyms still, appends a sequence number to the full name.
   - ```Based on Unique Identifier```: uses a combination of the unique identifier (defined on the same page) and the email domain.

     No matter the strategy:
       
     - the default email domain is used when no specific domain is specified on the user's subsidiary;
       
     - emails are generated in a way that lets users keep their email address, even if they move from contractors to employees, or change to another subsidiary.
4. Follow Identity Manager's instructions to configure the generation of a unique login for new workers (who do not have one), based on one of the available options.

   ![Unique Login Generation](../../../../../../../static/img/product_docs/usercube/usercube/user-guide/set-up/initial-identities-loading/generate-unique-properties/initialload_uniquelogin_v602.webp)

   - ```Based on Email```: uses the local part of the email, i.e. before ```@```.
   - ```Based on Full Email```: uses the full email.
   - ```Based on Unique Identifier```: uses the unique identifier (defined on the same page) prepended with the default prefix when no specific prefix is specified on the user's contract type.
5. Click on the Save icon at the top.

   ![Save Icon](../../../../../../../static/img/product_docs/usercube/usercube/user-guide/set-up/user-profile-configuration/iconsave_v602.svg)
6. Click on the __Reload__ button to apply the recent changes to the application.

   ![Reload Button](../../../../../../../static/img/product_docs/usercube/usercube/user-guide/set-up/initial-identities-loading/generate-unique-properties/reload_v603.webp)

## Verify Property Generation

In order to verify the process, add a fictitious employee through the workflows from the UI.

![Home - New Employee](../../../../../../../static/img/product_docs/usercube/usercube/user-guide/set-up/initial-identities-loading/generate-unique-properties/home_newemployee_v600.webp)

Verify in the directory that the employee's sheet displays the expected values for the configured unique properties.

![Home - Directory User](../../../../../../../static/img/product_docs/usercube/usercube/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)
