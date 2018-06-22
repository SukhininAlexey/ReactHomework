import React, { Component } from 'react';
import './BlogPost.css';

export default class BlogPost extends Component{
	render() {
		return (
            <div className='blog-post'>
                <h2 className='blog-post-title'>Sample blog post</h2>
                <p className='blog-post-meta'>January 1, 2014 by{` `} 
                    <a href="#">Mark</a>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo commodi repellat obcaecati, sunt itaque natus saepe eum, nostrum voluptatibus accusantium nisi modi. Pariatur sunt, ab distinctio fugiat velit dolor, aperiam autem et inventore tenetur. Quos repellat consectetur pariatur cumque adipisci. Nulla quam dolore maiores, excepturi quaerat vel ipsam ullam deserunt quos asperiores. Dolorem nesciunt, sequi, eum ea accusantium, blanditiis vel laudantium facilis officiis ducimus magnam possimus cum! Sequi error beatae sapiente saepe rerum assumenda architecto, magni dolorum vitae sed laudantium mollitia alias amet delectus optio, quas quis laboriosam unde odit quia dolorem quibusdam pariatur atque quam! Rerum obcaecati, veniam rem.</p>
                
            </div> 
		);
	}
}
