const apiKey = 'HeEf5ujS52b8UhWBh0s9HcdGSWa7byiM20dPoSPgf1qT-JYB-J0VNl62ZpyRrFFhbOry2j20EDxmKiJ0sfQ9FEWR6mNl4ybHHBh-4ttcdVkHngrrTE4jYmZ9B9fjXHYx';

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(((business) => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                }));
            }
        })
    }
}
export default Yelp;