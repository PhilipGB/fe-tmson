import React from 'react';

const JobDescriptionPageCard = (props) => {

    const { task } = props;

    return (
        <div className='grid-container'>
      
            <h2 className='JDcategory'>
                Category:
                    </h2>
            <h2 className='JDcategory2'>
                {task.skill_category}
                    </h2>
            
            <h2 className='JDsubcategory'>
                Subcategory:
                    </h2>
            <h2 className='JDsubcategory2'>
                {task.skill_subcategory}
                    </h2>
            
            <h2 className='JDlocation'>
                Location: 
                    </h2>
            <h2 className='JDlocation2'>
                {task.location}
                    </h2>

            <h2 className='JDskillDescription'>
                Skill: 
                </h2>
            <h2 className='JDskillDescription2'>
                {task.skill_description}
                    </h2>

            <h2 className='JDabout'>
                About:
                    </h2>
            <h2 className='JDabout2'>
                {task.task_description}
                    </h2>

            <img className='JDtaskThumbnail' src={task.thumbnail_image_url} >
                </img>

            <h2 className='JDrequestedBy'>
                Requested By:  
                    </h2>
            <h2 className='JDrequestedBy2'>         
                {task.first_name} (
                    <a href="https://tmson-api.herokuapp.com/api/users/fthynne0">
                        {task.username}
                            </a>
                                )
                                    </h2>
                     
        </div> 
    );
};

export default JobDescriptionPageCard;