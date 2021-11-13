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

      return (
        <>
         <div className="header">
           <h1>Daily News</h1>
           <h3>Read news headlines on the go!</h3>
         </div>
        
         <ul className='cards'>
           {posts.map(post=> (
              <li key={post.index}><Card
              img={post.news_image}
              title={post.news_title}
              description={post.news_content}
              source={post.news_url} /></li>
           )
           )}
           
        </ul>  
        </>
      )
    }
  

export default ArticleList;
  
