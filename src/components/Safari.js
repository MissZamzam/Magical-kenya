import { useState } from 'react';
import Navbar from "./Navbar/Navbar";

const Safari = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container">
      <Navbar />
      <div>
        <h1>Safari</h1>
        <hr />
        <br />

        <h1>Safari</h1>
        <img
          id="img1"
          src="https://i.pinimg.com/236x/85/63/17/856317b3f208de8ecf37c85840747285.jpg"
          alt=""
        />
        <p>
          {showMore
            ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium expedita facere doloribus sint illo, minus, explicabo eius quam eaque eos error est nulla. Facilis ratione nesciunt fugiat ipsa, aut quam odio eaque architecto corrupti sapiente consectetur laborum possimus culpa voluptate. Iure in placeat voluptate nihil quam voluptatem asperiores omnis, aliquid reiciendis, aliquam praesentium, ab beatae. Voluptate voluptas dolor earum, fugit aperiam totam ipsam incidunt animi aliquam? Atque ut expedita iure culpa explicabo cupiditate laborum reiciendis doloribus repellat recusandae. At sunt, iusto consequatur cumque veritatis debitis alias incidunt esse? Labore asperiores alias deleniti consequatur dolores quidem sit accusantium nemo earum minus non reprehenderit, necessitatibus nam. Enim, aspernatur, veritatis sunt quia expedita assumenda vitae pariatur itaque eveniet ad dignissimos? Voluptatum, neque. Consequuntur perferendis placeat quis earum, officiis repellat, fugit reprehenderit aut iusto minus nemo quas sed quia quae dolore neque cupiditate, expedita distinctio. Asperiores obcaecati, quidem facilis beatae accusamus aliquid enim veritatis harum, tempore autem magni sint modi voluptates perspiciatis itaque voluptate voluptatem! Tempora quia ad vero quos in ex, id doloribus labore totam cupiditate alias. Magnam minima nemo deleniti provident iure dolorem ipsa maxime architecto. Consequatur distinctio, illum fugiat suscipit repellendus exercitationem, dolorum voluptatum rerum tenetur dignissimos repellat officiis nostrum velit.'
            : 'Lorem ipsum dolor sit amet m ipsum dolor sit amet consectetur adipisicing elit.Laudantium expedita facere doloribus sint illo, minus, explicabo eiusm ipsum dolor sit amet consectetur adipisicing elit.Laudantium expedita facere doloribus sint illo, minus, explicabo eiusm ipsum dolor sit amet consectetur adipisicing elit.Laudantium expedita facere doloribus sint illo, minus, explicabo eiusm ipsum dolor sit amet consectetur adipisicing elit.Laudantium expedita facere doloribus sint illo, minus, explicabo eius consectetur adipisicing elit. '}
          <button onClick={toggleShowMore}>
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </p>
        
      </div>
    </div>
  );
};

export default Safari;
