//----------
//Components
//----------
import React from 'react'
import Card from './card';
import './../css/articleList.css'

const ArticleList = ({ posts, loading })=>{ 
  if (loading) {
    return <h2>Loading...</h2>;
  }   
  var num = 1;

      return (
        <>
         <div className="header">
           <h1>Project Name</h1>
           <h3>Some Random bullshit about the project i guess?</h3>
         </div>
        
         <ul className='cards'>
           {posts.map(post=> (
              <li key={num}><Card
              img={post.imgUrl}
              title={post.heading}
              description={post.description}
              source={post.source} /><span className="hide">{num = num +1}</span></li>
           )
           )}
           
        </ul>  
        </>
      )
    }
  

export default ArticleList;
  