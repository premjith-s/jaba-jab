import React, { useState } from 'react';
import './App.css';
import FileUploadForm from './FileUploadForm';
import ResultTable from './ResultTable';
import Header from './Header';
import Footer from './Footer';
import { uploadFiles } from './api';

function App() {
  const [apiData, setApiData] = useState([]);

  const handleUpload = async (formData) => {
    try {
      const response = await uploadFiles(formData);
      setApiData(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <h1>JabaJab</h1>
        <FileUploadForm onUpload={handleUpload} />
        {apiData.length > 0 && <ResultTable data={apiData} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
