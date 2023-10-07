import React from 'react';


const Navbar = () => {
  return (
    <header className='main'>
      <div className="logo">
        <div>
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" />
        </div>
        <div>
        <p className='name'>Dashboard</p>
        </div>
      </div>
      <div className="search-bar">
        <div>
        <input className='inputbox' type="text" placeholder="Type / to search" />
        </div>
        <div className='repoimg'>+</div>
        <div className='repoimg'>@</div>
        <div className='profile'>
        <img  alt='profile' src='https://avatars.githubusercontent.com/u/108913531?v=4'  />
        </div>
      </div>
    </header>
  );
};

export default Navbar;