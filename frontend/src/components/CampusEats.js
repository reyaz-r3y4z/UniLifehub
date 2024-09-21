import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: #1a237e;
  text-align: center;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ShopBox = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ShopName = styled.h2`
  color: #3f51b5;
  margin-bottom: 10px;
`;

const ShopDescription = styled.p`
  margin: 0 0 10px;
`;

const ShopDetails = styled.p`
  margin: 0;
  font-size: 0.9em;
  color: #666;
`;

function CampusEats() {
  return (
    <Container>
      <Title>Campus Eats</Title>
      <Grid>
        <ShopBox>
          <ShopName>Tokyo Yokocho x Taiyo Sun</ShopName>
          <ShopDescription>Japanese food and matcha-based sweets. Quick service for students and staff.</ShopDescription>
          <ShopDetails>Opening Hours: 11am - 3pm (Tokyo Yokocho), 8:30am - 3pm (Taiyo Sun)</ShopDetails>
        </ShopBox>

        <ShopBox>
          <ShopName>Kaki Lima</ShopName>
          <ShopDescription>Delicious Indonesian rice bowls with a twist. Get a discount with your student card.</ShopDescription>
          <ShopDetails>Opening Hours: 11am - 9pm, Mon - Fri</ShopDetails>
        </ShopBox>

        <ShopBox>
          <ShopName>Bowen St Cafe</ShopName>
          <ShopDescription>Budget-friendly meals, perfect for a quick bite between classes.</ShopDescription>
          <ShopDetails>Opening Hours: 7:30am - 4:30pm, Mon - Fri</ShopDetails>
        </ShopBox>

        <ShopBox>
          <ShopName>Canto Pizza</ShopName>
          <ShopDescription>Pizzas, pastas, and sandwiches. Check out the student specials.</ShopDescription>
          <ShopDetails>Opening Hours: 7:30am - 4:30pm, Mon - Fri</ShopDetails>
        </ShopBox>

        <ShopBox>
          <ShopName>Tuckshop</ShopName>
          <ShopDescription>Comfort food like burgers and hot dogs. Affordable meals on campus.</ShopDescription>
          <ShopDetails>Opening Hours: 8am - 4pm, Mon - Fri</ShopDetails>
        </ShopBox>

        <ShopBox>
          <ShopName>Carte Crepes</ShopName>
          <ShopDescription>Delicious crepes with a 15% discount on Fridays. Great for a quick sweet treat.</ShopDescription>
          <ShopDetails>Opening Hours: 8am - 4:30pm, Mon - Fri</ShopDetails>
        </ShopBox>

        <ShopBox>
          <ShopName>Standing Room</ShopName>
          <ShopDescription>High-quality coffee with an ethical supply chain. Perfect for your morning fix.</ShopDescription>
          <ShopDetails>Opening Hours: 8am - 4pm, Mon - Fri</ShopDetails>
        </ShopBox>

        <ShopBox>
          <ShopName>Streat</ShopName>
          <ShopDescription>Enjoy coffee while supporting youth employment initiatives.</ShopDescription>
          <ShopDetails>Opening Hours: 8am - 3pm, Mon - Fri</ShopDetails>
        </ShopBox>

        <ShopBox>
          <ShopName>The Bean Project</ShopName>
          <ShopDescription>Healthy lunch, breakfast options, and exceptional coffee.</ShopDescription>
          <ShopDetails>Opening Hours: 7:30am - 5pm, Mon - Fri</ShopDetails>
        </ShopBox>

        <ShopBox>
          <ShopName>The Vine</ShopName>
          <ShopDescription>Fresh food, sandwiches, and coffee at student-friendly prices.</ShopDescription>
          <ShopDetails>Opening Hours: 6am - 6pm, Mon - Fri</ShopDetails>
        </ShopBox>

        <ShopBox>
          <ShopName>EJ's Cafe</ShopName>
          <ShopDescription>Comfort food like burgers and potato cakes. Great for a quick bite.</ShopDescription>
          <ShopDetails>Opening Hours: 7am - 4pm, Mon - Fri</ShopDetails>
        </ShopBox>

        <ShopBox>
          <ShopName>Pearson and Murphy</ShopName>
          <ShopDescription>Fresh salads, sandwiches, and pizzas with a student discount on coffee.</ShopDescription>
          <ShopDetails>Opening Hours: 6:30am - 2:30pm, Mon - Fri</ShopDetails>
        </ShopBox>

        <ShopBox>
          <ShopName>Boost Juice</ShopName>
          <ShopDescription>Iconic juice blends, smoothies, and protein drinks to refresh your day.</ShopDescription>
          <ShopDetails>Opening Hours: 9am - 4pm, Mon - Fri</ShopDetails>
        </ShopBox>

        <ShopBox>
          <ShopName>Little Bang Espresso</ShopName>
          <ShopDescription>Exceptional coffee and pastries. A great community spot for students and staff alike.</ShopDescription>
          <ShopDetails>Opening Hours: 7am - 3:30pm (Mon-Thu), 7am - 2pm (Fri)</ShopDetails>
        </ShopBox>
      </Grid>
    </Container>
  );
}

export default CampusEats;
