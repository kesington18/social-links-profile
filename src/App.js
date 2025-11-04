import './App.css';
function Social({name, location, bio}) {
  return (
    <main>
      <div className='container'>
        <img src="/images/avatar-jessica.jpeg" className='profile-image' alt="Profile" />
        <h2 className='profile-name'>{name}</h2>
        <p className='location'>{location}</p>
        <p className='bio'>{bio}</p>
        <div className='social-links'>
          <a href="https://github.com/kesington18" className='social-link'>GitHub</a>
          <a href="#" className='social-link'>Frontend Mentor</a>
          <a href="https://www.linkedin.com/in/kesington-abdulwakeel/" className='social-link'>LinkedIn</a>
          <a href="#" className='social-link'>Twitter</a>
          <a href="#" className='social-link'>Instagram</a>
        </div>
      </div>
    </main>
  )
}

export default Social;
