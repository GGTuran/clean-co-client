import Container from '../Components/Ui/Container';
import IntroImage from '../assets/Images/intro.jpg'

const Home = () => {
  return (
    
    
     <Container>
           <div className='flex'>
      <div className='flex-[1]'>
        <h1>Quality Cleaning for Your Home</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nobis
          aliquam at natus incidunt corrupti rerum veniam minima autem vel.
          Corporis numquam atque delectus eum sint illo autem libero nemo.
        </p>
        <div>
          <button>Book a Service</button>
          <button>Read more </button>
        </div>
        <div className="divider"></div>
        <div>
          
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              
            </div>
          </div>
          <p>Rated 5 out of 5 by our clients</p>
        </div>
      </div>
      <div className='flex-[1]'>
        <img src={IntroImage} alt="" />
      </div>
    </div>
     </Container>
  
  );
};

export default Home;
