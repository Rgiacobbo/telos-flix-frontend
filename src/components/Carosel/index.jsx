import React, { useState, useEffect, useRef } from 'react';
import RateButton from '../RateButton';
import './index.css';
import CommentCard from '../CommentCard';
import { motion } from 'framer-motion';
import RateMovieModal from '../RateMovieModal';
import axios from 'axios';

function Carosel() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("http://localhost:3333/comments");
        const data = response.data;
        setComments(data);
      } catch (error) {
        console.log('Erro ao buscar comentários:', error);
      }
    };
  
    fetchComments();
  }, []);

  const postComment = async (newComment) => {
    try {
      await axios.post("http://localhost:3333/comments", newComment, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      setComments([...comments, newComment]);
    } catch (error) {
      console.log('Erro ao postar comentário:', error);
    }
  };

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth + 120);
  }, []);

  return (
    <div className='Carousel' ref={carousel}>
      <div>
        <RateButton onClick={() => setOpen(true)} />
      </div>
      <motion.div className='CommentCardCarousel' whileTap={{ cursor: 'grabbing' }} drag='x' dragConstraints={{ right: 0, left: -width }}>
        {comments.map((comment) => (
          <CommentCard key={comment.id} user={comment.user} comment={comment.comment} rate={comment.rate} />
        ))}
      </motion.div>
      <RateMovieModal open={open} setOpen={setOpen} postComment={postComment}/>
    </div>
  )
}

export default Carosel