import React from 'react';

const RepositoryList = () => {
  return (
    <div className="repository-list">
      <div className='newrepo'>
      <h3> Top Repositories</h3>
      <button>New</button>
      </div>
      <input placeholder='Find a repository....' className='searchRepo'/>
      <ul className='list'>
        <div className='repoDes'>
            <img alt='profile-pic' src='https://avatars.githubusercontent.com/u/61222534?s=16&v=4' className='profilepic' />
          <li>Masai-school</li>
          </div>
          <div className='repoDes'>
            <img alt='profile-pic' src='https://google.github.io/cartoonset/images/cs1125646615313076.png' className='profilepic' />
          <li>WhatsApp-clone</li>
          </div>
          <div className='repoDes'>
            <img alt='profile-pic' src='https://google.github.io/cartoonset/images/cs1125646615313076.png' className='profilepic' />
          <li>Instagram-clone</li>
          </div>
          <div className='repoDes'>
            <img alt='profile-pic' src='https://google.github.io/cartoonset/images/cs1125646615313076.png' className='profilepic' />
          <li>Facebook-clone</li>
          </div>
      </ul>

      <div>
        <h4>Recent activity</h4>
        <p>When you take actions across GitHub, we’ll provide links to that activity here. </p>
      </div>

      <div>
        <h4>Your teams</h4>
      <input placeholder='Find a team' className='searchRepo'/>
        <ul>
        <div className='repoDes1'>
            <img alt='profile-pic' src='https://avatars.githubusercontent.com/t/6319160?s=16&v=4' className='profilepic' />   
            <li >masai-course/student</li>
        </div>
        </ul>
      </div>
    </div>
  );
};

export default RepositoryList;