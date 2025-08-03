export const AI_PROMPT = `Generate a travel plan for {noOfDays} days for a group of {people} visiting {location} on a {budget} budget.

Respond ONLY with a **valid JSON object** — do not include any markdown formatting, backticks, explanation, or comments.

The JSON must include:
- "hostels": an array of hostel options with keys: hotelName, hotelAddress, price, hotelImageUrl, geoCoordinates (latitude, longitude), rating, description
- "itinerary": an array of {noOfDays} objects (one per day), each containing:
  - placeName
  - placeDetails
  - placeImageUrl
  - geoCoordinates (latitude, longitude)
  - ticketPricing
  - bestTimeToVisit
  - timeToTravel

Output must be **pure JSON only**.`;
