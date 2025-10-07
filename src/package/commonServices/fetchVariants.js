export const getFileThenDownload = (url, callback, access_token) => {
    const init = {
        method: "GET",
    };
    if (access_token) {
        init.headers = { Authorization: `Bearer ${access_token}` };
    }

    fetch(url, init)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.blob();
        })
        .then((blob) => {
            // Create download - browser will handle the filename from Content-Disposition header
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = downloadUrl;
            link.download = ""; // Empty download attribute lets browser use server's filename

            // Trigger download
            document.body.appendChild(link);
            link.click();

            // Cleanup
            document.body.removeChild(link);
            window.URL.revokeObjectURL(downloadUrl);

            if (callback) {
                callback({ success: true });
            }
        })
        .catch((error) => {
            console.error("Download error:", error);
            if (callback) {
                callback({ success: false, error: error.message });
            }
        });
};

export const postFileThenLog = (url, formData, access_token) => {
    const init = {
        method: "POST", // Specify the method as POST
        headers: {
            Authorization: access_token, // Inform the server about the data format
        },
        body: formData, // Convert the JavaScript object to a JSON string
    };

    fetch(url, init)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.error("Error:", error));
};

export const getThenLog = (url, callback, access_token) => {
    const init = {
        method: "GET",
    };
    if (access_token) {
        init.headers = { Authorization: `Bearer ${access_token}` };
    }

    fetch(url, init)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (!callback) {
                return;
            }
            callback(data);
        })
        .catch((error) => console.error("Error:", error));
};

export const postThenLog = (url, body, callback) => {
    const init = {
        method: "POST", // Specify the method as POST
        headers: {
            "Content-Type": "application/json", // Inform the server about the data format
        },
        body: JSON.stringify(body), // Convert the JavaScript object to a JSON string
    };

    fetch(url, init)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (!callback) {
                return;
            }
            callback(data);
        })
        .catch((error) => console.error("Error:", error));
};

/**
 * @param {object} options
 * @param {"GET" | "POST" | "PUT" | "PATCH" | "DELETE"} options.method
 * @param {string} options.url
 * @param {string} options.accessToken
 * @param {any} options.body
 * @param {(...params: any[]) => any} options.callback
 */
export const fetchThenLog = (options) => {
    const { method, url, accessToken, body, callback } = options;

    const init = {
        method: method, // Specify the method as POST
    };

    if (accessToken) {
        init.headers = { Authorization: `Bearer ${accessToken}` };
    }

    if (!body || body instanceof FormData) {
        init.body = body;
    } else {
        init.body = JSON.stringify(body); // Convert the JavaScript object to a JSON string
    }

    fetch(url, init)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (!callback) {
                return;
            }
            callback(data);
        })
        .catch((error) => console.error("Error:", error));
};
