import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { PostItem } from "../../PostItem";
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import { useHistory } from 'react-router-dom';

import "./styles.css";

export const ProfilePage = () => {
  
  const { register, handleSubmit } = useForm();
  const [posts, setPosts] = useState([]);

  const submitPost = async(formVals) => {
    const auth = getAuth();
    const formattedData = {
      fields: {
        id: {
          stringValue: formVals.id
        },
        text: {
          stringValue: formVals.text
        },
        user: {
          stringValue: auth.currentUser.email
        }
      }
    }
    console.log(formVals, formattedData);
    try {
      const response = await fetch('https://firestore.googleapis.com/v1/projects/social-media-project-itec4012/databases/(default)/documents/posts',
      {
        headers: {
          'Content-Type': 'application/json'        
        },
        method: "POST",
        body: JSON.stringify(formattedData)
      })
    } catch (error) {
      console.log("Error", error);
    }
  };

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
      <h1 className="posts-title"> My Profile</h1>
      
      <form className="form-layout" onSubmit={handleSubmit(submitPost)}>
        <h2>Submit a new post: </h2>
        <br/>
        <label htmlFor="text"> What's happening?</label>
        <input name="text" type="text" required {...register('text')}/>
        <label htmlFor="id"> Id</label>
        <input name="id" type="id" required {...register('id')}/>
        <input type="submit" value="Submit Post"/>
        <br/>
      </form>
    
      <div className="posts-container">
        { 
          posts.map((post) => (
            <PostItem key={post.id.stringValue} user={post.user.stringValue} text={post.text.stringValue} id={post.id.stringValue} ></PostItem>
          ))
        }
      </div>
    </div>
  );
};
