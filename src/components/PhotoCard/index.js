import React from 'react'
import { Article, ImageWrapper, Image, Button } from './styles'
import { HiHeart, HiOutlineHeart } from 'react-icons/hi'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const Icon = liked ? HiHeart : HiOutlineHeart
  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImageWrapper>
                <Image src={src} />

              </ImageWrapper>
            </a>
            <Button onClick={() => setLiked(!liked)}>
              <Icon size='16px' />
              {likes} Likes!
            </Button>
          </>
      }
    </Article>
  )
}
