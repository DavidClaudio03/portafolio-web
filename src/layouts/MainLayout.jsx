import Footer from './Footer'
import "../index.css";
import PropTypes from 'prop-types';


function MainLayout({ children }) {
  return (
    <div className="flex flex-col m-2 overflow-x-hidden"> 
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
