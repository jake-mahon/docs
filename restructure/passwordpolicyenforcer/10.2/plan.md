# Password Policy Enforcer 10.2 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the Password Policy Enforcer 10.2 documentation to improve information architecture, reduce complexity, and enhance user navigation.

## Current State Analysis

- **Total Files**: 97 files
- **Main Sections**: 2 (password_policy_enforcer, password_reset)
- **Issues Identified**:
  - Administration folder contains 50+ files (too granular)
  - Similar topics spread across multiple files
  - Inconsistent naming conventions
  - Evaluation sections separate from main documentation

## Restructure Strategy

### 1. Consolidation Approach

- Combine related topics into comprehensive guides
- Merge small, single-topic files into larger conceptual sections
- Group all password rules into organized categories
- Consolidate installation and deployment topics

### 2. New Structure Benefits

- **Reduced Categories**: From 8 directories to 10 well-organized sections
- **Better Navigation**: Logical flow from getting started to advanced topics
- **Task-Oriented**: Structure follows user journey and common tasks
- **Consistent Naming**: All files use snake-case with hyphens

### 3. Major Changes

#### Getting Started

- Combines overview, what's new, and evaluation content
- Provides clear entry point for new users

#### Installation and Deployment

- Merges all installation-related content
- Separates manual vs automated deployment
- Includes client installation and uninstallation

#### Password Policies

- Consolidates policy creation, management, and testing
- Groups policy properties and priorities
- Includes domain and local policy information

#### Password Rules

- Groups 20+ individual rule files into 5 comprehensive guides:
  - Basic Rules: length, age, history
  - Character Rules: complexity, unique characters, character patterns
  - Pattern Rules: keyboard, repeating, similarity
  - Advanced Rules: compromised, dictionary, user info rules
  - Custom Rules: passphrases, custom patterns

#### Messaging and Notifications

- Combines all email and message customization topics
- Includes multilingual support
- Consolidates delivery options

#### Tools and Utilities

- Groups command-line tools, support utilities
- Includes HIBP updater and troubleshooting
- Consolidates all utility documentation

#### Web Interface

- Maintains separate section for web-specific features
- Combines configuration and usage guides

#### Password Reset

- Simplified from 20 files to 8 comprehensive guides
- Maintains logical flow from installation to usage
- Includes security and best practices

### 4. File Reduction

- **From**: 97 individual files
- **To**: Approximately 45-50 files
- **Reduction**: ~50% fewer files through intelligent consolidation

### 5. Implementation Notes

- All file paths will use snake-case with hyphens
- Front matter will be updated for proper sidebar display
- Related content will be cross-referenced
- Each section will have an index.md for overview
