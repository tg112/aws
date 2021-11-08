exports.alerts = async(req, res) => {
  res.status(200).send({ message: "get alerts" });
}

exports.alert = async (req, res) => {
  const alertId = req.param("alertId");
  res.status(200).send({ message: `get alert ${alertId}` });
}

exports.createAlert = async (req, res) => {
  const { title, content } = req.body;
  res.status(201).send({ title, content });
}

exports.read = async (req, res) => {
  const { userId, alertId } = req.query.userId;
  res.status(201).send({ userId, alertId });
}