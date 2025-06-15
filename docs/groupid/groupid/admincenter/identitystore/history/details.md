# History Item Details

Details of a history item are displayed on the __History Details__ dialog box. If the target attribute is single-valued, the old and new values of the attribute are shown. For multi-valued attributes, the lists of added items and removed items are displayed.

Information includes:

- __Attribute Modified__ - The name of the target attribute.
- __Object Name__ - The name of the Directory Manager function this history item pertains to. For example, if it pertains to a workflow, the name of the workflow is displayed here.
- __Who__ - The name of the user who performed the action.
- __Where__ - The name of the computer the action was performed on.
- __When__ - The date and time of the action.

The following lists are available when the target attribute is multi-valued:

- __Added Item__ - A list of values that were added to the multi-value attribute.
- __Removed Items__ - A list of values that were removed from the multi-value attribute.

The following lists are available when the target attribute is single-valued:

- __Old Value__ - The value before the action was performed.
- __New Value__ - The value after the action was performed.

## Annotate History Items

Directory Manager enables a user to add notes to history actions that he or she performed. A note may explain the reason for an action, such as why he or she changed the security type for a group. Only the user who added a note can update it. Other users can
view it, but they cannot edit it or add comments.

On the __History Details__ dialog box, one of the following is available to you:

- __The Add Note button__ - When you are the user who performed the action that logged this history item, and you haven’t added any note yet.
- __The Save Note button__ - When you are the user who performed the action that logged this history item and you have already added a note.
- __The note text__ - When the user who performed the action has added a note.
- __None of the above__ - When you are not the user who performed the action and the user performing the action has not added any note.

### Add a Note

Notes can be added to history items logged for an identity store. Only the user (i.e., the doer of the action) can add and update notes.

__To add a note:__

1. Click __Add Note__ to add a note to the history item. The __Note__ text box is displayed.
2. Type a note for the history item. Your note can have a maximum of 500 characters.
3. Click __Save Note__. On the __History__ page, the annotated item is displayed with a __View Note__ button next to it. This helps distinguish
   annotated items from non-annotated items.

### Edit a Note

1. On the __History Details__ dialog box, the __Note__ box displays your note for the history item. Make the required changes to the text.
2. Click __Save Note__.

### Remove a Note

On the __History Details__ dialog box, the __Note__ box displays your note. Remove it and click __Save Note__.

__See Also__

- [Identity Store History](view.md)
- [Admin Center History](../../general/history.md)
