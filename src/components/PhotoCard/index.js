import React from 'react'
import { ImageWrapper, Image, Button } from './styles'
import { HiOutlineHeart } from 'react-icons/hi'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImageWrapper>
          <Image src={src} />

        </ImageWrapper>
      </a>
      <Button>
        <HiOutlineHeart size='16px' />
        {likes} Likes!
      </Button>

    </article>
  )
}
