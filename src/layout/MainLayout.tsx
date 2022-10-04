import React from 'react'
import Header from './Header'
import Slider from './Slider'

type Props = {

}

export default function MainLayout({}: Props) {
  return (
    <>
      <Header />
      <Slider />
    </>
  )
}