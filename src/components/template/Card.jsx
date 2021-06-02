import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    });

    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state;

    return (
      <React.Fragment>
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <div className="post">
              <img src={post.cover} alt={post.title} />
              <div key={post.id} className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
              <section>
                  <form>
                    <lable for="comment">Comment:</lable>
                    <input type="text" id="comment"></input>
                    <button id="sendButton">Send</button>
                  </form>    
                </section>
              <p id='NumLikes'> Number of likes</p>  
              <button id="Like">I Like it!</button>
            
            </div>
           
          ))}
          
        </div>
        
        
      </section>
      
      </React.Fragment>
    );
  }
}
export default Card;
