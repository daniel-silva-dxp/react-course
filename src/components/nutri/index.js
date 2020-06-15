import React from 'react';

import './index.css';

const Nutri = ({ nutri }) => {
	return (
		<div>
			{nutri.map((post) => (
				<article className="content" key={post.id}>
					<header className="banner">
						<img src={post.capa} alt="" />
						<div className="thumb">
							<h1>{post.categoria}</h1>
						</div>
					</header>
					<div className="wrapper-text text-align">
						<h4>{post.titulo}</h4>
						<p>{post.subtitulo}</p>
					</div>
				</article>
			))}
		</div>
	);
};

export default Nutri;
