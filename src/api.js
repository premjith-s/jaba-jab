// api.js
const BASE_URL = 'http://0.0.0.0:8080';

export async function uploadFiles(formData) {
  try {
    const response = await fetch(`${BASE_URL}/extract`, {
      method: 'POST',
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
