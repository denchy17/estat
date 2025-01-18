const API_BASE_URL = 'https://3505-84-54-153-170.ngrok-free.app';

export async function initializeUser(tgId: number) {
  console.log('Initializing user with tgId:', tgId);

  const queryParams = new URLSearchParams({
    tg_id: tgId.toString(),
  });

  const requestUrl = `${API_BASE_URL}/initialize_user/?${queryParams}`;
  console.log('Request URL:', requestUrl);

  try {
    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json', // Request JSON format
        'Content-Type': 'application/json', // Inform server of request content type
        'User-Agent': 'Mozilla/5.0', // Optional: Simulate a browser user agent
      },
    });

    if (!response.ok) {
      console.error('Error response:', response);
      throw new Error(`Error initializing user: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json(); // Parse the JSON response
    console.log('Parsed response data:', data);

    return data; // Return the parsed JSON data
  } catch (error) {
    console.error('Error in initializeUser:', error);
    throw error;
  }
}




// 3) Get user portfolio
export async function getUserPortfolio(tgId: number) {
  const response = await fetch(`${API_BASE_URL}/get_user_portfolio/?tg_id=${tgId}`);
  if (!response.ok) {
    throw new Error(`Error fetching user portfolio: ${response.statusText}`);
  }
  return response;
}

// 4) Get user assets (e.g., real estate, etc.)
export async function getUserAssets(tgId: number, assetType: string) {
  const response = await fetch(
    `${API_BASE_URL}/get_user_assets/?tg_id=${tgId}&asset_type=${assetType}`
  );
  if (!response.ok) {
    throw new Error(`Error fetching user assets: ${response.statusText}`);
  }
  return response;
}

// 5) Get specific user real estate by user_real_estate_id
export async function getUserRealEstate(userRealEstateId: number) {
  const response = await fetch(
    `${API_BASE_URL}/get_user_real_estate/?user_real_estate_id=${userRealEstateId}`
  );
  if (!response.ok) {
    throw new Error(`Error fetching user's real estate: ${response.statusText}`);
  }
  return response.json();
}

// 6) Get all assets for a given category
export async function getAllCategoryAssets(categoryId: number) {
  const response = await fetch(
    `${API_BASE_URL}/get_all_category_assets/?category_id=${categoryId}`
  );
  if (!response.ok) {
    throw new Error(`Error fetching category assets: ${response.statusText}`);
  }
  return response.json();
}

// 7) Get specific real estate by real_estate_id
export async function getRealEstate(realEstateId: number) {
  const response = await fetch(
    `${API_BASE_URL}/get_real_estate/?real_estate_id=${realEstateId}`
  );
  if (!response.ok) {
    throw new Error(`Error fetching real estate: ${response.statusText}`);
  }
  return response.json();
}
