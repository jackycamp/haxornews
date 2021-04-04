import React, { useEffect, useState } from 'react';
import API from '../api';
import Stories from './Stories';
import Loading from './Loading';

export default function Default() {
	const [stories, setStories] = useState([]);
	const [loading, setLoading] = useState(true);

	const getNewStories = async () => {
		const storiesResp = await API.newStories();

		let i = 0;
		const temp = [];

		/* eslint-disable */
		for (const storyIndex in storiesResp) {
			const storyId = storiesResp[storyIndex];
			const story = await API.item(storyId);
			temp.push(story);

			i++;
			if (i >= 40) { break; }
		}
        /* eslint-enable */
		setStories(temp);
		setLoading(false);
	};

	useEffect(() => {
		getNewStories();
	}, []);

	return (
		<>
			{loading && (
				<Loading />
			)}
			{!loading && (
				<Stories stories={stories} />
			)}
		</>
	);
}
