// api.js
const BASE_URL = 'http://0.0.0.0:8000';

export async function uploadFiles(formData) {
  try {
    const response = await fetch(`${BASE_URL}/extract`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data', // Adjust the content type if necessary
      },
      body: formData,
    });
    if (!response.ok) {
      throw new Error('Upload failed');
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Error uploading files: ${error.message}`);
  }
}
