import clientPromise from "../../lib/mongodb"

const handler = async(req, res) => {
	const client = await clientPromise;
	const db = client.db("fantasyHockey");

	switch(req.method) {
		case "POST":
			console.log("POSTING")
			//const bodyObject = req.body;
			//delete bodyObject._id;
			//const update = await db.collection("yahooApiData").findOneAndReplace({appId: bodyObject.appId}, bodyObject);
			//res.json({status: 200, data: update});
			break;
		case "GET":
			console.log("GETTING")
			//const yahooData = await db.collection("yahooApiData").find({}).toArray();
			//res.json({status: 200, data: yahooData});
			break;
	}
}

export default handler;