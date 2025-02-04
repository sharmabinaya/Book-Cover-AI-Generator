const OpenAI = require("openai");
const axios = require("axios");

exports.generateCover = async (req, res) => {
  try {
    const { title, genre } = req.body;

    // Generate using OpenAI (DALL·E)
    const dallEResponse = await openai.images.generate({
      model: "dall-e-2",
      prompt: `Book cover for a ${genre} book titled "${title}". Modern, clean, aesthetic.`,
      size: "1024x1024",
    });

    // Generate using Stable Diffusion API
    const stableDiffusionResponse = await axios.post(
      "https://api.stablediffusionapi.com/v1/text2img",
      { prompt: `Book cover for a ${genre} book titled "${title}"`, width: 1024, height: 1024 }
    );

    res.json({ images: [dallEResponse.data[0].url, stableDiffusionResponse.data.image_url] });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating cover.");
  }
};
