const Link = require("../database/schemas/Link");
const { Op } = require("sequelize");

// this is add link, fix it since we are doing it this way
const index = async (req, res) => {
  try {

    // This is a temp measure for dev, remove before prod.
    if (!req.body.user_id) {
      req.body.user_id = 1;
    }

    if (!req.body.rating) {
      req.body.rating = 0;
    }

    if (!req.body.image.endsWith('.webp')) {
      req.body.image = "default.webp";
    }

    let { user_id, term, text, link, rating, tags, image } = req.body;

    if (!term) {
      res.status(400).json({ error: "Term field is required" });
    } else if (!text) {
      res.status(400).json({ error: "Text (description) field is required" });
    } else if (!link) {
      res.status(400).json({ error: "Link (URL) field is required" });
    } else if (!tags) {
      res.status(400).json({ error: "Tags field is required" });
    } else {
      const link_db = await Link.findOne({ where: { term } });
      if (link_db) {
        res.status(400).json({ error: "Term already exist" });
      } else {
        // Create a link record in the database

        const new_link = await Link.create({
          user_id, term, text, link, rating, tags, image,
        });

      }
    }

    console.log(req.body);
    // res.json({ message: "User registered successfully", new_link});
    return res.status(200).json(req.body);


  } catch (error) {
    res.status(500).json({ error: "Error fetching profile" });
  }
};

const find = async (req, res) => {

  let links = [];
  
  try {
    const { searchTerm } = req.body;
    if (!searchTerm) {
      return res.status(400).json({ error: "Search Term is required" });
    }

    let link = await Link.findOne({ where: { term: searchTerm } });

    if (link) {
      links.push(link);

    } else if (!link) {
      console.log("No direct hit, searching for similar terms...");

      let newLinks = await Link.findAll({
        where: {
          term: {
            [Op.like]: '%' + searchTerm + '%'
          }
        },
        order: [
          ['id', 'DESC'],
        ],
        limit: 25
      });

      if (newLinks.length > 0) {
        links = links.concat(newLinks);
      }

      if (links.length >= 25) {
        return res.status(200).json(links);
      } else {
        let remaining = 25 - links.length;

        let tags = await Link.findAll({
          where: {
            tags: {
              [Op.like]: '%' + searchTerm + '%'
            }
          },
          order: [
            ['rating', 'DESC'],
          ],
          limit: remaining
        });

        if (tags.length > 0) {
          links = links.concat(tags);
        }
        return res.status(200).json(links);
      }

    } else {
      return res.status(404).json({ error: "Link not found" });
    }

  } catch (error) {
    res.status(500).json({ error: "Error fetching link(s)" });
  }
}

const show = async (req, res) => {
  try {
    const links = await Link.findAll({
      order: [
        ['createdAt', 'DESC'],
      ],
      limit: 12
    })

    return res.status(200).json({ links });

  } catch (error) {
    res.status(500).json({ error: "Error fetching link(s)" });
  }
}

const all = async (req, res) => {
  try {
    const links = await Link.findAll({
      order: [
        ['id', 'DESC'],
      ],
      limit: 50
    })

    return res.status(200).json({ links });

  } catch (error) {
    res.status(500).json({ error: "Error fetching link(s)" });
  }
}

const cat = async (req, res) => {

  try {
    const { searchTerm } = req.body;
    if (!searchTerm) {
      return res.status(400).json({ error: "Term field is required" });
    }
    let links = await Link.findAll({
      where: {
        tags: {
          [Op.regexp]: `(?i)\\b${searchTerm}\\b`
        }
      },
      order: [
        ['id', 'DESC'],
      ],
      limit: 25
    });

    return res.status(200).json(links);

  } catch (error) {
    res.status(500).json({ error: "Error fetching link(s)" });
  }
}

const lookup = async (req, res) => {
  console.log(req.body);
  try {
    const id = req.body.id;

    const link = await Link.findOne({ where: { id } });

    if (link) {
      return res.status(200).json(link);
    } else {
      return res.status(404).json({ error: "Link not found" });
    }

  } catch (error) {
    res.status(500).json({ error: "Error fetching link(s)" });
  }
}

const edit = async (req, res) => {

  try {
    const { id, term, text, link, rating, tags, image } = req.body;
    if (!id) {
      return res.status(400).json({ error: "ID field is required" });
    }
    const link_db = await Link.findOne({ where: { id } });
    if (!link_db) {
      return res.status(404).json({ error: "Link not found" });
    }
    const updated_link = await Link.update({
      term, text, link, rating, tags, image
    }, {
      where: { id }
    });

    return res.status(200).json({ message: "Link updated successfully" });

  } catch (error) {
    res.status(500).json({ error: "Error updating link" });
  }
}

module.exports = {
  index, find, show, all, cat, edit, lookup
};
