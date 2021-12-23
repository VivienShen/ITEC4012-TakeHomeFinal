import "./styles.css";
import { useEffect, useState, useContext } from 'react';
import { PostItem } from "../../PostItem";
import PostsOrderContext from "../../../context/postsOrderContext";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

export const PostsHomePage = () => {
  
  const [posts, setPosts] = useState([]);
  
  const history = useHistory();

  //check if a current user is logged into firebase
  useEffect(
    () => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          history.push('/login');
        }
      })
    }, []
  );

  useEffect(
    () => {
      getPosts();
    }, []
  );

  const getPosts = async() => {
    try {
      const response = await fetch('https://firestore.googleapis.com/v1/projects/social-media-project-itec4012/databases/(default)/documents/posts')
      const data = await response.json();
      console.log(data);
      const formattedData = data.documents.map( (item) => {
        return item.fields
      });

      console.log(formattedData);
      setPosts(formattedData);

    } catch(err) {
      console.log (err)
    }
  }

  return (
    <div className="posts-page">
      <h1 className="posts-title"> All Posts</h1>
      <div className="posts-container">
        { 
          posts.map((post) => (
            <PostItem key={post.id.stringValue} name={post.name.stringValue} user={post.user.stringValue} text={post.text.stringValue} id={post.id.stringValue} ></PostItem>
          ))
        }
      </div>
    </div>
  );
};
