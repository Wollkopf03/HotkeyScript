import screenshot from 'screenshot-desktop';
import fs from "fs"

setInterval(() => screenshot({ format: 'png' }).then((img) => {
	var now = new Date()
	var name = [now.getFullYear(), now.getMonth() + 1, now.getDate() + "_" + now.getHours(), now.getMinutes(), now.getSeconds()].join("-")
	fs.writeFile("D:/Baustellen Kamera Aufnahmen" + name + ".png", img, "binary", function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log("The file " + name + ".png was saved!");
		}
	});
}).catch((err) => {
	console.log(err)
}), 1800000)