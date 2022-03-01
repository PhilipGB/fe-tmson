import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { getTasks } from '../utils/users.api';
const postcodes = require('node-postcodes.io');

function Map() {
	const [tasks, setTasks] = useState([]);
	const [newPostcodes, setNewPostcodes] = useState('');
	// useEffect(() => {

	// 	});
	// }, []);
	const [lat, setLat] = useState('');
	const [long, setLong] = useState('');
	useEffect(() => {
		getTasks().then((res) => {
			res.map((task) => {
				const postcodesRegx = task.location.match(
					/^(GIR 0AA)|((([A-Z][0-9]{1,2})|(([A-Z][A-HJ-Y][0-9]{1,2})|(([A-Z][0-9][A-Z])|([A-Z][A-HJ-Y][0-9]?[A-Z])))) [0-9][A-Z]{2})$/g
				);
				setNewPostcodes(postcodesRegx);
			});
		});
	}, []);
	postcodes.lookup(newPostcodes).then((res) => {
		setLat(res.result[0].result.latitude);
		setLong(res.result[0].result.longitude);
		console.log(lat, long);
	});

	return (
		<MapContainer center={[53.4808, -2.2426]} zoom={12} scrollWheelZoom={true}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			{}
			<Marker position={[lat, long]} />
		</MapContainer>
	);
}

export default Map;
