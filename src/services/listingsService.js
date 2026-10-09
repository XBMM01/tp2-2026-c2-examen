import { findAllListings, findListingById, findAllListingsByProperty } from "../data/listingsData.js";

export const getListings = async (page, pageSize) => {
    return await findAllListings(page, pageSize);
}

export const getListingById = async (id) => {
    return await findListingById(id);
}

export const getListingsByPropertyType = async (type, page, pageSize) => {
    return await findAllListingsByProperty(type, page, pageSize);
}

export const getListingsWithTotalPrice = async ( page, pageSize) => {
    const listings = await findListingsWithTotalPrice(page, pageSize);

    return listings.map(listing => {
        const totalPrice = listing.price + listing.cleaning_fee + listing.security_deposit + listing.extra_people;
        return { ...listing, totalPrice };
    }
    );
}
