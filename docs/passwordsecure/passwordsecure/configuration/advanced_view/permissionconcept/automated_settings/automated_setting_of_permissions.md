# Automated setting of permissions

## Reusing permissions

Netwrix Password Secure generally differentiates between multiple methods for setting permissions:

1. Manual setting of permissions
2. Inheritance of permissions within organisational structures
3. Using predefined rights

   - In the manual setting of permissions, the desired permissions are directly configured for each record. Automatic processes and inheritance are __not__ used in this case.
   - Both the use of predefined rights and also the inheritance from organisational structures are based on the __automated reuse__ of already granted permissions according to previously defined rules.

The following diagram deals with the question: __How do users or roles receive the intended permissions?__

![manual vs automated settings](../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/automated_settings/automated-setting-of-permissions-1-en.webp)

NOTE: 
Inheritance from organisational structures is defined by default in the system. This can be configured in the settings. The relevant setting is “Inherit permissions for new objects (without permission template)”.
