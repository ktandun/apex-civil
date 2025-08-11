#!/bin/bash

width=2000

# Ensure using bash
shopt -s extglob

find ./src -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) \
	! -iname "*-w.jpg" \
	! -iname "*-w.jpeg" \
	! -iname "*-w.png" | while IFS= read -r file; do

	size_bytes=$(stat -f%z "$file") # macOS stat
	size_mb=$((size_bytes / 1024 / 1024))

	if ((size_mb > 5)); then
		echo "File: $file ($size_mb MB)"
		ext="${file##*.}"
		base="${file%.*}"
		output="${base}-${width}w.${ext}"

		magick "$file" -resize "${width}" "$output"
		echo "Resized -> $output"
	fi
done
