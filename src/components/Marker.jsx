import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { getTasks, getTasksById } from '../Utils/users.api';

function MarkerMap({ postcodes }) {
	const [taskId, setTaskId] = useState(null);
	const [newPostcodes, setNewPostcodes] = useState('');

	console.log(postcodes);
	useEffect(() => {}, []);

	return <Marker position={[53.4808, -2.2426]} />;
}

export default MarkerMap;
