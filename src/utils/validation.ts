export function parseWebsiteUrl(websiteUrl: string | null): string {
    if (!websiteUrl || !isValidWebsite(websiteUrl)) {
        return "";
    }

    return websiteUrl.includes("https://") ? websiteUrl : `https://${websiteUrl}`;
}

function isValidWebsite(websiteUrl: string | null): boolean {
    if (!websiteUrl) {
        return false;
    }

    // Regex pattern to validate URL format
    const pattern = new RegExp(
        "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
        "i"
    );

    return pattern.test(websiteUrl);
}