const sequelize = require("sequelize");
const models = require("../../models");
const Alert = models.Alert;
const ReadArticle = models.ReadArticle;
const { QueryTypes } = require('sequelize');
const db = require("../../db/database");


exports.alerts = async (req, res) => {
  try {
    const user_id = req.query.user_id;
    if (!user_id) {
      // auth0からとると思う
      res.status(500).send({ message: "userIdが取得できませんでした" })
    }
    
    const alerts = await db.query(`
      SELECT
        id,
        title, 
        service_id, 
        start_date, 
        close_date, 
        label, 
        url,
        CASE readArticle.user_id
          WHEN readArticle.user_id IS NOT NUll Then true
        ELSE false 
        END as isRead
      FROM alerts
      LEFT JOIN (
        SELECT alert_id, user_id FROM read_articles where user_id = ?
      ) as readArticle
      ON alerts.id = readArticle.alert_id;
    `, {
      replacements: [user_id],
      type: QueryTypes.SELECT
    });

    if (!alerts) {
      res.status(200).send({ message: "アラートはありません" })
    }
    res.status(200).send(alerts);
  } catch (e) {
    res.status(500).send({message: e.message})
  }

}

exports.alert = async (req, res) => {
  try {
    const id = req.param;
    const alert = await Alert.findOne({ id: id });
    if (!alert) {
      res.status(404).send({ message: "このアラートは存在しません" });
    }

    res.status(200).send({ alert });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}

exports.createAlert = async (req, res) => {
  try {
    const {
      title,
      service_id,
      start_date,
      close_date,
      label,
      url,
      information_id,
      information_html
    } = req.body;

    const alert = await Alert.create({
      title,
      service_id,
      start_date,
      close_date,
      label,
      url,
      information_id,
      information_html
    });

    if (!alert) {
      return res.status(500).send({message: "アラートの登録に失敗しました"})
    }

    res.status(201).send();

  } catch (e) {
    res.status(500).send({message: e.message})
  }
}

exports.read = async (req, res) => {
  try {
    const { user_id, alert_id } = req.query;
    const isAlert = await Alert.findOne({
      where: { id: alert_id }
    });

    if (!isAlert) {
      return res.status(200).send({messaeg: "アラートは存在しません"});
    }

    const isRead = await ReadArticle.findOne({
      where: {
        user_id, alert_id: parseInt(alert_id)
      },
      attributes: {
        exclude: ["id", "createdAt", "updatedAt"]
      }
    });


    if (isRead) {
      return res.status(200).send({messaeg: "既読登録済みです"});
    }

    const read = await ReadArticle.create({ user_id, alert_id: parseInt(alert_id) });
    if (!read) {
      return res.status(500).send({message: "既読の登録に失敗しました。"})
    }
  } catch (e) {
    res.status(500).send({message: e.message})
  }
}