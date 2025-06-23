---
title: display types
sidebar_label: display-types
description: Directory Manager 11.1 documentation for display types with configuration details, usage instructions, and implementation guidance.
---

# Display Type Categories

Using display types, you can publish fields in a Directory Manager portal to capture and view data.

A field can be anything from a text box to a drop-down list to a check box, depending on the display
type linked to it. You must also link each field to a schema attribute in the directory. Users can
use the fields in a portal to add and update values for the respective attributes.

See the [Design a Portal with Display Types](/docs/directorymanager/11.1/configuration/display-types.md) topic fr additional information.

## Schema Attributes and Display Types

Each schema attribute requires a value of a certain type.

- Some attributes require a single string value.  
  Example: Active Directory attributes _name_ and _sAMAccountName_
- Other attributes can accept multiple values.  
  Example: Active Directory attribute _proxyAddress_
- Some attributes accept only one or more distinguished names (DN).  
  Example: Active Directory attributes _members_ and _memberOf_
- Some attributes allow only Boolean values (true or false).  
  Example: Active Directory attributes _hideDLMembership_ and _isDeleted_

To ensure that portal users update these attributes as supported by the directory, display types
play an important role. A display type enables you to define the user interface element to use for
an attribute in the portal (for example, text box, drop-down list, check box, etc.). This user
interface element must support the type of data that can be entered as the attribute value, so that
users enter valid data through the portal.

## Display Type Categories

Display types support almost all types of schema attributes, such as single-valued, multi-valued,
Boolean, and distinguished name. Based on their characteristics and customization options, display
types are divided into two categories:

- Basic display types
- Custom display types

### Basic Display Types

You can link a basic display type to a schema attribute straight away. Basic display types are:

- **Text box**

  Use it to collect and display a single value for an attribute. You can link it directly to a
  schema attribute. However, to apply additional rules to it, such as assigning a default value or
  implementing a regular expression to validate the data entered, you must create a custom display
  type from this basic type. See the [Text Box Display Type](/docs/directorymanager/11.1/configuration/display-types.md) topic.

- **Password**

  Use this display type with schema attributes that store confidential information. The user
  interface element is displayed as a text box in the portal with bullets or asterisks in place of
  text.

- **Multi-value**

  Use it for schema attributes that can accept multiple string values.  
   A multi-value display type is displayed in the portal as:

  ![multi-value_display_type](/img/product_docs/directorymanager/directorymanager/admincenter/portal/displaytype/multi-value_display_type.webp)

  Clicking **Add** launches a dialog box where users can add new values.

- **Check box**

  Use it for schema attributes that accept true or false values, such as the Active Directory
  attributes _reportToOwner_, _reportToOriginator_, and _oOFReplyToOriginator_.

- **DN**

  Use it for schema attributes that accept a single distinguished name for their value, such as
  the Active Directory attributes _Assistant_ and _altRecipient_. The user interface element for
  this display type appears as a button that launches the **Find** dialog box, where users can
  search and select objects. It is as:

  ![dn](/img/product_docs/directorymanager/directorymanager/admincenter/portal/displaytype/dn.webp)

- **DNs**

  Use it for schema attributes that accept multiple distinguished names, for example, the Active
  Directory attributes _member_ and _memberOf_. The user interface element for this display type
  is as follows:

  ![multi-value_display_type](/img/product_docs/directorymanager/directorymanager/admincenter/portal/displaytype/multi-value_display_type.webp)

  Clicking **Add** displays a quick search field along with an option to launch the **Find**
  dialog box where users can search and select the desired objects.

### Custom Display Types

Some display types cannot be linked to schema attributes straight away; they must be customized
first.

Display types that require customization are:

- Text box - you can use it directly with an attribute, but if you want to apply data validation
  checks to it, you must convert it to a custom display type.
- Drop-down list
- Linked-field drop-down list
- Image
- Grid
- Radio
- Multiline text box
- Multi-Valued Control
- Linked combo

Some applications of display type are:

- Define a simple text box type for a telephone number field and apply a validation rule so that it
  accepts phone numbers in US format only.
- Define a drop-down list display type containing a list of the departments in your organization.
- Create a linked field drop-down list type where selecting the office address auto populates the
  phone number and fax number.

The default portal template uses several predefined custom display types. See the
[Define Custom Display Types](/docs/directorymanager/11.1/configuration/display-types.md) topic to add more display types as needed.

The **Custom Display Types** page in a portal’s design settings lists all the predefined custom
display types and any custom display types you may have added.

# Define Custom Display Types

In Directory Manager, several predefined custom display types are used in the default portal
template. To customize the portal, you can use the predefined custom display types as well as define
new ones.

- [Text Box Display Type](/docs/directorymanager/11.1/configuration/display-types.md)
- [Drop-down List Display Type](/docs/directorymanager/11.1/configuration/display-types.md)
- [Linked Field Drop-down List Display Type](/docs/directorymanager/11.1/configuration/display-types.md)
- [Image Display Type](/docs/directorymanager/11.1/configuration/display-types.md)
- [Grid Display Type](/docs/directorymanager/11.1/configuration/display-types.md)
- [Radio Button Display Type](/docs/directorymanager/11.1/configuration/display-types.md)
- [Multiline Textbox Display Type](/docs/directorymanager/11.1/configuration/display-types.md)
- [Multi-Valued Control Display Type](/docs/directorymanager/11.1/configuration/display-types.md)
- [Linked Combo Display Type](/docs/directorymanager/11.1/configuration/portal-settings.md)

## How to Implement Display Types

On the Search Forms, Properties, Create Object, and Property Validation pages in a portal’s design
settings, select a schema attribute and a display type to link them.

On linking, the display type is rendered on the portal’s page; enabling users to view or specify a
value for the linked attribute.

## Delete a Custom Display Type

You can delete custom display types, including linked combos.

NOTE: You cannot delete a custom display type that has been linked to a field in the portal.

To delete a custom display type:

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to delete a custom display type for it.  
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.

   - On the **Simple Types** tab, click **Delete** for a custom display type to delete it.
   - On the **Linked Combo Types** tab, click **Delete** for a linked combo to delete it.

5. Click **Save**.

**See Also**

- [Design a Portal with Display Types](/docs/directorymanager/11.1/configuration/display-types.md)
- [Display Type Categories](/docs/directorymanager/11.1/configuration/display-types.md)

# Drop-down List Display Type

Use the drop-down list display type to give portal users a list of options to select from.

To create a custom drop-down list display type, you have to specify the values (options) to display
in the list. This custom display type can then be linked to a schema attribute. Options in the
drop-down list are the different values that users can select for the schema attribute you link this
display type with.

### Predefined Drop-down List Display Types

A few drop-down list display types used in the default portal template are:

|     | Display Type Name  | Default Value              | Values                                                                        |
| --- | ------------------ | -------------------------- | ----------------------------------------------------------------------------- |
| 1.  | lstSecurity        | Private: Closed Membership | Public Semi-Private: Owner Must Approve Private: Closed Membership            |
| 2.  | lstGroupScope      | Universal Group            | Domain Local Global Group Universal Group                                     |
| 3.  | lstGroupType       | None                       | Security Distribution                                                         |
| 4.  | membershipeditlist | None                       | Perpetual Temporary Member Addition Pending Temporary Removed Removal Pending |
| 5.  | lstCountry         | None                       | A list of all countries                                                       |
| 6.  | lstState           | None                       | A list of all states in the US                                                |
| 7.  | lstStateProvince   | None                       | A list of all states in the US and provinces in Canada.                       |
| 8.  | lstProvince        | None                       | A list of all provinces in Canada                                             |

## Define a Drop-down List Display Type

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it.  
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.
5. On the **Custom Display Types** page, click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type and select _Dropdown List_ in
   the **Type** drop-down list.  
   You cannot change the name of a custom display type once you have created it.
7. Use the **Values** area to specify the values to be displayed in the drop-down list.

   1. Click **Add Value**.
   2. Specify a value and a display text for that value in the respective boxes. The display text
      will be displayed in the drop-down list, while the value will be saved in the directory or
      database when a user selects the display text from the drop-down list.  
      (The value will be saved in the directory when the drop-down list display type is mapped to a
      directory attribute. It will be saved in the database when the display type is mapped to a
      database attribute.)
   3. In the **Visibility** drop-down list, select a security role. The value in the drop-down list
      will be visible to users of this role and roles with a priority value higher than this role.
      See [Priority](/docs/directorymanager/11.1/administration/security-roles.md).  
      Select _Never_ to hide the value from all users.
   4. Click **OK**. The value is listed in the **Values** area, represented by its display text.

8. Repeat step 7 to define more values in the list.

   - To edit a value, click **Edit** for it.
   - To remove a value from the list, click **Delete** for it.

9. Select a value in the **Default Selection** list to set it as the default value for the drop-down
   list in the portal.  
   The **Default Selection** list contains all values defined in the **Values** area.
10. Click **OK**.
11. Click **Save** on the **Custom Display Types** page.

**See Also**

- [Design a Portal with Display Types](/docs/directorymanager/11.1/configuration/display-types.md)
- [Display Type Categories](/docs/directorymanager/11.1/configuration/display-types.md)
- [Define Custom Display Types](/docs/directorymanager/11.1/configuration/display-types.md)

# Grid Display Type

Use a grid display type to display data in tabular form in the portal. This is especially helpful
when you want to group together multiple attributes of an object.

For example, use a grid display type to capture information about a group’s additional owners and
members, such as a member’s display name, department, and email. Add a column to the grid for each
attribute required, so that portal users can view or enter values in each column (attribute) for an
object.

To create a grid, simply define its columns. Each column is mapped to a schema attribute, so each
column represents the value of the attribute it is mapped to.

After creating the custom grid display type, link it to an appropriate schema attribute to render it
on a portal page. This attribute must support multi-valued distinguished names. Examples of such
Active Directory attributes include _member_ and _memberof_.

### Predefined Grid Display Types

A few grid display types used in the default portal template are:

| Display Type Name | Column Names                             | Description                                                                                                                         |
| ----------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| membersgrid       | Display Name Membership Beginning Ending | Used to display the members in a group, with the display name, membership type, and membership start and end dates for each member. |
| groupMemberOfGrid | Display Name Email Description           | Used to display the groups an object is a member of, with the display name, email address, and description shown for each group.    |
| directReportsGrid | Display Name Status                      | Used to display the direct reports of a user, with the display name and status shown for each direct report.                        |

## Define a Grid Display Type

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it.  
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.
5. On the **Custom Display Types** page, click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type and select _Grid_ in the
   **Type** drop-down list.  
   You cannot change the name of a custom display type once you have created it.
7. Use the **Fields** area to specify the columns in the grid.

   1. Click **Add Field** to define a column. The **Grid Column** pane is displayed.
   2. Select a schema attribute in the **Field** drop-down list. This attribute serves as a column
      in the grid.
   3. Enter a name for the column in the **Display Name** box. This name is displayed as the column
      name in the portal.
   4. Click **Advanced Options** to specify additional details for the column.
   5. In the **Edit Type** drop-down list, select a display type (for example, a text box or a
      drop-down list). In edit mode, the fields in the column will be displayed in the portal using
      the display type you select here.  
      As a prerequisite to making a column editable, make sure that:

      - editing is enabled for the grid (the **Editable** check box is selected on the **New
        Display Type** pane), and
      - editing is also enabled for the column (the **Editable** check box is selected on the
        **Grid Column** pane).

   6. In the **Search Type** drop-down list, select a display type (for example, a text box or a
      drop-down list). The search filter for the column will be displayed in the portal using the
      display type you select here.  
      As a prerequisite to making a column searchable, make sure that:

      - search is enabled for the grid (the **Show Search Filters** check box is selected on the
        **New Display Type** pane), and
      - search is also enabled for the column (the **Searchable** check box is selected on the
        **Grid Column** pane).

   7. Select the **Searchable** check box to enable search for the column.
   8. Select the **Sortable** check box to enable users to sort the data displayed in the grid on
      the basis of the column attribute (by clicking the column header).
   9. Select the **Editable** check box to enable users to update the column value, in which case
      the fields in the column are editable. Clear this check box to make the column read-only.
   10. Click **OK**. The column name is displayed in the **Fields** area on the **New Display
       Type** pane.

8. Repeat step 7 to add more columns to the grid.

   - To edit the details of a column, click **Edit** for it.
   - To remove a column from the grid, click **Delete** for it.
   - To change the order of columns in the grid, click the equal sign for a column and drag to
     change its position.

9. Click **Advanced Options** to specify additional details for the grid.
10. Specify a height and width for the grid by entering values in the **Height** and **Width**
    boxes.  
    From the drop-down list next to each box, select a unit for the height and width.

    - **%:** to specify the height and width of the grid in terms of a percentage of the page's
      height and width.
    - **px:** to specify the height and width of the grid in pixels.

11. In the **Page Size** box, type or select a value. This value represents the number of records to
    show in the grid, with pagination options to navigate to more records.
12. Select the **Show Search Filters** check box to add a row to the grid that serves as a search
    bar. This row appears in the grid, as shown below:

    ![search_row_in_grid](/img/product_docs/directorymanager/directorymanager/admincenter/portal/displaytype/search_row_in_grid.webp)

13. Select the **Editable** check box to make the rows in the grid available for editing. Else, the
    grid will be read-only.
14. Click **OK**.
15. Click **Save** on the **Custom Display Types** page.

**See Also**

- [Design a Portal with Display Types](/docs/directorymanager/11.1/configuration/display-types.md)
- [Display Type Categories](/docs/directorymanager/11.1/configuration/display-types.md)
- [Define Custom Display Types](/docs/directorymanager/11.1/configuration/display-types.md)

# Image Display Type

Use the image display type for schema attributes of the user object type that can store image data.
The following table lists the supported attributes for Active Directory:

| AD Attribute   | CN        | Description                                                                                                                                             | Max. Image Size (KB) |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| jpegPhoto      | JpegPhoto | Stores one or more images of a user in JPEG File Interchange Format (JFIF). The image stored in this attribute is mainly used by SharePoint.            | 10240                |
| Photo          | Photo     | An object encoded in G3 fax as explained in recommendation T.4, with an ASN.1 wrapper to make it compatible with an X.400 BodyPart as defined in X.420. | NA                   |
| thumbnailPhoto | Picture   | An image of a user for display in Outlook. A space-efficient format like JPEG or GIF is recommended.                                                    | 100                  |
| thumbnailLogo  | Logo      | A small-sized image; a user’s logo.                                                                                                                     | 32                   |

To define an image display type, specify the image’s display dimensions (height and width), that
would be used to display the image in the portal. You must also specify the maximum image size that
can be uploaded for this display type.

A custom image display type is rendered on a portal page as:

![photo_placeholder](/img/product_docs/directorymanager/directorymanager/admincenter/portal/displaytype/photo_placeholder.webp)

Click **Edit** to launch the **Manage Photo** dialog box for uploading a photo. The dialog box also
provides many image editing options, including rotate, crop, flip, and re-size.

## Define an Image Display Type

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it.  
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.
5. On the **Custom Display Types** page, click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type and select _Image_ in the
   **Type** drop-down list.  
   You cannot change the name of a custom display type once you have created it.
7. In the **Height** and **Width** boxes, enter image dimensions (in pixels). The image will be
   displayed in the portal with these dimensions.  
   The default is set to 100 x 100 pixels.
8. In the **Maximum Size (KB)** box, enter the maximum image size (in kilobytes) that users can
   upload for this display type.
9. Click **OK**.
10. Click **Save** on the **Custom Display Types** page.

You can link this custom image display type to a schema attribute (such as the Active Directory
attributes _jpegPhoto_, _Photo_, _thumbnailPhoto_, and _thumbnailLogo_) on the **Search Forms,
Properties, Create Object**, and **Property Validation** pages in **Design Settings**, after which
the image placeholder is displayed on the respective portal page. Users can use it to upload their
photos.

**See Also**

- [Design a Portal with Display Types](/docs/directorymanager/11.1/configuration/display-types.md)
- [Display Type Categories](/docs/directorymanager/11.1/configuration/display-types.md)
- [Define Custom Display Types](/docs/directorymanager/11.1/configuration/display-types.md)

# Linked Field Drop-down List Display Type

A linked field drop-down list is displayed in the portal as a drop-down list with multiple values.
When a user selects a value, all fields linked to that value are auto populated. Since these fields
remain isolated, they are not displayed to the user.

Use a linked field drop-down list, for example, when you want the _Office Address, Business Phone
Number, Fax Number_ and _Email_ fields to be auto populated when a user selects his or her office
name from a drop-down list. Here, `<office name>` is the key value while Office Address, Business
Phone Number, Fax Number and Email are its linked (isolated) fields.

To define a linked field drop-down list:

- Specify a value, called a key value.
- Link schema attributes (fields) with this key value. For each attribute that you link, you must
  also provide a value.

## Define a Linked Field Drop-down List Display Type

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it.  
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.
5. On the **Custom Display Types** page, click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type and select _Linked Field
   Dropdown List_ in the **Type** drop-down list.  
   You cannot change the name of a custom display type once you have created it.
7. Use the **Values** area to specify the key values to appear in the drop-down list.

   1. To add a key value, click **Add Value**. The **Key Value** pane is displayed.
   2. In the **Key Value** box, enter a key value. A key value is one that is displayed in the
      drop-down list in the portal. Selecting it auto populates the isolated linked fields.
   3. The **Linked Fields** area is for specifying the fields to link with this key value. Click
      **Add Linked Field**. The **Linked Field** pane is displayed.

      1. In the **Field** drop-down list, select a schema attribute that you want to create as a
         linked field for the key value.
      2. In the **Value** box, enter a value for the attribute.
      3. Click **OK**. The linked field gets listed in the **Linked Fields** area on the **Key
         Value** pane.

   4. Repeat step 7c to add as many linked fields as required.
   5. After defining the linked fields, click **OK** on the **Key Value** pane.  
      With that, the key value is displayed in the **Values** area on the **New Display Type**
      pane.

8. Repeat step 7 to define more values in the list.

   - To edit a key value, click **Edit** for it.
   - To remove a key value from the list, click **Delete** for it.

9. Select a key value in the **Default Selection** list to set it as the default value to be
   displayed in the drop-down list in the portal.  
   The **Default Selection** list contains all key values defined in the **Values** area.
10. Click **OK**.
11. Click **Save** on the **Custom Display Types** page.

A linked field drop-down list is displayed in the portal as a drop-down list. When a portal user
selects a value and saves it, the isolated linked fields are auto populated with the predefined
values and a message, similar to the following, is displayed.

![linked_field_message](/img/product_docs/directorymanager/directorymanager/admincenter/portal/displaytype/linked_field_message.webp)

Here, **Department** is the key value. Selecting it in the drop-down list populates the **Company**
field with the predefined value.

**See Also**

- [Design a Portal with Display Types](/docs/directorymanager/11.1/configuration/display-types.md)
- [Display Type Categories](/docs/directorymanager/11.1/configuration/display-types.md)
- [Define Custom Display Types](/docs/directorymanager/11.1/configuration/display-types.md)

# Multiline Textbox Display Type

A multiline textbox allows portal users to type information into a box that supports word wrapping
and vertical scrolling.

Like a textbox, use a multiline textbox display type to collect and display a single value for an
attribute.

The multiline textbox display type is especially useful for fields that require a lengthy value,
such as the _Description_ field. Moreover, as it can have multiple rows, users can view more
characters of the entered value on screen as compared to a textbox.

In the portal’s default template, the _Description_ field on the _Create New Group_ page uses the
multiline textbox display type. It is as:

![multiline textbox in the portal](/img/product_docs/directorymanager/directorymanager/admincenter/portal/displaytype/multiline_textbox.webp)

To define a multiline textbox display type, provide a name for it and specify the on-screen width by
giving the number of rows to be displayed for it. Portal users can use the _Enter_ key to add as
many rows as required while entering data.

## Define a Multiline Textbox Display Type

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it.  
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.
5. On the **Custom Display Types** page, click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type and select _Multiline
   Textbox_ in the **Type** drop-down list.  
   You cannot change the name of a custom display type once you have created it.
7. In the **Rows** box, type or select a value to specify the number of rows the multiline textbox
   display type should have. These rows make up the on-screen length of the textbox. Users can use
   the _Enter_ key to add as many rows as required while entering data.
8. Click **OK**.
9. Click Save on the **Custom Display Types** page.

**See Also**

- [Design a Portal with Display Types](/docs/directorymanager/11.1/configuration/display-types.md)
- [Display Type Categories](/docs/directorymanager/11.1/configuration/display-types.md)
- [Define Custom Display Types](/docs/directorymanager/11.1/configuration/display-types.md)

# Multi-Valued Control Display Type

The multi-valued control display type supports multi-valued attributes in Active Directory. Examples
include:

- The carLicense, otherTelephone, and otherHomePhone attributes for user objects
- The msExchExtensionCustomAttribute1 through msExchExtensionCustomAttribute5 attributes for group
  objects

The multi-valued control display type is rendered in the portal similar to a drop-down list; only
that it enables users to select multiple values.

To create a custom multi-valued control display type, you have to specify the values (options) to
display in the list. This custom display type can then be linked to a schema attribute. Options in
the multi-valued control drop-down list are the different values that users can select for the
schema attribute you link this display type with.

## Define a Multi-Valued Control Display Type

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it.  
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.
5. On the **Custom Display Types** page, click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type and select _MultiValued
   Control_ in the **Type** drop-down list.  
   You cannot change the name of a custom display type once you have created it.
7. Use the **Values** area to specify the values to be displayed in the multi-valued drop-down list.

   1. Click **Add Value**.
   2. Specify a value and a display text for that value in the respective boxes. The display text
      will be displayed in the multi-valued drop-down list, while the value will be saved in the
      directory or database when a user selects the display text from the multi-valued drop-down
      list.  
      (The value will be saved in the directory when the multi-valued control display type is
      mapped to a directory attribute. It will be saved in the database when the display type is
      mapped to a database attribute.)
   3. In the **Visibility** drop-down list, select one or more security roles. The value in the
      multi-valued drop-down list will be visible to users of the selected role(s) only. If you do
      not select any role, the value will be hidden from all users.  
      The **Visibility** drop-down list displays all predefined and user-defined security roles.
   4. In the **Accessibility** drop-down list, select one or more security roles. Only users of the
      selected role(s) can select the value from the multi-valued drop-down list in the portal. For
      all other users, the value will be greyed out and they will not be able to select it. If you
      do not select any role, the value will be greyed out for all users and they will not be able
      to select it.  
       The **Accessibility** drop-down list displays all predefined and user-defined security
      roles.

      NOTE: (1) If a user has visibility on a value but not accessibility, and that value is set
      as default (see Step 9), then in the portal, the value will be displayed as selected to the
      user. Once the user removes it, he or she cannot select it again from the multi-valued
      drop-down list.  
       (2) If a user has accessibility on a value but not visibility, the value will not be
      displayed to the user. Hence, accessibility will have no impact.

   5. Click **OK**. The value is listed in the **Values** area, represented by its display text.

8. Repeat step 7 to define more values in the list.

   - To edit a value, click **Edit** for it.
   - To remove a value from the list, click **Delete** for it.

9. Select one or more values in the **Default Selection** list to set as the default value(s) for
   the multi-valued drop-down list in the portal.  
   The **Default Selection** list contains all values defined in the **Values** area.
10. In the **Custom Value Edit Roles** list, select one or more security role(s). Users of the
    selected role(s) can specify a new value for the multi-valued drop-down list in the portal. For
    example, if Role A does not have accessibility and visibility on any values in the multi-valued
    drop-down, but has custom value edit rights, then role members will see the drop-down as empty
    but they can add new values.
11. Click **OK**.
12. Click **Save** on the **Custom Display Types** page.

**See Also**

- [Design a Portal with Display Types](/docs/directorymanager/11.1/configuration/display-types.md)
- [Display Type Categories](/docs/directorymanager/11.1/configuration/display-types.md)
- [Define Custom Display Types](/docs/directorymanager/11.1/configuration/display-types.md)

# Design a Portal with Display Types

Display types enable you to control the layout and appearance of a Directory Manager portal and its
pages. They also enable you to expose the required functionality and data fields in the portal.

You can associate multiple identity stores with a portal and design a different portal for each
identity store. Adding links to the navigation bar, adding pages to the portal, and adding fields to
pages are some customization examples. In this way, the portal offers a different design and
functionality for each associated identity store.

You can customize the following for a portal:

- **Search Forms:** control the fields to be displayed on different search forms and search result
  pages in a portal. See the [Customize Search Forms](/docs/directorymanager/11.1/configuration/portal-customization.md) and
  [Customize Search Results](/docs/directorymanager/11.1/configuration/portal-customization.md) topics.
- **Quick Search:** control the schema attributes for quick search to run on. See the
  [Customize Quick Search](/docs/directorymanager/11.1/configuration/portal-customization.md) topic.
- **Properties:** control what properties of directory objects you want to display in a portal. See
  the [Customize Properties Pages](/docs/directorymanager/11.1/configuration/portal-customization.md) topic.
- **Toolbars:** customize the buttons on the portal toolbars. See the
  [Customize the Toolbars](/docs/directorymanager/11.1/configuration/portal-customization.md) topic.
- **Navigation Bar:** customize the left navigation bar in a portal. See the
  [Customize the Navigation Bar](/docs/directorymanager/11.1/configuration/portal-customization.md) topic.
- **Bad Words List:** restrict users from entering bad or offensive words while using a portal. See
  the [Manage the Bad Words List](/docs/directorymanager/11.1/configuration/portal-customization.md) topic.
- **Import/Export Attributes:** specify schema attributes to be used for importing/exporting members
  and additional owners for groups. See the
  [Specify Attributes for Import/Export of Group Owners and Members](/docs/directorymanager/11.1/configuration/portal-customization.md):
  topic.
- **Create Object Wizards:** control the schema attributes displayed in the portal for creating
  different object types. See the
  [Customize the Create Object Wizards](/docs/directorymanager/11.1/configuration/portal-customization.md) topic.
- **Query Attributes:** control which schema attributes to display in the portal for creating
  queries for Smart Groups ad Dynasties. See the
  [ Specify Smart Group Query Attributes](/docs/directorymanager/11.1/configuration/portal-customization.md) topic.
- **Property Validation:** manage the schema attributes for user profile validation and group
  attestation. See the [Manage Property Validation Attributes](/docs/directorymanager/11.1/configuration/portal-customization.md)
  topic.
- **Organizational Hierarchy:** specify user attributes for display on the organizational hierarchy
  chart. See the
  [Specify Attributes for Organizational Hierarchy](/docs/directorymanager/11.1/configuration/portal-customization.md) topic.
- **Card View:** specify the attributes to be displayed on an object card. See the
  [Specify Attributes for the Object Card](/docs/directorymanager/11.1/configuration/portal-customization.md) topic.
- **Object List View:** specify the attributes to be displayed for similar groups on the **Similar
  Groups** tab in group properties. See the
  [Specify Attributes for Object List View](/docs/directorymanager/11.1/configuration/portal-customization.md) topic.

NOTE: Design settings are available for a standard Directory Manager portal, and not for a
Self-Service Password Reset portal.

**See Also**

- [Display Type Categories](/docs/directorymanager/11.1/configuration/display-types.md)
- [Define Custom Display Types](/docs/directorymanager/11.1/configuration/display-types.md)

# Radio Button Display Type

Use a radio display type to present the portal users with a predefined set of mutually exclusive
options, of which they can choose one. Usually radio buttons in a set are grouped together under a
label.

To create a radio display type, provide a label for a set of radio buttons and then add at least two
radio buttons to the set.

### Predefined Radio Display Types

A few radio display types used in the default portal template are:

| Display Type Name | Values                                                                                                                       | Description                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| groupMainType     | Static Group Smart Group Password Expiry Group Organizational Dynasty Geographical Dynasty Managerial Dynasty Custom Dynasty | Enables users to specify the type of group or Dynasty they want to create                                |
| groupType         | Security Group Distribution List                                                                                             | Enables users to specify whether they want to create a security group or a distribution list.            |
| reportTo          | Report To Originator Report To Owner Don’t Send Delivery Reports                                                             | Enables users to set delivery report recipients when a message sent to a group or user is not delivered. |

## Define a Radio Display Type

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it.  
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.
5. On the **Custom Display Types** page, click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type and select _Radio_ in the
   **Type** drop-down list.  
   You cannot change the name of a custom display type once you have created it.
7. Use the **Values** area to define a set of radio buttons, to be displayed in the portal under the
   label you entered in the **Name** box.  
   You must individually define each radio button in the set.

   1. Click **Add Value** to define a radio button. The **Radio Button** pane is displayed.
   2. In the **Display Name** box, enter a name for the radio button. This name is the radio
      button’s label in the portal, so it should represent the value of the radio button.
   3. In the **Tooltip** box, enter the text that is displayed when a user hovers the mouse over
      the radio button.
   4. Enter a description for the radio button in the **Description** box.
   5. Select a security role in the **Visibility** drop-down list. The radio button will be visible
      to users of this role and roles with a priority value higher than this role. See
      [Priority](/docs/directorymanager/11.1/administration/security-roles.md).  
      Select _Never_ to hide the radio button from all users.
   6. Click **OK**. The radio button is listed in the **Values** area on the **New Display Type**
      pane.

8. To define another radio button in the set, repeat step 7.

   - To modify the details of a radio button, click **Edit** for it.
   - To remove a radio button from the set, click **Delete** for it.
   - To change the order in which radio buttons are displayed in the portal, click the equal sign
     for a radio button and drag to change its position in the list.

9. In the **Default Selection** drop-down list, select a radio button. In the portal, this radio
   button will be the default selection in the radio button set.  
   The **Default Selection** list contains all radio buttons defined in the **Values** area.
10. Click **OK**.
11. Click **Save** on the **Custom Display Types** page.

**See Also**

- [Design a Portal with Display Types](/docs/directorymanager/11.1/configuration/display-types.md)
- [Display Type Categories](/docs/directorymanager/11.1/configuration/display-types.md)
- [Define Custom Display Types](/docs/directorymanager/11.1/configuration/display-types.md)

# Text Box Display Type

A text box display type can be used without customization, but you must customize it when you want
to:

- specify a default value for it
- use regular expressions to validate the data users enter in the text box
- force users to provide a unique value for the field

## What are Regular Expressions?

A regular expression is a pattern of text that consists of ordinary characters (for example, letters
a through z) and special characters, known as metacharacters. You can use regular expressions to
ensure that users enter data in an input field according to a standard pattern. For example, the
regular expression for a US phone number of the pattern: (555) 123-4567 will be: ^\(\d\d\d\)
\d\d\d-\d\d\d\d.

To learn about regular expressions and their syntax, see

- [Introduction to Regular Expressions](<https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2010/28hw3sce(v%3dvs.100)>)
- [Regular Expression Syntax Reference](https://msdn.microsoft.com/en-us/library/ms840427.aspx)

## Predefined Text Box Display Types

A few text box display types used in the default portal template are:

|     | Display Type Name  | Default Value | Regular Expression                                             | Regex Example                        |
| --- | ------------------ | ------------- | -------------------------------------------------------------- | ------------------------------------ | ----------------- | ------------------- |
| 1.  | maskPhoneUSwithExt | None          | ^\(\d\d\d\) \d\d\d-\d\d\d\d x\d\d\d$                           | (555) 123-4567 x890                  |
| 2.  | SmtpEmail          | None          | ^([a-zA-Z0-9_\-\.]+)@((\[[0-9]+\.[0-9]+\.[0-9]+\.)             | (([a-zA-Z0-9\-]+\.)+))([a-zA-Z]+     | [0-9]+)(\]?)$     | someone@netwrix.com |
| 3.  | maskPhoneUS        | None          | ^\(\d\d\d\) \d\d\d-\d\d\d\d$                                   | (555) 123-4567                       |
| 4.  | maskEmailAddress   | None          | ^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.) | (([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4} | [0-9]{1,3})(\]?)$ | user@domain.com     |
| 5.  | maskZipCode        | None          | \d{5}(-\d{4})?                                                 | NNNNN-NNNN                           |

## Define a Text Box Display Type

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it.  
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane. The **Custom Display Types** page is displayed.
5. Click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type in the **Name** box.  
   You cannot change the name of a custom display type once you have created it.
7. Select _Textbox_ in the **Type** drop-down list.
8. Specify a value in the **Default Value** box to set it as the default value for the text box.
   Users can modify this value in the portal.
9. In the **Regular Expression** box, type a regular expression to use for validating data that
   users enter in the text box using the portal. Leave this box blank if you do not want to apply a
   validation rule to the data.

   1. Click **Test Regular Expression** to check if the regular expression is valid.
   2. On the **Test Regular Expression** dialog box, type an example that satisfies the regular
      expression and click **Test**.

10. In the **Error Message** box, enter the text to be displayed as an error message when portal
    users enter data in the text box that does not conform to the regular expression.
11. You can place a real-time validation check to ensure that users enter a unique value for the
    field. Directory Manager can look up the value for uniqueness in the directory or an external
    data source. The portal prevents users from proceeding unless a unique value is provided.

    - Select the **Unique** check box to force the user to enter a value that is unique for the
      field (attribute) in the directory.
    - You can also use an external data source, such as an Excel file, to validate the uniqueness of
      the value in real time. Use an API to connect to the external data source. Select the
      **External Validation URL** check box and enter the URL of your API in the box.

    **Example**: Link this text box display type to the group name field on the Create New Group
    page. When a user enters a name for the group, the portal will look up this name for uniqueness
    in the directory/external data source in real time and display an error message if it is not
    unique.

12. Click **OK**.
13. Click **Save** on the **Custom Display Types** page.

### External API Reference

The external API for real-time validation should receive the following parameters:

| Parameter     | Description                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------- |
| objectType    | The type of object the user is creating or updating (for example, group, user)                |
| attributeName | The name of the attribute the user is updating (for example, name, first name, logon name)    |
| attributeName | The attribute value to be validated                                                           |
| objectID      | If an existing user is being updated, the ID of that user is sent; else it is an empty string |

The API returns the following parameters:

| Parameter | Description                                                                                                          |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| status    | Should be ‘true’ (when the attribute value is unique) or ‘false’ (when the attribute value is not unique).           |
| message   | (Optional) For the ‘false’ status, you can return an error message in this parameter, that is displayed to the user. |
| data      | Not in use                                                                                                           |

NOTE: Data should be in JSON format.

**See Also**

- [Design a Portal with Display Types](/docs/directorymanager/11.1/configuration/display-types.md)
- [Display Type Categories](/docs/directorymanager/11.1/configuration/display-types.md)
- [Define Custom Display Types](/docs/directorymanager/11.1/configuration/display-types.md)
