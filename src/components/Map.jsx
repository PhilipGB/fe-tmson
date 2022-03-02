import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import { getTasks, getTasksById } from '../utils/users.api';
const postcodes = require('node-postcodes.io');

function Map() {
  // const [taskId, setTaskId] = useState(null);
  // const [newPostcodes, setNewPostcodes] = useState('');
  const [task, setTask] = useState();
  const [latLong, setLatLong] = useState([]);

  useEffect(() => {
    const taskMap = [];

    getTasks().then((res) => {
      const postcodesRegx = res.map((task) => {
        task.location = task.location.match(
          /^(GIR 0AA)|((([A-Z][0-9]{1,2})|(([A-Z][A-HJ-Y][0-9]{1,2})|(([A-Z][0-9][A-Z])|([A-Z][A-HJ-Y][0-9]?[A-Z])))) [0-9][A-Z]{2})$/g
        );
        return task;
      });

      postcodesRegx.forEach((task) => {
        if (task.location) {
          postcodes
            .lookup(task.location)
            .then((res) => {
              taskMap.push([
                res.result[0].result.latitude,
                res.result[0].result.longitude,
                task,
              ]);
            })
            .then(() => {
              setLatLong([...taskMap]);
            });
        }
      });
    });
  }, []);

  const handleTaskclick = (task) => {
    getTasksById(task.task_id).then((res) => {
      setTask(res.task);
    });
  };

  return (
    <div>
      {task && (
        <div className='task-disc'>
          <h2>Task</h2>
          <img src={task.avatar_url} alt='' />
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
      )}
      {latLong.length && (
        <MapContainer
          center={[53.4808, -2.2426]}
          zoom={12}
          scrollWheelZoom={true}
        >
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {latLong.map((task) => (
            <Marker
              position={[task[0], task[1]]}
              eventHandlers={{
                click: (e) => {
                  handleTaskclick(task[2]);
                },
              }}
            >
              <Tooltip>
                <h4>{task[2].task_name}</h4>
                <h4>{task[2].task_description}</h4>
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
}

export default Map;
