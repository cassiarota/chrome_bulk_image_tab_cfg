# Bulk URL Opener Chrome Extension

A Chrome extension that allows you to select text containing multiple URLs and open them all in new tabs with a single right-click.

## Features

- **Right-click context menu**: Select any text containing URLs and right-click to see "Open all URLs" option
- **Smart URL detection**: Automatically detects URLs with various formats:
  - URLs with `http://` or `https://` protocols
  - URLs starting with `www.`
  - Domain names (e.g., `example.com`)
  - URLs separated by spaces, newlines, commas, or other characters
- **Batch tab opening**: Opens all detected URLs in new tabs simultaneously
- **Works everywhere**: Functions on any webpage, including Google Sheets cells
- **Duplicate removal**: Automatically removes duplicate URLs before opening

## Installation

### Developer Mode Installation (For Testing)

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked"
4. Select the `bulk-url-opener` folder from this project
5. The extension is now installed and ready to use!

### Publishing to Chrome Web Store

To publish this extension to the Chrome Web Store:

1. **Create a developer account**:
   - Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard)
   - Pay a one-time $5 registration fee

2. **Prepare for submission**:
   - Create a ZIP file of the `bulk-url-opener` folder
   - Prepare promotional materials:
     - Screenshots (1280x800 or 640x400)
     - Promotional tile images
     - Detailed description

3. **Submit the extension**:
   - Click "New Item" in the developer dashboard
   - Upload the ZIP file
   - Fill in all required information:
     - Detailed description
     - Category (Productivity recommended)
     - Language
     - Screenshots
   - Submit for review

4. **Review process**:
   - Google typically reviews extensions within 1-3 business days
   - You'll receive an email once approved or if changes are needed

## Usage

1. **Select text containing URLs**:
   - Highlight any text on a webpage that contains one or more URLs
   - This can be a list of URLs, paragraph text with embedded links, or even a Google Sheets cell

2. **Right-click on the selection**:
   - A context menu will appear
   - Click on "Open all URLs"

3. **URLs open automatically**:
   - All valid URLs found in the selection will open in new tabs
   - The first URL tab will be active, others will open in the background

## Examples of Supported URL Formats

The extension can detect and open URLs in various formats:

```
https://www.google.com
http://example.org
www.github.com
stackoverflow.com/questions
google.com, facebook.com, twitter.com
https://site1.com https://site2.com https://site3.com
```

## Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions Required**: 
  - `contextMenus`: To add right-click menu
  - `tabs`: To open new tabs
  - `activeTab`: To access selected text
- **No data collection**: This extension does not collect or transmit any user data

## File Structure

```
bulk-url-opener/
├── manifest.json       # Extension configuration
├── background.js       # Service worker handling context menu and URL processing
├── icons/             # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md          # This file
```

## Privacy

This extension:
- Only processes text that you explicitly select and right-click on
- Does not store any URLs or browsing data
- Does not communicate with any external servers
- All processing happens locally in your browser

## Support

If you encounter any issues or have suggestions for improvements, please create an issue on the project repository.

## License

This extension is provided as-is for personal and commercial use. 