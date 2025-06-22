# Configuration Pane

Use the configuration pane to view sub-criteria information for System Criteria and to view, add,
edit, and remove sub-criteria information for User Criteria.

![Configuration Pane](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/sensitivedatadiscovery/criteriaeditor/configurationpanesystemcriteria.webp)

The information in the configuration pane changes based on the criteria currently selected in the
navigation pane.

![Options at the top of the configuration pane](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/sensitivedatadiscovery/criteriaeditor/configurationpanetop.webp)

The options at the top of the Configuration Pane are:

**NOTE:** Configuration settings for System Criteria cannot be modified.

- Navigation Path – Displays information on the current location within the Sensitive Data Criteria
  Editor
- Name – Name of the criteria as it is shown in the navigation pane
- Test Criteria Button – Opens the Criteria Tester window to test current criteria configurations.
  See the [Criteria Tester Window](#criteria-tester-window) topic for additional information.
- Confidence Level – Displays the current confidence level which indicates how accurate a match is
  for a criteria

  - The confidence level is reported on a scale from 0 - 100. The closer the number is to 100, the
    more accurate a match is for a criteria.

- Risk Score – Displays the general level of risk a criteria represents when found in a file that is
  not properly secured

  - The risk score can be set to **Low**, **Medium**, or **High**
  - Click the **Risk Score** button to change the risk score for user-configured criteria

- Required matched criteria list – Lists the sub-criteria configured for the currently selected
  top-level criteria in the navigation pane. The columns in the table are:

  - Name – Name of the sub-criteria
  - Type – Type of sub-criteria: **Keywords**, **Regex**, or **Summary**
  - Content – Values associated with the sub-criteria
  - Minimum Matches – Minimum number of match hits required for a sub-criteria match hit
  - Match Type – Displays whether the sub-criteria **Must match** or **Must not match**

![Options at the bottom of the configuration pane](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/sensitivedatadiscovery/criteriaeditor/configurationpanebottom.webp)

The options at the bottom of the configuration pane are:

**NOTE:** Configuration settings for System Criteria cannot be modified.

- Add – Add a sub-criteria to the required matched criteria list. The three types of sub-criteria
  that can be added are **Keyword**, **Pattern**, and **Summary**. See the following topics for
  additional information:

  - [Keyword Criteria](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/criteria-editor.md)
  - [Regular Expression (Pattern) Criteria](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/criteria-editor.md)
  - [Summary Criteria](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/criteria-editor.md)

- Remove – Remove sub-criteria from the Required matched sub-criteria list
- Edit – Edit the currently selected sub-criteria
- Must match at least this many criteria – Adjust the slider to configure how many sub-criteria must
  be matched for the sensitive data criteria to be reported

  - The minimum value is 1
  - The maximum value is the number of sensitive data sub-criteria that has been added to the
    required matched criteria list

  **CAUTION:** The character distance feature does not account for summaries that are nested
  within other summaries.

- Matches should be within this proximity of characters – Match hits for this criteria should be
  within this many characters of one another in order for there to be a match. Adjust the slider to
  set the default character distance required for match hits.

  - The minimum value is 0
  - The maximum value is 200
  - Using this feature requires any combination of two or more Regular Expression (Pattern) and
    Keyword sub-criteria

- Include keywords as part of match hits – Select this option to enable the inclusion of keywords as
  part of match hits. This option determines whether a match found based on a Keyword Criteria is
  reported as a match hit. When this option is selected, any matches found for a word in the Keyword
  list is reported as match hit. If this option is not selected, then only matches found based on
  Pattern or child Summary Criteria are reported as a match hit.
- Metadata for this criteria – Click the green plus (**+**) button to add a new metadata type for
  the criteria. Delete a metadata type by clicking the **X** button in the gray metadata tag.

  - For a list of available out-of-the-box metadata tags, see the
    [Default Metadata Tag Values](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/metadata-tags.md)
    topic for additional information

- Cancel – Exit the Sensitive Data Criteria Editor without saving changes
- Save – Save changes made to the current criteria

## Criteria Tester Window

Use the Criteria Tester window to test current criteria configurations.

![Criteria Tester window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/sensitivedatadiscovery/criteriaeditor/criteriatester.webp)

The options in the Criteria Tester are:

- Use the following sample text – Enter sample text to test against current configured criteria in
  the **Use the following sample text** textbox
- Use the following file – Click **Browse** to import a file as sample text to test against
  currently configured criteria
- Test Data – Click **Test Data** to test the sample text against currently configured criteria.
  Match hits show in the **Test Results** section.
- Test Results – Displays match hits for the sample text typed into the text box. The two tabs under
  Test Results are:

  - Criteria – Displays the specific criteria for which the sample text is considered a match
  - Matched Data – Displays the sample text that was matched for the configured criteria

# Keyword Criteria

Keyword criteria consists of a list of comma-separated words. If any word in the list is found in
the file, it is considered a hit.

![Keywords window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/sensitivedatadiscovery/criteriaeditor/criteriatype/keywordswindow.webp)

The options on the Keywords window are:

- Name – Name of the keyword sub-criteria as it appears in the Configuration window
- Add Keyword – Add a keyword to the Value list
- Remove Keyword – Remove a selected keyword from the Value list
- Import Keyword File – Import keywords from a file
- Export Keyword File – Export keywords as a file
- Match Type – Choose whether keyword matches for the Keyword criteria **Must match** or **Must not
  match**
- Case Sensitive Keywords – If enabled, checks letter case when matching keywords
- Count only distinct occurrences – Select the checkbox to enable only distinct occurrences to be
  counted during scan jobs
- Apply these keywords to these file components – Select which file components the keywords apply
  to:

  - Name
  - Contents
  - Metadata

- Look for at least this many occurrences – Adjust the slider to configure how many occurrences are
  required for keyword criteria to match

  - The minimum value is 1
  - The maximum value is 10

# Regular Expression (Pattern) Criteria

Regular Expression criteria are a set of pattern matching rules that provide a concise and flexible
means for matching strings of text. This criteria type can be used to verify a series of numbers as
potentially valid, for example credit card numbers.

![Regular Expression window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/sensitivedatadiscovery/criteriaeditor/criteriatype/regularexpression.webp)

The options on the Regular Expression window are:

- Name – Name of the Regular Expression sub-criteria as it appears in the Configuration window
- Expression – Enter the Regular Expression in the Expression text box
- Case Sensitive Expression – Select the checkbox for case sensitive Regular Expression pattern
  matching
- Validation – Select a validation method from the Validation drop-down. The default value is **No
  validation required**.

  **NOTE:** See the
  [Sensitive Data System Criteria](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/system-criteria.md)
  topic for additional information on validation methods.

- Sample Value – Text entered into the Sample Value text box is used to test pattern matches for the
  expression in the Expression text box
- Test Match – Click **Test Match** to test the expression entered in the Expression text box
  against the text in the Sample Value text box
- Match Type – Choose whether pattern matches for the Regular Expression criteria **Must match** or
  **Must not match**

  - Must match – The Regular Expression must be matched for there to be a match
  - Must not match – If the Regular Expression is matched and is designated **Must not match**,
    then the potential match is invalidated

- Apply this expression to these file components – Select which file components the expression
  applies to:

  - Name
  - Contents
  - Metadata

- Look for at least this many occurrences – Adjust the slider to configure how many occurrences are
  required for a match hit

  - The minimum value is 1
  - The maximum value is 10

# Summary Criteria

Summary criteria are designed as a way of combining Regular Expression (Pattern) criteria and
Keyword criteria.

![Edit new Summary criteria](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/sensitivedatadiscovery/criteriaeditor/criteriatype/newsummarycriteria.webp)

Click **Add** and select **Summary** to add a new Summary criteria to the Required matched criteria
list. Select the new criteria and click **Edit** to configure the new Summary criteria.

![Summary criteria configuration page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/sensitivedatadiscovery/criteriaeditor/criteriatype/summarycriteriaconfiguration.webp)

The options on the Summary criteria configuration page are:

- Name – Name of the Summary sub-criteria
- Test Criteria – Opens the Criteria Tester window to test current Summary criteria configurations.
  See the
  [Criteria Tester Window](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/criteria-editor.md#criteria-tester-window) topic
  for additional information.
- Required matched criteria – Lists sub-criteria configured for currently selected criteria in the
  navigation pane. The columns in the table are:

  - Name – Name of the sub-criteria
  - Type – Type of sub-criteria (**Keyword**, **Regex**, or **Summary**)
  - Content – Values associated with sub-criteria
  - Minimum Matches – Minimum matches required for a match hit
  - Match Type – Displays whether the sub-criteria **Must match** or **Must not match**

- Add – Add a sub-criteria to the required matched criteria list. The three types of sub-criteria
  that can be added are **Keyword**, **Pattern**, and **Summary**.
- Remove – Remove the selected sub-criteria from the Required matched criteria list
- Edit – Edit the currently selected sub-criteria
- Match Type – Choose whether match hits for the Summary criteria **Must match** or **Must not
  match**
- Must match at least this many criteria – Adjust the slider to configure how many sub-criteria must
  be matched for the top-level criteria to be considered a match

  - The minimum value is 1
  - The maximum value is the number of sensitive data sub-criteria that has been added to the
    Required matched criteria list

**CAUTION:** The character distance feature does not account for summaries that are nested within
other summaries.

- Matches should be within this proximity of characters – Adjust the slider to set the default
  character distance required for match hits

  - The minimum value is 0
  - The maximum value is 200
  - Using this feature requires any combination of two or more Regular Expression (Pattern) and
    Keyword sub-criteria

- Include keywords as part of match hits – Select this checkbox to enable the inclusion of keywords
  as part of match hits
- Cancel – Exit the Sensitive Data Criteria Editor without saving changes
- Save – Save changes made to the currently selected criteria

# Sensitive Data Criteria Editor

The Sensitive Data Criteria Editor is accessed from the Criteria Tab in the
**Settings** > **Sensitive Data** node. Use the Sensitive Data Criteria Editor to view pre-defined
criteria and to customize or create user-defined criteria. Sensitive Data Criteria can be configured
in individual data collectors that use the Sensitive Data Discovery Add-On or can be configured to
inherit Sensitive Data Criteria settings from the **Settings** > **Sensitive Data** node. See the
[Sensitive Data](/docs/accessanalyzer/11.6/administration/settings/sensitive-data-criteria.md)
topic for additional information.

![Sensitive Data Criteria Editor](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/sensitivedatadiscovery/criteriaeditor/sensitivdatacriteriaeditor.webp)

The Sensitive Data Criteria Editor contains two sections:

- Navigation pane – User-configured criteria can be added and removed in the navigation pane using
  the Add or Remove options. See the [Navigation Pane](#navigation-pane) topic for additional
  information.
- Configuration pane – Displays configured settings for the currently selected criteria in the
  navigation pane. See the
  [Configuration Pane](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/criteria-editor.md)
  topic for additional information.

## Navigation Pane

The navigation pane lists all user-created and pre-configured Sensitive Data criteria.

![Navigation Pane](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/sensitivedatadiscovery/criteriaeditor/navigationpane.webp)

The options in the Navigation Pane are:

- Add Criteria – Adds a new criteria under the User Criteria list
- Remove Criteria – Removes a user-created criteria from the User Criteria list
- User Criteria – Lists all user-created criteria
- System Criteria – Lists all pre-configured criteria. For a list of pre-configured System Criteria,
  see the
  [Sensitive Data System Criteria](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/system-criteria.md)
  topic for additional information.

  - System Criteria cannot be modified or removed. To use existing System Criteria configurations
    in a User Criteria, right-click on a System Criteria and select **Duplicate** from the
    right-click menu. A configurable copy of the System Criteria appears under User Criteria.
