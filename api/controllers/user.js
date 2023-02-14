import User from "../models/user.js";
import Query from "../handlers/index.js";
import response from "../status/response.js";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const createUser = (req, res) => {
  try {
    const { wallet_address } = req.body;

    const createUserRes = Query.create(User, {
      name: "Unnamed",
      wallet_address,
      profileImgColor: getRandomColor(),
    });

    res
      .status(response.ok)
      .json({ message: "User created successfully", user: createUserRes });
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { wallet_address } = req.query;

    const getUserRes = await Query.get(User, {
      wallet_address: wallet_address,
    });
    res.status(response.accepted).json(getUserRes);
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

export const editUser = (req, res) => {
  try {
    const { address } = req.query;
    const { name, wallet_address, bio, links, display_image, banner_image } =
      req.body;
    console.log("display_imagedisplay_image", display_image);

    const editUserRes = Query.update(
      User,
      { wallet_address: address },
      {
        name,
        bio,
        links,
        display_image,
        banner_image,
        wallet_address,
      }
    );

    res.status(200).json({
      message: "Updated Successfully",
      detail: editUserRes,
    });
  } catch (error) {
    res.status(response.badRequest).json({ message: error.message });
  }
};

// export const addToFavorites = (req, res) => {
//   try {
//     const { wallet_address } = req.query;
//     const { favorites } = req.body;

//     const addToFavoritesRes = Query.update(
//       User,
//       { wallet_address: wallet_address },
//       {
//         favorites: favorites,
//       }
//     );

//     res.status(200).json({
//       message: "NFT added to favorites",
//       detail: addToFavoritesRes,
//     });
//   } catch (error) {
//     res.status(response.badRequest).json({ message: error.message });
//   }
// };
