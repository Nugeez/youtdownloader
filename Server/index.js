const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const dotenv = require('dotenv').config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get('/downloadmp3', (req,res) => {
	var url = req.query.url;
	res.header('Content-Disposition', 'attachment; filename="youtubeAudio.mp3"');
	ytdl(url, {
		format: 'mp3',
		filter: 'audioonly'
	}).pipe(res);
});

app.get('/downloadmp4', (req,res) => {
	var url = req.query.url;
	res.header('Content-Disposition', 'attachment; filename="youtubeVideo.mp4"');
	ytdl(url, {
		format: 'mp4'
	}).pipe(res);
});