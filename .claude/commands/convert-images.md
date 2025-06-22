# Convert Images to WebP Format

This command helps you batch convert PNG/JPG images to WebP format for better performance in the Netwrix documentation site built on Docusaurus v3.

## Quick Reference

**Command Pattern**: `npm start {productname}` to test after conversion
**Key Directories**: 
- `/static/img/product_docs/{productname}/` - Product images to convert
- `/static/img/product_docs/{productname}/{version}/` - Version-specific images
- `/docs/{productname}/` - Markdown files with image references
- `/static/img/product_docs/.backup-{timestamp}/` - Backup location

---

## Prerequisites

**Install WebP tools:**
```bash
# macOS (using Homebrew)
brew install webp

# Ubuntu/Debian
sudo apt-get install webp

# Windows (using Chocolatey)
choco install webp

# Verify installation
cwebp -version
```

---

## Complete Step-by-Step Process

### 1. **Gather Information & Scope**
   
   **Ask user for conversion scope:**
   - Convert images for specific product (e.g., "accessanalyzer") 
   - Convert images for specific product version (e.g., "accessanalyzer/12.0")
   - Convert all product images site-wide
   
   **Validate target directory:**
   ```bash
   # Check if product/version exists
   ls -la static/img/product_docs/{productname}
   # or for versioned
   ls -la static/img/product_docs/{productname}/{version}
   ```

### 2. **Analyze Current Images**
   
   **Find images to convert:**
   ```bash
   # For specific product (all versions)
   find static/img/product_docs/{productname} -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | head -10
   
   # For specific product version
   find static/img/product_docs/{productname}/{version} -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | head -10
   
   # For all products
   find static/img/product_docs -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | head -10
   
   # Count total images
   find static/img/product_docs/{scope} -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | wc -l
   ```
   
   **Check current file sizes:**
   ```bash
   # Show current image directory size
   du -sh static/img/product_docs/{scope}
   
   # Show breakdown by file type
   find static/img/product_docs/{scope} -name "*.png" -exec du -ch {} + | grep total
   find static/img/product_docs/{scope} -name "*.jpg" -o -name "*.jpeg" -exec du -ch {} + | grep total
   ```

### 3. **Create Backup**
   
   **Create timestamped backup:**
   ```bash
   # Create backup directory with timestamp
   backup_dir="static/img/product_docs/.backup-$(date +%Y%m%d-%H%M%S)"
   mkdir -p "$backup_dir"
   
   # Copy images to backup (preserving directory structure)
   find static/img/product_docs/{scope} -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | while read -r file; do
     # Create relative path from product_docs
     rel_path="${file#static/img/product_docs/}"
     dest_dir="$backup_dir/$(dirname "$rel_path")"
     mkdir -p "$dest_dir"
     cp "$file" "$backup_dir/$rel_path"
   done
   
   echo "✓ Backup created at: $backup_dir"
   ```
   
   **Verify backup:**
   ```bash
   # Show backup size
   du -sh "$backup_dir"
   
   # Count backed up files
   find "$backup_dir" -type f | wc -l
   ```

### 4. **Convert Images to WebP**
   
   **Batch convert with quality settings:**
   ```bash
   # Set quality based on image type (85 is good default)
   quality=85
   
   # Convert each image
   find static/img/product_docs/{scope} -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | while read -r img; do
     # Get filename without extension
     filename="${img%.*}"
     
     # Skip if WebP already exists
     if [ -f "${filename}.webp" ]; then
       echo "Skipping $img (WebP exists)"
       continue
     fi
     
     # Convert to WebP
     if cwebp -q "$quality" "$img" -o "${filename}.webp" 2>/dev/null; then
       echo "✓ Converted: $(basename "$img") -> $(basename "${filename}.webp")"
       
       # Show size comparison
       original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img")
       webp_size=$(stat -f%z "${filename}.webp" 2>/dev/null || stat -c%s "${filename}.webp")
       reduction=$((100 - (webp_size * 100 / original_size)))
       echo "  Size: ${original_size} bytes -> ${webp_size} bytes (${reduction}% reduction)"
     else
       echo "✗ Failed to convert: $img"
     fi
   done
   ```

### 5. **Update Markdown References**
   
   **Find and update image references in documentation:**
   ```bash
   # Create list of converted images
   converted_images=()
   
   # Process each converted image
   find static/img/product_docs/{scope} -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | while read -r img; do
     filename="${img%.*}"
     webp_file="${filename}.webp"
     
     # Check if WebP version exists
     if [ -f "$webp_file" ]; then
       # Get relative paths for markdown
       img_rel="${img#static/}"
       webp_rel="${webp_file#static/}"
       
       echo "Updating references: $img_rel -> $webp_rel"
       
       # Find markdown files that reference this image
       find docs/{scope} -name "*.md" -type f -exec grep -l "/$img_rel" {} \; | while read -r md_file; do
         # Create backup of markdown file
         cp "$md_file" "${md_file}.bak"
         
         # Replace image reference
         sed -i.tmp "s|/$img_rel|/$webp_rel|g" "$md_file"
         rm "${md_file}.tmp"
         
         echo "  ✓ Updated: $md_file"
       done
     fi
   done
   ```
   
   **Verify markdown updates:**
   ```bash
   # Check for any remaining PNG/JPG references in the scope
   find docs/{scope} -name "*.md" -exec grep -l "\.png\|\.jpg\|\.jpeg" {} \; | head -5
   
   # Show sample of updated references
   find docs/{scope} -name "*.md" -exec grep -l "\.webp" {} \; | head -3 | while read -r file; do
     echo "Sample from $file:"
     grep "\.webp" "$file" | head -2
   done
   ```

### 6. **Quality Verification**
   
   **Test image loading in development:**
   ```bash
   # Start development server for affected product
   npm start {productname}
   # or for versioned
   npm start {productname}/{version}
   ```
   
   **Check image quality manually:**
   - Navigate to pages with converted images
   - Verify images display correctly
   - Check image quality is acceptable
   - Test in both light and dark modes
   
   **Generate conversion report:**
   ```bash
   # Count conversions
   converted_count=$(find static/img/product_docs/{scope} -name "*.webp" | wc -l)
   original_count=$(find static/img/product_docs/{scope} -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | wc -l)
   
   # Calculate size savings
   original_size=$(find static/img/product_docs/{scope} -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -exec du -cb {} + | tail -1 | cut -f1)
   webp_size=$(find static/img/product_docs/{scope} -name "*.webp" -exec du -cb {} + | tail -1 | cut -f1)
   
   # Show report
   echo "=== Conversion Report ==="
   echo "Original images: $original_count"
   echo "WebP images created: $converted_count"
   echo "Original size: $(numfmt --to=iec $original_size)"
   echo "WebP size: $(numfmt --to=iec $webp_size)"
   echo "Size reduction: $((100 - (webp_size * 100 / original_size)))%"
   ```

### 7. **Clean Up Original Images**
   
   **Confirm deletion with user:**
   ```bash
   echo "Ready to delete original PNG/JPG images?"
   echo "Backup location: $backup_dir"
   echo "Continue? (y/n)"
   read -r confirm
   
   if [ "$confirm" = "y" ]; then
     # Remove original images that have WebP versions
     find static/img/product_docs/{scope} -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | while read -r img; do
       filename="${img%.*}"
       if [ -f "${filename}.webp" ]; then
         rm "$img"
         echo "✓ Deleted: $img"
       fi
     done
     
     echo "✓ Original images cleaned up"
   else
     echo "Original images preserved"
   fi
   ```

### 8. **Final Validation**
   
   **Test complete documentation:**
   ```bash
   # Clear cache to ensure fresh load
   npm run clear
   
   # Test affected product(s)
   npm start {productname}
   
   # Run format check to ensure no issues
   npm run format:check
   ```
   
   **Remove markdown backups:**
   ```bash
   # Clean up markdown backup files if everything looks good
   find docs/{scope} -name "*.md.bak" -delete
   echo "✓ Cleaned up markdown backup files"
   ```

---

## WebP Quality Settings

### Recommended Quality Levels
- **95**: Near-lossless for critical diagrams and screenshots
- **90**: High quality for detailed interface screenshots  
- **85**: Good balance for most documentation images (default)
- **80**: Smaller size for simple diagrams and icons
- **75**: Maximum compression for large images

### Quality Selection Guide
```bash
# For screenshots with text
cwebp -q 90 screenshot.png -o screenshot.webp

# For simple diagrams
cwebp -q 80 diagram.png -o diagram.webp

# For photos or complex images
cwebp -q 85 photo.jpg -o photo.webp

# Near-lossless for critical images
cwebp -q 95 -z 9 important.png -o important.webp
```

---

## Examples

### Example 1: Convert Access Analyzer 12.0 Images

```bash
# 1. Analyze current images
find static/img/product_docs/accessanalyzer/12.0 -type f \( -name "*.png" -o -name "*.jpg" \) | wc -l
# Output: 23 images found

# 2. Create backup
backup_dir="static/img/product_docs/.backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$backup_dir/accessanalyzer/12.0"
cp -r static/img/product_docs/accessanalyzer/12.0/* "$backup_dir/accessanalyzer/12.0/"

# 3. Convert to WebP
find static/img/product_docs/accessanalyzer/12.0 -name "*.png" -o -name "*.jpg" | while read img; do
  cwebp -q 85 "$img" -o "${img%.*}.webp"
done

# 4. Update markdown references
find docs/accessanalyzer/12.0 -name "*.md" -exec sed -i.bak 's/\.png/.webp/g; s/\.jpg/.webp/g' {} \;

# 5. Test
npm start accessanalyzer/12.0
```

### Example 2: Convert All Identity Manager Images

```bash
# 1. Analyze all versions
find static/img/product_docs/identitymanager -type f \( -name "*.png" -o -name "*.jpg" \) | wc -l
# Output: 156 images found across all versions

# 2. Create comprehensive backup
backup_dir="static/img/product_docs/.backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$backup_dir"
cp -r static/img/product_docs/identitymanager "$backup_dir/"

# 3. Batch convert all versions
find static/img/product_docs/identitymanager -name "*.png" -o -name "*.jpg" | while read img; do
  cwebp -q 85 "$img" -o "${img%.*}.webp"
done

# 4. Update all markdown files
find docs/identitymanager -name "*.md" -exec sed -i.bak 's/\.png/.webp/g; s/\.jpg/.webp/g' {} \;

# 5. Test each version
npm start identitymanager/6.2
npm start identitymanager/6.1
npm start identitymanager/saas
```

---

## Configuration Patterns

### File Organization
- **Single product**: `static/img/product_docs/{productname}/`
- **Versioned product**: `static/img/product_docs/{productname}/{version}/`
- **Backup location**: `static/img/product_docs/.backup-{timestamp}/`

### Markdown Reference Patterns
- **Absolute path**: `![Alt text](/img/product_docs/product/image.webp)`
- **Version-specific**: `![Alt text](/img/product_docs/product/version/image.webp)`

### Quality Recommendations by Image Type
- **Screenshots with UI**: 90 quality
- **Simple diagrams**: 80 quality  
- **Complex screenshots**: 85 quality
- **Icons and simple graphics**: 75 quality

---

## Important Reminders

### Before You Start
- ✅ Always create timestamped backups
- ✅ Test conversion on a few images first
- ✅ Check WebP support is enabled in Docusaurus
- ✅ Verify current disk space available

### During Conversion
- ✅ Monitor conversion quality visually
- ✅ Check file size reductions are reasonable
- ✅ Update markdown references systematically
- ✅ Keep track of failed conversions

### After Conversion
- ✅ Test image loading in development mode
- ✅ Verify images display in both light/dark modes
- ✅ Check responsive image behavior
- ✅ Clean up backup files after verification

### Common Issues
- 🚫 **WebP not supported**: All modern browsers support WebP
- 🚫 **Quality too low**: Increase quality setting (90-95)
- 🚫 **File size too large**: Decrease quality setting (75-80)
- 🚫 **Conversion failures**: Check file permissions and disk space

---

## Troubleshooting

### Conversion Failures
```bash
# Check WebP installation
cwebp -version

# Check file permissions
ls -la static/img/product_docs/{productname}/

# Check disk space
df -h

# Test single conversion
cwebp -q 85 path/to/image.png -o path/to/image.webp
```

### Missing Image References
```bash
# Find markdown files still referencing PNG/JPG
find docs/{scope} -name "*.md" -exec grep -l "\.png\|\.jpg\|\.jpeg" {} \;

# Check for broken image links
find docs/{scope} -name "*.md" -exec grep -o '/img/[^)]*' {} \; | sort -u
```

### Quality Issues
```bash
# Re-convert with higher quality
find static/img/product_docs/{scope} -name "*.webp" -delete
find static/img/product_docs/{scope} -type f \( -name "*.png" -o -name "*.jpg" \) | while read img; do
  cwebp -q 95 "$img" -o "${img%.*}.webp"
done
```

### Rollback Procedure
```bash
# Restore from backup if needed
backup_dir="/path/to/backup"
rm static/img/product_docs/{scope}/*.webp
cp -r "$backup_dir"/* static/img/product_docs/{scope}/

# Restore markdown files
find docs/{scope} -name "*.md.bak" | while read backup; do
  original="${backup%.bak}"
  mv "$backup" "$original"
done
```

---

## Files Modified Checklist

When complete, you should have:

- [ ] **Backup created** - `static/img/product_docs/.backup-{timestamp}/`
- [ ] **WebP images generated** - All PNG/JPG converted to `.webp`
- [ ] **Markdown updated** - All image references point to `.webp` files
- [ ] **Original images removed** - PNG/JPG files deleted (if confirmed)
- [ ] **Backup files cleaned** - `.md.bak` files removed after verification
- [ ] **Documentation tested** - All images load correctly in development

**Test command**: `npm start {productname}` or `npm start {productname}/{version}`
**Verification**: Check browser dev tools for 404 errors on images