import React from 'react';
import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { useNavigate } from 'react-router';
import {
  postNewTask,
  getSkillsSubCat,
  getSkills,
} from '../Utils/api-createJob';

const CreateJob = (props) => {
  const { user } = useContext(UserContext);
  console.log(user.user_id);

  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);

  const [form, setForm] = useState({
    taskName: '',
    category: 'languages',
    subCategory: '',
    description: '',
    startTime: '',
    endTimime: '',
    location: '',
  });

  // const category = form.category;
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const postedTask = {
      task_name: form.taskName,
      booker_id: user.user_id,
      skill_id: parseInt(form.subCategory),
      task_description: form.description,
      start_time: form.startTime,
      end_time: form.endTime,
      location: form.location,
    };
    postNewTask(postedTask);
    window.alert(`Thanks ${user.username}, your job has been posted`);
    navigate('/home');
  };

  useEffect(() => {
    getSkills().then((skillsFromApi) => {
      setCategoryList(skillsFromApi);
    });
    getSkillsSubCat(form.category).then((subSkillsFromApi) => {
      setSubCategoryList(subSkillsFromApi);
    });
  }, [form.category]);

  return (
    <StyledCreateJob>
      <form className='CreateJob__form' onSubmit={handleSubmit}>
        <h2>Post your job</h2>
        <input
          id='taskName'
          type='text'
          required
          placeholder='Task Name: '
          onChange={(e) => setForm({ ...form, taskName: e.target.value })}
        />
        <div className='select-container'>
          <select
            id='category'
            required
            placeholder='Category: '
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option value=''>Please select a category </option>
            {categoryList.map((category) => {
              return <option key={category.slug}>{category.slug}</option>;
            })}
          </select>
          <select
            id='subcategory'
            required
            placeholder='subCategory: '
            onChange={(e) => setForm({ ...form, subCategory: e.target.value })}
          >
            <option value=''>Please select a sub-category </option>
            {subCategoryList.map((category) => {
              return (
                <option key={category.skill_id} value={category.skill_id}>
                  {category.skill_subcategory}
                </option>
              );
            })}
          </select>
        </div>
        <input
          type='text'
          required
          placeholder='Description: '
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type='datetime-local'
          placeholder='Start'
          onChange={(e) => setForm({ ...form, startTime: e.target.value })}
        />
        <input
          type='datetime-local'
          placeholder='Finish'
          onChange={(e) => setForm({ ...form, endTime: e.target.value })}
        />
        <input
          type='text'
          pattern='([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})'
          title='Please enter valid UK postcode with spacings: AB23 4CD'
          required
          placeholder='Location: '
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <button className='btn' type='submit'>
          Post new task
        </button>
      </form>
    </StyledCreateJob>
  );
};

const StyledCreateJob = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;

  h2 {
    font-size: 2rem;
    margin-bottom: 3.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10rem 10rem;
    height: 65%;
    border-radius: 1rem;
    margin-bottom: 20rem;
    border: 0.15rem solid #45b480;
  }

  input {
    width: 35rem;
    margin-bottom: 1rem;
    padding: 1.5rem 1rem;
    background-color: black;
    color: white;
    border: 0.15rem solid #45b480;
    border-radius: 0.5rem;
    font-size: 1rem;
  }

  #create {
    display: inline-block;
    margin: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .select-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    select {
      padding: 1.3rem 0rem 1.3rem 2rem;
      margin: 0rem 0.3rem;
      background-color: black;
      color: white;
      border: 0.15rem solid #3ac2bb;
      border-radius: 0.5rem;
      width: 48%;
      font-size: 1rem;
    }
  }
`;

export default CreateJob;
