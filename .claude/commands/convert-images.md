# Convert Images to WebP Format

This command helps you batch convert PNG/JPG images to WebP format for better performance and update all references in the documentation.

## Prerequisites

Ensure `cwebp` is installed:
```bash
# macOS
brew install webp

# Ubuntu/Debian
sudo apt-get install webp

# Check installation
cwebp -version
```

## Steps to Complete

1. **Select Scope**
   - Ask user: Convert images for specific product or all products?
   - If specific product, ask which one (e.g., "accessanalyzer")

2. **Find Images to Convert**
   ```bash
   # For specific product
   find /static/img/product_docs/{productname} -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -print0
   
   # For all products
   find /static/img/product_docs -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -print0
   ```

3. **Create Backup**
   ```bash
   # Create backup directory with timestamp
   backup_dir="/static/img/product_docs/.backup-$(date +%Y%m%d-%H%M%S)"
   mkdir -p "$backup_dir"
   
   # Copy images to backup
   find /static/img/product_docs/{scope} -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -exec cp {} "$backup_dir/" \;
   ```

4. **Convert Images to WebP**
   ```bash
   # Convert each image
   find /static/img/product_docs/{scope} -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | while read -r img; do
     # Get filename without extension
     filename="${img%.*}"
     
     # Convert to WebP (quality 85 is usually good balance)
     cwebp -q 85 "$img" -o "${filename}.webp"
     
     echo "Converted: $img -> ${filename}.webp"
   done
   ```

5. **Update Markdown References**
   ```bash
   # Find all markdown files that reference the images
   # For each converted image, update references
   
   # Example for a specific image:
   old_image="image.png"
   new_image="image.webp"
   
   # Find and replace in markdown files
   find /docs/{scope} -name "*.md" -type f -exec grep -l "$old_image" {} \; | while read -r file; do
     # Use sed to replace image references
     sed -i.bak "s|${old_image}|${new_image}|g" "$file"
   done
   ```

6. **Verify Updates**
   - Check that all references were updated
   - Preview a few pages to ensure images display correctly
   - Compare file sizes to show savings

7. **Clean Up Old Images**
   After verification, ask user to confirm deletion:
   ```bash
   # Show size comparison
   echo "Original images size:"
   du -sh /static/img/product_docs/.backup-*/
   
   echo "WebP images size:"
   find /static/img/product_docs/{scope} -name "*.webp" -exec du -ch {} + | grep total
   
   # If confirmed, remove original images
   find /static/img/product_docs/{scope} -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -delete
   ```

8. **Test Documentation**
   ```bash
   # Start development server to verify images load
   npm start {productname}
   ```

## Quality Settings

- **85**: Good balance of quality and size (default)
- **90**: Higher quality for detailed screenshots
- **80**: Smaller size for simple diagrams
- **95**: Near-lossless for critical images

## Example Output

```
Converting images for accessanalyzer...
✓ Created backup at /static/img/product_docs/.backup-20240119-143022/
✓ Converted 45 images to WebP format
✓ Updated 127 markdown files
✓ Size reduction: 12.3MB → 4.7MB (62% smaller)
✓ All images verified in documentation

Delete original images? (y/n)
```

## Important Notes

- Always create a backup before converting
- Test image quality before deleting originals
- WebP is supported by all modern browsers
- Some images may not benefit from conversion (already optimized PNGs)
- Consider keeping originals if they're source files for editing