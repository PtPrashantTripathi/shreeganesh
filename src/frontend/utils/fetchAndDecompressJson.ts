import pako from "pako";

export async function fetchAndDecompressJson(url: string) {
    try {
        const response = await fetch(url);
        const compressedData = await response.arrayBuffer(); // Get as ArrayBuffer

        // Decompress the data
        const decompressedData = pako.ungzip(new Uint8Array(compressedData), {
            to: "string",
        });
        // Parse the JSON
        const jsonData = JSON.parse(decompressedData);
        return jsonData;
    } catch (error) {
        console.error("Error fetching or decompressing JSON:", error);
        return null;
    }
}
