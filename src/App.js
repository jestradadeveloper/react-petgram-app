import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div>
      <Logo />
      <GlobalStyle />
      {
        detailId
          ? <h1>Detail Id</h1>
          : <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={1} />
            </>
      }

    </div>
  )
}
