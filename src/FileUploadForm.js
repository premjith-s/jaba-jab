// FileUploadForm.js
import React, { useState } from 'react';
import { Container, Paper, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  marginTop: '20px',
});

const PaperContainer = styled(Paper)({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const UploadButton = styled(Button)({
  backgroundColor: '#007bff',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
});

const Input = styled('input')({
  display: 'none',
});

function FileUploadForm({ onUpload }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleUpload = () => {
    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }

    // Send the formData to the API
    onUpload(formData);
  };

  return (
    <FormContainer maxWidth="sm">
      <PaperContainer elevation={3}>
        <Typography variant="h5" gutterBottom>
          Upload PDF Files
        </Typography>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <label htmlFor="file-upload">
              <Input
                type="file"
                multiple
                onChange={handleFileChange}
                id="file-upload"
              />
              <UploadButton
                variant="contained"
                component="span"
                onClick={handleUpload}
              >
                Upload
              </UploadButton>
            </label>
          </Grid>
        </Grid>
      </PaperContainer>
    </FormContainer>
  );
}

export default FileUploadForm;
