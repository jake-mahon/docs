# Editing a Collection

Collections can be edited as well and their properties changed.

![advanced_manipulations_of_3](../../../../../static/img/product_docs/policypak/policypak/feature/advanced/advanced_manipulations_of_3.webp)

The collection editor enables you to add a comment and change the state of the collection. It also allows you to change three settings.

![advanced_manipulations_of_4](../../../../../static/img/product_docs/policypak/policypak/feature/advanced/advanced_manipulations_of_4.webp)

- __Existing Features Option__

  - __Not Configured__ - The default is to preserve all optional features, if this is not set in any collection. However, if this is set in a higher or lower collection, then the settings of the other collection will be honored.
  - __Preserve__ - Maintains all existing features.
  - __Remove__ - Removes all existing features. This should be used with caution. Unless features are specifically added within this collection or merged from another collection, they will be removed. This could cause unintended results, like removing language AppSets and functionality that the computer needs. Note also that some features are not removable, even if they appear to be selectable.
- __Existing Optional Features Option__

  - __Not Configured__ - If this is set in another collection, do that. Otherwise, when it's not set, the default is to preserve all optional features.
  - __Preserve__ - Maintains all existing optional features.
  - __Remove__ - Removes all existing features. This should be used with caution. Unless features are specifically added within this collection or merged from another collection, they will be removed. This could cause unintended results, like removing language AppSets and functionality that the computer needs. Note also that some optional features are not removable, even if they appear to be selectable.
- __Reboot Mode__

  - __Not Configured__ - If this is set in another collection, do that. Otherwise, when it's not set, the default is "Asks user."
  - __Prevent__ - Actively blocks reboots and does not prompt user.
  - __Allow__ - Automatically reboots a machine, if required.
  - __Asks User__ - Prompts the user if Windows determines a reboot is needed.
