import React from 'react';

class BuyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch('https://area-rewa.com.au/token'); // Replace with your API endpoint
      const jsonData = await response.json();
      const dataArray = Array.isArray(jsonData) ? jsonData : [jsonData]; // Convert to array if necessary
      this.setState({ data: JSON.stringify(dataArray) }); // Convert data to string and update the state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  render() {
    const { data } = this.state;

    if (!data || !Array.isArray(data)) {
      return <div>No data available.</div>;
    }

    return (
      <div>
        <h1>Buy Page</h1>
        {/* Render the fetched data */}
        {data.map((item) => (
          <div key={item.id}>
            {item.listinglist.map((innerItem) => (
              <div key={innerItem.id}>
                <p>{innerItem.address.postcode}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default BuyPage;
