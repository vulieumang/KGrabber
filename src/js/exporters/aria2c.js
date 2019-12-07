// needed for jsdoc
/* eslint-disable no-unused-vars */
const Status = require("../types/Status");
/* eslint-enable no-unused-vars */

const LinkTypes = require("../types/LinkTypes"),
	Exporter = require("../types/Exporter");

module.exports = new Exporter({
	name: "aria2c file",
	extension: "txt",
	requireSamePage: false,
	linkTypes: [LinkTypes.DIRECT],
}, runExport);

/**
 * @param {Status} status
 * @returns {String}
 */
function runExport(status) {
	let listing = $(".listing a").get().reverse();
	let str = "";
	for (let episode of status.episodes) {
		str += `${episode.grabbedLink}\n out=${listing[episode.episodeNumber-1].innerText}.mp4\n`;
	}
	return str;
}
