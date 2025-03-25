import  { useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from '../components/LoadingSpinner';
// import Netflix from "../assets/download/Netflix.csv"
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
  min-width: 320px;
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

const Database = () => {
  // useEffect(()=> {
  //   const fetchParseData = async ()=> {

  //   }
  //   fetchParseData()
  // }, [])
  const [datasets] = useState([
    {
      title: "Global Climate Data",
      author: "John Doe",
      updated: "2023-12-01",
      usability: "4.8",
      size: "1.2 GB",
      files: "3 Files",
      downloadUrl: "#",
      description: "Detailed climate data from 2000-2023."
    },
    {
      title: "World Population Data",
      author: "Jane Smith",
      updated: "2023-11-15",
      usability: "4.5",
      size: "500 MB",
      files: "5 Files",
      downloadUrl: "#",
      description: "Comprehensive population statistics across the globe."
    },
    {
      title: "Financial Market Analysis",
      author: "Mark Taylor",
      updated: "2023-10-20",
      usability: "4.7",
      size: "2 GB",
      files: "10 Files",
      downloadUrl: "#",
      description: "Historical data and trends for financial markets."
    },
    {
      title: "Global Climate Data",
      author: "John Doe",
      updated: "2023-12-01",
      usability: "4.8",
      size: "1.2 GB",
      files: "3 Files",
      downloadUrl: "#",
      description: "Detailed climate data from 2000-2023."
    },
    {
      title: "World Population Data",
      author: "Jane Smith",
      updated: "2023-11-15",
      usability: "4.5",
      size: "500 MB",
      files: "5 Files",
      downloadUrl: "#",
      description: "Comprehensive population statistics across the globe."
    },
    {
      title: "Financial Market Analysis",
      author: "Mark Taylor",
      updated: "2023-10-20",
      usability: "4.7",
      size: "2 GB",
      files: "10 Files",
      downloadUrl: "#",
      description: "Historical data and trends for financial markets."
    },
    {
      title: "Global Climate Data",
      author: "John Doe",
      updated: "2023-12-01",
      usability: "4.8",
      size: "1.2 GB",
      files: "3 Files",
      downloadUrl: "#",
      description: "Detailed climate data from 2000-2023."
    },
    {
      title: "World Population Data",
      author: "Jane Smith",
      updated: "2023-11-15",
      usability: "4.5",
      size: "500 MB",
      files: "5 Files",
      downloadUrl: "#",
      description: "Comprehensive population statistics across the globe."
    },
    {
      title: "Financial Market Analysis",
      author: "Mark Taylor",
      updated: "2023-10-20",
      usability: "4.7",
      size: "2 GB",
      files: "10 Files",
      downloadUrl: "#",
      description: "Historical data and trends for financial markets."
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [loading] = useState(false);
  const [error] = useState(null);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
  };

  const filteredDatasets = datasets.filter(
    (dataset) =>
      dataset.title.toLowerCase().includes(searchTerm) ||
      dataset.author.toLowerCase().includes(searchTerm)
  );

  if (loading) {
    return <LoadingSpinner text="Loading datasets..." />;
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "2rem", color: "red" }}>
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
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            color: "#666",
            fontFamily: "Recoleta",
          }}
        >
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

const DatasetCarousel = ({ datasets }) => {
  const dragStartX = useRef(0);
  const isDragging = useRef(false);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX || e.touches[0].clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const moveX = (e.clientX || e.touches[0].clientX) - dragStartX.current;
    containerRef.current.scrollLeft -= moveX;
    dragStartX.current = e.clientX || e.touches[0].clientX;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <CardContainer
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      {datasets.map((dataset, index) => (
        <Card key={index}>
          <div className="card-content">
            <div className="title-section">
              <h3>{dataset.title}</h3>
              <p>{dataset.description}</p>
              <p>Author: {dataset.author}</p>
            </div>
            <div className="details-section">
              <p>Updated: {dataset.updated}</p>
              <p>Size: {dataset.size}</p>
              <p>Files: {dataset.files}</p>
            </div>
          </div>
          <div className="download-section">
            <div className="download-icon-wrapper">
            {/* <a href={Netflix} target="_blank" download> */}
                <FontAwesomeIcon
                  icon={faDownload}
                  className="download-icon"
                  // onClick={() => window.open(dataset.downloadUrl, "_blank")}
                  />
                {/* </a> */}
            </div>
            {/* <p>Download</p> */}
          </div>
        </Card>
      ))}
    </CardContainer>
  );
};

export default Database;
