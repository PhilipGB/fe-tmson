import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { getTasks, getTasksById } from '../utils/users.api';
const postcodes = require('node-postcodes.io');

function Map() {
	const [taskId, setTaskId] = useState(null);
	const [newPostcodes, setNewPostcodes] = useState('');
	const [task, setTask] = useState({
		location: '',
		task_name: '',
		task_description: '',
		skill_category: '',
		skill_subcategory: '',
		skill_description: '',
		thumbnail_image_url: '',
		user_id: null,
		firebase_id: '',
		username: '',
		first_name: '',
		last_name: '',
		birth_date: '',
		avatar_url: '',
		address: '',
		postcode: '',
		email_address: '',
	});
	const [lat, setLat] = useState('');
	const [long, setLong] = useState('');
	useEffect(() => {
		getTasks().then((res) => {
			const postcodesRegx = [];
			res.map((task) => {
				setTaskId(task.task_id);

				postcodesRegx.push(
					task.location.match(
						/^(GIR 0AA)|((([A-Z][0-9]{1,2})|(([A-Z][A-HJ-Y][0-9]{1,2})|(([A-Z][0-9][A-Z])|([A-Z][A-HJ-Y][0-9]?[A-Z])))) [0-9][A-Z]{2})$/g
					)
				);
				setNewPostcodes(postcodesRegx);
			});
			getTasksById(taskId).then((res) => {
				setTask({
					location: res.task.location,
					task_name: res.task.task_name,
					task_description: res.task.task_description,
					skill_category: res.task.skill_category,
					skill_subcategory: res.task.skill_subcategory,
					skill_description: res.task.skill_description,
					thumbnail_image_url: res.task.thumbnail_image_url,
					username: res.task.username,
					first_name: res.task.first_name,
					last_name: res.task.last_name,
					avatar_url: res.task.avatar_url,
					email_address: res.task.email_address,
				});
			});
		});
	}, []);
	postcodes.lookup(newPostcodes).then((res) => {
		setLat(res.result[0].result.latitude);
		setLong(res.result[0].result.longitude);
		console.log(lat, long);
	});

	return (
		<div>
			<div className="task-disc">
				<h2>Task</h2>
				<img src={task.avatar_url} alt="" />
				<h4>
					Name: {task.first_name} {task.last_name}
				</h4>

				<h4>Location: {task.location}</h4>
				<h4>Username: {task.username}</h4>
				<h4>Email: {task.email_address}</h4>
				<h4>Task Name: {task.task_name}</h4>
				<h4>Task Info: {task.task_description}</h4>
				<h4>Category: {task.skill_subcategory}</h4>
				<h4>Skill Info: {task.skill_description}</h4>
			</div>
			<MapContainer
				center={[53.4808, -2.2426]}
				zoom={12}
				scrollWheelZoom={true}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				{}
				<Marker position={[lat, long]} />
				<Popup position={[lat, long]}>
					<h4>
						Name: {task.first_name} {task.last_name}
					</h4>

					<h4>Location: {task.location}</h4>
					<h4>Username: {task.username}</h4>
					<h4>Email: {task.email_address}</h4>
					<h4>Task Name: {task.task_name}</h4>
					<h4>Task Info: {task.task_description}</h4>
					<h4>Category: {task.skill_subcategory}</h4>
					<h4>Skill Info: {task.skill_description}</h4>
				</Popup>
			</MapContainer>
		</div>
	);
}

export default Map;
