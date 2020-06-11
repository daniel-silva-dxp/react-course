import React from 'react';

const Feed = ({ id, username, curtidas, comentarios }) => {
	return (
		<div>
			<h1>{username}</h1>
			<span>{curtidas > 1 ? `${curtidas} curtidas` : `${curtidas} curtida`}</span>
			<span> | {curtidas > 1 ? `${comentarios} comentários` : `${comentarios} comentário`}</span>
		</div>
	);
};

export default Feed;
