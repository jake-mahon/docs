# Password Reset 3.3 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the Password Reset 3.3 documentation to improve information architecture, reduce redundancy, and enhance user experience.

## Goals

1. **Reduce complexity**: Consolidate from 35 files to 31 files
2. **Improve organization**: Create clear logical groupings based on user tasks
3. **Eliminate redundancy**: Merge duplicate content between evaluation and administration sections
4. **Enhance navigation**: Use clear, title-case naming conventions
5. **Separate products**: Clearly distinguish between Password Reset and Password Policy Enforcer

## Key Changes

### 1. Top-Level Organization

- Split documentation into two main product sections:
  - **Password Reset** (main product)
  - **Password Policy Enforcer** (additional product)
- Add a **Getting Started** section at the root level for quick onboarding

### 2. Password Reset Restructuring

- **Configuration**: Consolidate all setup and configuration topics
  - Merge individual tab documentation (general, email, enroll, verification, security, permissions) into focused configuration guides
- **Administration**: Focus on ongoing management tasks
  - Combine data console and database topics
  - Group template customization and user management
- **Usage**: Create user-focused section
  - Combine all end-user documentation
  - Include filtering and reporting capabilities
- **Advanced**: Separate advanced topics
  - Security hardening
  - SQL Server migration

### 3. Password Policy Enforcer Restructuring

- Maintain simpler structure due to less content
- Focus on configuration and evaluation

### 4. Content Consolidation

- Merge duplicate content from evaluation and administration guides
- Combine related topics (e.g., all configuration tabs into logical groups)
- Create comprehensive index files for each section

### 5. File Naming Conventions

- Use snake-case with hyphens (e.g., `password-reset-client.md`)
- Remove underscores from all file names
- Use descriptive, action-oriented names

## Benefits

1. **Improved findability**: Users can locate information more quickly
2. **Reduced maintenance**: Less duplicate content to maintain
3. **Better user journey**: Clear progression from getting started to advanced topics
4. **Clearer product separation**: Distinct sections for each product
5. **Modern structure**: Aligns with current documentation best practices
