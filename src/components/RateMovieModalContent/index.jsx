import { OutlinedInput } from '@mui/material';
import React, { useState } from 'react';
import './index.css';
import RatingStars from '../RatingStars';

function RateMovieModalContent({ postComment }) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    if (comment && rating > 0) {
      const newComment = {
        user: '', 
        comment: comment,
        rate: rating,
      };

      postComment(newComment);

      
      setComment('');
      setRating(0);
    }
  };

  return (
    <div className='RateModal'>
      <main className='RateModalMain'>
        <div className='WhatsIsYourOpinion'>
          <h3>O que você achou do filme?</h3>
          <p>Dê cinco estrelas se recomendaria para seus amigos e uma caso possa até falar mal para eles.</p>
          <div className='RatingStarsDiv'>
            <RatingStars onChange={handleRatingChange} />
          </div>
        </div>
        <div className='HaveSomeComment'>
          <h5>Tem algum comentário?</h5>
          <OutlinedInput
            sx={{
              background: '#3D4757',
              boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.25)',
              borderRadius: '15px',
              height: '75px',
              width: '370px',
              color: 'rgba(255, 255, 255, 0.45)',
            }}
            placeholder='Deixe seu comentário...'
            type='text'
            value={comment}
            onChange={handleCommentChange}
          />
        </div>
      </main>
      <footer>
        <div className='buttons'>
          <button className='ImNotInTheMoodButton'>Não tô afim agora</button>
          <button className='SendButton' onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      </footer>
    </div>
  );
}

export default RateMovieModalContent;