#!/usr/bin/env python3
"""
Batch update all TypeScript files to use react-router-dom instead of react-router
"""
import os
import glob

def update_file(filepath):
    """Update imports in a single file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace the import statement
        updated = content.replace('from "react-router"', 'from "react-router-dom"')
        
        # Only write if content changed
        if content != updated:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(updated)
            return True
        return False
    except Exception as e:
        print(f"Error updating {filepath}: {e}")
        return False

def main():
    # Get the script's directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    src_dir = os.path.join(script_dir, 'src')
    
    # Find all .tsx files
    tsx_files = glob.glob(os.path.join(src_dir, '**', '*.tsx'), recursive=True)
    
    updated_count = 0
    total_count = len(tsx_files)
    
    print(f"Found {total_count} TypeScript files to check...")
    print("Updating imports...")
    
    for filepath in tsx_files:
        if update_file(filepath):
            rel_path = os.path.relpath(filepath, script_dir)
            print(f"✓ Updated: {rel_path}")
            updated_count += 1
    
    print(f"\n{'='*60}")
    print(f"Update complete!")
    print(f"Files updated: {updated_count}/{total_count}")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()

