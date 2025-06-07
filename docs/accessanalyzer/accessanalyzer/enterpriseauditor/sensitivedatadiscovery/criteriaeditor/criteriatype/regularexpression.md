# Regular Expression (Pattern) Criteria

Regular Expression criteria are a set of pattern matching rules that provide a concise and flexible means for matching strings of text. This criteria type can be used to verify a series of numbers as potentially valid, for example credit card numbers.

![Regular Expression window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/criteriatype/regularexpression.png)

The options on the Regular Expression window are:

- Name – Name of the Regular Expression sub-criteria as it appears in the Configuration window
- Expression – Enter the Regular Expression in the Expression text box
- Case Sensitive Expression – Select the checkbox for case sensitive Regular Expression pattern matching
- Validation – Select a validation method from the Validation drop-down. The default value is __No validation required__.

  __NOTE:__ See the [Sensitive Data System Criteria](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/systemcriteria.md) topic for additional information on validation methods.
- Sample Value – Text entered into the Sample Value text box is used to test pattern matches for the expression in the Expression text box
- Test Match – Click __Test Match__ to test the expression entered in the Expression text box against the text in the Sample Value text box
- Match Type – Choose whether pattern matches for the Regular Expression criteria __Must match__ or __Must not match__

  - Must match – The Regular Expression must be matched for there to be a match
  - Must not match – If the Regular Expression is matched and is designated __Must not match__, then the potential match is invalidated
- Apply this expression to these file components – Select which file components the expression applies to:

  - Name
  - Contents
  - Metadata
- Look for at least this many occurrences – Adjust the slider to configure how many occurrences are required for a match hit

  - The minimum value is 1
  - The maximum value is 10
