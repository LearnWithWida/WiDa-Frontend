import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from '../components/LoadingSpinner';

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  font-family: Recoleta;
  font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  border: 1px solid orange;
  padding: 10px;
  border-radius: 10px;

  input {
    width: 80%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    outline: none;

    &:focus {
      border-color: #FF7600;
    }
  }

  button {
    padding: 10px 20px;
    background-color: #FF7600;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e66a00;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 30px;
  color: #000005;
  font-family: Recoleta;
  font-size: 28px;
  font-style: normal;
`;

const Card = styled.div`
  border: 1px solid orange;
  border-radius: 10px;
  background: white;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 10px;
  transition: transform 0.2s ease;
  user-select: none;
  
  display: flex;
  flex-direction: column;
  gap: 15px;

  .card-content {
    display: flex;
    flex: 1;
    gap: 20px;
  }

  .title-section {
    flex: 2;
  }

  .details-section {
    flex: 1;
    text-align: right;
  }

  .download-section {
    display: flex;
    align-items: center;
    padding-top: 10px;
  }

  .download-icon-wrapper {
    background-color: #FF7600;
    border-radius: 5px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e66a00;
    }
  }

  .download-icon {
    color: white;
    font-size: 1rem;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: #000;
    font-family: Recoleta;
    font-size: 20px;
    font-style: normal;
  }

  p {
    font-size: 0.9rem;
    margin: 5px 0;
    color: #000005;
    font-family: Recoleta;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
  }
`;

const CarouselWrapper = styled.div`
  margin-top: 20px;
  
  .slick-track {
    display: flex !important;
  }

  .slick-slide {
    height: inherit !important;
    padding: 0 10px;
    > div {
      height: 100%;
    }
  }

  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-x: auto;
  padding: 20px 0;
  cursor: grab;
  
  /* Hide scrollbar but keep functionality */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  &:active {
    cursor: grabbing;
  }
`;

// Main App Component
const Database = () => {
  const [datasets, setDatasets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDatasets();
  }, []);

  const fetchDatasets = async () => {
    try {
      const response = await axios.get('http://localhost:5173/api/datasets');

      // Transform Kaggle data to match our format
      const transformedData = response.data.map(dataset => ({
        title: dataset.title,
        author: dataset.ownerName,
        updated: new Date(dataset.lastUpdated).toLocaleDateString(),
        usability: dataset.usabilityRating.toFixed(1),
        size: formatSize(dataset.totalBytes),
        files: `${dataset.files.length} Files`,
        downloadUrl: dataset.downloadUrl,
        description: dataset.description,
      }));

      setDatasets(transformedData);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching datasets:', err);
      setError('Failed to fetch datasets');
      setLoading(false);
    }
  };

  const formatSize = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
  };

  const filteredDatasets = datasets.filter(dataset => 
    dataset.title.toLowerCase().includes(searchTerm) ||
    dataset.author.toLowerCase().includes(searchTerm)
  );

  if (loading) {
    return <LoadingSpinner text="Loading datasets..." />;
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
        {error}
      </div>
    );
  }

  return (
    <Container>
      <Header>Data Set</Header>

      <SearchWrapper>
        <input 
          type="text" 
          placeholder="Search for Data Set..." 
          value={searchTerm}
          onChange={handleSearch}
        />
        <button>Filters</button>
      </SearchWrapper>

      {filteredDatasets.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '20px', 
          color: '#666',
          fontFamily: 'Recoleta' 
        }}>
          No datasets found matching your search.
        </div>
      ) : (
        <>
          <SectionTitle>Available Datasets</SectionTitle>
          <DatasetCarousel datasets={filteredDatasets} />
        </>
      )}
    </Container>
  );
};

// Update DatasetCarousel to handle actual downloads
const DatasetCarousel = ({ datasets }) => {
  const [isDown, setIsDown] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const containerRef = React.useRef(null);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDown(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDownload = async (dataset) => {
    try {
      // Create a valid reference from the dataset title
      const safeRef = dataset.title
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

      console.log('Downloading dataset:', {
        title: dataset.title,
        ref: safeRef
      });

      // Show loading state
      const downloadIcon = document.querySelector(`#download-${safeRef}`);
      if (downloadIcon) {
        downloadIcon.style.animation = 'spin 1s linear infinite';
      }

      // First, get the dataset metadata
      const metadataResponse = await axios.get(`http://localhost:5000/api/datasets/${safeRef}`);
      
      if (!metadataResponse.data) {
        throw new Error('Dataset not found');
      }

      // Then download the file
      const response = await axios.get(
        `http://localhost:5000/api/download/${safeRef}`,
        {
          responseType: 'blob'
        }
      );

      // Create and trigger download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${dataset.title}.zip`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Download error details:', {
        message: error.message,
        response: error.response,
        dataset: dataset
      });
      alert(`Failed to download dataset: ${error.message}`);
    } finally {
      // Reset loading state for all download icons
      const downloadIcons = document.querySelectorAll('.download-icon');
      downloadIcons.forEach(icon => {
        icon.style.animation = '';
      });
    }
  };

  return (
    <CardContainer
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {datasets.map((dataset, index) => {
        // Create a safe reference for the dataset
        const safeRef = dataset.title
          .toLowerCase()
          .replace(/[^a-z0-9]/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '');

        return (
          <Card key={index} style={{ minWidth: '300px', flex: '0 0 auto' }}>
            <div className="card-content">
              <div className="title-section">
                <h3>{dataset.title}</h3>
                <p>{dataset.author} · Updated {dataset.updated}</p>
              </div>
              <div className="details-section">
                <p><strong>Usability {dataset.usability}</strong> · {dataset.size}</p>
                <p>{dataset.files}</p>
              </div>
            </div>
            <div className="download-section">
              <div className="download-icon-wrapper">
                <FontAwesomeIcon 
                  id={`download-${safeRef}`}
                  icon={faDownload} 
                  className="download-icon"
                  onClick={() => handleDownload(dataset)}
                />
              </div>
            </div>
          </Card>
        );
      })}
    </CardContainer>
  );
};

export default Database;