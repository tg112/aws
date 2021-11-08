exports.sendEmail = async (req, res) => {
    const { title, content } = req.body;
    res.status(201).send({ title, content });
}