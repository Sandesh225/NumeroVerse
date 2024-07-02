import React, { useState, useEffect } from "react";

const Horoscope = () => {
  const [horoscope, setHoroscope] = useState(null);

  useEffect(() => {
    const fetchHoroscope = async () => {
      const url =
        "https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/?zodiacSign=aries&timePeriod=today";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "279c8310f6mshf5a697c5edc5550p13ee14jsn39b6f6ec1daa",
          "x-rapidapi-host": "daily-horoscope-api.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Failed to fetch horoscope");
        }
        const result = await response.text();
        setHoroscope(result);
      } catch (error) {
        console.error("Error fetching horoscope:", error);
      }
    };

    fetchHoroscope();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
      {horoscope ? (
        <div>
          <h2>Scorpio Horoscope</h2>
          <p>{horoscope}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Horoscope;
