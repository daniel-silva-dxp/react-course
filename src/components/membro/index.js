import React from 'react';
import PropTypes from 'prop-types';

const Membro = ({ member }) => {
	return (
		<div>
			<div>Welcome {member}!</div>
		</div>
	);
};

Membro.propType = {
	member: PropTypes.string
};

export default Membro;
