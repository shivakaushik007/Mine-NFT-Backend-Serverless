import Admin from "../models/admin.js";
import response from "../status/response.js";
import Query from "../handlers/index.js";

export const createAdmin = async (req, res) => {
  try {
    const {
      wallet_address,
      network,
      contract_address,
      brand_logo,
      brand_name,
      brand_description,
      product_type,
      contact_details,
      socials,
      banner_image,
      url_store_name,
      authEmail,
      expiration_date,
    } = req.body;

    const createAdminRes = Query.create(Admin, {
      wallet_address: wallet_address,
      contract_address,
      brand_logo,
      brand_name,
      brand_description,
      product_type,
      contact_details,
      socials,
      banner_image,
      url_store_name,
      authEmail,
      network,
      expiration_date,
    });

    res.status(response.ok).json({
      message: "Admin is created successfully",
      admin: createAdminRes,
    });
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const editAdmin = (req, res) => {
  try {
    const { address } = req.query;
    const {
      banner_image,
      wallet_address,
      brand_logo,
      brand_name,
      brand_description,
      product_type,
      contact_details,
      socials,
      store_theme,
      store_template,
      url_store_name,
      expiration_date,
    } = req.body;

    const editAdminRes = Query.update(
      Admin,
      { wallet_address: address },
      {
        wallet_address,
        brand_logo,
        banner_image,
        brand_name,
        brand_description,
        product_type,
        contact_details,
        socials,
        store_theme,
        store_template: store_template ? store_template : "template1",
        url_store_name,
        expiration_date,
      }
    );

    res.status(200).json({
      message: "Admin details updated Successfully",
      detail: editAdminRes,
    });
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const getAdminInfo = async (req, res) => {
  try {
    const { wallet_address } = req.query;

    const getAdminInfoRes = await Query.get(Admin, {
      wallet_address: wallet_address,
    });
    res.status(response.accepted).json(getAdminInfoRes);
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const getStoreInfo = async (req, res) => {
  try {
    const { contract_address } = req.query;

    const getStoreInfoRes = await Query.get(Admin, {
      contract_address: contract_address,
    });
    res.status(response.accepted).json(getStoreInfoRes);
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const getStoreInfoByName = async (req, res) => {
  try {
    const { store_name } = req.query;

    const getStoreInfoByNameRes = await Query.get(Admin, {
      brand_name: store_name,
    });
    res.status(response.accepted).json(getStoreInfoByNameRes);
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const getStoreInfoByUrlStoreName = async (req, res) => {
  try {
    const { url_store_name } = req.query;

    const getStoreInfoByUrlStoreNameRes = await Query.get(Admin, {
      url_store_name: url_store_name,
    });
    res.status(response.accepted).json(getStoreInfoByUrlStoreNameRes);
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const getAllStoreInfo = async (req, res) => {
  try {
    const getAllStoreInfoRes = await Query.getAll(Admin);
    res.status(response.accepted).json(getAllStoreInfoRes);
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const getStoreInfoByEmail = async (req, res) => {
  try {
    const { authEmail } = req.query;

    const getStoreInfoByEmailRes = await Query.get(Admin, {
      authEmail: authEmail,
    });
    res.status(response.accepted).json(getStoreInfoByEmailRes);
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};



