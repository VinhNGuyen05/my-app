import { Link } from 'react-router-dom';

function SideBar() {

  return (
    <div>
      <Link to="/">Product1</Link>
      <Link to="/product">Product2</Link>
      <Link to="/student">Student</Link>
    </div>
  );
}

export default SideBar; 
