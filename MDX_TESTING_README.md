# MDX Validation Test Suite

A comprehensive validation framework for MDX files in your Docusaurus project. This suite provides detailed, verbose error reporting designed for both human review and AI processing.

## Features

- 🧪 **Pure MDX validation** using the same compiler as Docusaurus
- 📊 **Verbose error reporting** with code context and line numbers
- 🎯 **Pattern detection** for common MDX issues
- 📈 **Detailed JSON reports** for automated processing
- 🔍 **Smart error analysis** with suggestions
- 🤖 **AI-friendly output** structured for automated fixing

## Quick Start

### Validate all MDX files
```bash
npm run test:mdx
```

### Test a specific file with detailed output
```bash
npm run test:mdx:file docs/path/to/file.md
```

### Test with extra context lines
```bash
npm run test:mdx:verbose
```

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run test:mdx` | Run MDX validation with detailed reporting |
| `npm run test:mdx:file <path>` | Test a specific file (shorthand for --pattern) |
| `npm run test:mdx:suite` | Same as test:mdx (kept for compatibility) |
| `npm run test:mdx:verify` | Verify all files are valid (CI-friendly) |
| `npm run test:mdx:verbose` | Run with extra context lines (10 instead of 5) |
| `npm run workflow:convert <cmd>` | Run conversion with before/after validation |

## Test Suite Options

```bash
node mdx-test-suite.js [options]

Options:
  --pattern <glob>      Test specific file pattern (default: "docs/**/*.{md,mdx}")
  --output <file>       Output report filename (default: "mdx-test-report.json")
  --context-lines <n>   Number of context lines around errors (default: 5)
  --help, -h           Show this help message
```

### Examples

Test only API documentation:
```bash
npm run test:mdx:suite -- --pattern "docs/api/**/*.{md,mdx}"
```

Test with more context:
```bash
npm run test:mdx:suite -- --context-lines 15
```

## Understanding the Output

### Console Output

The validator provides detailed information for each invalid file:

```
1. docs/example.md
────────────────────────────────────────────────────────────────────────────────

  Error Message:
    Could not parse expression with acorn

  Code Context:
     7 > <script>if (a &lt; b) { ... }</script>
         ^
         └─ Error occurs here

  Detected Issues:
    • HTML entities in script tag
      Hint: Found HTML entities in a <script> tag around line 7

  Suggestion:
    This often indicates HTML entities or invalid JavaScript in JSX context
────────────────────────────────────────────────────────────────────────────────
```

### JSON Report Structure

The test suite generates a detailed JSON report with:

```json
{
  "timestamp": "2024-01-15T10:30:00.000Z",
  "testConfiguration": {
    "patterns": ["docs/**/*.{md,mdx}"],
    "contextLines": 5
  },
  "summary": {
    "total": 150,
    "valid": 145,
    "invalid": 5,
    "validPercentage": "96.67",
    "invalidPercentage": "3.33"
  },
  "results": [...],
  "errorSummary": [
    {
      "file": "docs/example.md",
      "error": "Could not parse expression with acorn",
      "location": { "line": 7, "column": 49 },
      "detectedIssues": [
        {
          "type": "HTML entities detected",
          "hint": "Found HTML entities on line 7",
          "pattern": "<script>if (a &lt; b)..."
        }
      ],
      "suggestion": "This often indicates HTML entities..."
    }
  ]
}
```

## Common MDX Issues Detected

The validator detects and reports these common issues:

### 1. HTML Entities in Script Tags
**Issue**: MDX treats content in `<script>` tags as JSX, not HTML
```html
<!-- Invalid -->
<script>if (a &lt; b) { ... }</script>

<!-- Valid -->
<script>if (a < b) { ... }</script>
```

### 2. Unclosed JSX Tags
**Issue**: All JSX tags must be properly closed
```jsx
<!-- Invalid -->
<img src="image.jpg">

<!-- Valid -->
<img src="image.jpg" />
```

### 3. Invalid JSX in Markdown Context
**Issue**: Unescaped curly braces in JSX components
```jsx
<!-- Invalid -->
<Component>{unescaped}</Component>

<!-- Valid -->
<Component>{'escaped'}</Component>
```

## CI/CD Integration

### GitHub Actions

The repository includes a GitHub Actions workflow that automatically validates MDX files. The workflow:
- Runs on push to main branch
- Runs on pull requests
- Uploads detailed test reports
- Comments on PRs with validation results

### Exit Codes

- `0` - All files valid
- `1` - One or more files invalid

## Workflow Integration

### With Conversion Scripts

Use the conversion workflow to validate before and after conversions:

```bash
npm run workflow:convert "node your-conversion-script.js"
```

This will:
1. Validate all MDX files before conversion
2. Run your conversion command
3. Validate all MDX files after conversion
4. Compare and report improvements/regressions

## Best Practices for AI Processing

When using this tool with AI systems:

1. **Use the JSON report**: The `errorSummary` field provides structured data
2. **Check detected issues**: The `detectedIssues` array contains pattern matches
3. **Follow suggestions**: Each error includes a suggestion for fixing
4. **Use the pattern field**: Shows the exact problematic code snippet

### Example AI Workflow

```bash
# 1. Run validation
npm run test:mdx:suite

# 2. Read the JSON report
cat mdx-test-report.json

# 3. Parse errorSummary for each file
# 4. Apply fixes based on detected issues and suggestions
# 5. Re-run validation to confirm fixes
```

## Troubleshooting

### No position information in error
Some MDX errors don't provide line/column information. In these cases, the validator will:
- Scan for common problematic patterns
- Show the first occurrence found
- Provide context around detected issues

### Performance on large codebases
For better performance on large documentation sets:
```bash
# Test specific directories
npm run test:mdx:suite -- --pattern "docs/specific-section/**"

# Reduce context lines for faster processing
npm run test:mdx:suite -- --context-lines 2
```

## License

This validation suite is part of your Docusaurus documentation project. 