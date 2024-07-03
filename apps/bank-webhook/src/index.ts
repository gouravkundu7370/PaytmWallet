import express from "express";
import db from "@repo/db/client";
import { error } from "console";
const app = express();
app.post("/hdfcWebhook", async (req, res) => {
  const payementInformation: {
    token: string;
    userId: string;
    amount: string;
  } = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount,
  };
  try {
    await db.$transaction([
      db.balance.updateMany({
        where: {
          userId: Number(payementInformation.userId),
        },
        data: {
          amount: {
            increment: Number(payementInformation.amount),
          },
        },
      }),
      db.onRampTransaction.updateMany({
        where: {
          token: payementInformation.token,
        },
        data: {
          status: "Succes",
        },
      }),
    ]);
    res.json({
      message: "Captured",
    });
  } catch (e) {
    console.error(e);
    res.status(411).json({
      message: "Error while Processing WebHook",
    });
  }
});

app.listen(3003);
