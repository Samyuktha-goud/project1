import React from 'react';
import './Home.css';

function Home() {
  return (
  <div className="p-50">
  <header className="flex justify-between">
  <h1 className="text-right w-4xl">HOME PAGE</h1><h2 className="mr-4 "><i>Welcome To the MaassQube!</i></h2><p>MaassQube is a full-service web and app development 
  company dedicated to helping businesses succeed online. We specialize in creating innovative, high-quality 
  digital experiences that drive growth and ensure a strong online presence</p>
  </header>
  
  <section className="cards">
    <div className="card">
      <div className="icon">🧩</div>
      <h3>Innovation</h3>
      <p>We are dedicated to delivering scalable business solutions that drive success for our clients worldwide.</p>
    </div>
    <div className="card">
      <div className="icon">🤝</div>
      <h3>Collaboration</h3>
      <p>We’re committed to achieving exceptional results by collaborating closely with our clients, understanding their unique needs and goals, and co-creating tailored solutions that drive their business forward</p>
    </div>
    <div className="card">
      <div className="icon">🛡️</div>
      <h3>Quality</h3>
      <p>We help businesses achieve operational efficiency through tailored solutions that enhance productivity and reduce costs.</p>
    </div>
  </section>
    <div className="page">
      <div className='h1' style={{textAlign:'left'}}>
        <h3 style={{color:"green", fontSize:30}}> MQ</h3>
        <p>MaassQube is a full-service web and app development company dedicated to helping businesses succeed online. We specialize in creating innovative, 
        high-quality digital experiences that drive growth and ensure a strong online presence</p>
      </div>
      <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6enTCfnnNEYKDOP8EZKJBrCXDj5SiUfJP0w&s"
          alt="MaassQube Logo" className="h1" id='logoMQ' />
      <div className='h1' style={{textAlign:'right'}}>
        <h3 style={{color:"green", fontSize:30}}>30+<sub><b>Websites</b></sub></h3>
        <p>We have successfully developed over 30 websites, each tailored to meet the unique needs of our clients. From dynamic e-commerce
           platforms to custom business solutions, our expertise spans various industries.</p>
      </div>
    </div>
    <div className='main' >
      <div className='left'>
        <h2>Why choose us for your digital solution?</h2>
       <img
          src="https://maassqube.com/wp-content/uploads/2024/12/webappspng.webp"
          alt="MaassQube Logo"  id='logo2' />
      </div>
    <div className='right'>
      <div className='a2'>
         
        <h2 >Innovative:</h2><br/>
        <p>We deliver innovative solutions for every project, leveraging our expertise and 
        recognition for excellence in pioneering work</p>
      </div>
      <div className='a2'>
        <h2 >Integrity:</h2><br/>
        <p>We collaborate with clients through a structured approach, maintaining unwavering ethical standards.
         This commitment defines our culture and distinguishes us in the industry.</p>
      </div>
      <div className='a2'>
        <h2 >	Transparency:</h2><br/>
        <p>We deliver innovative solutions for every project,
         leveraging our expertise and recognition for excellence in pioneering work</p>
      </div>
      <div className='a2'>
        <h2 >Solution Focused:</h2><br/>
        <p>We proactively identify client challenges and provide the most effective, tailored solutions to address every project need. Our commitment 
        to delivering high-quality, results-driven services ensures your success</p>
      </div>
    </div>
      

    </div>
  </div>
  
  
  );

}

export default Home;
