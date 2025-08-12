// Create context menu when extension is installed
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "openAllUrls",
        title: "Open all URLs",
        contexts: ["selection"]
    });
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "openAllUrls" && info.selectionText) {
        const urls = extractUrls(info.selectionText);
        openUrlsInTabs(urls);
    }
});

// Extract URLs from text
function extractUrls(text) {
    // Regular expression to match URLs
    // This regex matches:
    // - URLs starting with http:// or https://
    // - URLs starting with www.
    // - URLs with common domains (com, org, net, etc.)
    const urlRegex = /(?:https?:\/\/|www\.)[^\s]+|[a-zA-Z0-9][a-zA-Z0-9-]*(?:\.[a-zA-Z0-9][a-zA-Z0-9-]*)+(?:\/[^\s]*)?/gi;

    // Find all matches
    const matches = text.match(urlRegex) || [];

    // Process and validate URLs
    const urls = matches.map(url => {
        // Trim any trailing punctuation that might have been included
        url = url.replace(/[.,;:!?)\]}>]+$/, '');

        // Add protocol if missing
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            // If it starts with www., add https://
            if (url.startsWith('www.')) {
                url = 'https://' + url;
            } else {
                // For other domains, also add https://
                url = 'https://' + url;
            }
        }

        return url;
    });

    // Remove duplicates
    const uniqueUrls = [...new Set(urls)];

    // Validate URLs
    const validUrls = uniqueUrls.filter(url => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    });

    return validUrls;
}

// Open URLs in new tabs
function openUrlsInTabs(urls) {
    if (urls.length === 0) {
        console.log('No valid URLs found in the selected text');
        return;
    }

    console.log(`Opening ${urls.length} URLs:`, urls);

    // Open each URL in a new tab
    urls.forEach((url, index) => {
        // Add a small delay between opening tabs to avoid overwhelming the browser
        setTimeout(() => {
            chrome.tabs.create({
                url: url,
                active: index === 0 // Only make the first tab active
            });
        }, index * 50); // 50ms delay between each tab
    });
} 