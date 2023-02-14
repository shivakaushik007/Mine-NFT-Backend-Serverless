import Nft from "../models/nft.js";
import Query from "../handlers/index.js";
import response from "../status/response.js";

export const createNft = (req, res) => {
  try {
    const {
      token_id,
      metadata_image_link,
      name,
      owner_address,
      last_sale,
      traits,
      collection_address,
      description,
      collection_slug,
      category,
      is_wallet_nft,
      image_link,
    } = req.body;

    const createNftRes = Query.create(Nft, {
      token_id,
      metadata_image_link,
      name,
      owner_address,
      last_sale,
      traits,
      collection_address,
      description,
      collection_slug,
      category,
      is_wallet_nft,
      image_link,
    });

    res
      .status(response.ok)
      .json({ message: "NFT created successfully", nft: createNftRes });
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const createNftListing = (req, res) => {
  try {
    const {
      type,
      start_date,
      end_date,
      price,
      discount,
      image_link,
      name,
      description,
      category,
      is_visible,
      is_sold,
    } = req.body;
    const { nftId, contract_address } = req.query;

    const createNftListingRes = Query.update(
      Nft,
      { _id: nftId, collection_address: contract_address },
      {
        type,
        start_date,
        end_date,
        price,
        discount,
        image_link,
        name,
        description,
        category,
        is_visible,
        is_sold,
      }
    );

    res.status(200).json({
      message: "NFT Listed Successfully",
    });
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const getAllNfts = async (req, res) => {
  try {
    const getAllNftsRes = await Query.getAll(Nft);
    res.status(response.accepted).json(getAllNftsRes);
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const getNftsByCollectionSlug = async (req, res) => {
  try {
    const { collection_slug } = req.query;
    const getNftsByCollectionSlugRes = await Query.getAll(Nft, {
      collection_slug: collection_slug,
    });
    res.status(response.accepted).json(getNftsByCollectionSlugRes);
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const getNftsByCollectionAddress = async (req, res) => {
  try {
    const { contract_address } = req.query;

    const getNftsByCollectionRes = await Query.getAll(Nft, {
      collection_address: contract_address,
    });
    res.status(response.accepted).json(getNftsByCollectionRes);
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const getNftMetadata = async (req, res) => {
  try {
    const { nftId } = req.query;
    const getNftMetadataRes = await Query.get(Nft, {
      _id: nftId,
    });
    res.status(response.accepted).json(getNftMetadataRes);
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const getNftsByWalletAddress = async (req, res) => {
  try {
    const { wallet_address } = req.query;
    const getNftsByWalletAddressRes = await Query.getAll(Nft, {
      owner_address: wallet_address,
    });
    res.status(response.accepted).json(getNftsByWalletAddressRes);
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const deleteNft = async (req, res) => {
  try {
    const { tokenId } = req.query;
    const deleteRes = await Query.deleteOne(Nft, {
      token_id: tokenId,
    });
    res.status(response.accepted).json(deleteRes);
  } catch {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const transferNft = async (req, res) => {
  try {
    const { owner_address, is_sold } = req.body;
    const { token_id, contract_address } = req.query;

    const transferNftRes = Query.update(
      Nft,
      {
        token_id: token_id,
        collection_address: contract_address,
      },
      {
        owner_address: owner_address,
        is_sold: is_sold,
      }
    );

    res.status(200).json({
      message: "NFT transfered Successfully",
      details: transferNftRes,
    });
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const getVisibleNftsByCollectionAddress = async (req, res) => {
  try {
    const { contract_address } = req.query;
    const data = await Query.getAll(Nft, {
      collection_address: contract_address,
    });
    const getNftsByCollectionRes = data.filter(
      (nft) => nft.is_visible === true
    );

    res.status(response.accepted).json(getNftsByCollectionRes);
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

// export const addToFavorites = async (req, res) => {
//   try {
//     const { wallet_address } = req.body;
//     const { token_id, contract_address } = req.query;

//     const addToFavoritesRes = Query.update(
//       Nft,
//       {
//         token_id: token_id,
//         collection_address: contract_address,
//       },
//       {
//         favorite: [wallet_address],
//       }
//     );

//     res.status(200).json({
//       message: "NFT Listed Successfully",
//     });
//   } catch (error) {
//     res.status(response.badRequest).json({ message: error.message });
//   }
// };
